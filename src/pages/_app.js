import "@/styles/Home.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import MainLayout from "@/layout/MainLayout";

export const metadata = {
  icons: {
    icon: ["../assets/images/logo.png"],
  },
};
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
