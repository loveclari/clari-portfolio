<script setup lang="ts">
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/emails", label: "Emails" },
];

const open = ref(false);
const stuck = ref(false);
const isMobile = ref(false);

const route = useRoute();
watch(() => route.path, () => (open.value = false));

let mq: MediaQueryList | undefined;
const syncViewport = (event: MediaQueryList | MediaQueryListEvent) => {
  isMobile.value = event.matches;
  if (!event.matches) open.value = false;
};

const onScroll = () => {
  stuck.value = window.scrollY > 8;
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") open.value = false;
};

onMounted(() => {
  mq = window.matchMedia("(max-width: 720px)");
  syncViewport(mq);
  mq.addEventListener("change", syncViewport);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
  onScroll();
});

onBeforeUnmount(() => {
  mq?.removeEventListener("change", syncViewport);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <header class="nav" :data-stuck="stuck">
    <div class="shell nav__inner">
      <NuxtLink to="/" class="nav__brand">
        <span class="nav__mark" aria-hidden="true">C</span>
        Clarissa Celestino
      </NuxtLink>

      <button
        class="nav__toggle"
        type="button"
        aria-controls="primary-nav"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span class="visually-hidden">{{ open ? "Close" : "Open" }} menu</span>
        <span class="nav__toggle-bars" aria-hidden="true" />
      </button>

      <nav aria-label="Primary">
        <ul id="primary-nav" class="nav__links" :hidden="isMobile && !open">
          <li v-for="link in links" :key="link.to">
            <NuxtLink class="nav__link" :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
