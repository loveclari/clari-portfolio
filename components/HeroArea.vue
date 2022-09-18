<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">Hi! I'm</span>
            <h1>Clarissa<span class="dot">.</span></h1>
            <div>
              I'm a
              <div id="typed-strings">
              <!-- Animated Text Writer -->
              <span>Front-end Developer</span>
              <span>Web Designer.</span>
              <span>Web Consultant.</span>
              <span>Email Developer.</span>
            </div>
            <span class="LR-C" id="typed" style="white-space:pre;"></span>
            </div>
            <p>
              I am a <strong>Front-end developer</strong> passionate about building great user experiences, using Javascript frameworks with SPA's and JAMstack sites.
            </p>
            <a href="/projects" class="btn radius-btn">My projects</a>
            <a href="about" class="btn radius-btn">About me</a>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img images">
            <img data-v-089ada0c class="bottom-image" src="assets/img/hero/clari-dev.png" alt="Hero image" />
            <img class="top-image" src="https://d3b1ak9ylguumf.cloudfront.net/stencil/public/static/images/wave-blob.svg?h=b9d69d25&v=2020-08-19.00"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <div class="hero-shape custom-animation">
      <img src="assets/img/hero/hero-shape.png" alt="animation shape" />   
    </div>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
export default {
  name: "HeroArea"
};
</script>
