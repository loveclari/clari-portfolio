<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    phrases: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    holdTime?: number;
  }>(),
  { typeSpeed: 85, deleteSpeed: 40, holdTime: 1700 },
);

// Rendered on the server too, so the phrase is present without JS.
const displayed = ref(props.phrases[0] ?? "");
let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let phraseIndex = 0;
  let charIndex = displayed.value.length;
  let deleting = true;

  const tick = () => {
    const phrase = props.phrases[phraseIndex] ?? "";
    charIndex += deleting ? -1 : 1;
    displayed.value = phrase.slice(0, charIndex);

    let delay = deleting ? props.deleteSpeed : props.typeSpeed;

    if (!deleting && charIndex >= phrase.length) {
      deleting = true;
      delay = props.holdTime;
    } else if (deleting && charIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % props.phrases.length;
      delay = props.typeSpeed * 2;
    }

    timer = setTimeout(tick, delay);
  };

  timer = setTimeout(tick, props.holdTime);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <span>
    <!-- Screen readers get the full list once instead of every keystroke. -->
    <span class="visually-hidden">{{ phrases.join(", ") }}</span>
    <span aria-hidden="true"
      ><span class="hero__typed">{{ displayed }}</span
      ><span class="hero__caret"
    /></span>
  </span>
</template>
