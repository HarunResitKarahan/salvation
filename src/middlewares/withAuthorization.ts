import { getToken } from "next-auth/jwt"
import { MiddlewareFactory } from "./types";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { i18n } from '@/app/[lang]/_i18n/i18n.config'
import Negotiator from 'negotiator'

import { match as matchLocale } from '@formatjs/intl-localematcher'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  
    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale
  }

const protectedPaths = ['/Login']


export const withAuthMiddleware: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const response = NextResponse.next()
        const token = await getToken({ req: request })
        console.log(request.nextUrl)
        // @ts-ignore
        request.nextauth = request.nextauth || {}
        // @ts-ignore
        request.nextauth.token = token
        const pathname = request.nextUrl.pathname
        const locale = getLocale(request);
        const protectedPathWithLocale = protectedPaths.map(item => {
            return '/' + locale + item
        });
        console.log("withAuthorization", token)
        if (!token && protectedPathWithLocale.includes(pathname)) {
            const signInUrl = new URL('/api/auth/signin', request.url)
            signInUrl.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(signInUrl)
        }
        return next(request, _next);
    }
}