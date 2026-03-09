import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type === "beta") {
      const { name, email, phone, country, contactMethod } = body;

      if (!name || !email || !phone || !country || !contactMethod) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }

      await notion.pages.create({
        parent: { database_id: process.env.NOTION_BETA_DB_ID! },
        properties: {
          Name: {
            title: [{ text: { content: name } }],
          },
          Email: {
            email: email,
          },
          Phone: {
            phone_number: phone,
          },
          Country: {
            rich_text: [{ text: { content: country } }],
          },
          "Contact Method": {
            select: { name: contactMethod },
          },
          Created: {
            date: { start: new Date().toISOString() },
          },
          Source: {
            rich_text: [{ text: { content: "landing-page" } }],
          },
        },
      });
    } else {
      const { email } = body;

      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }

      await notion.pages.create({
        parent: { database_id: process.env.NOTION_WAITLIST_DB_ID! },
        properties: {
          Entry: {
            title: [{ text: { content: email } }],
          },
          Email: {
            email: email,
          },
          Created: {
            date: { start: new Date().toISOString() },
          },
          Source: {
            rich_text: [{ text: { content: "landing-page" } }],
          },
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Notion API error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
