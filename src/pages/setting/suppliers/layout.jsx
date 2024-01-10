import React from "react";
import Link from "next/link";
import Layout from "../layout";
function layout({ children }) {
  return (
    <Layout>
      <Link href="/setting/suppliers/suppliersetting"></Link>
      {children}
    </Layout>
  );
}

export default Layout;
