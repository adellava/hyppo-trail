import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyppo Trail",
  description:
    "an unsupported bikepacking trail 210 km and 4500 D+ to be completed in 18h",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        {children}
        <Script src="https://cdn.iubenda.com/iubenda.js" />
        <Script type="text/javascript" src="/iubenda.js"></Script>
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
      </body>
    </html>
  );
}
