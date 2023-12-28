import "@/styles/Home.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import MainLayout from "@/layout/MainLayout";
import { useEffect } from "react";

// import "bootstrap/dist/js/bootstrap.js";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
