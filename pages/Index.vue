<template>
  <Layout>
    <div class="banner">
      <h1>Daan Van de Verre</h1>
      <div class="figures">
        <div class="bigS"></div>
        <div class="fillS"></div>
        <div class="lineS"></div>
      </div>
      <div class="hamburger"></div>
    </div>
    <section class="about" id="about">
      <div class="about_image">
        <div class="about_image_container">
          <img src="@/assets/images/daan.jpg" alt="">
        </div>
      </div>
      <div class="content">
        <div class="circle"></div>
        <div class="outlineCircle"></div>
        <div class="content_title">
          <h2>About</h2>
        </div>
        <div class="content_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            facilis, at tenetur commodi, eius eum iure amet minima veritatis
            eaque reprehenderit dolores itaque recusandae! Maiores cum vel, hic
            explicabo laudantium voluptates nulla repudiandae deserunt voluptate
            libero fuga asperiores iure dolor! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Delectus facilis, at tenetur commodi,
            eius eum iure amet minima veritatis eaque reprehenderit dolores
            itaque recusandae! Maiores cum vel, hic explicabo laudantium
            voluptates nulla repudiandae deserunt voluptate libero fuga
            asperiores iure dolor!
          </p>
        </div>
      </div>
    </section>
    <section class="work" id="work">
      <div class="content_title">
        <div class="triangle"></div>
        <div class="outlineTriangle"></div>
        <h3>Work</h3>
      </div>
      <div class="logos">
        <div v-for="image in workImages" :key="image" class="logo">
          <img class="logo_image" :src="require('~/assets/' + image)" alt="" />
        </div>
      </div>
   
    </section>
  </Layout>
</template>
<script>
import Layout from "~/layouts/Default.vue";

export default {
  metaInfo: "home",
  components: {
    Layout,
  },
  data() {
    return {
      workImages: [
        "images/Spik&Span.jpg",
        "images/Ravenpoint.jpg",
        "images/Cheaux.jpg",
        "images/devriendendienst.jpg",
        "images/Hilsani.jpg",
        "images/RavenpointPodcast.jpg"
      ],
    };
  },
};
</script>

<style lang="scss">
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  @include center;
  height: 100vh;
  max-width: 1200px;
  margin: auto;

  h1 {
    color: #707070;
    margin-right: auto;
    font-size: 3rem;
    margin-left: 1rem;
  }
  .figures {
    position: relative;
    width: 600px;
    @include center;

    .bigS {
      width: 300px;
      height: 300px;
      background: #ffd700;
      margin: auto;
    }

    .lineS {
      width: 600px;
      height: 70px;
      position: absolute;
      background: transparent;
      border: 2.5px solid #ffd700;
      top: 5rem;
      right: 0;
      z-index: 0;
    }
    .fillS {
      width: 500px;
      height: 70px;
      position: absolute;
      background: #0073b6;
      top: 6rem;
      z-index: 1;
    }

   
  }
}
.about {
  &_image {
    @include center;
    position: relative;
    width: 30%;

    &_container {
      width: 400px;
      margin-top: 4rem;
      img{
      width: 100%;

      object-fit: contain;
      z-index: 1;
          position: relative;
    margin-top: auto;
      margin-right: auto;
      box-shadow: 7px -7px 0 white, 10px -10px 0 black;
      }
     
    }
    // &_outline {
    //   width: 400px;
    //   height: 100%;
    //   // padding: 0 2rem;
    //   background: transparent;
    //   border: 2.5px solid black;
    //   position: absolute;
    //   z-index: 0;
    //   bottom: 2rem;
    //   right:0;
    // }
  }
  .content {
    @include center;
    position: relative;
    justify-content: space-around;
    flex-direction: column;
    height: 70%;
    width: 50%;

    text-align: left;

    h2 {
      margin-right: auto;
    }

    &_text {
      max-width: 50ch;
      margin-right: auto;
    }
    .circle,
    .outlineCircle {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 100px;
      top: 0;
      z-index: 1;
    }
    .circle {
      background: #ffc7c7;
      right: 2rem;
    }
    .outlineCircle {
      background: transparent;
      border: 2.5px solid #0073b6;
      top: 2rem;
      right: 0;
      z-index: 0;
    }
  }
}
.work {

  .content_title {
    position: relative;

    .triangle {
      position: absolute;
      z-index: 1;
      width: 0;
      height: 0;
      border-top: 150px solid transparent;
      border-right: 200px solid #0073b6;
      border-bottom: 100px solid transparent;
    }
    .outlineTriangle {
      position: absolute;
      width: 2.5px;
      background: #ffd700;
      height: 250px;
      right: 4rem;
      z-index: 0;
      &::after {
        content: "";
        position: absolute;
        width: 2px;
        background: #ffd700;
        height: 250px;
        right: 4rem;
        z-index: 0;
        right: 5.5rem;
        top: -2.3rem;
        transform: rotate(45deg);
      }
      &::before {
        content: "";
        position: absolute;
        width: 2.5px;
        background: #ffd700;
        height: 200px;
        z-index: 0;
        left: -4.7rem;
        bottom: -2.4rem;
        transform: rotate(-50deg);
      }
    }
  }
  .logos {
    @include center;
    flex-wrap: wrap;
    width: 500px;
     overflow: scroll;
     overflow-x:hidden ;
     height: 500px;
touch-action: pan-up;
    .logo {
        @include center;
    flex-wrap: wrap;
      &_image {
        flex: 1 1 500px;
        width: 500px;
        height: 500px;
        object-fit: scale-down;
        object-position: center;
      }
    }
  }
}
</style>
.tech-slideshow {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.tech-slideshow > div {
  height: 200px;
  width: 2526px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/collage.jpg);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.tech-slideshow .mover-1 {
  animation: moveSlideshow 12s linear infinite;
}
.tech-slideshow .mover-2 {
  opacity: 0;
  transition: opacity 0.5s ease-out;
  background-position: 0 -200px;
  animation: moveSlideshow 15s linear infinite;
}


@keyframes moveSlideshow {
  100% { 
    transform: translateX(-66.6666%);  
  }
}