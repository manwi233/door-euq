import { addClick, getClickStats } from "@/lib/click-store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getClickStats());
}

export async function POST(request: Request) {
  let source = "whatsapp";
  try {
    const data = (await request.json()) as { source?: string };
    if (typeof data.source === "string" && data.source.trim()) {
      source = data.source;
    }
  } catch {
    source = "whatsapp";
  }
  return NextResponse.json(addClick(source));
}
