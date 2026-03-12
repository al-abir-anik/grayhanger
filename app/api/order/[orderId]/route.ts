import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> },
) {
  try {
    const { orderId } = await params;
    const query = `*[_type == "order" && orderId == $orderId][0]`;
    const order = await client.fetch(query, { orderId });
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    return NextResponse.json(order);
    
  } catch (error: unknown) {
    console.error("Order fetch error:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Server error" },
      { status: 500 },
    );
  }
}
