import "@/styles/Home.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import MainLayout from "@/layout/MainLayout";
import { useEffect } from "react";
export const runtime = "edge";
// import "bootstrap/dist/js/bootstrap.js";
export const metadata = {
  icons: {
    icon: ["../assets/images/logo.png"],
  },
};
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.min.js");
  // }, []);
  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
