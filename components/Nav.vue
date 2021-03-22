<template>
  <div class="navigation">
    <div
      :class="{ hide: sideNavIsActive }"
      class="hamburger"
      @click="activate()"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>

    <nav @click="close()" :class="{ active: sideNavIsActive }" class="sidenav">
      <g-link to="/home#about">About</g-link>
      <g-link to="/home#work">Work</g-link>
      <g-link to="/home#contact">Contact</g-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      sideNavIsActive: false,
    };
  },
  methods: {
    activate() {
      this.sideNavIsActive = true;
    },
    close() {
      this.sideNavIsActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/mediaQueries.scss";

@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidenav {
  @include center;
  width: 0;
  height: 50px;
  // padding: 0 2rem;
  background: #ffc7c7;
  z-index: 33;
  box-shadow: 2px -3px white, 7px -7px #0073b6;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 0;
  overflow-x: hidden;
  transition: 0.7s;
  z-index: 1;

  a {
    padding: 0 4rem;
    font-size: 1.5rem;
    font-family: "bahnschrift";
    cursor: pointer;
      @include for-phone-only {
    padding: 0 2rem;
  }
  }
}

.active {
  width: 600px;
  @include for-phone-only {
    max-width: 400px;
  }
}

.hamburger {
  cursor: pointer;
  position: fixed;
  right: 5%;
  top: 2rem;
  z-index: 0;
  height: 50px;
  @include center;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    width: 35px;
    height: 5px;
    &:nth-child(1) {
      background: #ffc7c7;
    }
    &:nth-child(2) {
      background: #ffd700;
    }

    &:nth-child(3) {
      background: #0073b6;
    }
  }
}
.hide {
  display: none;
  transition: 0.7s;
}

// <style lang="scss" > @mixin center() {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
</style>
