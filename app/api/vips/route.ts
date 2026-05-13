import { NextResponse } from "next/server";

export async function GET() {

  const vips = [
    { id: 1, name: "Elon Musk" },
    { id: 2, name: "Mark Zuckerberg" },
    { id: 3, name: "Steve Jobs" },
  ];

    return NextResponse.json(vips);
}