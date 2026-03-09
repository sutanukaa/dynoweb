import { NextResponse } from "next/server";

const NOTION_API_URL = "https://api.notion.com/v1/pages";

type RequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(req: Request) {
  const body: RequestBody = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const { firstName, lastName, email, phone, message } = body;
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const NOTION_API_KEY = process.env.NOTION_API_KEY ?? process.env.NOTION_TOKEN;
  const NOTION_DATABASE_ID =
    process.env.NOTION_DATABASE_ID ?? process.env.NOTION_CONTACT_DB_ID;

  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    return NextResponse.json(
      {
        error:
          "Notion keys not configured in environment (NOTION_TOKEN and NOTION_CONTACT_DB_ID are required)",
      },
      { status: 500 }
    );
  }

  const payload = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [{
          text: { content: `${firstName} ${lastName}` },
        }],
      },
      Email: {
        email,
      },
      "Phone Number": {
        phone_number: phone ?? "",
      },
      Message: {
        rich_text: [{ text: { content: message } }],
      },
    },
  };

  const resp = await fetch(NOTION_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const errorBody = await resp.text().catch(() => "");
    return NextResponse.json(
      { error: "Failed to create Notion page", details: errorBody },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
