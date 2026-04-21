import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raghav Sathishmohan — Founder-Engineer & CS Student",
  description: "Computer Science student at Rutgers building AI-powered systems. Founder of StorePilot. Data-driven problem solver with leadership experience.",
  keywords: ["Raghav Sathishmohan", "Computer Science", "Rutgers", "AI", "Founder", "StorePilot", "Software Engineer", "Portfolio"],
  authors: [{ name: "Raghav Sathishmohan" }],
  openGraph: {
    title: "Raghav Sathishmohan — Founder-Engineer & CS Student",
    description: "Computer Science student at Rutgers building AI-powered systems. Founder of StorePilot.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Sathishmohan — Founder-Engineer & CS Student",
    description: "Computer Science student at Rutgers building AI-powered systems. Founder of StorePilot.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#12121a',
              border: '1px solid #2a2a3a',
              color: '#fafafa',
            },
          }}
        />
      </body>
    </html>
  );
}
