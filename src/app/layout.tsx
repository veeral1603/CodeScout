import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        `${jakarta.variable} ${lora.variable} ${plexMono.variable} h-full antialiased `,
        "dark",
      )}
    >
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
