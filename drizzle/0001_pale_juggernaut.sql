CREATE TYPE "public"."status" AS ENUM('Pending', 'Contacted', 'Responded', 'Converted');--> statement-breakpoint
CREATE TABLE "Leads" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"company" text NOT NULL,
	"status" "status" DEFAULT 'Pending' NOT NULL,
	"last_contact_date" timestamp,
	CONSTRAINT "Leads_email_unique" UNIQUE("email")
);
