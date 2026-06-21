import type { NotionBaseProperties } from "@/types/notionType";
import { notionArtwork } from "../notion";

interface DataSource {
  id: string;
  name: string;
}

interface DatabaseResponseWithDataSources {
  object: "database";
  id: string;
  data_sources: DataSource[];
  [key: string]: unknown;
}

let cachedDataSourceId: string | null = null;

const ARTWORK_DATABASE_ID = import.meta.env.YOUR_NOTION_DATABASE_ARTWORK_ID;

/**
 * Retry helper for network requests
 */
async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      console.warn(`Attempt ${attempt + 1} failed:`, error);
      
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs * (attempt + 1)));
      }
    }
  }
  
  throw lastError;
}

async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) {
    return cachedDataSourceId;
  }

  if (!ARTWORK_DATABASE_ID) {
    throw new Error("ARTWORK_DATABASE_ID is not defined");
  }

  const response = await notionArtwork.request<DatabaseResponseWithDataSources>({
    method: "get",
    path: `databases/${ARTWORK_DATABASE_ID}`,
  });

  if (!response.data_sources || response.data_sources.length === 0) {
    throw new Error("No data sources found for database");
  }

  cachedDataSourceId = response.data_sources[0].id;
  return cachedDataSourceId;
}

export async function fetchArtworks(): Promise<NotionBaseProperties[]> {
  if (!ARTWORK_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_ARTWORK_ID is not defined in environment variables");
  }

  try {
    const dataSourceId = await getDataSourceId();
    
    const response = await retryOperation(async () => {
      
      return await notionArtwork.dataSources.query({
        data_source_id: dataSourceId,
        filter: {
          property: "Publish",
          status: {
            equals: "Live",
          },
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      });
    });

    return response.results as unknown as NotionBaseProperties[];
  } catch (error) {
    console.error("fetchArtworks error:", error);
    return [] as NotionBaseProperties[];
  }
}