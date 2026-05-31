import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Delicious Delights - Exquisite Dining Experience',
  description: 'Savor gourmet dishes crafted with passion and the freshest ingredients. Make your reservation for an unforgettable culinary journey at Delicious Delights.',
  keywords: ["restaurant, dining, gourmet, cuisine, fine dining, reservation, menu, food, chef"],
  openGraph: {
    "title": "Delicious Delights - Exquisite Dining Experience",
    "description": "Savor gourmet dishes crafted with passion and the freshest ingredients. Make your reservation for an unforgettable culinary journey.",
    "url": "https://www.deliciousdelights.com",
    "siteName": "Delicious Delights",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/table-decorated-christmas_1162-202.jpg",
        "alt": "Elegant restaurant interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Delicious Delights - Exquisite Dining Experience",
    "description": "Savor gourmet dishes crafted with passion and the freshest ingredients. Make your reservation for an unforgettable culinary journey.",
    "images": [
      "http://img.b2bpic.net/free-photo/table-decorated-christmas_1162-202.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
