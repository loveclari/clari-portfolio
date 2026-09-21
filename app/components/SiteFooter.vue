<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="shell footer__inner">
      <div>
        <p class="footer__note">
          &copy; {{ year }} Clarissa Celestino — Front-end developer, San
          Francisco Bay Area.
        </p>
        <p class="footer__built">Built with Nuxt &amp; Vue</p>
      </div>

      <SocialLinks />
    </div>
  </footer>
</template>
