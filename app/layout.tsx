import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work = Work_Sans({
  variable: "--font-work",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HANZALA SALEEM",
  description:
    "MERN stack developer and software engineer specializing in building scalable web applications and automation tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work.className} antialiased`}>{children}</body>
    </html>
  );
}
