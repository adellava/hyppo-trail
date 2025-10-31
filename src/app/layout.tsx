import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hippo Bike Trail",
  description:
    "an unsupported bikepacking trail 200 km and 4800 D+ to be completed in 20h",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script type="text/javascript" src="/iubenda.js"></Script>
      <body className={opensans.className}>
        {children}
        <Script src="https://cdn.iubenda.com/iubenda.js" />
        <Script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3424750.js"
        ></Script>
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
        ></Script>
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          async
        ></Script>
      <Script src='https://picflow.com/embed/main.js' type="module" defer></Script>
      </body>
    </html>
  );
}
