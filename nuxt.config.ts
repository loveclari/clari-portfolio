// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-09-01",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Clarissa Celestino — Front-end Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Clarissa Celestino is a front-end developer in the San Francisco Bay Area building fast, accessible interfaces with Vue, React, and modern JavaScript.",
        },
        { name: "theme-color", content: "#12100e" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Clarissa Celestino — Front-end Developer",
        },
        {
          property: "og:description",
          content:
            "Front-end developer in the San Francisco Bay Area building fast, accessible interfaces.",
        },
        { property: "og:image", content: "/assets/img/hero/clari-dev.png" },
        { name: "twitter:card", content: "summary_large_image" },
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
