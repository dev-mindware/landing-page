"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Logo from "@/assets/midware_logo_oficial.png"
import Image from "next/image";

export default function NewsletterFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-background text-foreground px-6 py-16">
      {/* Newsletter */}
      <div className="max-w-3xl mx-auto rounded-2xl border border-border p-8 text-center">
        <h2 className="text-2xl font-bold mb-2 tracking-tight">Assine a Newsletter</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Fique por dentro das novidades, dicas e ofertas exclusivas.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="ex. youremail2025@yahoo.com"
            aria-label="Email address"
            className="rounded-full bg-muted text-foreground placeholder:text-muted-foreground"
            required
          />
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
            Subscrever
          </Button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-muted-foreground">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-foreground font-semibold text-lg">
            <Image src={Logo} alt="Logo" width={32} height={32}/>
            <span>MINDWARE</span>
          </div>
          <p className="text-foreground font-medium leading-snug">
            Smart Living, <em>Made Easy</em>
          </p>
          <address className="not-italic">
            123 Smart Lane, Tech City, FR<br />
            +33 1 23 45 67 89
          </address>
          <div className="flex space-x-3 mt-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={Icon.name}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Product */}
        <FooterColumn title="Produto" links={["Funcionalidades", "Preços", "Como Funciona", "Demo"]} />

        {/* Company */}
        <FooterColumn title="Empresa" links={["Sobre Nós", "Carreiras", "Blog", "Imprensa"]} />

        {/* Support */}
        <FooterColumn title="Suporte" links={["Ajuda", "Guia de Instalação", "Contacto", "Garantia"]} />
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-muted-foreground border-t border-border pt-6">
        <span>© 2025 MINDWARE. Todos os direitos reservados.</span>
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-accent transition flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-foreground font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((text, i) => (
          <li key={i} className="hover:text-foreground transition cursor-pointer">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
