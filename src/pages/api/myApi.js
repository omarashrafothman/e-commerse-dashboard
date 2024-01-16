import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

const handler = (req) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function`,
  });
};

export default handler;
