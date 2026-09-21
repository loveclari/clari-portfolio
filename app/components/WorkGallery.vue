<script setup lang="ts">
import type { Project, ProjectTag } from "~/data/projects";

const props = defineProps<{
  items: Project[];
  filters?: { value: ProjectTag | "all"; label: string }[];
}>();

// Replaces the old Isotope filter: plain reactive state, no layout library.
const active = ref<ProjectTag | "all">("all");

const visible = computed(() =>
  active.value === "all"
    ? props.items
    : props.items.filter((item) => item.tags.includes(active.value as ProjectTag)),
);
</script>

<template>
  <div>
    <div v-if="filters?.length">
      <div class="filter" role="group" aria-label="Filter projects by technology">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="filter__btn"
          type="button"
          :aria-pressed="active === filter.value"
          @click="active = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <p class="filter__count" role="status">
        {{ visible.length }}
        {{ visible.length === 1 ? "project" : "projects" }}
      </p>
    </div>

    <ul class="work-grid">
      <li v-for="project in visible" :key="project.id">
        <WorkCard :project="project" />
      </li>
    </ul>
  </div>
</template>
