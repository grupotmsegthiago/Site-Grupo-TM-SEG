import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicos", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

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
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-wide">
                GRUPO TM SEG
              </span>
              <span className="text-orange-400 text-[10px] uppercase tracking-[0.2em] leading-tight">
                Servicos em Seguranca
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors px-4 py-2 text-sm font-medium uppercase tracking-wider"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511999999999"
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
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
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
          alt="Seguranca"
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
                Seguranca Especializada
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
            Garanta a seguranca dos seus ativos{" "}
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
            Solucoes completas em escolta armada, pronta resposta e
            acompanhamento logistico em todo o territorio nacional.
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
                Nossos Servicos
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/5 backdrop-blur-sm font-semibold text-base px-8"
                data-testid="button-hero-contact"
              >
                Entre em Contato
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
      "Oferecemos pronta resposta de carga 24/7, garantindo atendimento rapido para emergencias de transporte e seguranca de cargas.",
    icon: Zap,
    image: "/images/service-pronta-resposta.png",
  },
  {
    title: "Escolta Armada",
    description:
      "Nosso servico de escolta armada oferece seguranca total para o transporte de bens valiosos e pessoas, combinando planejamento estrategico, tecnologia avancada e expertise profissional.",
    icon: Shield,
    image: "/images/service-escolta.png",
  },
  {
    title: "Moto Acompanhamento",
    description:
      "Nosso servico de acompanhamento motorizado oferece uma vigilancia proativa e flexivel, garantindo uma presenca de seguranca constante e uma resposta rapida a quaisquer incidentes.",
    icon: Bike,
    image: "/images/service-moto.png",
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
            Nossos Servicos
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Em nossa jornada, mantemos o compromisso inabalavel com a seguranca.
            Nossos valores refletem a prioridade que damos a integridade e ao
            comprometimento com nossos clientes. Nossa equipe e certificada e
            qualificada para oferecer servicos de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="group relative bg-[#111d33] rounded-md border border-white/5 overflow-hidden h-full flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-56 overflow-hidden">
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
    title: "Compromisso com a Seguranca Total",
    description:
      "Na TM Prestacao de Servicos, nossa prioridade e a sua seguranca. Comprometemo-nos a oferecer solucoes abrangentes e personalizadas que garantam a protecao de seus ativos e a tranquilidade de sua operacao.",
    image: "/images/icon-camera.png",
  },
  {
    icon: Zap,
    title: "Pronta Resposta Personalizada",
    description:
      "Estamos sempre prontos para agir com rapidez e eficiencia. Nossa equipe especializada oferece uma resposta agil em situacoes de emergencia, realizando averiguacoes, preservacao de areas, atendimento a antenistas e seguranca patrimonial.",
    image: "/images/icon-response.png",
  },
  {
    icon: MapPin,
    title: "Caracterizacao e Rastreamento",
    description:
      "Nossa tecnologia de ponta oferece caracterizacao e rastreamento de ultima geracao, assegurando maxima seguranca e um monitoramento eficaz em tempo real. Mantenha-se informado e protegido em cada etapa.",
    image: "/images/icon-tracking.png",
  },
  {
    icon: Shield,
    title: "Escolta Armada Especializada",
    description:
      "Conte com nossa equipe altamente capacitada para atividades especializadas em escolta armada. Priorizamos a seguranca e a eficiencia em todas as nossas operacoes.",
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
            Confie em nossa experiencia e dedicacao para manter seu negocio
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

const embarcadores = [
  { name: "Claro" },
  { name: "Mary Kay" },
  { name: "Carrefour" },
  { name: "Bless Foods" },
  { name: "FBM" },
  { name: "HP" },
];

const transportadoras = [
  { name: "RN Logistica" },
  { name: "Poloni" },
  { name: "Luft" },
  { name: "Cesari" },
  { name: "CEVA" },
  { name: "Marvel" },
  { name: "Maroni" },
];

const parceirosGR = [
  { name: "JC Gestao de Riscos" },
  { name: "Opentech" },
  { name: "Mundial Risk" },
  { name: "Buonny" },
  { name: "BRK" },
  { name: "Skymark" },
  { name: "IBL" },
];

function PartnerLogoRow({ partners, direction = "left" }: { partners: { name: string }[]; direction?: string }) {
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
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 w-36 h-24 bg-[#111d33] rounded-md border border-white/5 flex items-center justify-center px-4 hover:border-orange-500/30 transition-colors"
            data-testid={`partner-logo-${partner.name.toLowerCase().replace(/\s+/g, "-")}-${i}`}
          >
            <span className="text-gray-400 text-sm font-semibold text-center leading-tight">
              {partner.name}
            </span>
          </div>
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
            Quem confia em nos
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
                src="/images/about-team.png"
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
              Sobre nos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" data-testid="text-about-title">
              Quem Somos
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              O GRUPO TM SEG se posiciona como um parceiro estrategico, dedicado a
              oferecer solucoes de excelencia na intermediacao de servicos
              especializados em Escolta Armada, Pronta Resposta, Acompanhamento
              Logistico em todo o territorio nacional.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Nossa missao e conectar voce aos melhores profissionais e empresas
              do setor, garantindo que cada projeto seja executado com a maxima
              eficiencia, confiabilidade e dentro dos mais altos padroes de
              seguranca e qualidade.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Missao</h4>
                  <p className="text-gray-500 text-xs">Excelencia em seguranca</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Visao</h4>
                  <p className="text-gray-500 text-xs">Referencia no setor</p>
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

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "500+", label: "Operacoes Realizadas" },
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

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades de seguranca.
            Entre em contato conosco agora mesmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#111d33] rounded-md border border-white/5 p-8 text-center h-full" data-testid="card-contact-phone">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Telefone</h3>
              <p className="text-gray-400 text-sm mb-4">Ligue para nos agora</p>
              <a href="tel:+551199999999" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors" data-testid="link-phone">
                (11) 9999-9999
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#111d33] rounded-md border border-white/5 p-8 text-center h-full" data-testid="card-contact-email">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">E-mail</h3>
              <p className="text-gray-400 text-sm mb-4">Envie sua mensagem</p>
              <a href="mailto:contato@grupotmseg.com.br" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors" data-testid="link-email">
                contato@grupotmseg.com.br
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#111d33] rounded-md border border-white/5 p-8 text-center h-full" data-testid="card-contact-hours">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Horario</h3>
              <p className="text-gray-400 text-sm mb-4">Atendimento 24 horas</p>
              <span className="text-orange-400 font-semibold" data-testid="text-hours">
                24/7 - Todos os dias
              </span>
            </div>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  GRUPO TM SEG
                </span>
                <span className="text-orange-400 text-[10px] uppercase tracking-[0.2em]">
                  Servicos em Seguranca
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Solucoes completas em seguranca para transporte de cargas e
              acompanhamento logistico em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Servicos
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
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-about">
                  Sobre Nos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-differentials">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-partners">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-contact">
                  Contato
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
                <a href="tel:+551199999999" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-phone">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="mailto:contato@grupotmseg.com.br" className="text-gray-500 hover:text-orange-400 transition-colors text-sm" data-testid="link-footer-email">
                  contato@grupotmseg.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-500 text-sm">24/7 Atendimento</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111d33] border border-white/5 rounded-md flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111d33] border border-white/5 rounded-md flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm" data-testid="text-copyright">
              2024 Grupo TM SEG. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors" data-testid="link-privacy">
                Politica de Privacidade
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors" data-testid="link-terms">
                Termos de Uso
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
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
