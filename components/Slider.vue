<template>
  <div class="slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="require('~/assets/' + currentImg)" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "images/Spik&Span.jpg",
        "images/Ravenpoint.jpg",
        "images/Cheaux.jpg",
        "images/devriendendienst.jpg",
        "images/Hilsani.jpg",
        "images/RavenpointPodcast.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },



  methods: {
   
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  // transition: all 0.9s ease;
  // overflow: hidden;
  visibility: hidden;
  // position: absolute;
  width:100%;
  opacity: 1;
  // top: 14%;
  // left: 0;

}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:500px;
  width: 500px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>