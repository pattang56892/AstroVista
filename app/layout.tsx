import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AstroVista",
  description: "AstroVista is open-source web application that provides images from NASA's Astronomy Picture of the Day API.",
  keywords: "NASA, APOD, Astronomy, Picture, Day, AstroVista, Astro, Vista",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="@/public/favicon.ico" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
