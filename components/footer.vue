<template>
<div id="contact">
  <section >

    <div class="Mailcontainer">
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
           <div class="insta">
            <a href="https://www.instagram.com/lev.dsgn/"
              ><img src="@/assets/images/Instagram_icon-icons.com_66804.png" alt=""></a
            >
          </div>
        </div>
      </div>
      <div class="form_container">
        <form  method="post" action=" " class="form" @submit.prevent="sendEmail">
          <div class="form-content">
            <div class="form-content-name">
              <label class="label" for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required=""
                v-model="name"
              />
            </div>
            <div class="form-content-surname">
              <label class="label" for="surname">Surname</label>
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
            <label class="label" for="textarea">Message</label>
            <textarea
              class="message"
              name="message"
              id="textarea"
              required=""
              v-model="message.text"
            ></textarea>
          </div>
          <button
            @click="activate"
           :class="{active:isActive}" class="plane-send" type="" >
            <g-image
              class="material-icons"
              data-content="send"
              src="~/assets/images/telegram.png"
              alt=""
            >
            </g-image>
          </button>
        </form>
      </div>
    </div>
  </section>
 
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
      isActive:false,
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
    activate(){
      return this.isActive = true;
    }
  },
};
</script>

<style  lang="scss" >
@mixin center() {
  display: flex;
  justify-content: center;
}
#contact {
  width: 100%;
  padding-bottom: 0;
  margin:auto
}

.Mailcontainer {
  @include center();

  position: relative;
  height: 75vh;
  width: 100%;
  .Contact_text {
    position: relative;
    text-align: left;
    max-width: 40ch;
    @include center();
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin: auto;

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
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: left;
      margin: 0 auto 0 0;
      width: 100%;
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
        
      }.insta{
          object-fit: contain;
          width: 50px;
          height: 50px;
          img{
           width: 100%; 
          }
        }
    }
  }
  .form_container {
    width: 75%;
  margin: auto;
    position: relative;
    height: 100%;
    .form {
      @include center();
      flex-direction: column;
      width: 100%;
      justify-content: space-around;
      margin-bottom: auto;
    height: 80%;
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
  margin-right: -100px;
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
}
.active{
    transform: translate(-100%, calc(-100% + 2px));

    .material-icons {
      animation: rotate-the-funk 2.25s forwards;
      &:before {
        animation: shadow 2.25s forwards;
      }
    }
  }
}

</style>
