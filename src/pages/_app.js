import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

const pathsForNormalFooter = [];
export default function App({ Component, pageProps }) {
  const location = useRouter();

  return (
    <>
      <Header />
      <div className="pt-[96px]">
        <Component {...pageProps} />
      </div>
      <Footer
        isOverlapped={!pathsForNormalFooter.includes(location.pathname)}
      />
    </>
  );
}
