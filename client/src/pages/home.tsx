import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ShieldCheck,
  Truck,
  Bike,
  Zap,
  MapPin,
  Phone,
  Mail,
  Clock,
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
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511954563755&text=Ol%C3%A1%2C+visitei+o+seu+site+e+gostaria+de+tirar+uma+d%C3%BAvida%21";
const LOGIN_URL = "https://app.cryzo.com.br/login/grupotmseg?status=signin";
const PHONE_NUMBER = "+55 11 95456-3755";
const ADDRESS = "Av. Parada Pinto, 737 - Vila Nova Cachoeirinha, São Paulo - SP, 02611-003";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#inicio" },
    { label: "Serviços", href: "#servicos", submenu: [
      { label: "Pronta Resposta", href: "#servicos" },
      { label: "Escolta Armada", href: "#servicos" },
      { label: "Moto Acompanhamento", href: "#servicos" },
    ]},
    { label: "Quem Somos", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Orçamento", href: "#contato" },
  ] as { label: string; href: string; submenu?: { label: string; href: string }[] }[];

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3" data-testid="link-logo">
            <img
              src="/images/logo-tmseg.webp"
              alt="Grupo TM SEG"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors px-4 py-2 text-sm font-medium uppercase tracking-wider inline-flex items-center gap-1"
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/[çõãí]/g, c => ({ç:'c',õ:'o',ã:'a',í:'i'}[c] || c))}`}
                  >
                    {link.label}
                    <ChevronRight className="w-3 h-3 rotate-90 transition-transform group-hover:rotate-[270deg]" />
                  </a>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="bg-[#0a1628]/95 backdrop-blur-md border border-white/10 rounded-md py-2 min-w-[200px]">
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-colors px-4 py-2 text-sm"
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
                  className="text-gray-300 hover:text-orange-400 transition-colors px-4 py-2 text-sm font-medium uppercase tracking-wider"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/[çõãí]/g, c => ({ç:'c',õ:'o',ã:'a',í:'i'}[c] || c))}`}
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
                variant="outline"
                className="border-white/20 text-white bg-white/5 font-medium text-sm"
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
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold"
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
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1628]/98 backdrop-blur-lg border-t border-white/10"
            data-testid="nav-mobile"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-orange-400 transition-colors px-4 py-3 text-sm font-medium uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/[çõãí]/g, c => ({ç:'c',õ:'o',ã:'a',í:'i'}[c] || c))}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-white/20 text-white bg-white/5 font-medium mb-3">
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
                </a>
              </div>
              <div className="flex justify-center gap-4 pt-4 border-t border-white/10 mt-4">
                <a href="https://instagram.com/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors" data-testid="link-mobile-instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors" data-testid="link-mobile-facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/grupotmseg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors" data-testid="link-mobile-linkedin">
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

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Segurança"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                Segurança Especializada
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Garanta a segurança do seus ativos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              com a nossa equipe de especialistas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl"
            data-testid="text-hero-description"
          >
            Soluções completas em escolta armada, pronta resposta e
            acompanhamento logístico em todo o território nacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#servicos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold text-base px-8"
                data-testid="button-hero-services"
              >
                Nossos Serviços
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/5 backdrop-blur-sm font-semibold text-base px-8"
                data-testid="button-hero-contact"
              >
                Fale Conosco
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}

