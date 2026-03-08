# Grupo TM SEG - Website

## Overview
A faithful reproduction of the Grupo TM SEG security services website (www.grupotmseg.com.br). This is a single-page application built with React, featuring sections for services, differentials, partners, about, and contact information.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js (minimal, serves static frontend)
- **Routing**: wouter (single page with hash navigation)
- **Styling**: Dark navy blue theme with orange/amber accents matching the original brand

## Key Sections
1. **Header** - Fixed navigation with logo, nav links, and CTA button
2. **Hero** - Full-screen hero with background image and gradient overlay
3. **Services** - Three service cards (Pronta Resposta, Escolta Armada, Moto Acompanhamento)
4. **Differentials** - Four differential cards highlighting company strengths
5. **Stats** - Key statistics counter section
6. **Partners** - Auto-scrolling partner logos in three categories (Embarcadores, Transportadoras, Parceiros GR)
7. **About** - Company information with mission/vision/values
8. **Contact** - Contact information cards (phone, email, hours)
9. **Footer** - Links, social media, and copyright

## File Structure
- `client/src/pages/home.tsx` - Main single-page component with all sections
- `client/src/App.tsx` - App router
- `client/src/index.css` - Theme variables (navy blue/orange palette)
- `client/public/images/` - Generated images for hero, services, icons
- `server/routes.ts` - Express routes (minimal)

## Design Tokens
- Primary: Dark navy blue (#0a1628)
- Accent: Orange/Amber gradient (from-orange-500 to-amber-500)
- Font: Montserrat
- Style: Dark theme throughout, professional security industry aesthetic
