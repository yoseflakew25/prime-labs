import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Labs - Software that just works. Scoped in 48 hours.",
  description:
    "Prime Labs builds scalable SaaS products, custom software and AI workflows. Senior engineers, fixed-price scope, a working release in 4 to 8 weeks.",
  openGraph: {
    title: "Prime Labs - Software that just works. Scoped in 48 hours.",
    description:
      "Prime Labs builds scalable SaaS products, custom software and AI workflows. Senior engineers, fixed-price scope, a working release in 4 to 8 weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&family=Figtree:wght@400;500;600;700;900&family=Jersey+10&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
