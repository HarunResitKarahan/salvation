import type { Metadata, ResolvingMetadata } from 'next'
import { Inter } from "next/font/google";
import { Locale, i18n } from '@/app/[lang]/_i18n/i18n.config'
import "./globals.css";
import { getDictionary } from '../_libs/dictionary';
import AuthProvider from '../_context/AuthProvider';
import { Session } from 'next-auth';
import { ThemeProvider } from '@ui5/webcomponents-react';

const inter = Inter({ subsets: ["latin"] });
inter.className = `${inter.className} min-h-screen`
type Props = {
  params: { lang: Locale, session: Session },
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language: string = params.lang;

  const isAnyLocale = i18n.locales.some(
    (locale) =>
      locale === language
  );

  if (!isAnyLocale) {
    return {
    }
  }
  const { metadata } = await getDictionary(params.lang)

  return {
    title: metadata.title
  }
}

export default function RootLayout({
  children,
  session,
  params
}: Readonly<{
  children: React.ReactNode;
  session: Session;
  params: { lang: Locale, session: Session };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AuthProvider>
            <main className='min-h-screen'>
              {children}
            </main>
        </AuthProvider>
      </body>
    </html>
  );
}
