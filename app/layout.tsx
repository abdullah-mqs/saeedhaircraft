import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MobileNav from "../components/common/MobileNav";
import AddReviewModal from "../components/common/AddReviewModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Saeed Hair Craft | Luxury Barbershop in B-17 Islamabad",
  description:
    "Experience luxury grooming, precision haircuts, beard styling, and facials at Saeed Hair Craft in B-17 Markaz, Islamabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-bg text-text flex flex-col font-body relative antialiased">
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <AddReviewModal />
      </body>
    </html>
  );
}
