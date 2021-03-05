<template>
  <div id="contact">
    <section class="Mailcontainer">
      <div class="Contact_text">
        <div class="square"></div>
        <h4>Contact</h4>
        <p>
          Liked what you see or just want to have a good talk over a great cup
          of coffee? Please don’t hesitate to contact me.
        </p>
        <div class="lang">
          <div class="icon"><a href="https://www.linkedin.com/in/daan-van-de-verre-6a4206162/">in</a></div>
       
        </div>
      </div>
      <form class="form" @submit.prevent="submit">
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
      </form>
    </section>
    <!-- <footer>
      <h5>Made by Dmitriy S.</h5>
    </footer> -->
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss">
@mixin center() {
  display: flex;
  justify-content: center;
}
.Mailcontainer {
  height: 70vh;
max-width: 1400px;  	
  .Contact_text {
    position: relative;
    text-align: left;
    max-width: 40ch;
    @include center();
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin:auto ;

    h4{
          margin: 2rem 0;
    }
    p{
      font-size: 1.5rem;
    }
    .square {
      position: absolute;
    width: 150px;
        height: 150px;
      z-index: 0;
      background: transparent;
      border: 2.5px solid #ffc7c7;
      right:1rem ;
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
        right:1rem;
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
        padding:0.5rem 0.8rem ;
        border-radius: 100%;
        a{
          font-size: 2rem;
          color: white;
          margin: 0;
        }
      }
    }
  }

  .form {
    @include center();
    flex-direction: column;
    width: 70%;
    margin:auto ;


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
footer {
  height: 80px;
  width: 100%;
  background-image:url('../assets/images/forms.png');
  background-position: center;
  background-size: contain;
  @include center();
  h5{
    margin:2rem auto auto 1rem ;
    // background:#ffc7c7;
    padding:0.3rem 1rem;
    font-size: 0.6rem;
      font-family: 'bahnschrift';

  }
}
</style>
