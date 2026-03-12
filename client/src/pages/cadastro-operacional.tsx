import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Send,
  MapPin,
  Briefcase,
  User,
  Mail,
  Building2,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_PHONE = "5511954563755";

const estadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const servicosDisponiveis = [
  "Fiscal de Rota",
  "Escolta Armada",
  "Acompanhamento Logístico",
  "Serviço de Guincho",
  "Pronta Resposta",
  "Batedor",
  "Moto Acompanhamento",
];

export default function CadastroOperacional() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    empresa: "",
    cnpj: "",
    email: "",
    celular: "",
    telefone: "",
    estados: [] as string[],
    servicos: [] as string[],
    experiencia: "",
    viaturas: "",
    observacoes: "",
    aceite: false,
  });
  const [submitted, setSubmitted] = useState(false);

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

  const mascaraCPF = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor.substring(0, 14);
  };

  const mascaraCNPJ = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor.substring(0, 18);
  };

  const handleEstadoToggle = (estado: string) => {
    setFormData(prev => ({
      ...prev,
      estados: prev.estados.includes(estado)
        ? prev.estados.filter(e => e !== estado)
        : [...prev.estados, estado],
    }));
  };

  const handleServicoToggle = (servico: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(servico)
        ? prev.servicos.filter(s => s !== servico)
        : [...prev.servicos, servico],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceite) return;

    const estadosList = formData.estados.length > 0
      ? formData.estados.join(", ")
      : "Não especificado";

    const servicosList = formData.servicos.length > 0
      ? formData.servicos.join(", ")
      : "Não especificado";

    const mensagem = [
      `*Cadastro Operacional - Grupo TM SEG*`,
      ``,
      `*Nome Completo:* ${formData.nomeCompleto}`,
      formData.cpf ? `*CPF:* ${formData.cpf}` : null,
      formData.empresa ? `*Empresa:* ${formData.empresa}` : null,
      formData.cnpj ? `*CNPJ:* ${formData.cnpj}` : null,
      `*E-mail:* ${formData.email}`,
      formData.celular ? `*Celular:* ${formData.celular}` : null,
      formData.telefone ? `*Telefone:* ${formData.telefone}` : null,
      `*Áreas de Atuação:* ${estadosList}`,
      `*Serviços:* ${servicosList}`,
      formData.experiencia ? `*Experiência:* ${formData.experiencia}` : null,
      formData.viaturas ? `*Qtd. Viaturas:* ${formData.viaturas}` : null,
      formData.observacoes ? `*Observações:* ${formData.observacoes}` : null,
    ].filter(Boolean).join("\n");

    if (!formData.aceite || formData.estados.length === 0 || formData.servicos.length === 0) return;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensagem)}`;
    const win = window.open(whatsappUrl, "_blank");

    if (!win) {
      window.location.href = whatsappUrl;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nomeCompleto: "",
        cpf: "",
        empresa: "",
        cnpj: "",
        email: "",
        celular: "",
        telefone: "",
        estados: [],
        servicos: [],
        experiencia: "",
        viaturas: "",
        observacoes: "",
        aceite: false,
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      <header className="bg-[#000000]/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
              <img
                src="/images/logo-tmseg.webp"
                alt="Grupo TM SEG"
                className="h-14 w-auto"
              />
            </Link>
            <Link href="/" data-testid="link-back-home">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white bg-white/5 font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
                Cadastro de Prestador
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-cadastro-title">
              Cadastro Operacional
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Preencha o formulário abaixo com seus dados e áreas de atuação.
              Após o envio, sua solicitação será analisada pela nossa equipe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1a1a1a] rounded-lg border border-white/5 p-8" data-testid="card-cadastro-form">
              {submitted ? (
                <div className="text-center py-16" data-testid="cadastro-success">
                  <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h2 className="text-white text-2xl font-bold mb-3">Cadastro Enviado!</h2>
                  <p className="text-gray-400 text-lg mb-2">Seus dados foram enviados via WhatsApp.</p>
                  <p className="text-gray-500 text-sm">Nossa equipe analisará sua solicitação e entrará em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="cadastro-form">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-red-500" />
                      Dados Pessoais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Nome Completo *</label>
                        <input
                          type="text"
                          required
                          value={formData.nomeCompleto}
                          onChange={e => setFormData(p => ({ ...p, nomeCompleto: e.target.value }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="Seu nome completo"
                          data-testid="input-nome-completo"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">CPF</label>
                        <input
                          type="text"
                          value={formData.cpf}
                          onChange={e => setFormData(p => ({ ...p, cpf: mascaraCPF(e.target.value) }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="000.000.000-00"
                          data-testid="input-cpf"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-red-500" />
                      Dados da Empresa
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Empresa</label>
                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={e => setFormData(p => ({ ...p, empresa: e.target.value }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="Nome da empresa"
                          data-testid="input-empresa"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">CNPJ</label>
                        <input
                          type="text"
                          value={formData.cnpj}
                          onChange={e => setFormData(p => ({ ...p, cnpj: mascaraCNPJ(e.target.value) }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="00.000.000/0000-00"
                          data-testid="input-cnpj"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-red-500" />
                      Contato
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">E-mail *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="seu@email.com"
                          data-testid="input-email"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">Celular *</label>
                          <input
                            type="text"
                            required
                            value={formData.celular}
                            onChange={e => setFormData(p => ({ ...p, celular: mascaraCelular(e.target.value) }))}
                            className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
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
                            className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                            placeholder="(00) 0000-0000"
                            data-testid="input-telefone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-500" />
                      Áreas de Atuação *
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">Selecione os estados onde você atua:</p>
                    <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
                      {estadosBrasil.map(estado => (
                        <button
                          key={estado}
                          type="button"
                          onClick={() => handleEstadoToggle(estado)}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                            formData.estados.includes(estado)
                              ? "bg-red-600 text-white border border-red-600"
                              : "bg-[#000000] text-gray-400 border border-white/10 hover:border-red-600/30 hover:text-white"
                          }`}
                          data-testid={`button-estado-${estado.toLowerCase()}`}
                        >
                          {estado}
                        </button>
                      ))}
                    </div>
                    {formData.estados.length > 0 && (
                      <p className="text-red-500 text-sm mt-2">
                        Selecionados: {formData.estados.join(", ")}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-red-500" />
                      Serviços Prestados *
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {servicosDisponiveis.map(servico => (
                        <label
                          key={servico}
                          className="group flex items-center gap-3 cursor-pointer p-3 rounded-md border border-white/5 hover:border-red-600/20 transition-colors"
                        >
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
                              formData.servicos.includes(servico)
                                ? "bg-red-600 border-red-600"
                                : "border-white/20 bg-transparent"
                            }`}
                            onClick={() => handleServicoToggle(servico)}
                            data-testid={`checkbox-servico-${servico.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {formData.servicos.includes(servico) && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            )}
                          </div>
                          <span
                            className="text-gray-300 text-sm group-hover:text-red-500 transition-colors"
                            onClick={() => handleServicoToggle(servico)}
                          >
                            {servico}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-red-500" />
                      Informações Adicionais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Tempo de Experiência</label>
                        <input
                          type="text"
                          value={formData.experiencia}
                          onChange={e => setFormData(p => ({ ...p, experiencia: e.target.value }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="Ex: 5 anos"
                          data-testid="input-experiencia"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Quantidade de Viaturas</label>
                        <input
                          type="text"
                          value={formData.viaturas}
                          onChange={e => setFormData(p => ({ ...p, viaturas: e.target.value }))}
                          className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors"
                          placeholder="Ex: 3 viaturas"
                          data-testid="input-viaturas"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Observações</label>
                      <textarea
                        value={formData.observacoes}
                        onChange={e => setFormData(p => ({ ...p, observacoes: e.target.value }))}
                        rows={4}
                        className="w-full bg-[#000000] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-red-600/50 focus:outline-none transition-colors resize-none"
                        placeholder="Informações adicionais sobre seus serviços..."
                        data-testid="input-observacoes"
                      />
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <label className="flex items-start gap-3 cursor-pointer group mb-6">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 transition-colors flex-shrink-0 ${
                          formData.aceite
                            ? "bg-red-600 border-red-600"
                            : "border-white/20 bg-transparent"
                        }`}
                        onClick={() => setFormData(p => ({ ...p, aceite: !p.aceite }))}
                        data-testid="checkbox-aceite"
                      >
                        {formData.aceite && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                      <span
                        className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors"
                        onClick={() => setFormData(p => ({ ...p, aceite: !p.aceite }))}
                      >
                        Declaro que as informações fornecidas são verdadeiras e autorizo o Grupo TM SEG a entrar em contato para dar continuidade ao processo de cadastro.
                      </span>
                    </label>

                    <Button
                      type="submit"
                      disabled={!formData.aceite || formData.estados.length === 0 || formData.servicos.length === 0}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white border-none font-semibold text-base py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="button-submit-cadastro"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Cadastro via WhatsApp
                    </Button>

                    {(!formData.aceite || formData.estados.length === 0 || formData.servicos.length === 0) && (
                      <p className="text-gray-500 text-xs text-center mt-3">
                        {!formData.aceite && "Aceite os termos para continuar. "}
                        {formData.estados.length === 0 && "Selecione pelo menos um estado. "}
                        {formData.servicos.length === 0 && "Selecione pelo menos um serviço."}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-[#000000] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            Grupo TMSEG® Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
