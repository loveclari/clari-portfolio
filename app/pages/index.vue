<script setup lang="ts">
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Clarissa Celestino — Front-end Developer",
  description:
    "Front-end developer in the San Francisco Bay Area building fast, accessible interfaces with Vue, React, and modern JavaScript.",
});

const featured = projects.slice(0, 3);
</script>

<template>
  <div>
    <section class="hero">
      <div class="shell hero__grid">
        <div>
          <p class="hero__greeting">Hi, I'm</p>
          <h1 class="hero__name">Clarissa<span class="dot">.</span></h1>

          <p class="hero__role">
            I'm a
            <TypedText
              :phrases="[
                'Front-end Developer.',
                'Web Designer.',
                'Web Consultant.',
                'Email Developer.',
              ]"
            />
          </p>

          <p class="hero__blurb">
            I'm a <strong>front-end developer</strong> passionate about building
            great user experiences, using JavaScript frameworks with SPAs and
            JAMstack sites.
          </p>

          <div class="hero__actions">
            <NuxtLink to="/projects" class="btn btn--primary">
              My projects
            </NuxtLink>
            <NuxtLink to="/about" class="btn btn--ghost">About me</NuxtLink>
          </div>
        </div>

        <div class="hero__portrait">
          <img
            src="/assets/img/hero/clari-dev.png"
            alt="Illustration of Clarissa at work"
            width="600"
            height="600"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <p class="eyebrow">Selected work</p>
        <h2 class="section-title">A few recent builds<span class="dot">.</span></h2>
        <p class="section-lede">
          Health-tech products, marketing sites, and personal experiments.
        </p>

        <ul class="work-grid" style="margin-top: 3rem">
          <li v-for="project in featured" :key="project.id">
            <WorkCard :project="project" />
          </li>
        </ul>

        <div class="hero__actions">
          <NuxtLink to="/projects" class="btn btn--ghost">
            See all projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
