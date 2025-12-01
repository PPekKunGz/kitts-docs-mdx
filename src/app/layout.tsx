import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Kitt's Docs",
  description: "Documentation for Kitt's Projects",
  metadataBase: new URL('https://docs.ppekkungz.in.th'),

  openGraph: {
    url: 'https://docs.ppekkungz.in.th',
    type: 'website',
    locale: 'th_TH',
    title: "Kitt's Docs",
    description: "Documentation for Kitt's Projects",
    images: [
      {
        url: 'https://ppekkungz.in.th/avatar.png',
        width: 200,
        height: 200,
        alt: 'ppekkungz',
      },
    ],
  },
  twitter: {
    title: "Kitt's Docs",
    description: "Documentation for Kitt's Projects",
    card: 'summary_large_image',
    site: 'Kitts Docs',
    creator: '@PPekKunGzDev',
    images: [
      'https://ppekkungz.in.th/avatar.png',
    ],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
