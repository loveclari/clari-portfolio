<script setup lang="ts">
import { projects } from "~/data/projects";

const route = useRoute();
const project = projects.find((item) => item.id === route.params.id);

if (!project || !String(project.id).startsWith("email-")) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

useSeoMeta({
  title: `${project.title} — Clarissa Celestino`,
  description: project.title,
});
</script>

<template>
  <section class="section">
    <div class="shell email-view">
      <NuxtLink to="/projects" class="email-view__back">
        Back to projects
      </NuxtLink>
      <p class="work__kind">{{ project.kind }}</p>
      <h1 class="section-title">
        {{ project.title }}<span class="dot">.</span>
      </h1>
      <img
        class="email-view__image"
        :src="project.image"
        :alt="`Full email from ${project.title}`"
      />
    </div>
  </section>
</template>