const services = [
  {
    title: "Pronta Resposta",
    description:
      "Oferecemos pronta resposta de carga 24/7, garantindo atendimento rápido para emergências de transporte e segurança de cargas.",
    icon: Zap,
    image: "/images/service-pronta-resposta.png",
  },
  {
    title: "Escolta Armada",
    description:
      "Nosso serviço de escolta armada oferece segurança total para o transporte de bens valiosos e pessoas, combinando planejamento estratégico, tecnologia avançada e expertise profissional.",
    icon: Shield,
    image: "/images/service-escolta.png",
  },
  {
    title: "Moto Acompanhamento",
    description:
      "Nosso serviço de acompanhamento motorizado oferece uma vigilância proativa e flexível, garantindo uma presença de segurança constante e uma resposta rápida a quaisquer incidentes.",
    icon: Bike,
    image: "/images/service-moto.png",
  },
  {
    title: "Serviço de Guincho",
    description:
      "Oferecemos serviço de guincho especializado para situações emergenciais, garantindo a remoção e transporte seguro de veículos e cargas com agilidade e eficiência.",
    icon: Truck,
    image: "/images/service-pronta-resposta.png",
  },
];

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      className="py-24 bg-[#0a1628] relative"
      data-testid="section-services"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-services-title">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Em nossa jornada, mantemos o compromisso inabalável com a segurança.
            Nossos valores refletem a prioridade que damos à integridade e ao
            comprometimento com nossos clientes. Nossa equipe é certificada e
            qualificada para oferecer serviços de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="group relative bg-[#111d33] rounded-md border border-white/5 overflow-hidden h-full flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111d33] via-[#111d33]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#contato"
                      className="inline-flex items-center text-orange-400 text-sm font-semibold group/link"
                      data-testid={`link-service-more-${index}`}
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    image: "/images/icon-camera.png",
  },
  {
    icon: Zap,
    title: "Pronta Resposta Personalizada",
    description:
      "Estamos sempre prontos para agir com rapidez e eficiência. Nossa equipe especializada oferece uma resposta ágil em situações de emergência, realizando averiguações, preservação de áreas, atendimento a antenistas e segurança patrimonial.",
    image: "/images/icon-response.png",
  },
  {
    icon: MapPin,
    title: "Caracterização e Rastreamento",
    description:
      "Nossa tecnologia de ponta oferece caracterização e rastreamento de última geração, assegurando máxima segurança e um monitoramento eficaz em tempo real. Mantenha-se informado e protegido em cada etapa.",
    image: "/images/icon-tracking.png",
  },
  {
    icon: Shield,
    title: "Escolta Armada Especializada",
    description:
      "Conte com nossa equipe altamente capacitada para atividades especializadas em escolta armada. Priorizamos a segurança e a eficiência em todas as nossas operações.",
    image: "/images/icon-shield.png",
  },
];

function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      className="py-24 bg-[#0e1a2e] relative"
      data-testid="section-differentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-differentials-title">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Confie em nossa experiência e dedicação para manter seu negócio
            seguro e protegido em todos os momentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="group flex gap-6 p-6 rounded-md bg-[#111d33]/60 border border-white/5 hover:border-orange-500/20 transition-all duration-300"
                data-testid={`card-differential-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-md flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2" data-testid={`text-differential-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "500+", label: "Operações Realizadas" },
    { value: "24/7", label: "Atendimento" },
    { value: "100%", label: "Compromisso" },
    { value: "50+", label: "Parceiros Ativos" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#0c1829] to-[#0a1628] relative" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const embarcadores = [
  { name: "HP", url: "https://www.hp.com/", logo: "/images/partners/hp.png" },
  { name: "Claro", url: "https://www.claro.com.br/", logo: "/images/partners/claro.png" },
  { name: "Mary Kay", url: "https://www.marykay.com.br/", logo: "/images/partners/marykay.png" },
  { name: "Carrefour", url: "https://www.carrefour.com.br/", logo: "/images/partners/carrefour.png" },
  { name: "Bless Foods", url: "https://www.instagram.com/blessfoodsbr/", logo: "/images/partners/blessfoods.png" },
  { name: "FBM", url: "https://www.fbm.ind.br/", logo: "/images/partners/fbm.png" },
  { name: "Marvel", url: "#", logo: "/images/partners/marvel.png" },
];

const transportadoras = [
  { name: "Maroni", url: "https://www.grupomaronibrasil.com.br/", logo: "/images/partners/maroni.png" },
  { name: "RN Logística", url: "https://www.rnlogistica.com.br/", logo: "/images/partners/rn.png" },
  { name: "Poloni", url: "https://www.trpoloni.com.br/", logo: "/images/partners/poloni.png" },
  { name: "Luft", url: "https://www.luft.com.br/", logo: "/images/partners/luft.png" },
  { name: "Cesari", url: "https://www.grupocesari.com.br/", logo: "/images/partners/cesari.png" },
  { name: "CEVA", url: "https://www.cevalogistics.com/", logo: "/images/partners/ceva.png" },
  { name: "Skymark", url: "#", logo: "/images/partners/skymark.png" },
  { name: "IBL", url: "#", logo: "/images/partners/ibl.png" },
];

const parceirosGR = [
  { name: "JC Gestão de Riscos", url: "https://www.jcgestaoderiscos.com.br/", logo: "/images/partners/jc.png" },
  { name: "Opentech", url: "https://opentechgr.com.br/", logo: "/images/partners/opentech.png" },
  { name: "Mundial Risk", url: "https://www.mundialrisk.com.br/", logo: "/images/partners/mundialrisk.png" },
  { name: "Buonny", url: "https://www.buonny.com.br/", logo: "/images/partners/buonny.png" },
  { name: "BRK", url: "https://www.brktecnologia.com.br/", logo: "/images/partners/brk.png" },
];

