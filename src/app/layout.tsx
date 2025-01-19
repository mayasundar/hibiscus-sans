import "./globals.css";
import localFont from "next/font/local";

const hibiscus = localFont({
    src: "../../public/fonts/HibiscusSans-Regular.woff",
    variable: "--font-hibiscus",
});

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
