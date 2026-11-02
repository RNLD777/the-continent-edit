import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Continent Edit — Africa, in perspective",
    template: "%s | The Continent Edit"
  },
  description: "An independent editorial publication exploring the ideas, people and shifts shaping contemporary Africa.",
  openGraph: {
    title: "The Continent Edit",
    description: "Africa, in perspective.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}