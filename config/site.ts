import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
    instagram: string
    vercel: string
    whatsapp: string
  }
}

export const siteConfig: SiteConfig = {
  name: "brcelso",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    instagram: "https://instagram.com/celsosilvabr",
    vercel: "https://vercel.com/brcelso",
    whatsapp: "https://wa.me/5511972509876"
  },
}
