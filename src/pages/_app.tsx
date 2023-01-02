import { type AppType } from "next/dist/shared/lib/utils";
import { Poppins } from "@next/font/google";

import { DefaultLayout } from "~/layouts";

import "../styles/globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin-ext"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${poppins.style.fontFamily};
        }
      `}</style>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
};

export default MyApp;
