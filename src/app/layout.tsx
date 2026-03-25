import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibnu's Superapp Ecosystem | Gateway Portal",
  description:
    "8 Unified Web Applications | One Ecosystem. Explore Tech, Business, Finance, Lifestyle, and Entertainment superapps.",
  keywords: [
    "superapp",
    "ecosystem",
    "ibnu",
    "portal",
    "tech",
    "business",
    "finance",
  ],
  authors: [{ name: "Ibnu" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {children}
      </body>
    </html>
  );
}
