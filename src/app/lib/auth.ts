
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/app/config/db"; 
import * as schema from "@/app/db/schema"
import { nextCookies } from "better-auth/next-js";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    emailAndPassword : {
        enabled : true,
        requireEmailVerification:false

    },
    socialProviders : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }
    },

    plugins : [nextCookies()]
});

