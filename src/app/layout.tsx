import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferrow – Turn customer feedback into product decisions",
  description:
    "Ferrow is an AI research agent that reads every support ticket, review and call transcript, then tells your team what to build next.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full overflow-x-clip font-sans">{children}</body>
    </html>
  );
}
