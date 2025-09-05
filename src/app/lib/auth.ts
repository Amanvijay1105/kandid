import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/app/config/db"; 
import { createAuthClient } from "better-auth/react";
import { nextCookies } from "better-auth/next-js";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword : {
        enabled : true,
    },
    socialProviders : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }
    },

    plugins : [nextCookies()]
});

export const authClient = createAuthClient({
    baseURL : "http://localhost:3000"
})