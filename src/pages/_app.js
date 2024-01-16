import "@/styles/Home.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import MainLayout from "@/layout/MainLayout";

// edge  start
export const runtime = "edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

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
