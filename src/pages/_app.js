import "@/styles/Home.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import MainLayout from "@/layout/MainLayout";

// import "bootstrap/dist/js/bootstrap.js";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
