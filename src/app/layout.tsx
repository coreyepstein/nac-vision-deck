import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vision.thenewamerican.org"),
  title: "Vision — The New American Codex",
  description:
    "A comprehensive vision deck for The New American Codex — an open-source curriculum for raising capable, self-governing humans.",
  openGraph: {
    title: "Vision — The New American Codex",
    description:
      "An open-source curriculum for raising capable, self-governing humans — from pregnancy through age 18.",
    type: "website",
    siteName: "The New American Codex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision — The New American Codex",
    description:
      "An open-source curriculum for raising capable, self-governing humans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
