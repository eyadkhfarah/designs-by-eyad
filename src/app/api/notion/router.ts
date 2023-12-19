import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const greeting = "Hello Notion!!";
  const json = {
    greeting,
  };

  return NextResponse.json(json);
}