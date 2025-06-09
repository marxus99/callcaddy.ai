import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParticlesBackground />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
