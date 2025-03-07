import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import { ReactLenis } from "lenis/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The Opticians",
  description: "Don't compromise on your vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}