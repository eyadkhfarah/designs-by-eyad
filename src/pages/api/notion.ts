import { notionForm } from "@/lib/notion";
import type { APIRoute } from "astro";

const NOTION_DATABASE_ID = import.meta.env.YOUR_NOTION_DATABASE_ID;

export const prerender = false; 

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  if (!NOTION_DATABASE_ID) {
    return new Response(
      JSON.stringify({ error: "Database ID not configured" }),
      { status: 500 },
    );
  }

  try {
    const body = await request.json();

    await notionForm.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID,
      },
      properties: {
        "Full Name": {
          title: [{ text: { content: body.fullName } }],
        },
        Email: {
          email: body.email || "example@example.com",
        },
        Phone: {
          rich_text: [{ text: { content: body.phone } }],
        },
        Services: {
          select: {
            name: body.services,
          },
        },
        "Company Name": {
          rich_text: [
            {
              text: {
                content: body.companyName,
              },
            },
          ],
        },
        "Company Size": {
          select: {
            name: body.companySize,
          },
        },
        "Project Description": {
          rich_text: [{ text: { content: body.message } }],
        },
        Subscribed: {
          checkbox: body.subscription,
        },
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging

    return new Response(JSON.stringify({ error: "Failed to create page" }), {
      status: 500,
    });
  }
};
