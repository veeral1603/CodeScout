import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeetCode Company Wise",
  description:
    "Browse LeetCode questions sorted by company and frequency. Open-source, no login required.",
  openGraph: {
    title: "LeetCode Company Wise",
    description: "Browse LeetCode questions by company and frequency.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        `${geist.variable} ${geistMono.variable} h-full antialiased `,
        "dark",
      )}
    >
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
