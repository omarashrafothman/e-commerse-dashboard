import React from "react";
import { useEffect } from "react";
// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
export default function tracking() {
  useEffect(() => {
    document.title = "Tracking";
  }, []);
  return <div>tracking</div>;
}
