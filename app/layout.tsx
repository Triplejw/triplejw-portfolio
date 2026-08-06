import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Joshua JJ Wonder — Edge AI & Full-Stack Developer";
  const description =
    "Portfolio of Joshua JJ Wonder (TripleJW), an edge AI and full-stack developer turning research into practical products.";

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: [
      "Joshua JJ Wonder",
      "TripleJW",
      "Edge AI",
      "AI Engineer",
      "Full-Stack Developer",
      "FastAPI",
      "Computer Vision",
    ],
    authors: [{ name: "Joshua JJ Wonder" }],
    creator: "Joshua JJ Wonder",
    openGraph: {
      type: "website",
      url: baseUrl,
      title,
      description,
      siteName: "TripleJW",
      images: [{ url: new URL("/og.png", baseUrl).toString(), width: 1732, height: 908, alt: "Joshua JJ Wonder — Edge AI & Full-Stack Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
