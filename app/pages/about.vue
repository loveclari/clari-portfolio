<script setup lang="ts">
useSeoMeta({
  title: "About — Clarissa Celestino",
  description:
    "Clarissa Celestino is a full-stack developer in the San Francisco Bay Area, originally from Brazil, with a background in health-tech products.",
});

const stack = [
  "Vue.js",
  "Nuxt",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML & CSS",
  "GraphQL",
  "Supabase",
  "Stripe",
  "Shopify",
  "Salesforce",
  "WordPress",
  "AMPscript",
  "Vercel",
  "AWS Amplify",
];
</script>

<template>
  <div>
    <section class="section">
      <div class="shell about-hero">
        <div class="about-portrait">
          <img
            src="/assets/img/about/clarissa-portrait.jpg"
            alt="Portrait of Clarissa Celestino"
            width="576"
            height="1024"
          />
        </div>

        <div>
          <p class="eyebrow">About</p>
          <h1 class="section-title">About Me<span class="dot">.</span></h1>

          <div class="prose" style="margin-top: 1.25rem">
            <p>
              My name is Clarissa Celestino and I'm a
              <strong>full-stack developer</strong> based in the San Francisco
              Bay Area. I'm originally from Brazil, fluent in Portuguese and
              English, with working proficiency in Spanish and conversational
              Italian.
            </p>
            <p>
              I've spent over a decade building for the web, much of it in
              health tech at Doctorbase, Doctor On Demand, and Included Health.
              I'm currently a senior full-stack developer at
              <strong>GIA.edu</strong>, where I build Next.js applications,
              design REST and GraphQL APIs in Node.js, and run their Shopify
              e-commerce integrations.
            </p>
            <p>
              Along the way I've led payments work with Braintree, built
              registration flows for T-Mobile at Accenture, and developed the
              Shopify product page for Kim Kardashian's SKKN, which brought in
              $100M in its first year.
            </p>
          </div>

          <ul class="chip-row" style="margin-top: 1.75rem">
            <li v-for="item in stack" :key="item" class="chip">{{ item }}</li>
          </ul>

          <div class="hero__actions">
            <a
              class="btn btn--primary"
              href="/assets/Clarissa-Celestino-Resume.pdf"
              download
            >
              Download resume
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>

    <div class="shell">
      <section class="story">
        <div class="story__art">
          <img
            src="/assets/img/about/drawing.svg"
            alt=""
            width="380"
            height="300"
            loading="lazy"
          />
        </div>
        <div>
          <h2 class="story__title">The creative<span class="dot">.</span></h2>
          <div class="prose">
            <p>
              I have always been a creative person. As a child, I spent hours
              drawing, painting, and creating. This was my happy place.
            </p>
            <p>
              As I grew older, I transferred that talent to a digital medium. I
              wanted more than to see what I created on paper — now I wanted to
              see my creations on a web page.
            </p>
            <p>
              I decided to become a web developer and, like my drawings, I grew
              this as a passion and a hobby.
            </p>
          </div>
        </div>
      </section>

      <section class="story story--flip">
        <div class="story__art">
          <img
            src="/assets/img/about/desk.svg"
            alt=""
            width="380"
            height="300"
            loading="lazy"
          />
        </div>
        <div>
          <h2 class="story__title">
            The professional<span class="dot">.</span>
          </h2>
          <div class="prose">
            <p>
              I started out building single-page applications — AngularJS
              first, then Vue.js, and now React and Next.js. Interfaces are
              still where I'm happiest.
            </p>
            <p>
              Over time the work grew past the browser. These days I build the
              APIs, authentication, payments, and integrations that sit behind
              the interface — REST and GraphQL services in Node.js, Shopify
              and Braintree for commerce and payments, and AI features on top
              of the GPT-4 and Claude APIs.
            </p>
            <p>
              I've also built JAMstack sites with Nuxt, Contentful, and Gatsby,
              worked across WordPress and other content management systems, and
              deployed to Vercel, AWS Amplify, and Netlify.
            </p>
            <p>
              As a full-stack developer, I've learned to stay flexible with my
              tools and always look for the best one for the project.
            </p>
          </div>
        </div>
      </section>

      <section class="story">
        <div class="story__art">
          <img
            src="/assets/img/about/exercise.svg"
            alt=""
            width="420"
            height="320"
            loading="lazy"
          />
        </div>
        <div>
          <h2 class="story__title">The athlete<span class="dot">.</span></h2>
          <div class="prose">
            <p>
              I have a lot of hobbies, but the one I've always loved and kept as
              part of my regular life is working out and practicing physical
              activities.
            </p>
            <p>
              I recently ran a 5K race, which took me about two months to
              prepare for. I also enjoy boxing, jiu-jitsu, yoga, and dancing.
            </p>
            <p>
              Since I spend a lot of time in front of a computer, being active
              helps keep me healthy — but mostly I just truly enjoy movement.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
