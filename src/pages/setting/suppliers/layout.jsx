import React from "react";
import Link from "next/link";
import Layout from "../layout";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function layout({ children }) {
  return (
    <Layout>
      <Link href="/setting/suppliers/suppliersetting"></Link>
      {children}
    </Layout>
  );
}

export default Layout;
