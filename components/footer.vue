<template>
  <div id="contact">
    <div class="Contactbanner">
      <Nav />
    </div>
    <section class="Mailcontainer">
      <div class="Contact_text">
        <div class="square"></div>
        <h4>Contact</h4>
        <p>
          Liked what you see or just want to have a good talk over a great cup
          of coffee? Please don’t hesitate to contact me.
        </p>
        <div class="lang">
          <div class="icon">
            <a href="https://www.linkedin.com/in/daan-van-de-verre-6a4206162/"
              >in</a
            >
          </div>
        </div>
      </div>
      <div class="form_container">
        <form class="form" @submit.prevent="sendEmail">
          <div class="form-content">
            <div class="form-content-name">
              <label class="label" for="name">Naam</label>
              <input
                type="text"
                name="name"
                id="name"
                required=""
                v-model="name"
              />
            </div>
            <div class="form-content-surname">
              <label class="label" for="surname">Voornaam</label>
              <input
                type="text"
                name="surname"
                id="surname"
                required=""
                v-model="surname"
              />
            </div>
          </div>
          <div class="form-email">
            <label class="label" for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required=""
              v-model="email.value"
            />
          </div>
          <div class="form-text">
            <label class="label" for="textarea">Bericht</label>
            <textarea
              class="message"
              name="message"
              id="textarea"
              required=""
              v-model="message.text"
            ></textarea>
          </div>
        <button type="submit" class="plane-send">
          <g-image
            class="material-icons"
            data-content="send"
            src="~/assets/images/telegram.png"
            alt=""
          >
          </g-image>
        </button>  </form>
      </div>
    </section>
    <!-- <footer>
      <h5>Made by Dmitriy S.</h5>
    </footer> -->
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";

import emailjs from "emailjs-com";

export default {
  components: {
    Nav,
  },
  name: "Footer",
  data: function() {
    return {
      name: "",
      surname: "",

      email: {
        value: "",
        valid: true,
      },

      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
    };
  },

  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_0thlfia",
          "template_q90aa9l",
          e.target,
          "user_nIRFuPFAc6aBya9B7x7iN"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      e.target.reset();
    },
  },
};
</script>

<style lang="scss">
@mixin center() {
  display: flex;
  justify-content: center;
}
.Contactbanner {
  @include center();
  justify-content: space-between;
  height: 100px;
  position: relative;
}
.Mailcontainer {
  position: relative;
  height: 75vh;
  max-width: 1200px;
  .Contact_text {
    position: relative;
    text-align: left;
    max-width: 40ch;
    @include center();
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin: auto;

    h4 {
      margin: 2rem 0;
    }
    p {
      font-size: 1.5rem;
    }
    .square {
      position: absolute;
      width: 150px;
      height: 150px;
      z-index: 0;
      background: transparent;
      border: 2.5px solid #ffc7c7;
      right: 1rem;
      top: 1rem;
      // background: #ffc7c7;

      &::after {
        content: "";
        width: 150px;
        height: 150px;
        background: transparent;
        border: 2.5px solid #0073b6;
        top: 2rem;
        right: 2rem;
        z-index: 1;
        position: absolute;
      }
      &::before {
        content: "";
        position: absolute;
        background: transparent;
        border: 2.5px solid #ffd700;
        top: 1rem;
        right: 1rem;
        z-index: 2;
        width: 150px;
        height: 150px;
      }
    }
    .lang {
      margin-right: auto;
      display: flex;
      justify-content: baseline;
      align-items: center;
      text-align: left;
      margin: 2rem auto 0 0;
      .icon {
        background: #0073b6;
        // margin-right: 4rem;
        padding: 0.5rem 0.8rem;
        border-radius: 100%;
        a {
          font-size: 2rem;
          color: white;
          margin: 0;
        }
      }
    }
  }
  .form_container {
    width: 75%;

    position: relative;
    height: 100%;
    .form {
      @include center();
      flex-direction: column;
      width: 100%;
      justify-content: space-around;
      margin-bottom: auto;

      &-content {
        @include center();
        justify-content: space-between;
        color: black;
        width: 70%;
        margin: 1rem auto;
        &-name,
        &-surname {
          @include center();
          flex-direction: column;
          text-align: left;
          width: 40%;
          color: black;
        }
      }
      &-email {
        @include center();
        flex-direction: column;
        text-align: left;
        color: black;
        width: 70%;
        margin: 1rem auto;
      }
      &-text {
        @include center();
        flex-direction: column;
        text-align: left;
        color: black;
        width: 70%;
        margin: 2rem auto;
        background: transparent;
      }
      .message {
        height: 100px;
        outline: none;
        border: none;
        border-bottom: 1px solid #0073b6;
        background: transparent;
      }
    }
    input {
      color: black;
      height: 30px;
      border: none;
      border-bottom: 1px solid #0073b6;
      outline: none;
      background: transparent;
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
      right: 50%;
      margin-right: -75px;
      bottom: -2rem;
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

      &:hover {
        transform: translate(-100%, calc(-100% + 2px));

        .material-icons {
          animation: rotate-the-funk 2.25s forwards;
          &:before {
            animation: shadow 2.25s forwards;
          }
        }
      }
    }
}
  
  }

</style>
