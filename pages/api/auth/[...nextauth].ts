import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { AuthOptions, Awaitable, RequestInternal, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/app/libs/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
      CredentialsProvider({
          name: 'credentials',
          credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password' },
          },
          async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
               throw new Error("Invalid Credentials")
           }
       }
      })
  ],
};