import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Solace Kernel",
    template: "%s | Solace Kernel",
  },
  description:
    "Public-facing governance infrastructure surface for Solace Kernel — deterministic execution authority for governed intelligence systems.",
  applicationName: "Solace Kernel",
  metadataBase: new URL("https://kernel.moralclarity.ai"),
  openGraph: {
    title: "Solace Kernel",
    description:
      "Deterministic execution authority for governed intelligence systems.",
    url: "https://kernel.moralclarity.ai",
    siteName: "Solace Kernel",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
