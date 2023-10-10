import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="mt-[96px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
