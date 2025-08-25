import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://abanit.net'),
  title: 'آبانیت - توسعه نرم‌افزار مقیاس‌پذیر',
  description: 'آبانیت، متخصص در توسعه نرم‌افزارهای مقیاس‌پذیر، هوش مصنوعی و راهکارهای ابری',
  openGraph: {
    title: 'آبانیت - توسعه نرم‌افزار مقیاس‌پذیر',
    description: 'آبانیت، متخصص در توسعه نرم‌افزارهای مقیاس‌پذیر، هوش مصنوعی و راهکارهای ابری',
    url: 'https://abanit.net',
    siteName: 'آبانیت',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'آبانیت - توسعه نرم‌افزار مقیاس‌پذیر',
    card: 'summary_large_image',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
