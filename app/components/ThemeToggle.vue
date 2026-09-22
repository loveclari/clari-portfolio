<script setup lang="ts">
const { theme, toggle } = useTheme();

const label = computed(() =>
  theme.value === "dark" ? "Switch to day theme" : "Switch to night theme",
);
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <svg
      v-if="theme === 'dark'"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.5 3.5A8.5 8.5 0 1 0 20.5 14.5 7 7 0 0 1 15.5 3.5Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>
