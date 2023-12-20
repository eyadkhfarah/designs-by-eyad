import { FormValues } from "@/types/inputs";
import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.YOUR_NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_ID;

const notion = new Client({
  auth: "secret_spOAmyFhAo2q6dKVlWmAJWRSoBPweGWqlJhek8o48rJ",
});

export const addToNotionDatabase = async ({
  email,
  fullName,
  companyName,
  companySize,
  message,
  number,
  services,
  subscription,
}: FormValues) => {
  const databaseId = "3d0b4a37735f445f903f00bf163bf3cc";
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
      type: "database_id"
    },
    properties: {
      "Full Name": {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: fullName,
            },
          },
        ],
      },
      Email: {
        type: "email",
        email: email,
      },
      Phone: {
        type: "number",
        number: number,
      },
      Services: {
        type: "select",
        select: {
          name: services,
        },
      },
      "Company Name": {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: companyName,
            },
          },
        ],
      },
      "Company Size": {
        type: "select",
        select: {
          name: companySize,
        },
      },
      "Project Description": {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: message,
            },
          },
        ],
      },
      Subscribed: {
        type: "checkbox",
        checkbox: subscription,
      },
    },
  });
  console.log(response);
};
