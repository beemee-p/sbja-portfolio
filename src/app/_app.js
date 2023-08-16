import { Lisu_Bosa } from "next/font/google";

const lisu_bosa = Lisu_Bosa({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={lisu_bosa.className}>
      <Component {...pageProps} />
    </main>
  );
}
