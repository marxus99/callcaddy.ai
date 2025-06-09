import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
