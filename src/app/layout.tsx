import "./globals.css";
import localFont from "next/font/local";

const hibiscus = localFont({
    src: "../../public/fonts/HibiscusSans-Regular.otf",
    variable: "--font-hibiscus",
    weight: "400",
    display: "swap",
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
