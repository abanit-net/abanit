import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import "./globals.css";
import "../styles/scroll-optimize.css";
import "../styles/scroll-performance.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "آبانیت - ‌‌‌نبض خلاقیت ، رمز موفقیت",
  description: "آبانیت یک آژانس دیجیتال مارکتینگ است که با خلاقیت و استراتژی‌های نوین، به کسب‌وکارها کمک می‌کند تا در دنیای دیجیتال موفق شوند.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden will-change-scroll`}
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
        </ThemeProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
