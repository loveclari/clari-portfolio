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
        <span class="nav__mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M21.8 9.6C20.2 8 17.8 7.1 15.2 7.1 10.4 7.1 7.2 10.6 7.2 16s3.2 8.9 8 8.9c2.6 0 5-.9 6.6-2.5"
              stroke="currentColor"
              stroke-width="3.1"
              stroke-linecap="round"
            />
            <!-- Messina, NE -->
            <circle cx="22.4" cy="8.6" r="2.55" fill="currentColor" />
            <!-- Passero, SE -->
            <circle cx="22.4" cy="23.4" r="2.55" fill="currentColor" />
            <!-- Trapani, W -->
            <circle cx="6.7" cy="16" r="2.55" fill="currentColor" />
          </svg>
        </span>
        Clarissa Celestino
      </NuxtLink>

      <div class="nav__end">
        <nav aria-label="Primary">
          <ul id="primary-nav" class="nav__links" :hidden="isMobile && !open">
            <li v-for="link in links" :key="link.to">
              <NuxtLink class="nav__link" :to="link.to">{{
                link.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <ClientOnly>
          <ThemeToggle />
          <template #fallback>
            <span class="theme-toggle" aria-hidden="true" />
          </template>
        </ClientOnly>

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
      </div>
    </div>
  </header>
</template>
