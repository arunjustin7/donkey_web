import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pure Donkey Milk Products | Natural Wellness",
  description: "Premium donkey milk products for your health and wellness",
}

function RootLayout({ children }: readOnlyChild) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
