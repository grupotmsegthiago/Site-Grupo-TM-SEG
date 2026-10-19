import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Truck,
  MapPin,
  Phone,
  ChevronRight,
  Menu,
  X,
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  LogIn,
  ClipboardList,
  MailOpen,
  UserCheck,
  Handshake,
  CheckCircle2,
  Send,
  Zap,
} from "lucide-react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511916893018&text=Ol%C3%A1%2C+visitei+o+seu+site+e+gostaria+de+tirar+uma+d%C3%BAvida%21";
const LOGIN_URL = "https://sistema.grupotmseg.com.br";
const PHONE_NUMBER = "+55 11 91689-3018";
const ADDRESS = "Av. Parada Pinto, 737 - Vila Nova Cachoeirinha, São Paulo - SP, 02611-003";

const ROUTE_PATH = "M36 150 C 80 146, 110 96, 156 108 S 230 156, 332 64";

function slugNav(label: string) {
  return label.toLowerCase().replace(/[çõãí]/g, (c) => ({ ç: "c", õ: "o", ã: "a", í: "i" }[c] || c));
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#inicio" },
    { label: "Serviços", href: "#servicos", submenu: [
      { label: "Fiscal de Rota", href: "#servicos" },
      { label: "Intermediação de Escolta Armada", href: "#servicos" },
      { label: "Acompanhamento Logístico", href: "#servicos" },
    ]},
    { label: "Quem Somos", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Clientes", href: "#parceiros" },
    { label: "Orçamento", href: "#contato" },
  ] as { label: string; href: string; submenu?: { label: string; href: string }[] }[];

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[rgba(12,13,16,0.94)] backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          <a href="#inicio" className="flex items-center gap-3" data-testid="link-logo">
            <img
              src="/images/logo-tmseg.webp"
              alt="Grupo TM SEG"
              className="h-11 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-white transition-colors px-3 py-2 text-[13px] font-medium tracking-[0.14em] uppercase inline-flex items-center gap-1"
                    data-testid={`link-nav-${slugNav(link.label)}`}
                  >
                    {link.label}
                    <ChevronRight className="w-3 h-3 rotate-90 transition-transform group-hover:rotate-[270deg]" />
                  </a>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="bg-[#12141a] border border-white/10 rounded-xl py-2 min-w-[240px] shadow-2xl">
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block text-white/70 hover:text-white hover:bg-white/5 transition-colors px-4 py-2.5 text-sm"
                          data-testid={`link-nav-sub-${sub.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/75 hover:text-white transition-colors px-3 py-2 text-[13px] font-medium tracking-[0.14em] uppercase"
                  data-testid={`link-nav-${slugNav(link.label)}`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-login"
            >
              <Button
                size="sm"
                variant="ghost"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10 font-medium text-sm"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-header"
            >
              <Button
                size="sm"
                className="bg-[#d0121a] hover:bg-[#b01016] text-white border-none font-display tracking-[0.08em] uppercase"
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] bg-[#d0121a]" style={{ width: `${progress * 100}%` }} />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0c0d10] border-t border-white/10"
            data-testid="nav-mobile"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors px-4 py-3 text-sm font-medium tracking-[0.14em] uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${slugNav(link.label)}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="mb-3 w-full border border-white/25 bg-transparent text-white hover:bg-white/10 font-medium">
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#d0121a] hover:bg-[#b01016] text-white border-none font-display tracking-[0.08em] uppercase">
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
                </a>
              </div>
              <div className="flex justify-center gap-4 pt-4 border-t border-white/10 mt-4">
                <a href="https://instagram.com/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" data-testid="link-mobile-instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" data-testid="link-mobile-facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" data-testid="link-mobile-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function CentralOperacao() {
  const frame = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 14, y: -18 });

  const mover = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: 14 - py * 12, y: -18 + px * 18 });
  };

  return (
    <div
      ref={frame}
      onMouseMove={mover}
      onMouseLeave={() => setTilt({ x: 14, y: -18 })}
      className="relative mx-auto h-[480px] w-full max-w-[540px] [perspective:1500px] sm:h-[560px]"
      data-testid="hero-stage-3d"
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{ transform: reduceMotion ? undefined : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="absolute left-1/2 bottom-4 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/70 blur-2xl [transform:translateZ(-120px)]" />
        <div className="absolute inset-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent [transform:translateZ(-70px)]" />

        <div className="absolute left-0 top-20 z-20 hidden w-[168px] rounded-2xl border border-white/10 bg-[#171a21]/95 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.45)] [transform:translateZ(86px)] sm:block">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Quem executa</p>
          <p className="mt-2 font-display text-[1.7rem] uppercase leading-none text-white">Alvará PF</p>
          <p className="mt-2 text-xs leading-relaxed text-white/55">Empresa homologada em cada operação.</p>
        </div>

        <div className="absolute right-0 bottom-16 z-20 hidden w-[168px] rounded-2xl bg-[#d0121a] p-4 text-white shadow-[0_22px_40px_rgba(208,18,26,0.4)] [transform:translateZ(120px)] sm:block">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/75">Cobertura</p>
          <p className="mt-1 font-display text-4xl leading-none">24/7</p>
          <p className="mt-1 text-xs text-white/85">Território nacional</p>
        </div>

        <div className="absolute inset-x-3 top-2 bottom-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#101218] shadow-[0_40px_90px_-28px_rgba(0,0,0,0.9)] [transform:translateZ(20px)] sm:inset-x-8 sm:top-4">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-3 min-w-0">
              <img src="/images/logo-tmseg.webp" alt="" className="h-8 w-auto shrink-0" />
              <div className="min-w-0">
                <p className="font-display text-sm uppercase tracking-[0.16em] text-white truncate">Central TM SEG</p>
                <p className="text-[11px] text-white/40">Rota em acompanhamento</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/70 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Ao vivo
            </span>
          </div>

          <svg viewBox="0 0 360 188" className="block w-full h-[188px]" role="img" aria-label="Rota ilustrada saindo de São Paulo até a entrega">
            {Array.from({ length: 6 }).map((_, index) => (
              <line
                key={index}
                x1="0"
                y1={24 + index * 28}
                x2="360"
                y2={24 + index * 28}
                stroke="rgba(255,255,255,0.05)"
              />
            ))}
            <path d={ROUTE_PATH} fill="none" stroke="#d0121a" strokeWidth="8" strokeLinecap="round" opacity="0.25" />
            <path d={ROUTE_PATH} fill="none" stroke="#d0121a" strokeWidth="2.5" strokeLinecap="round" />
            <path className="route-line" d={ROUTE_PATH} fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="36" cy="150" r="4.5" fill="#ffffff" />
            <text x="48" y="146" fill="rgba(255,255,255,0.72)" fontSize="12" fontFamily="Outfit, sans-serif">São Paulo</text>
            <circle cx="332" cy="64" r="4.5" fill="#d0121a" stroke="#fff" strokeWidth="1.5" />
            <text x="262" y="52" fill="rgba(255,255,255,0.72)" fontSize="12" fontFamily="Outfit, sans-serif">Entrega</text>
            {reduceMotion ? (
              <circle cx="168" cy="112" r="6" fill="#d0121a" stroke="#fff" strokeWidth="2" />
            ) : (
              <circle r="6" fill="#d0121a" stroke="#fff" strokeWidth="2">
                <animateMotion dur="8s" repeatCount="indefinite" path={ROUTE_PATH} />
              </circle>
            )}
          </svg>

          <div className="grid grid-cols-3 gap-2 px-4 pb-4 sm:px-5">
            {[
              ["Fiscal", "Na rota"],
              ["Escolta", "Homologada"],
              ["Guincho", "De apoio"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white/[0.04] px-2.5 py-2">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">{label}</p>
                <p className="mt-1 text-sm text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="grain relative min-h-[100svh] flex items-center overflow-hidden bg-[#0c0d10]"
      data-testid="section-hero"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-[#d0121a]/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-8 top-28 hidden h-10 w-10 border-l border-t border-white/20 lg:block" />
      <div className="pointer-events-none absolute bottom-16 right-8 hidden h-10 w-10 border-r border-b border-white/20 lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/55"
            >
              <span className="h-px w-10 bg-[#d0121a]" />
              São Paulo · Brasil
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[clamp(3.4rem,8vw,6.6rem)] font-medium uppercase leading-[0.86] text-white"
              data-testid="text-hero-title"
            >
              A carga
              <br />
              <span className="text-[#d0121a]">protegida</span>
              <br />
              em cada
              <br />
              quilômetro.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
              data-testid="text-hero-description"
            >
              Soluções completas em <strong className="font-semibold text-white">intermediação</strong> de escolta armada,
              consultoria de GR, regulação e acompanhamento logístico em todo o território nacional.
              Quem vai a campo é empresa homologada, com alvará ativo na Polícia Federal.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contato">
                <Button
                  size="lg"
                  className="h-12 bg-[#d0121a] hover:bg-[#b01016] text-white border-none px-7 font-display text-sm uppercase tracking-[0.12em]"
                >
                  Pedir orçamento
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </a>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 border border-white/30 bg-transparent px-7 font-display text-sm uppercase tracking-[0.12em] text-white hover:bg-white/10"
                  data-testid="button-hero-services"
                >
                  Nossos Serviços
                </Button>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm uppercase tracking-[0.14em] text-white/70 underline-offset-4 hover:text-white hover:underline sm:ml-2"
                data-testid="button-hero-contact"
              >
                Fale Conosco
              </a>
            </motion.div>
          </div>

          <CentralOperacao />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Fiscal de rota",
    "Escolta armada",
    "Acompanhamento logístico",
    "Guincho",
    "Consultoria de GR",
    "Território nacional",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#0c0d10]" aria-hidden="true">
      <div className="flex w-max animate-scroll-left gap-0 py-4">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6 px-6 font-display text-xl uppercase tracking-[0.14em] text-white/80">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-[#d0121a]" />
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Fiscal de Rota",
    description:
      "Nosso serviço de fiscal de rota oferece monitoramento e inspeção contínua das rotas de transporte, garantindo conformidade, segurança e controle total da operação logística.",
    icon: Eye,
    image: "/images/service-fiscal-rota.png",
  },
  {
    title: "Intermediação de Escolta Armada",
    description:
      "Realizamos a intermediação de escolta armada com empresas devidamente homologadas e com alvará ativo na Polícia Federal, garantindo segurança total para o transporte de cargas valiosas.",
    icon: Shield,
    image: "/images/service-escolta.png",
  },
  {
    title: "Acompanhamento Logístico",
    description:
      "Nosso serviço de acompanhamento logístico oferece monitoramento em tempo real, rastreamento e gestão de toda a operação de transporte com tecnologia de ponta e equipe especializada.",
    icon: MapPin,
    image: "/images/service-acompanhamento.png",
  },
  {
    title: "Serviço de Guincho",
    description:
      "Oferecemos serviço de guincho especializado para situações emergenciais, garantindo a remoção e transporte seguro de veículos e cargas com agilidade e eficiência.",
    icon: Truck,
    image: "/images/service-guincho.png",
  },
];

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#f3efe6] py-24 text-[#161616]"
      data-testid="section-services"
    >
      <p aria-hidden="true" className="pointer-events-none absolute -right-4 top-6 select-none font-display text-[22vw] leading-none text-black/[0.045]">
        TMSEG
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">
            <span className="h-px w-10 bg-[#d0121a]" />
            Operação
          </p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl" data-testid="text-services-title">
            Nossos serviços
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Em nossa jornada, mantemos o compromisso inabalável com a segurança.
            Nossos valores refletem a prioridade que damos à integridade e ao
            comprometimento com nossos clientes. Nossa equipe é certificada e
            qualificada para oferecer serviços de alta qualidade.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid items-center gap-8 border-t border-black/10 pt-10 lg:grid-cols-12 lg:gap-12"
              data-testid={`card-service-${index}`}
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="group [perspective:1200px]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-[0_30px_50px_-28px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:[transform:rotateX(4deg)_rotateY(-5deg)_translateY(-8px)]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#6d0a10]/55 via-black/10 to-transparent mix-blend-multiply" />
                    <span className="absolute left-5 top-4 font-display text-6xl leading-none text-white sm:text-7xl">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon className="mb-4 h-6 w-6 text-[#d0121a]" aria-hidden="true" />
                <h3 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-black/65">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center font-display text-sm uppercase tracking-[0.16em] text-[#d0121a]"
                  data-testid={`link-service-more-${index}`}
                >
                  Pedir este serviço
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#0c0d10] py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl font-display text-[clamp(2.6rem,6.4vw,5.6rem)] uppercase leading-[0.9] text-white"
        >
          A viatura não é nossa.
          <span className="block text-[#d0121a]">A responsabilidade, sim.</span>
        </motion.h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
          O Grupo TM SEG intermedia escolta armada, consultoria de GR e regulação.
          A execução em campo fica com empresas devidamente homologadas e com alvará ativo na Polícia Federal.
        </p>
      </div>
    </section>
  );
}

const differentials = [
  {
    icon: Eye,
    title: "Compromisso com a Segurança Total",
    description:
      "Na TM Prestação de Serviços, nossa prioridade é a sua segurança. Comprometemo-nos a oferecer soluções abrangentes e personalizadas que garantam a proteção de seus ativos e a tranquilidade de sua operação.",
  },
  {
    icon: Zap,
    title: "Fiscal de Rota Personalizado",
    description:
      "Realizamos inspeção e fiscalização de rotas com rapidez e eficiência. Nossa equipe especializada monitora cada etapa do transporte, garantindo conformidade e segurança em toda a operação logística.",
  },
  {
    icon: MapPin,
    title: "Caracterização e Rastreamento",
    description:
      "Nossa tecnologia de ponta oferece caracterização e rastreamento de última geração, assegurando máxima segurança e um monitoramento eficaz em tempo real. Mantenha-se informado e protegido em cada etapa.",
  },
  {
    icon: Shield,
    title: "Intermediação de Escolta Especializada",
    description:
      "Realizamos a intermediação com empresas de escolta armada devidamente homologadas e com alvará ativo na Polícia Federal. Priorizamos a segurança e a eficiência em todas as operações.",
  },
];

function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="diferenciais"
      className="bg-[#f7f4ee] py-24 text-[#161616]"
      data-testid="section-differentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">
              <span className="h-px w-10 bg-[#d0121a]" />
              Por que a TM SEG
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl" data-testid="text-differentials-title">
              Nossos diferenciais
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-black/60">
            Confie em nossa experiência e dedicação para manter seu negócio
            seguro e protegido em todos os momentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/10 md:grid-cols-2">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-b border-black/10 p-6 sm:p-8 md:[&:nth-child(odd)]:border-r"
              data-testid={`card-differential-${index}`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-5xl leading-none text-[#d0121a]">0{index + 1}</span>
                <item.icon className="h-5 w-5 text-black/35" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight sm:text-3xl" data-testid={`text-differential-title-${index}`}>
                {item.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const stats = [
    { value: "500+", label: "Operações Realizadas" },
    { value: "24/7", label: "Atendimento" },
    { value: "100%", label: "Compromisso" },
    { value: "50+", label: "Parceiros Ativos" },
  ];

  return (
    <section className="bg-[#0c0d10] py-20" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className="font-display text-5xl uppercase leading-none text-white text-extrude sm:text-6xl lg:text-7xl"
                data-testid={`text-stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.18em] text-white/45" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clientes = [
  { name: "Claro", url: "https://www.claro.com.br/", logo: "/images/partners/claro.png" },
  { name: "HP", url: "https://www.hp.com/", logo: "/images/partners/hp.png" },
  { name: "Amazon Transportes", url: "https://amazontransportes.com.br/", logo: "/images/partners/amazon-transportes.png" },
  { name: "DHL", url: "https://www.dhl.com/br-pt/home.html", logo: "/images/partners/dhl.png" },
  { name: "CEVA Logística", url: "https://www.cevalogistics.com/", logo: "/images/partners/ceva.png" },
  { name: "Kodex", url: "https://kodexexpress.com/", logo: "/images/partners/kodex.png" },
  { name: "Trans Pacheco", url: "https://transportepacheco.com.br/", logo: "/images/partners/transpacheco.png" },
  { name: "Techtrans", url: "https://www.techtrans.com.br/", logo: "/images/partners/techtrans.png" },
  { name: "Luft", url: "https://www.luft.com.br/", logo: "/images/partners/luft.png" },
  { name: "IBL", url: "https://ibllogistica.com.br/", logo: "/images/partners/ibl.png" },
  { name: "Ceslog", url: "https://www.grupocesari.com.br/ceslog", logo: "/images/partners/ceslog.png" },
  { name: "Comolatti", url: "https://www.comolatti.com.br/", logo: "/images/partners/comolatti.png" },
  { name: "Mercado Livre", url: "https://www.mercadolivre.com.br/", logo: "/images/partners/mercadolivre.png" },
];

