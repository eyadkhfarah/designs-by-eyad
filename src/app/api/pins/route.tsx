import { NextResponse } from 'next/server';

interface PinterestPin {
  id: string;
  title?: string;
  image?: {
    original: {
      url: string;
    };
  };
}

export async function GET() {
    // const boardId = 'YOUR_BOARD_ID'; // Replace with your board ID
    const token = process.env.PINTEREST_ACCESS_TOKEN;
  
    try {
      const response = await fetch(
        `https://api.pinterest.com/v5/boards/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      const data = await response.json();
      const pins: PinterestPin[] = data.items || [];
      
      return NextResponse.json(pins);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch pins' },
        { status: 500 }
      );
    }
  }