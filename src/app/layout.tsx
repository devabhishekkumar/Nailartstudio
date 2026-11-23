import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Nail Art Studio | Your Nails, Your Canvas",
  description:
    "Discover thoughtful nail art, signature manicures, custom extensions and creative designs at The Nail Art Studio.",
  openGraph: {
    title: "The Nail Art Studio",
    description: "Little details. Beautiful nails. Your canvas awaits.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
