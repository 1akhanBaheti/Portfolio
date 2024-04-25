import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/app/styles/globals.css";
// components
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
// helpers
import { getMetaData } from "@/helpers/metadata.helper";

export const metadata: Metadata = getMetaData({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`h-full min-w-[360px]`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
