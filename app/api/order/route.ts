import { writeClient } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const order = await writeClient.create(body);

    return NextResponse.json(order);
  } catch (error: unknown) {
    console.error("Sanity error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
