<script setup lang="ts">
useSeoMeta({
  title: "About — Clarissa Celestino",
  description:
    "Clarissa Celestino is a front-end developer in the San Francisco Bay Area, originally from Brazil, with a background in health-tech products.",
});

const stack = [
  "Vue.js",
  "Nuxt",
  "React",
  "JavaScript",
  "TypeScript",
  "AngularJS",
  "HTML & CSS",
  "GraphQL",
  "AMPscript",
  "AWS Amplify",
  "Netlify",
];
</script>

<template>
  <div>
    <section class="section">
      <div class="shell about-hero">
        <div class="about-portrait">
          <img
            src="/assets/img/about/me.png"
            alt="Portrait of Clarissa Celestino"
            width="500"
            height="500"
          />
        </div>

        <div>
          <p class="eyebrow">About</p>
          <h1 class="section-title">About Me<span class="dot">.</span></h1>

          <div class="prose" style="margin-top: 1.25rem">
            <p>
              My name is Clarissa Celestino and I'm a
              <strong>front-end developer</strong> based in the San Francisco
              Bay Area. I'm originally from Brazil, fluent in Portuguese and
              English, with working proficiency in Spanish.
            </p>
            <p>
              I've worked mostly in the health-tech space, for companies such as
              Doctor On Demand, Doctorbase, and most recently Included Health.
            </p>
          </div>

          <ul class="chip-row" style="margin-top: 1.75rem">
            <li v-for="item in stack" :key="item" class="chip">{{ item }}</li>
          </ul>

          <div class="hero__actions">
            <a class="btn btn--primary" href="/assets/CLARISSA-SWE.pdf" download>
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
              As a developer I've worked mainly with single-page applications. I
              started with AngularJS, soon followed by Vue.js, and now React.
            </p>
            <p>
              I've also built JAMstack sites with Nuxt.js, Contentful, and
              Gatsby, along with many other content management systems, and
              deployed them with AWS Amplify and Netlify.
            </p>
            <p>
              Most recently I've been working with React.js and APIs. As a
              front-end developer, I've learned to stay flexible with my tools
              and always look for the best one for the project.
            </p>
          </div>
        </div>
      </section>

      <section class="story">
        <div class="story__art">
          <img
            src="/assets/img/about/exercise.svg"
            alt=""
            width="380"
            height="300"
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
