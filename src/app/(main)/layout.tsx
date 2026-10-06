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
      <main className="grow min-h-0 h-full w-full ">{children}</main>
      <Footer />
    </>
  );
}
