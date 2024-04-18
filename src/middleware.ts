// // import nextAuthMiddleware from "next-auth/middleware"
// import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server";

import { i18n } from '@/app/[lang]/_i18n/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale
}

const withInitialLoad = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        );
    }
};

const authMiddleware = withAuth(

    function onSuccess(req) {

        const pathname = req.nextUrl.pathname,
            userRole = req.nextauth.token?.role;
        // console.log(pathname.includes('/Login'), userRole)
        if (pathname.includes('/Login') && userRole !== 'admin') {
            console.log(pathname.includes('/Login'), userRole)
            return NextResponse.redirect(
                new URL(
                    `/Denied`,
                    req.url,
                ),
            );
        }
        return withInitialLoad(req);
    },
    {
        callbacks: {
            authorized: ({ token }) => token != null
        },
        pages: {
            // signIn: '/login'
        }
    }
);

export default function middleware(req: NextRequest) {
    // return withInitialLoad(req)
    return (authMiddleware as any)(req);
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/']
}