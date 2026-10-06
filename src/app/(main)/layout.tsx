import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="grow min-h-0 h-full container-6xl py-4 sm:py-6 lg:py-8 ">
        {children}
      </main>
      <Footer />
    </>
  );
}
