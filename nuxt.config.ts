// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-09-01",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Clarissa Celestino — Full-stack Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Clarissa Celestino is a full-stack developer in the San Francisco Bay Area building fast, accessible interfaces and the APIs, auth, and payments behind them.",
        },
        { name: "theme-color", content: "#12100e" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Clarissa Celestino — Full-stack Developer",
        },
        {
          property: "og:description",
          content:
            "Full-stack developer in the San Francisco Bay Area building fast, accessible products end to end.",
        },
        {
          property: "og:url",
          content: "https://www.clarissacelestino.dev",
        },
        {
          property: "og:image",
          content: "https://www.clarissacelestino.dev/og.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content:
            "Clarissa Celestino, full-stack developer in the San Francisco Bay Area, with the Golden Gate Bridge drawn in lights",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://www.clarissacelestino.dev/og.jpg",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    },
  },

  // Self-hosted via @nuxt/fonts, so no render-blocking request to Google.
  fonts: {
    families: [
      { name: "Bricolage Grotesque", provider: "google" },
      { name: "Inter", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
    ],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
