"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <Header />}
      <main className="flex-1">{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
}
