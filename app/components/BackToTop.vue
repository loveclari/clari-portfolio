<script setup lang="ts">
// Replaces jquery.scrollUp.
const visible = ref(false);

const onScroll = () => {
  visible.value = window.scrollY > 300;
};

const toTop = () => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <button
    class="to-top"
    type="button"
    :data-visible="visible"
    :tabindex="visible ? 0 : -1"
    @click="toTop"
  >
    <span class="visually-hidden">Back to top</span>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
</template>
