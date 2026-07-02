import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: troque pela URL real quando o site for publicado (ex.: https://postovn.com.br)
  metadataBase: new URL("https://postovn.com.br"),
  title: "Posto VN",
  description:
    "Posto VN em Palestina, Canindé/CE. Combustível de procedência, loja de conveniência e painel de LED para divulgar sua empresa. Aberto 24 horas.",
  keywords: [
    "posto de combustível Canindé",
    "posto 24 horas Canindé",
    "gasolina Canindé CE",
    "etanol Canindé",
    "diesel S10 Canindé",
    "Posto VN",
    "posto Palestina Canindé",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Posto VN",
    description:
      "Combustível de procedência, loja de conveniência e o melhor atendimento de Palestina, Canindé/CE. Aberto 24 horas.",
    images: [
      {
        url: "/posto-fachada.jpg",
        width: 1600,
        height: 1200,
        alt: "Fachada do Posto VN em Palestina, Canindé/CE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Posto VN",
    description:
      "Combustível de procedência, loja de conveniência e atendimento 24 horas em Palestina, Canindé/CE.",
    images: ["/posto-fachada.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
