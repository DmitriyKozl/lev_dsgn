<template>
  <button
    @click="activate"
    :class="{ active: isActive }"
    class="plane-send"
    type=""
  >
    <g-image
      class="material-icons"
      data-content="send"
      src="~/assets/images/telegram.png"
      alt=""
    >
    </g-image>
  </button>
</template>

<script>
export default {

  name: "Button",
  data: function() {
    return {
      isActive: false,
    };
  },

  methods: {
    activate() {
      return (this.isActive = true);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
}

@keyframes rotate-the-funk {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes shadow {
  0% {
    transform: scale(1) translate(-20%, -10%);
  }
  25% {
    transform: scale(0.5) translate(-20%, -10%);
  }
  50% {
    transform: scale(1) translate(-20%, -10%);
  }
  75% {
    transform: scale(0.5) translate(-20%, -10%);
  }
  100% {
    transform: scale(1) translate(-20%, -10%);
  }
}

button {
  width: 75px;
  height: 75px;
  display: grid;
  place-items: center;
  font-size: 2.85rem;
  background-color: transparent;
  border: 5px solid #0073b6;
  border-radius: 100px;
  position: absolute;
  right:30%;
  bottom: -3rem;
  overflow: hidden;
  transform: translate(-100%, -100%);
  transition: 1s border, 0.75s transform;
  outline: none;
  cursor: pointer;
  .material-icons {
    transform: rotate(360deg);
    position: relative;
    // padding: 1rem 1rem 1rem 1rem;
    transform-origin: top center;
    width: 75%;
    height: 75%;

    object-fit: contain;
    object-position: center;
    // object-fit: scale-down;
    @include center();

    &:before {
      content: attr(data-content);
      // position: absolute;
      color: #0073b6;
      left: 50%;
      bottom: 0;
      transform: scale(1) translate(-20%, -10%);
      z-index: -1;
      transform-origin: bottom center;
    }
  }
}
.active {
  transform: translate(-100%, calc(-100% + 2px));

  .material-icons {
    animation: rotate-the-funk 2.25s forwards;
    &:before {
      animation: shadow 2.25s forwards;
    }
  }
}
</style>
