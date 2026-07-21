import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Container } from '@/components/common/container';
import { OFFICIAL_NAV_ITEMS } from '@/constants/navigation';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * Rodapé institucional — azul-marinho, alinhado à identidade do site oficial.
 * Colunas: marca, navegação, contato e redes. Ano do copyright dinâmico.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:pr-6">
            <span className="font-heading text-xl font-extrabold tracking-tight">
              Grupo <span className="text-danger">FLM</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Consultoria especializada em planos de saúde, ajudando famílias a escolher com
              clareza, segurança e cuidado humano.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé — navegação">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">
              Navegação
            </h2>
            <ul className="mt-4 space-y-3">
              {OFFICIAL_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Ligar agora
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4" />
                São Paulo · SP
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">
              Acompanhe
            </h2>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Grupo FLM"
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram aria-hidden="true" className="size-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do Grupo FLM"
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Linkedin aria-hidden="true" className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>
            © {year} {SITE_CONFIG.name}. Todos os direitos reservados. Esta página tem caráter
            informativo e não constitui contrato de plano de saúde.
          </p>
        </div>
      </Container>
    </footer>
  );
}
