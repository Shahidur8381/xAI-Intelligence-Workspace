import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xai Intelligence Workspace — Transform Raw Data into Intelligence",
  description:
    "Xai unifies your data, applies foundation AI, and delivers clear decisions — not dashboards you have to interpret. Intelligence infrastructure for modern data teams.",
  keywords: ["AI", "intelligence platform", "data analytics", "machine learning", "automation"],
  authors: [{ name: "Xai Technologies" }],
  openGraph: {
    title: "Xai Intelligence Workspace",
    description: "Raw data in. Clear decisions out.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
