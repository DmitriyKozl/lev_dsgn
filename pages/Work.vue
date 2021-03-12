<template>
  <div class="work" id="work">
    <div class="togglenav">
      <div @click="logoToggle" class="logoTypes"><a>Logotypes</a></div>
    </div>
    <section v-if="logo" class="logo_container">
      <div v-for="image in workImages" :key="image" class="logos">
        <g-image
          :src="require('!!assets-loader!~/assets/images/' + image)"
          class="logo"
        ></g-image> 
      </div>
    </section>
    <section v-if="template" class="template_container">
      <div v-for="template in templates" :key="template.id" class="templates">
        <g-image
          :src="require('!!assets-loader!~/assets/images/' + template.src)"
          class="template"
        ></g-image>
        <a href="~/assets/images/ResumeTemplate.pdf">Download pdf</a>
      </div>
    </section>
    <footer>
   <g-link to="/home#about"> <span class="left" >&#9664;</span>  About </g-link>
      <g-link to="/home#contact"
        >Contact <span class="right">&#9654;</span></g-link
      >
    </footer>
  </div>
</template>
<script>

export default {
  data() {
    return {
      logo: true,
      template: false,
      workImages: [
        "Spik&Span.jpg",
        "Ravenpoint.jpg",
        "Cheaux.jpg",
        "devriendendienst.jpg",
        "Hilsani.jpg",
        "RavenpointPodcast.jpg",
      ],
      templates: [
        { id: 1, src: "ResumeTemplate.jpg" },
        { id: 2, src: "ResumeTemplate.jpg" },
        { id: 3, src: "ResumeTemplate.jpg" },
      ],
    };
  },

  methods: {
    logoToggle() {
      this.logo = true;
      this.template = false;
    },
    templateToggle() {
      this.template = true;
      this.logo = false;
    },
  },
};
</script>

<style lang="scss" scoped>
html {
  overflow: visible;
  height: 100%;
}
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.work {
  @include center();
  height: 100vh;
  flex-direction: column;
  background-image: url("../assets/images/lines.png");
  background-size: contain;
  background-position: center;
  nav {
    margin: auto;
    @include center();
    flex-direction: column;
    justify-content: space-around;
    .logoTypes,
    .templateLink {
      margin: 3rem;
      cursor: pointer;
      a {
        padding: 1rem;
      }
    }
    .logoTypes {
      a {
        padding: 2rem;
        border: 5px solid #0073b6;
        background: rgba(255, 255, 255, 0.63);
      }
    }
    .templateLink {
      a {
        background: rgba(255, 255, 255, 0.63);
        padding: 2rem;
        border: 5px solid #ffc7c7;
        color: #0073b6;
      }
    }
  }
  .togglenav {
    margin: auto;
    @include center();
    .logoTypes,
    .templateLink {
      margin: 1rem;
      @include center();

      cursor: pointer;
      a {
        padding: 1rem;
      }
    }
    .logoTypes {
      a {
        padding: 1rem;
        border-bottom: 5px solid #0073b6;
      }
    }
    .templateLink {
      a {
        padding: 1rem;
        border-bottom: 5px solid #ffc7c7;
      }
    }
  }
  .logo_container,
  .template_container {
    // display: none;
    // flex-direction: column;
    @include center;
    flex-wrap: wrap;
    flex: 1 0 200px;
    padding-bottom: 4rem;
    padding-top: 0;

    .logos,
    .templates {
      width: 300px;
      height: 300px;
      margin: 1rem;
      @include center;
      .logo,
      .template {
        width: 75%;
        height: 75%;
        object-fit: contain;
      }
    }
    .templates {
      flex-direction: column;
      justify-content: space-around;
    }
  }
  footer {
    width: 100%;
    @include center;
    // margin: 2rem 0;
    justify-content: space-between;
    a {
      padding: 1rem;

      span {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
