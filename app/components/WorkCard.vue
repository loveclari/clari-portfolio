<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{ project: Project; headingLevel?: "h2" | "h3" }>();
</script>

<template>
  <article class="work">
    <div class="work__media">
      <img
        :src="project.image"
        :alt="`Screenshot of ${project.title}`"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="work__body">
      <p class="work__kind">{{ project.kind }}</p>
      <component :is="headingLevel ?? 'h3'" class="work__title">
        {{ project.title }}
      </component>

      <p class="work__stack">{{ project.stack.join(" · ") }}</p>

      <div v-if="project.links.length" class="work__links">
        <a
          v-for="link in project.links"
          :key="link.href"
          class="work__link"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
          <span class="visually-hidden">(opens in a new tab)</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
