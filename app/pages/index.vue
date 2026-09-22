<script setup lang="ts">
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Clarissa Celestino — Full-stack Developer",
  description:
    "Full-stack developer in the San Francisco Bay Area building fast, accessible interfaces and the APIs, auth, and payments behind them.",
});

const featured = projects.slice(0, 3);
</script>

<template>
  <div>
    <section class="hero">
      <HeroBackdrop />

      <div class="shell hero__grid hero__grid--solo">
        <div>
          <p class="hero__greeting">Hi, I'm</p>
          <h1 class="hero__name">Clarissa<span class="dot">.</span></h1>

          <p class="hero__role">
            I'm a
            <TypedText
              :phrases="[
                'Front-end Developer.',
                'Full-stack Developer.',
                'Web Designer.',
                'Web Consultant.',
                'Email Developer.',
              ]"
            />
          </p>

          <p class="hero__blurb">
            I'm a <strong>full-stack developer</strong> passionate about
            building great user experiences — from the interface down to the
            APIs, auth, and payments behind it.
          </p>

          <div class="hero__actions">
            <NuxtLink to="/projects" class="btn btn--primary">
              My projects
            </NuxtLink>
            <NuxtLink to="/about" class="btn btn--ghost">About me</NuxtLink>
          </div>
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
