import { FormValues } from "@/types/inputs";
import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.YOUR_NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_ID;

const notion = new Client({
  auth: NOTION_API_KEY,
});

(async () => {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse);
})();

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
  const response = await notion.request({
    path: `databases/${NOTION_DATABASE_ID}/pages`,
    method: "post",
    body: {
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
      },
    },
  });

  console.log("Notion response:", response);
};
//   try {
//     const response = await notion.request({
//       path: `databases/${NOTION_DATABASE_ID}/pages`,
//       method: "POST",
//       body: {
//         properties: {
//           Email: {
//             title: [
//               {
//                 text: {
//                   content: email,
//                 },
//               },
//             ],
//           },
//         },
//       },
//     });

//     console.log("Notion response:", response);
//   } catch (error) {
//     console.error("Error adding to Notion:", error);
//   }
// };
