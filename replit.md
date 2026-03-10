# Grupo TM SEG - Website

## Overview
A faithful reproduction of the Grupo TM SEG security services website (www.grupotmseg.com.br). This is a single-page application built with React. The company is an intermediation firm for armed escorts, GR consulting, and regulation — they do not own vehicles, all services are performed by homologated partner companies with active Federal Police permits.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js (minimal, serves static frontend)
- **Routing**: wouter (single page with hash navigation)
- **Styling**: Black background with red accents matching the original Elementor-based brand

## Key Sections
1. **Disclaimer Modal** - Shows on page load explaining the company is an intermediation firm, not a direct service provider
2. **Header** - Fixed navigation with logo image, nav links (Home, Serviços dropdown, Quem Somos, Diferenciais, Orçamento), "Entrar" login button (→ sistema.grupotmseg.com.br), and "Fale Conosco" CTA
3. **Hero** - Full-screen hero with background image and gradient overlay
4. **Services** - Four service cards (Fiscal de Rota, Intermediação de Escolta Armada, Acompanhamento Logístico, Serviço de Guincho)
5. **Differentials** - Four differential cards highlighting company strengths
6. **Stats** - Key statistics counter section
7. **Partners** - Auto-scrolling partner logos in three categories (Embarcadores, Transportadoras, Parceiros GR) with real logo images from live site
8. **Credenciado** - CTA section for partner credentialing ("Seja credenciado pela TMSEG")
9. **About** - Full "Quem Somos" text (4 paragraphs from WordPress XML) with mission/vision/values, original team image
10. **Contact** - Budget flow steps (Orçamento → Recebimento → Proposta → Contrato), full contact form with fields (Nome, Empresa, E-mail, Celular, Telefone, Serviços checkboxes, Mensagem, Aceite), contact info sidebar with phone/WhatsApp/address
11. **Footer** - Logo image, menu links, contact info (phone, WhatsApp, address), social media (Instagram, Facebook, LinkedIn), privacy policy link, copyright

## Real Content
- Phone: +55 11 95456-3755
- Address: Av. Parada Pinto, 737 - Vila Nova Cachoeirinha, São Paulo - SP, 02611-003
- WhatsApp: https://api.whatsapp.com/send?phone=5511954563755&text=...
- Login: https://sistema.grupotmseg.com.br
- Privacy: https://grupotmseg.com.br/terms/politica-de-privacidade/
- Copyright: Grupo TMSEG® Todos os direitos reservados

## Partner Logos (Real Images)
- Embarcadores (7): HP, Claro, Mary Kay, Carrefour, Bless Foods, FBM, Marvel
- Transportadoras (8): Maroni, RN, Poloni, Luft, Cesari, CEVA, Skymark, IBL
- Parceiros GR (5): JC, Opentech, Mundial Risk, Buonny, BRK

## File Structure
- `client/src/pages/home.tsx` - Main single-page component with all sections
- `client/src/App.tsx` - App router
- `client/src/index.css` - Theme variables (black/red palette, Poppins font)
- `client/public/images/` - Logo, about team, hero, service icons
- `client/public/images/partners/` - 20 real partner logo PNG files from live site
- `server/routes.ts` - Express routes (minimal)
- `attached_assets/grupotmseg.WordPress.2026-03-08_*.xml` - WordPress XML export (reference)

## Design Tokens (from Elementor kit CSS)
- Primary: #AC0C0B (deep red)
- Secondary: #A42225 (dark red)
- Bright accent: #FF0200 (bright red)
- Dark accent: #580103 (very dark red)
- Background: #000000 (black)
- Cards: #1a1a1a (dark gray)
- Text: #FEFEFE (white), #373737 (dark gray)
- Font: Poppins (all weights)
- Button gradient: radial-gradient from #DD0A09 to #A42225
- Style: Dark/black theme with red accents, professional security industry aesthetic
