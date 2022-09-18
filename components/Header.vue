<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent">
      <div class="main-header header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-10 col-lg-10 col-md-10">
              <!-- Main-menu -->
              <div class="main-menu d-block .d-sm-none .d-md-none">
                <nav>
                  <ul id="navigation">
                    <li class="nav-item">
                      <a class="nav-link transition" href="/">
                        Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="/about">About</a>
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link transition" href="#resume">Resume</a>
                    </li> -->
                    <li class="nav-item">
                      <a class="nav-link transition" href="/projects">Projects</a>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
            <!-- Mobile Menu -->
            <!-- <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "Header"
};
</script>
