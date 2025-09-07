import { db } from "@/app/config/db";
import { leads, campaigns } from "@/app/db/schema";
import { eq, ilike, and } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search") || "";

  const offset = (page - 1) * limit;

  let query = db
    .select({
      id: leads.id,
      name: leads.name,
      email: leads.email,
      company: leads.company,
      status: leads.status,
      lastContact: leads.lastContactDate,
      campaign: campaigns.name,
    })
    .from(leads)
    .leftJoin(campaigns, eq(leads.campaignId, campaigns.id))
    .limit(limit)
    .offset(offset);

  if (search) {
    query = query.where(
      or(
        ilike(leads.name, `%${search}%`),
        ilike(leads.email, `%${search}%`),
        ilike(leads.company, `%${search}%`)
      )
    );
  }

  const result = await query;
  return NextResponse.json(result);
}
