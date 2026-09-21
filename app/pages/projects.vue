<script setup lang="ts">
import { projects, projectFilters } from "~/data/projects";

useSeoMeta({
  title: "Projects — Clarissa Celestino",
  description:
    "Web and front-end development work by Clarissa Celestino, including Doctor on Demand, Included Health, and personal projects.",
});
</script>

<template>
  <section class="section">
    <div class="shell">
      <p class="eyebrow">Portfolio</p>
      <h1 class="section-title">Projects<span class="dot">.</span></h1>
      <p class="section-lede" style="margin-bottom: 3rem">
        Production work in health tech alongside personal builds — filter by the
        tools involved.
      </p>

      <WorkGallery :items="projects" :filters="projectFilters" />
    </div>
  </section>
</template>
