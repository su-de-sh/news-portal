import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import { ThemeProvider } from "../components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nepalnews.com"),
  title: "Nepal News Portal - Latest Breaking News from Nepal",
  description:
    "Stay updated with the latest breaking news, politics, sports, business, entertainment, and cultural stories from Nepal and around the world. Your trusted source for authentic journalism.",
  keywords:
    "Nepal news, breaking news, politics, sports, entertainment, business, culture, Kathmandu, Nepal updates, Himalayan news, South Asia news",
  authors: [{ name: "Nepal News Portal Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Nepal News Portal - Latest Breaking News from Nepal",
    description:
      "Stay updated with the latest breaking news from Nepal. Politics, sports, business, entertainment, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Nepal News Portal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal News Portal - Latest News from Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal News Portal - Latest Breaking News from Nepal",
    description: "Stay updated with the latest breaking news from Nepal.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://nepalnews.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="system" storageKey="nepal-news-theme">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
