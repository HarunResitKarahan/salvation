import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/app/[lang]/_utils/db'
import { SHA256 } from 'crypto-js'
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client/extension'

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(db) as unknown as PrismaClient,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "your-cool-email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials.password) {
                        return null
                    }
                    const user = await db.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    })
                    if (!user) {
                        return null
                    }
    
                    const isPasswordValid = user.password === SHA256(credentials.password).toString()
                    if (!isPasswordValid) {
                        return null
                    }
                    return user
                } catch (error) {
                    console.log(error)
                    return NextResponse.json({error: error})
                }
            }
        })
    ],
    pages: {
        // signIn: `/en/Login`
        // signOut: "/Login",
        // error: "/Login"
        // signIn: '/auth/signin',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 60 * 60 * 24 * 30,
    },
    callbacks: {
        async jwt({ token, account, session, trigger }) {
            // Persist the OAuth access_token to the token right after signin
            console.log("****************JWT CALLBACK******************")
            console.log("*********ACCOUNT*********")
            console.log(account)
            console.log("*********TOKEN*********")
            console.log(token)
            console.log("*********session*********")
            console.log(session)
            if (trigger === "update" && session?.name) {
                token.name = session.name
            }
            return token
        },
        async session({ session, token, user }) { // token is undefined
            // Send properties to the client, like an access_token from a provider.
            // session.access_token = token.accesstoken
            console.log("****************SESSION CALLBACK******************")
            console.log(session)
            return session
        },
        // async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
        //     const isRelativeUrl = url.startsWith("/");
        //     if (isRelativeUrl) {
        //       return `${baseUrl}${url}`;
        //     }
      
        //     const isSameOriginUrl = new URL(url).origin === baseUrl;
        //     const alreadyRedirected = url.includes('callbackUrl=')
        //     if (isSameOriginUrl && alreadyRedirected) {
        //       const originalCallbackUrl = decodeURIComponent(url.split('callbackUrl=')[1]);
      
        //       return originalCallbackUrl;
        //     }
      
        //     if (isSameOriginUrl) {
        //       return url;
        //     }
      
        //     return baseUrl;
        //   }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    }
    // debug: process.env.NODE_ENV === "development"
}