import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const hibiscus = localFont({
    src: "../../public/fonts/HibiscusSans-Regular.otf",
    variable: "--font-hibiscus",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Hibiscus Sans",
  description: "a sans serif font",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hibiscus}`}>
        {children}
      </body>
    </html>
  );
}
