import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Combustiveis } from "@/components/Combustiveis";
import { Conveniencia } from "@/components/Conveniencia";
import { Pousada } from "@/components/Pousada";
import { PainelLed } from "@/components/PainelLed";
import { Faq } from "@/components/Faq";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Diferenciais />
        <Combustiveis />
        <Conveniencia />
        <Pousada />
        <PainelLed />
        <Faq />
        <Localizacao />
      </main>
      <Footer />
    </div>
  );
}
