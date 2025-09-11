import { Metadata } from "next"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "درباره ما | آبانیت",
  description: "آبانیت، ارائه دهنده خدمات فناوری اطلاعات و راهکارهای دیجیتال برای کسب و کارها با بیش از یک دهه تجربه",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
