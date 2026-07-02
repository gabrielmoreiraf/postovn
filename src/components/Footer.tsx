import { MapPin, Clock, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#combustiveis", label: "Combustíveis" },
  { href: "#conveniencia", label: "Loja de conveniência" },
  { href: "#painel-led", label: "Anuncie no painel" },
  { href: "#faq", label: "Dúvidas frequentes" },
  { href: "#localizacao", label: "Como chegar" },
];

export function Footer() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <footer className="bg-brand-blue-darker text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        {/* marca */}
        <div className="flex flex-col items-start gap-4">
          <Logo className="h-10 w-auto" />
          <p className="max-w-xs text-sm text-white/70">{siteConfig.description}</p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.instagram}              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-yellow hover:text-brand-blue-darker"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={whatsappHref}              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-yellow hover:text-brand-blue-darker"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        {/* navegação */}
        <nav className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Navegação
          </h3>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* contato */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Contato
          </h3>
          <a
            href={siteConfig.address.mapsUrl}            className="flex items-start gap-3 text-sm text-white/70 transition hover:text-brand-yellow"
          >
            <MapPin size={18} className="mt-0.5 shrink-0 text-brand-yellow" />
            {siteConfig.address.full}
          </a>
          <a
            href={whatsappHref}            className="flex items-center gap-3 text-sm text-white/70 transition hover:text-brand-yellow"
          >
            <Phone size={18} className="shrink-0 text-brand-yellow" />
            {siteConfig.contact.whatsappDisplay}
          </a>
          <div className="flex items-start gap-3 text-sm text-white/70">
            <Clock size={18} className="mt-0.5 shrink-0 text-brand-yellow" />
            <span>
              {siteConfig.hours.label}
              <br />
              {siteConfig.hours.detail}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-6 text-center text-xs text-white/50 sm:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/gabrielmoreirace/"              className="font-semibold text-white/70 underline-offset-4 transition hover:text-brand-yellow hover:underline"
            >
              Gabriel Moreira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
