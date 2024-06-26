import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eye Buddy",
  description: "The AI-Powered Eyewear of the Future. Discover the perfect fit, style, and virtual try-on with our advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
