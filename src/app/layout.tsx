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
  title: {
    default: "CodeScout - Company-Wise Coding Interview Problems",
    template: "%s | CodeScout",
  },
  description:
    "Explore company-wise coding interview problems and prepare for the companies you want to work for.",
  applicationName: "CodeScout",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "coding interview questions",
    "company wise coding questions",
    "technical interview questions",
    "DSA interview questions",
    "Company-wise dsa questions",
    "coding interview preparation",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "CodeScout",
    title: "CodeScout — Company-Wise Coding Interview Problems",
    description:
      "Explore company-wise coding interview problems and prepare for the companies you want to work for.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeScout — Company-Wise Coding Interview Problems",
    description:
      "Explore company-wise coding interview problems and prepare smarter.",
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
