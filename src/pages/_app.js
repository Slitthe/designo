import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

const pathsForNormalFooter = ["/contact"];
export default function App({ Component, pageProps }) {
  const location = useRouter();

  return (
    <>
      <Header />
      <main className="pt-[96px]">
        <Component {...pageProps} />
      </main>
      <Footer
        isOverlapped={!pathsForNormalFooter.includes(location.pathname)}
      />
    </>
  );
}
