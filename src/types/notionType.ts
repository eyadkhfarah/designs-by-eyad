export type NotionProps = {
  post: {
    id: string;
    properties: {
      Name: {
        title: Array<{
          plain_text: string;
        }>;
      };
      Slug: {
        rich_text: Array<{
          plain_text: string;
        }>;
      };
      Subtitle: {
        rich_text: Array<{
          plain_text: string;
        }>;
      };
      Category: {
        select: {
          name: string;
        };
      };
      Publication: { date: { start: string } };
      Thumbnail: {
        files: Array<{
          name: string;
        }>;
      };
    };
  };
};

export type NotionPage = {
  id: string;
  properties: {
    Name: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Subtitle: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Category: {
      select: {
        name: string;
      };
    };
    Publication: { date: { start: string } };
    Thumbnail: {
      files: Array<{
        name: string;
      }>;
    };
    Tags: {
      multi_select: Array<{
        name: Array<string>;
      }>;
    }
  };
};

export interface ArtworkProperties {
  Name: {
    id: string;
    type: "title";
    title: Array<{
      type: "text";
      text: {
        content: string;
        link: string | null;
      };
      plain_text: string;
      href: string | null;
    }>;
  };
  Image: {
    id: string;
    type: "files";
    files: Array<{
      type: "external" | "file";
      name: string;
      external?: {
        url: string;
      };
      file?: {
        url: string;
        expiry_time: string;
      };
    }>;
  };
}