function PartnerLogoRow({ partners }: { partners: { name: string; url: string; logo: string }[] }) {
  const doubled = [...partners, ...partners];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a1628] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a1628] to-transparent z-10" />
      <div
        className="flex gap-8 animate-scroll-left"
        style={{ width: "max-content" }}
      >
        {doubled.map((partner, i) => (
          <a
            key={`${partner.name}-${i}`}
            href={partner.url}
            target={partner.url !== "#" ? "_blank" : undefined}
            rel={partner.url !== "#" ? "noopener noreferrer" : undefined}
            className="flex-shrink-0 w-40 h-28 bg-[#111d33] rounded-md border border-white/5 flex items-center justify-center p-4 hover:border-orange-500/30 transition-colors cursor-pointer"
            data-testid={`partner-logo-${partner.name.toLowerCase().replace(/\s+/g, "-")}-${i}`}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: "Embarcadores", partners: embarcadores },
    { title: "Transportadoras", partners: transportadoras },
    { title: "Parceiros GR", partners: parceirosGR },
  ];

  return (
    <section
      id="parceiros"
      className="py-24 bg-[#0a1628] relative"
      data-testid="section-partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
            Quem confia em nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-partners-title">
            Nossos Parceiros
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-6 text-center uppercase tracking-wider" data-testid={`text-partner-category-${index}`}>
                {category.title}
              </h3>
              <PartnerLogoRow partners={category.partners} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredenciadoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="credenciado"
      className="py-20 relative overflow-hidden"
      data-testid="section-credenciado"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-credenciado-title">
            Seja credenciado pela TMSEG e{" "}
            <br className="hidden sm:block" />
            aumente seus ganhos mensais!
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Junte-se à nossa rede de parceiros credenciados e expanda suas oportunidades de negócio.
          </p>
          <a href="#contato">
            <Button
              size="lg"
              className="bg-white text-orange-600 border-none font-bold text-base px-10"
              data-testid="button-credenciado-contact"
            >
              Quero me Credenciar
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      className="py-24 bg-[#0e1a2e] relative overflow-hidden"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                src="/images/about-team-original.webp"
                alt="Equipe TM SEG"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2e]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center">
              <div className="text-center">
                <span className="text-3xl font-bold text-white block">24/7</span>
                <span className="text-white/80 text-xs">Atendimento</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
              Sobre nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" data-testid="text-about-title">
              Quem Somos
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              O GRUPO TM SEG se posiciona como um parceiro estratégico, dedicado a
              oferecer soluções de excelência na intermediação de serviços
              especializados em Escolta Armada, Pronta Resposta, Acompanhamento
              Logístico em todo o território nacional.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Nossa missão é conectar você aos melhores profissionais e empresas
              do setor, garantindo que cada projeto seja executado com a máxima
              eficiência, confiabilidade e dentro dos mais altos padrões de
              segurança e qualidade.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Através de uma vasta rede de parceiros de confiança, oferecemos
              serviços que abrangem desde a escolta armada até a pronta resposta,
              garantindo a proteção e o acompanhamento logístico de cargas em todo
              o Brasil. Nosso compromisso é assegurar que nossos clientes tenham
              acesso aos melhores recursos disponíveis no mercado.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Com uma equipe dedicada e experiente, trabalhamos incansavelmente
              para superar expectativas e entregar resultados que reforcem a
              segurança e a confiança em cada operação. Nosso objetivo é ser a
              referência em intermediação de serviços de segurança, sempre com
              foco na excelência e na satisfação do cliente.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Missão</h4>
                  <p className="text-gray-500 text-xs">Excelência em segurança</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Visão</h4>
                  <p className="text-gray-500 text-xs">Referência no setor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Valores</h4>
                  <p className="text-gray-500 text-xs">Integridade e compromisso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Equipe</h4>
                  <p className="text-gray-500 text-xs">Profissionais certificados</p>
                </div>
              </div>
            </div>

            <a href="#contato">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold"
                data-testid="button-about-contact"
              >
                Saiba Mais
                <ChevronRight className="w-5 h-5 ml-2" />
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

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    "Pronta Resposta",
    "Escolta Armada",
    "Moto Acompanhamento",
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contato"
      className="py-24 bg-[#0a1628] relative"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-contact-title">
            Fale com nosso time de especialistas e descubra{" "}
            <br className="hidden md:block" />
            por que somos a melhor solução para seu negócio!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {budgetSteps.map((step, index) => (
            <div key={step.title} className="text-center" data-testid={`budget-step-${index}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#111d33] rounded-md border border-white/5 p-8" data-testid="card-contact-form">
              <h3 className="text-xl font-bold text-white mb-6">Orçamento</h3>

              {submitted ? (
                <div className="text-center py-12" data-testid="form-success">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-white text-xl font-bold mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-400">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={e => setFormData(p => ({ ...p, nome: e.target.value }))}
                        className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                        placeholder="Seu nome"
                        data-testid="input-nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Empresa</label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={e => setFormData(p => ({ ...p, empresa: e.target.value }))}
                        className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                        placeholder="Nome da empresa"
                        data-testid="input-empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Celular</label>
                      <input
                        type="text"
                        value={formData.celular}
                        onChange={e => setFormData(p => ({ ...p, celular: mascaraCelular(e.target.value) }))}
                        className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                        placeholder="(00) 00000-0000"
                        data-testid="input-celular"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Telefone</label>
                      <input
                        type="text"
                        value={formData.telefone}
                        onChange={e => setFormData(p => ({ ...p, telefone: mascaraTelefone(e.target.value) }))}
                        className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                        placeholder="(00) 0000-0000"
                        data-testid="input-telefone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Serviços</label>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map(service => (
                        <label
                          key={service}
                          className="flex items-center gap-2 cursor-pointer group"
                          data-testid={`checkbox-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            formData.servicos.includes(service)
                              ? "bg-orange-500 border-orange-500"
                              : "border-white/20 bg-transparent"
                          }`}>
                            {formData.servicos.includes(service) && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
                          <span className="text-gray-300 text-sm group-hover:text-orange-400 transition-colors">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Mensagem</label>
                    <textarea
                      rows={4}
                      value={formData.mensagem}
                      onChange={e => setFormData(p => ({ ...p, mensagem: e.target.value }))}
                      className="w-full bg-[#0a1628] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Descreva sua necessidade..."
                      data-testid="input-mensagem"
                    />
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer" data-testid="checkbox-aceite">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors mt-0.5 flex-shrink-0 ${
                      formData.aceite
                        ? "bg-orange-500 border-orange-500"
                        : "border-white/20 bg-transparent"
                    }`}>
                      {formData.aceite && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
                    <span className="text-gray-400 text-sm">
                      Aceito os termos de uso e política de privacidade
                    </span>
                  </label>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold text-base"
                    data-testid="button-submit-form"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#111d33] rounded-md border border-white/5 p-8" data-testid="card-contact-info">
              <h3 className="text-white font-bold text-lg mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Telefone</h4>
                    <a href="tel:+5511954563755" className="text-orange-400 text-sm hover:text-orange-300 transition-colors" data-testid="link-phone">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">WhatsApp</h4>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm hover:text-orange-300 transition-colors" data-testid="link-whatsapp-contact">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Endereço</h4>
                    <p className="text-gray-400 text-sm" data-testid="text-address">{ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111d33] rounded-md border border-white/5 p-8" data-testid="card-contact-text">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Estamos felizes em saber que você deseja se conectar conosco!
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Seja para esclarecer dúvidas, fornecer feedback ou solicitar informações, estamos prontos para ajudar. Nossa equipe está comprometida em oferecer um atendimento rápido e eficiente, garantindo que suas necessidades sejam atendidas com a máxima prioridade.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sua opinião e suas perguntas são importantes para nós, pois nos ajudam a melhorar continuamente e a oferecer o melhor suporte possível.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white border-none font-semibold text-base"
                data-testid="button-whatsapp-contact"
              >
                <Phone className="w-5 h-5 mr-2" />
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
    <footer className="bg-[#060e1a] border-t border-white/5 pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/images/logo-footer.webp"
                alt="Grupo TM SEG"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Soluções completas em segurança para transporte de cargas e
              acompanhamento logístico em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-pronta">
                  Pronta Resposta
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-escolta">
                  Escolta Armada
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-moto">
                  Moto Acompanhamento
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-guincho">
                  Serviço de Guincho
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Menu
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-about">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-differentials">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-contact">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="tel:+5511954563755" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-phone">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-whatsapp">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">{ADDRESS}</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111d33] border border-white/5 rounded-md flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111d33] border border-white/5 rounded-md flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/grupotmseg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111d33] border border-white/5 rounded-md flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm" data-testid="text-copyright">
              Grupo TMSEG® Todos os direitos reservados
            </p>
            <div className="flex gap-6">
              <a href="https://grupotmseg.com.br/terms/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-sm transition-colors" data-testid="link-privacy">
                Política de privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <StatsSection />
      <PartnersSection />
      <CredenciadoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