const parceiros = [
  { name: "Skymark", url: "https://skymark.com.br/", logo: "/images/partners/skymark.png" },
  { name: "Brasil Risk", url: "https://brktecnologia.com.br/", logo: "/images/partners/brasilrisk.png" },
  { name: "NGO", url: "https://ngogr.com.br/", logo: "/images/partners/ngo.png" },
  { name: "NoRisk", url: "https://www.nrisklog.com.br/", logo: "/images/partners/nrisk.png" },
  { name: "Opentech", url: "https://opentechgr.com.br/", logo: "/images/partners/opentech.png" },
  { name: "J&C", url: "https://www.jcgestaoderiscos.com.br/", logo: "/images/partners/jc.png" },
  { name: "Buonny", url: "https://www.buonny.com.br/", logo: "/images/partners/buonny.png" },
  { name: "Mundial Risk", url: "https://www.mundialrisk.com.br/", logo: "/images/partners/mundialrisk.png" },
];

function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const categories = [
    {
      title: "Clientes",
      kicker: "Quem confia a carga",
      note: "As empresas que operam com a TM SEG.",
      partners: clientes,
    },
    {
      title: "Parceiros",
      kicker: "Quem apoia a rota",
      note: "Gerenciadoras e parceiros da operação.",
      partners: parceiros,
    },
  ];

  return (
    <section
      id="parceiros"
      className="bg-[#f3efe6] py-24 text-[#161616]"
      data-testid="section-partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">
              <span className="h-px w-10 bg-[#d0121a]" />
              Quem já opera com a gente
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl" data-testid="text-partners-title">
              Clientes e parceiros
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-black/60 lg:col-span-5 lg:justify-self-end">
            Clientes e parceiros que já estão na operação do Grupo TM SEG.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-[#d0121a]">
                    0{index + 1} · {category.kicker}
                  </p>
                  <h3 className="mt-1 font-display text-3xl uppercase leading-none sm:text-4xl" data-testid={`text-partner-category-${index}`}>
                    {category.title}
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-black/55">{category.note}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {category.partners.map((partner, partnerIndex) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target={partner.url !== "#" ? "_blank" : undefined}
                    rel={partner.url !== "#" ? "noopener noreferrer" : undefined}
                    className="group flex min-h-[158px] flex-col items-center justify-between border border-black/10 bg-white px-4 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#d0121a]/50 hover:shadow-[0_18px_30px_-22px_rgba(208,18,26,0.7)]"
                    data-testid={`partner-logo-${partner.name.toLowerCase().replace(/\s+/g, "-")}-${partnerIndex}`}
                  >
                    <span className="flex h-16 w-full items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-14 w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-black/45 transition-colors group-hover:text-[#d0121a]">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredenciadoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="credenciado"
      className="bg-[#d0121a]"
      data-testid="section-credenciado"
    >
      <div className="max-w-7xl mx-auto grid items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_auto] lg:px-8 lg:py-20" ref={ref}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-white/75">Rede credenciada</p>
          <h2 className="font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl" data-testid="text-credenciado-title">
            Seja credenciado pela TM SEG e aumente seus ganhos mensais
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
            Junte-se à nossa rede de parceiros credenciados e expanda suas oportunidades de negócio.
          </p>
        </motion.div>
        <Link href="/cadastro-operacional" className="lg:self-end">
          <Button
            size="lg"
            className="h-14 border-none bg-white px-8 font-display text-sm uppercase tracking-[0.14em] text-[#161616] hover:bg-[#f3efe6]"
            data-testid="button-credenciado-contact"
          >
            Quero me credenciar
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const pilares = [
    { icon: Target, title: "Missão", text: "Excelência em segurança" },
    { icon: Eye, title: "Visão", text: "Referência no setor" },
    { icon: Award, title: "Valores", text: "Integridade e compromisso" },
    { icon: Users, title: "Equipe", text: "Profissionais certificados" },
  ];

  return (
    <section
      id="sobre"
      className="overflow-hidden bg-[#101218] py-24"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative [perspective:1200px]"
          >
            <div className="relative overflow-hidden rounded-sm shadow-[0_40px_70px_-36px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:[transform:rotateY(6deg)_rotateX(2deg)]">
              <img
                src="/images/about-team-original.webp"
                alt="Sala do Grupo TM SEG"
                className="h-[460px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-[#d0121a] px-5 py-4 text-white shadow-xl">
              <span className="block font-display text-4xl leading-none">24/7</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/80">Atendimento</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">
              <span className="h-px w-10 bg-[#d0121a]" />
              A casa
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl" data-testid="text-about-title">
              Quem somos
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/65">
              <p>
                O GRUPO TM SEG se posiciona como um parceiro estratégico, dedicado a
                oferecer soluções de excelência na intermediação de serviços
                especializados em Intermediação de Escolta Armada, Fiscal de Rota, Acompanhamento
                Logístico em todo o território nacional.
              </p>
              <p>
                Nossa missão é conectar você aos melhores profissionais e empresas
                do setor, garantindo que cada projeto seja executado com a máxima
                eficiência, confiabilidade e dentro dos mais altos padrões de
                segurança e qualidade.
              </p>
              <p>
                Através de uma vasta rede de parceiros de confiança, oferecemos
                serviços que abrangem desde a intermediação de escolta armada até
                o fiscal de rota, garantindo a proteção e o acompanhamento logístico
                de cargas em todo o Brasil. Nosso compromisso é assegurar que nossos
                clientes tenham acesso aos melhores recursos disponíveis no mercado.
              </p>
              <p>
                Com uma equipe dedicada e experiente, trabalhamos incansavelmente
                para superar expectativas e entregar resultados que reforcem a
                segurança e a confiança em cada operação. Nosso objetivo é ser a
                referência em intermediação de serviços de segurança, sempre com
                foco na excelência e na satisfação do cliente.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {pilares.map((item) => (
                <div key={item.title} className="border-t border-white/10 pt-3">
                  <div className="mb-1 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-[#d0121a]" />
                    <h4 className="font-display text-lg uppercase tracking-wide text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-white/50">{item.text}</p>
                </div>
              ))}
            </div>

            <a href="#contato" className="mt-8 inline-block">
              <Button
                size="lg"
                className="h-12 bg-[#d0121a] hover:bg-[#b01016] text-white border-none px-7 font-display text-sm uppercase tracking-[0.12em]"
                data-testid="button-about-contact"
              >
                Falar com a equipe
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const budgetSteps = [
  {
    icon: ClipboardList,
    title: "Orçamento",
    description: "Preencha o formulário com os dados",
  },
  {
    icon: MailOpen,
    title: "Recebimento",
    description: "Confirmamos o recebimento de sua solicitação por e-mail",
  },
  {
    icon: UserCheck,
    title: "Proposta",
    description: "Enviamos a proposta o mais breve possível",
  },
  {
    icon: Handshake,
    title: "Contrato",
    description: "Assinamos o contrato para início do atendimento",
  },
];

const fieldClass =
  "w-full rounded-sm border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm text-[#161616] placeholder:text-black/30 focus:border-[#d0121a] focus:outline-none transition-colors";

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    celular: "",
    telefone: "",
    mensagem: "",
    servicos: [] as string[],
    aceite: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Fiscal de Rota",
    "Intermediação de Escolta Armada",
    "Acompanhamento Logístico",
    "Serviço de Guincho",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(service)
        ? prev.servicos.filter(s => s !== service)
        : [...prev.servicos, service],
    }));
  };

  const mascaraCelular = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor.substring(0, 15);
  };

  const mascaraTelefone = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor.substring(0, 14);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceite) return;

    const servicosList = formData.servicos.length > 0
      ? formData.servicos.join(", ")
      : "Não especificado";

    const mensagem = [
      `*Novo Orçamento - Site Grupo TM SEG*`,
      ``,
      `*Nome:* ${formData.nome}`,
      formData.empresa ? `*Empresa:* ${formData.empresa}` : null,
      `*E-mail:* ${formData.email}`,
      formData.celular ? `*Celular:* ${formData.celular}` : null,
      formData.telefone ? `*Telefone:* ${formData.telefone}` : null,
      `*Serviços:* ${servicosList}`,
      formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : null,
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511916893018&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        celular: "",
        telefone: "",
        mensagem: "",
        servicos: [],
        aceite: false,
      });
    }, 5000);
  };

  return (
    <section
      id="contato"
      className="bg-[#f3efe6] py-24 text-[#161616]"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">
            <span className="h-px w-10 bg-[#d0121a]" />
            Orçamento
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.92] sm:text-5xl lg:text-6xl" data-testid="text-contact-title">
            Fale com quem resolve a rota
          </h2>
        </motion.div>

        <div className="mb-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {budgetSteps.map((step, index) => (
            <div key={step.title} data-testid={`budget-step-${index}`} className="border-t border-black/15 pt-4">
              <div className="mb-3 flex items-center gap-2 text-[#d0121a]">
                <span className="font-display text-2xl leading-none">0{index + 1}</span>
                <step.icon className="h-4 w-4" />
              </div>
              <h3 className="font-display text-xl uppercase">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-sm bg-white p-6 shadow-[0_30px_60px_-36px_rgba(0,0,0,0.45)] sm:p-8"
              data-testid="card-contact-form"
            >
              <h3 className="mb-6 font-display text-3xl uppercase">Orçamento</h3>

              {submitted ? (
                <div className="py-12 text-center" data-testid="form-success">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-600" />
                  <h4 className="mb-2 text-xl font-bold text-[#161616]">Mensagem Enviada!</h4>
                  <p className="text-black/55">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-black/70">Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={e => setFormData(p => ({ ...p, nome: e.target.value }))}
                        className={fieldClass}
                        placeholder="Seu nome"
                        data-testid="input-nome"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-black/70">Empresa</label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={e => setFormData(p => ({ ...p, empresa: e.target.value }))}
                        className={fieldClass}
                        placeholder="Nome da empresa"
                        data-testid="input-empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-black/70">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className={fieldClass}
                      placeholder="seu@email.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-black/70">Celular</label>
                      <input
                        type="text"
                        value={formData.celular}
                        onChange={e => setFormData(p => ({ ...p, celular: mascaraCelular(e.target.value) }))}
                        className={fieldClass}
                        placeholder="(00) 00000-0000"
                        data-testid="input-celular"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-black/70">Telefone</label>
                      <input
                        type="text"
                        value={formData.telefone}
                        onChange={e => setFormData(p => ({ ...p, telefone: mascaraTelefone(e.target.value) }))}
                        className={fieldClass}
                        placeholder="(00) 0000-0000"
                        data-testid="input-telefone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-black/70">Serviços</label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {serviceOptions.map(service => (
                        <label
                          key={service}
                          className="group flex cursor-pointer items-center gap-2"
                          data-testid={`checkbox-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className={`flex h-5 w-5 items-center justify-center rounded-sm border transition-colors ${
                            formData.servicos.includes(service)
                              ? "border-[#d0121a] bg-[#d0121a]"
                              : "border-black/20 bg-transparent"
                          }`}>
                            {formData.servicos.includes(service) && (
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.servicos.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                          />
                          <span className="text-sm text-black/75 group-hover:text-[#d0121a]">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-black/70">Mensagem</label>
                    <textarea
                      rows={4}
                      value={formData.mensagem}
                      onChange={e => setFormData(p => ({ ...p, mensagem: e.target.value }))}
                      className={`${fieldClass} resize-none`}
                      placeholder="Descreva sua necessidade..."
                      data-testid="input-mensagem"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-2" data-testid="checkbox-aceite">
                    <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border transition-colors ${
                      formData.aceite
                        ? "border-[#d0121a] bg-[#d0121a]"
                        : "border-black/20 bg-transparent"
                    }`}>
                      {formData.aceite && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.aceite}
                      onChange={e => setFormData(p => ({ ...p, aceite: e.target.checked }))}
                    />
                    <span className="text-sm text-black/60">
                      Aceito os termos de uso e política de privacidade
                    </span>
                  </label>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full border-none bg-[#d0121a] text-white hover:bg-[#b01016] font-display text-sm uppercase tracking-[0.12em]"
                    data-testid="button-submit-form"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="space-y-5 lg:col-span-2"
          >
            <div className="rounded-sm bg-[#0c0d10] p-7 text-white" data-testid="card-contact-info">
              <h3 className="mb-6 font-display text-2xl uppercase">Contato</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.18em] text-white/40">Telefone</h4>
                  <a href="tel:+5511916893018" className="mt-1 block text-lg text-white hover:text-[#d0121a]" data-testid="link-phone">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.18em] text-white/40">WhatsApp</h4>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg text-white hover:text-[#d0121a]" data-testid="link-whatsapp-contact">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.18em] text-white/40">Endereço</h4>
                  <p className="mt-1 text-sm leading-relaxed text-white/70" data-testid="text-address">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-black/10 bg-white/60 p-7" data-testid="card-contact-text">
              <p className="mb-4 text-sm leading-relaxed text-black/65">
                Estamos felizes em saber que você deseja se conectar conosco!
              </p>
              <p className="mb-4 text-sm leading-relaxed text-black/65">
                Seja para esclarecer dúvidas, fornecer feedback ou solicitar informações, estamos prontos para ajudar. Nossa equipe está comprometida em oferecer um atendimento rápido e eficiente, garantindo que suas necessidades sejam atendidas com a máxima prioridade.
              </p>
              <p className="text-sm leading-relaxed text-black/65">
                Sua opinião e suas perguntas são importantes para nós, pois nos ajudam a melhorar continuamente e a oferecer o melhor suporte possível.
              </p>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="h-12 w-full border-none bg-[#128C4A] text-white hover:bg-[#0e733c] font-display text-sm uppercase tracking-[0.12em]"
                data-testid="button-whatsapp-contact"
              >
                <Phone className="mr-2 h-5 w-5" />
                Fale pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0d10] pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <img
                src="/images/logo-footer.webp"
                alt="Grupo TM SEG"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/45">
              Soluções completas em segurança para transporte de cargas e
              acompanhamento logístico em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm uppercase tracking-[0.18em] text-white">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-fiscal">
                  Fiscal de Rota
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-escolta">
                  Intermediação de Escolta Armada
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-acompanhamento">
                  Acompanhamento Logístico
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-guincho">
                  Serviço de Guincho
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm uppercase tracking-[0.18em] text-white">
              Menu
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-about">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-differentials">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-partners">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-contact">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm uppercase tracking-[0.18em] text-white">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#d0121a]" />
                <a href="tel:+5511916893018" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-phone">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#d0121a]" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white" data-testid="link-footer-whatsapp">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d0121a]" />
                <span className="text-sm text-white/50">{ADDRESS}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-[#d0121a] hover:text-white"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-[#d0121a] hover:text-white"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-[#d0121a] hover:text-white"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/35" data-testid="text-copyright">
              Grupo TMSEG® Todos os direitos reservados
            </p>
            <div className="flex gap-6">
              <a href="https://grupotmseg.com.br/terms/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 transition-colors hover:text-white/70" data-testid="link-privacy">
                Política de privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DisclaimerModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0c0d10]/75 p-4 backdrop-blur-sm"
        data-testid="modal-disclaimer"
      >
        <motion.div
          initial={{ opacity: 0, y: 16, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          className="relative w-full max-w-lg bg-[#f3efe6] p-8 text-[#161616] shadow-2xl [perspective:800px]"
        >
          <span className="absolute -top-3 left-8 bg-[#d0121a] px-3 py-1 font-display text-[11px] uppercase tracking-[0.22em] text-white">
            Antes de entrar
          </span>
          <h2 className="mb-5 font-display text-4xl uppercase leading-none">Grupo TM SEG</h2>
          <p className="mb-7 text-sm leading-relaxed text-black/70" data-testid="text-disclaimer">
            O Grupo TM SEG é uma empresa de <strong className="text-[#161616]">Intermediação de Escolta Armada, Consultoria de GR e Regulação</strong>.
            Não possuímos nenhuma viatura e 100% do nosso serviço são feitos por empresas devidamente homologadas e com alvará ativo na Polícia Federal.
          </p>
          <Button
            onClick={() => setOpen(false)}
            className="h-12 w-full border-none bg-[#161616] text-white hover:bg-black font-display uppercase tracking-[0.14em]"
            data-testid="button-disclaimer-close"
          >
            Entendi
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function WhatsAppFlutuante() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#128C4A] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-12px_rgba(18,140,74,0.8)] transition-transform hover:-translate-y-0.5"
      data-testid="button-whatsapp-float"
    >
      <Phone className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-white">
      <DisclaimerModal />
      <Header />
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <ManifestoSection />
      <DifferentialsSection />
      <StatsSection />
      <PartnersSection />
      <CredenciadoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
}
