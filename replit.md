# Grupo TM SEG - Website

## Overview
A faithful reproduction of the Grupo TM SEG security services website (www.grupotmseg.com.br). This is a single-page application built with React, featuring sections for services, differentials, partners, about, contact form, and credential section.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js (minimal, serves static frontend)
- **Routing**: wouter (single page with hash navigation)
- **Styling**: Dark navy blue theme with orange/amber accents matching the original brand

## Key Sections
1. **Header** - Fixed navigation with logo image, nav links (Home, Serviços dropdown, Quem Somos, Diferenciais, Orçamento), "Entrar" login button, and "Fale Conosco" CTA
2. **Hero** - Full-screen hero with background image and gradient overlay
3. **Services** - Four service cards (Pronta Resposta, Escolta Armada, Moto Acompanhamento, Serviço de Guincho)
4. **Differentials** - Four differential cards highlighting company strengths
5. **Stats** - Key statistics counter section
6. **Partners** - Auto-scrolling partner logos in three categories (Embarcadores, Transportadoras, Parceiros GR) with real logo images from live site
7. **Credenciado** - CTA section for partner credentialing ("Seja credenciado pela TMSEG")
8. **About** - Full "Quem Somos" text (4 paragraphs from WordPress XML) with mission/vision/values, original team image
9. **Contact** - Budget flow steps (Orçamento → Recebimento → Proposta → Contrato), full contact form with fields (Nome, Empresa, E-mail, Celular, Telefone, Serviços checkboxes, Mensagem, Aceite), contact info sidebar with phone/WhatsApp/address
10. **Footer** - Logo image, menu links, contact info (phone, WhatsApp, address), social media (Instagram, Facebook, LinkedIn), privacy policy link, copyright

## Real Content
- Phone: +55 11 95456-3755
- Address: Av. Parada Pinto, 737 - Vila Nova Cachoeirinha, São Paulo - SP, 02611-003
- WhatsApp: https://api.whatsapp.com/send?phone=5511954563755&text=...
- Login: https://app.cryzo.com.br/login/grupotmseg?status=signin
- Privacy: https://grupotmseg.com.br/terms/politica-de-privacidade/
- Copyright: Grupo TMSEG® Todos os direitos reservados

## Partner Logos (Real Images)
- Embarcadores (7): HP, Claro, Mary Kay, Carrefour, Bless Foods, FBM, Marvel
- Transportadoras (8): Maroni, RN, Poloni, Luft, Cesari, CEVA, Skymark, IBL
- Parceiros GR (5): JC, Opentech, Mundial Risk, Buonny, BRK

## File Structure
- `client/src/pages/home.tsx` - Main single-page component with all sections
- `client/src/App.tsx` - App router
- `client/src/index.css` - Theme variables (navy blue/orange palette)
- `client/public/images/` - Logo, about team, hero, service icons
- `client/public/images/partners/` - 20 real partner logo PNG files from live site
- `server/routes.ts` - Express routes (minimal)
- `attached_assets/grupotmseg.WordPress.2026-03-08_*.xml` - WordPress XML export (reference)

## Design Tokens
- Primary: Dark navy blue (#0a1628)
- Accent: Orange/Amber gradient (from-orange-500 to-amber-500)
- Font: Montserrat
- Style: Dark theme throughout, professional security industry aesthetic
