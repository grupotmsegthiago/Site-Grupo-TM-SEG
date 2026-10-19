import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0c0d10] px-6 text-white">
      <div className="max-w-lg">
        <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-[#d0121a]">404</p>
        <h1 className="font-display text-6xl uppercase leading-[0.9]">Página não encontrada</h1>
        <p className="mt-4 text-white/60">
          Esse endereço não existe no site do Grupo TM SEG.
        </p>
        <Link href="/" className="mt-8 inline-block font-display text-sm uppercase tracking-[0.16em] text-white underline underline-offset-4">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
