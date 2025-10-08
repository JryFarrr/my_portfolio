import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jiryan Farokhi | Data Scientist Resume",
  description:
    "Digital resume for Jiryan Farokhi, showcasing data science projects, academic background, and leadership experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
