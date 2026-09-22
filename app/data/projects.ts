export type ProjectTag =
  | "branding"
  | "angular"
  | "react"
  | "vue"
  | "vanilla";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  kind: string;
  title: string;
  stack: string[];
  image: string;
  imagePosition?: string;
  tags: ProjectTag[];
  links: ProjectLink[];
}

export const projectFilters: { value: ProjectTag | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "branding", label: "Website Branding" },
  { value: "angular", label: "Angular.js" },
  { value: "react", label: "React.js" },
  { value: "vue", label: "Vue.js" },
  { value: "vanilla", label: "Vanilla JS" },
];

export const projects: Project[] = [
  {
    id: "pixelculture",
    kind: "Web Design & Development",
    title: "PixelCulture — web design and development agency",
    stack: ["React", "JavaScript", "Vercel"],
    image: "/assets/img/works/pixelculture.jpg",
    tags: ["react", "branding"],
    links: [{ label: "Live", href: "https://www.pixelculture.org/" }],
  },
  {
    id: "skkn",
    kind: "Web Design & Development",
    title: "SKKN BY KIM — Shopify storefront",
    stack: ["Shopify", "Liquid", "Vue", "Adobe Analytics"],
    image: "/assets/img/works/skkn.jpg",
    imagePosition: "center",
    tags: ["branding", "vue"],
    links: [
      {
        label: "Archive",
        href: "https://web.archive.org/web/20250328163826/https://skknbykim.com/",
      },
    ],
  },
  {
    id: "publishpass",
    kind: "Product Development",
    title: "PublishPass — pre-publish QA for marketing teams",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Claude AI",
    ],
    image: "/assets/img/works/publishpass.jpg",
    imagePosition: "center",
    tags: ["react", "branding"],
    links: [{ label: "Live", href: "https://publishguard.vercel.app/" }],
  },
  {
    id: "b2b-checkout",
    kind: "Product Development",
    title: "B2B checkout document upload — Shopify Plus",
    stack: ["Shopify", "Checkout UI", "React", "TypeScript"],
    image: "/assets/img/works/b2b-checkout.jpg",
    imagePosition: "center",
    tags: ["react"],
    links: [
      {
        label: "Code",
        href: "https://github.com/loveclari/b2b-checkout-document-upload",
      },
    ],
  },
  {
    id: "gia-rarity",
    kind: "Product Development",
    title: "GIA Rarity App — diamond 4Cs explorer",
    stack: ["Next.js", "React", "TypeScript", "OpenAI", "Vercel"],
    image: "/assets/img/works/gia-rarity.jpg",
    tags: ["react"],
    links: [
      { label: "Live", href: "https://gem-rarity-ai.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/loveclari/gem-rarity-ai",
      },
    ],
  },
  {
    id: "nextgem",
    kind: "Product Development",
    title: "GIA NextGem — retail jewelry training",
    stack: ["Shopify", "Salesforce", "LearnUpon"],
    image: "/assets/img/works/nextgem.jpg",
    tags: ["branding"],
    links: [{ label: "Live", href: "https://nextgem.gia.edu/" }],
  },
  {
    id: "gemtrip",
    kind: "Product Development",
    title: "GIA GemTrip — educator portal",
    stack: ["Salesforce"],
    image: "/assets/img/works/gemtrip.jpg",
    tags: ["branding"],
    links: [{ label: "Live", href: "https://gemkidseducators.gia.edu/s/login/" }],
  },
  {
    id: "collective",
    kind: "Product Development",
    title: "GIA Collective — alumni community",
    stack: ["Salesforce", "Apex", "Lightning"],
    image: "/assets/img/works/collective.jpg",
    tags: ["branding"],
    links: [{ label: "Live", href: "https://collective.gia.edu/collective/s/" }],
  },
  {
    id: "noontime-concerts",
    kind: "Web Development",
    title: "Noontime Concerts — live streaming and memberships",
    stack: [
      "WordPress",
      "Divi",
      "Stripe",
      "Vimeo API",
      "Restrict Content Pro",
      "Easy Digital Downloads",
    ],
    image: "/assets/img/works/noontime-concerts.jpg",
    tags: ["branding"],
    links: [
      { label: "Live", href: "https://www.noontimeconcerts.org/" },
      {
        label: "Case study",
        href: "https://www.pixelculture.org/portfolio/noontime-concerts",
      },
    ],
  },
  {
    id: "healthy-work",
    kind: "Web Development",
    title: "Healthy Work Campaign — public health nonprofit",
    stack: ["WordPress", "Divi", "JavaScript"],
    image: "/assets/img/works/healthy-work.jpg",
    tags: ["branding"],
    links: [{ label: "Live", href: "https://www.healthywork.org/" }],
  },
  {
    id: "dod-site",
    kind: "Web Development",
    title: "Doctor on Demand — main site",
    stack: ["Vue.js", "Less", "AWS"],
    image: "/assets/img/works/dod-site.png",
    tags: ["branding", "vue", "angular"],
    links: [
      { label: "Live", href: "https://doctorondemand.com/" },
      { label: "Vue version", href: "https://beta.doctorondemand.com/" },
    ],
  },
  {
    id: "included-site",
    kind: "Web Development",
    title: "Included Health — main site",
    stack: ["WordPress", "JavaScript"],
    image: "/assets/img/works/included-site.png",
    tags: ["branding"],
    links: [{ label: "Live", href: "https://includedhealth.com/" }],
  },
  {
    id: "dod-dashboard",
    kind: "Web Development",
    title: "Doctor on Demand — member application",
    stack: ["Vue.js", "AngularJS"],
    image: "/assets/img/works/dashboard.png",
    tags: ["branding", "vue", "angular"],
    links: [
      {
        label: "Live",
        href: "https://patient.doctorondemand.com/patient/#/home",
      },
    ],
  },
  {
    id: "storyboardart",
    kind: "Web Development",
    title: "Storyboard Art application",
    stack: ["WordPress CMS"],
    image: "/assets/img/works/storyboardart.png",
    tags: ["branding", "angular"],
    links: [{ label: "Live", href: "https://storyboardart.org/" }],
  },
  {
    id: "pagination-search",
    kind: "Front-end Development",
    title: "Student profiles — search and pagination",
    stack: ["Vanilla JS", "JSON"],
    image: "/assets/img/works/pagination-search.png",
    tags: ["vanilla"],
    links: [
      {
        label: "Live",
        href: "https://loveclari.github.io/data-pagination-filtering/",
      },
      {
        label: "Code",
        href: "https://github.com/loveclari/data-pagination-filtering",
      },
    ],
  },
  {
    id: "interactive-form",
    kind: "Front-end Development",
    title: "Conference registration form",
    stack: ["Vanilla JS"],
    image: "/assets/img/works/conference-form.png",
    tags: ["vanilla"],
    links: [
      { label: "Live", href: "https://loveclari.github.io/interactive-form/" },
      { label: "Code", href: "https://github.com/loveclari/interactive-form" },
    ],
  },
  {
    id: "dod-registrations",
    kind: "Web Development",
    title: "Doctor on Demand — enterprise registrations",
    stack: ["AngularJS", "Vue.js"],
    image: "/assets/img/works/registrations.png",
    tags: ["branding", "angular"],
    links: [
      {
        label: "Live",
        href: "https://patient.doctorondemand.com/register/?partner=walmart-care",
      },
    ],
  },
  {
    id: "ih-payments",
    kind: "Web Development",
    title: "Included Health — payments API",
    stack: ["React", "GraphQL", "Bootstrap", "Braintree API"],
    image: "/assets/img/works/payment.png",
    tags: ["react"],
    links: [{ label: "Live", href: "https://app.grandrounds.com/" }],
  },
  {
    id: "email-ih",
    kind: "Email Development",
    title: "Doctor on Demand — Marketing Cloud member emails",
    stack: ["AMPscript", "HTML", "CSS", "Salesforce Marketing Cloud"],
    image: "/assets/img/works/email-ih.png",
    tags: [],
    links: [
      {
        label: "View in browser",
        href: "https://view.ex.doctorondemand.com/?qs=698ae75d0676412cc55e27069fa97946e329c91a7c7c4dac9ab3376fc4fcee702687eb7b319be32ff0da75e2dc743c82edd2408605d29204cea55fb5671ffec21323885220cc1bb8ab0e8574a9622ae9",
      },
    ],
  },
  {
    id: "email-dod",
    kind: "Email Development",
    title: "Doctor on Demand — Marketing Cloud visit follow-up",
    stack: ["AMPscript", "HTML", "CSS", "Salesforce Marketing Cloud"],
    image: "/assets/img/works/email-dod.png",
    tags: [],
    links: [
      {
        label: "View in browser",
        href: "https://view.ex.doctorondemand.com/?qs=312d7a0611be99d49a547fe4d32081f1eb4a101ef1ca9b6c32882960a7bfaffe57ffaca28d50d632934e1bf9a8e6fd95d4b38ae9c0c8a3792fdb0a0c4948e70dccc135cb83ee7a7f9e19068bcb777726",
      },
    ],
  },
  {
    id: "weather-app",
    kind: "Web Development",
    title: "Weather API — personal project",
    stack: ["JavaScript", "Node.js", "Express.js"],
    image: "/assets/img/works/weather.png",
    tags: ["vanilla"],
    links: [
      { label: "Code", href: "https://github.com/loveclari/weather-app" },
    ],
  },
];
