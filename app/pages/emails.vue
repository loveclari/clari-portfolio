<script setup lang="ts">
import { emailProjects } from "~/data/projects";

useSeoMeta({
  title: "Email Development — Clarissa Celestino",
  description:
    "Responsive HTML email and AMPscript work built in Salesforce Marketing Cloud for Doctor on Demand and Included Health.",
});
</script>

<template>
  <section class="section">
    <div class="shell">
      <p class="eyebrow">Portfolio</p>
      <h1 class="section-title">Email Development<span class="dot">.</span></h1>
      <p class="section-lede" style="margin-bottom: 3rem">
        Responsive HTML email and AMPscript templates built in Salesforce
        Marketing Cloud.
      </p>

      <WorkGallery :items="emailProjects" />
    </div>
  </section>
</template>
