import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic | Thanjavur",
    template:
      "%s | NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic",
  },
  description:
    "Specialist care for pain management, physical rehabilitation, and dental health in Thanjavur. Led by Dr. D. Balamurali (Physiatrist) and Dr. G. Yasothai (Dental Surgeon). Robotic gait training, artificial limb centre, physiotherapy, dental implants, and more.",
  keywords: [
    "rehabilitation clinic Thanjavur",
    "pain management clinic Thanjavur",
    "dental clinic Thanjavur",
    "physiatrist Thanjavur",
    "robotic rehabilitation Thanjavur",
    "artificial limb centre Thanjavur",
    "physiotherapy Thanjavur",
    "dental implants Thanjavur",
    "Dr Balamurali Thanjavur",
    "physical medicine and rehabilitation Thanjavur",
  ],
  authors: [
    { name: "NandaN Robotic Rehabilitation Centre" },
  ],
  openGraph: {
    title:
      "NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic | Thanjavur",
    description:
      "Specialist care for pain management, physical rehabilitation, and dental health in Thanjavur.",
    url: "https://www.nandanrehab.in",
    siteName:
      "NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NandaN Robotic Rehabilitation Centre Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic | Thanjavur",
    description:
      "Specialist care for pain management, physical rehabilitation, and dental health in Thanjavur.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.nandanrehab.in"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-text-primary">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
