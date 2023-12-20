import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
