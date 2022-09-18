<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue paragraph" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="img-about">
            <img
              class="img-fluid"
              src="https://main.d1pwntsldwf3qc.amplifyapp.com/assets/img/about/me.png"
              alt="abou me"
            />
            <div data-v-2520de62="" class="profile__wrapper">
              <ul data-v-2520de62="" class="profile__links" style="transform: translate(-10px, -35px);">
                <li data-v-2520de62="" class="profile__link"><a data-v-2520de62="" href="https://www.linkedin.com/in/clarissacelestino/" target="_blank" rel="noopener" aria-label="Go to linkedin" class="profile__a"><i class="fa-brands fa-linkedin"></i></a></li>
                <li data-v-2520de62="" class="profile__link"><a data-v-2520de62="" href="https://twitter.com/youloveclarissa" target="_blank" rel="noopener" aria-label="Go to twitter" class="profile__a"><i class="fa-brands fa-twitter"></i></a></li>
                <li data-v-2520de62="" class="profile__link"><a data-v-2520de62="" href="https://github.com/loveclari" target="_blank" rel="noopener" aria-label="Go to github" class="profile__a"><i class="fa-brands fa-github"></i></a></li>
                <li data-v-2520de62="" class="profile__link"><a data-v-2520de62="" href="https://codepen.io/clarissaacelestino" target="_blank" rel="noopener" aria-label="Go to codepen" class="profile__a"><i class="fa-brands fa-codepen"></i></a></li></ul></div>
          </div>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div  class="about-details paragraph-scroll bounce">
            <div class="section-title mb-50">
              <h2>About Me<span class="dot">.</span></h2>
            </div>
            <p>
             My name is Clarissa Celestino, I am a front-end developer based in the San Francisco Bay Area.
             I am originally from Brazil and am fluent in both Portuguese and English and working proficiency in Spanish. I have worked mostly in the Health tech space for companies 
             such as Doctor On Demand, Doctorbase and most recently Included Health.
            </p>
            <div class="download-btn mt-5">
              <!-- <a class="download-link" data-v-57a6e264="" href="https://main.d1pwntsldwf3qc.amplifyapp.com/about/static/assets/CLARISSA-DEVELOPER.pdfstatic/assets/CLARISSA-DEVELOPER.pdf" target="_blank" rel="noopener">Download Resume <svg data-v-4ddcbc6a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                class="link__arrow"><path data-v-4ddcbc6a="" d="M14.29,5.71L14.29,5.71c-0.39,0.39-0.39,1.02,0,1.41L18.17,11H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h15.18l-3.88,3.88 c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0l5.59-5.59c0.39-0.39,0.39-1.02,0-1.41L15.7,5.71 C15.32,5.32,14.68,5.32,14.29,5.71z"></path></svg></a> -->
              <a class="btn radius-btn" href="https://main.d1pwntsldwf3qc.amplifyapp.com/static/assets/CLARISSA-DEVELOPER.pdf" download>Download Resume</a>
            </div>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>


    <div class="container creative">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="second-img">
            <img
              class="img-art"
              src="/assets/img/about/drawing.svg"
              alt="about me"
            />
          </div>
          <!-- End About Area Image -->
        </div>

        <!---first steps-->

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div  class="about-details">
            <div class="section-start mb-50">
              <h2>The creative<span class="dot">.</span></h2>
            </div>
            <p> I have always been a creative person. As a child I spent hours drawing, painting and creating, this was my happy medium. 
              As I grew older I transfered this talent to a digital medium. I wanted more than to see what I created on a paper, now I wanted to see 
              my creations on a web page. I decided to become a Web Developer and like my drawings, I grew this as a passion and a hobby.
            </p>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>

    <!---- Career-->

    <div class="container other">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div  class="about-details">
            <div class="section-career mb-50">
              <h2>The professional<span class="dot">.</span></h2>
            </div>
            <p> My first job as a front-end developer started in 2017</p>
              <p>At Doctor On Demand I was working with
              Single Page Applications(SPA), We started with AngularJS, soon followed by Vue.js.</p> 
              <p>I have also worked with JAMstack sites built with Nuxt.js (Vue.js), Contentful, Gatsby 
              and many other content management systems (CMS). I have also deployed websites with AWS Amplify and Netfly.</p>
              <p>Most recently I have been working with React.js and API's.</p>
              <p>As a Front-end Developer I learned to be flexible with my tools and always look
              for the best tool for the project at hand.
            </p>
          </div>
          <!-- End About Detail -->
        </div>

        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="second-img">
            <img
              class="img-art"
              src="/assets/img/about/professional.svg"
              alt="about me"
            />
          </div>
          <!-- End About Area Image -->
        </div>

      </div>
    </div>

    <!---end of sections-->
  </section>
  <!-- About Area End -->
  
  
</template>

<script>
export default {
  name: "AboutArea"
};
</script>
