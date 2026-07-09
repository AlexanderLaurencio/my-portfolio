import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexander Portfolio",
  description: "This the portfolio of Alexander Neftali Miranda",
  icons: {
    icon: "/icons/favicon.png"
  }
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
