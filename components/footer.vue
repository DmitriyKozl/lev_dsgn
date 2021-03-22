<template>
  <Layout>

  <section class="Mailcontainer" id="contact">
    <div class="Contact_text">
      <div class="square"></div>
      <h4>Contact</h4>
      <p>
        Liked what you saw? or just want to have a good talk over a great cup of
        coffee? Please don’t hesitate to contact me.
      </p>
      <div class="lang">
        <a class="icon" href="https://www.instagram.com/lev.dsgn/"
          ><font-awesome
            aria-hidden="true"
            class="icon"
            :icon="['fab', 'instagram']"
        /></a>
        <a
          class="icon"
          href="https://www.linkedin.com/in/daan-van-de-verre-6a4206162/"
          ><font-awesome :icon="['fab', 'linkedin']"
        /></a>
      </div>
    </div>
    <form class="form" @submit.prevent="submit">
      <div class="form-content">
        <div class="form-content-name">
          <label class="label" for="name">Naam</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div class="form-content-surname">
          <label class="label" for="surname">Voornaam</label>
          <input
            type="text"
            name="name"
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
          name="textarea"
          id="textarea"
          required=""
          v-model="message.text"
          :maxlength="message.maxlength"
        ></textarea>
      </div>
      <Button />
    </form>
  </section>
    </Layout>

</template>

<script>
import Button from "@/components/Button.vue";
import Layout from "~/layouts/Default.vue";

import emailjs from "emailjs-com";

export default {
  components: {
    Button,Layout
  },
  name: "Footer",
  data: function() {
    return {
      isActive: false,
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
    activate() {
      return (this.isActive = true);
    },
  },
};
</script>

<style lang="scss">
@mixin flexCenter() {
  display: flex;
  justify-content: center;
}

.Mailcontainer {
  @include flexCenter();
  flex-wrap: wrap;
  position: relative;
  width: 100%;


  .Contact_text {
    text-align: left;
    max-width: 45ch;
    @include flexCenter();
    flex-direction: column;
    justify-content: space-between;
    // width: 100%;
    height: 50%;
    margin: 0 auto 4rem  ;
    position: relative;


    .square {
      position: absolute;
      width: 150px;
      height: 150px;
      z-index: 0;
      background: transparent;
      border: 2.5px solid #ffc7c7;
      right: 1rem;
      top: -3rem;

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
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: left;

      .icon {
        font-size: 3rem;
        margin-right: auto;
        &:nth-child(1) {
          color: #d6249f;
        }

        &:nth-child(2) {
          color: #0077b5;
        }
      }
    }
    button {
      margin: auto;
    }
  }
  .form {
    @include flexCenter();
    flex-direction: column;
    // width: 70%;
    flex: 1 1 500px;
    margin: auto;
    &-content {
      @include flexCenter();
      justify-content: space-between;
      color: black;
      width: 80%;
      margin: 1rem auto;
      &-name,
      &-surname {
        @include flexCenter();
        flex-direction: column;
        text-align: left;
        width: 40%;
        color: black;
      }
    }
    &-email {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: black;
      width: 80%;
      margin: 1rem auto;
    }
    &-text {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: black;
      width: 80%;
      margin: 2rem auto;
      background: transparent;
    }
    .message {
      height: 100px;
      outline: none;
      border: none;
      border-bottom: 1px solid #6ba9b2ce;
      background: transparent;
    }

    input {
      color: black;
      height: 30px;
      border: none;
      border-bottom: 1px solid #6ba9b2ce;
      outline: none;
      background: transparent;
    }
  }
}
</style>
