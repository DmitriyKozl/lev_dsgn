<template>
  <div class="landingpage">
    <div class="title">
      <h1>Daan Van de Verre</h1>
      <h2>gives soul to creative passion</h2>
    </div>
    <nav class="nav">
      <g-link to="/home#about">About</g-link>
      <g-link to="/home#work">Work</g-link>
      <g-link to="/home#contact">Contact</g-link>
    </nav>
  </div>
</template>

<style lang="scss">
.landingpage {
  height: 100vh;
  background-attachment: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  .title {
    z-index: 100;
    h1 {
      margin: 0 0 4rem 0;
  color: #707070;
    }
    h2 {
      font-size: 2rem;
      margin: 0 0 4rem 0;
  color: #707070;
    }
  }

  .nav {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 250px;
    a {
                display: flex;
      margin: 0 1rem;
      padding-top: 1rem;
      font-size: 3rem;
      &:nth-child(1) {
        color: #ffc7c7;
        &::before {
          margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #ffd700;
          margin-right: 1rem;
        }
          &::after {
          margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #ffd700;
                    margin-left: 1rem;

        }
      }
      &:nth-child(2) {
        color: #ffd700;
            &::before {   margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #0073b6;
          margin-right: 1rem;
      }
              &::after {
          margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #0073b6;
                    margin-left: 1rem;

        }
      }
      &:nth-child(3) {
        color: #0073b6;

          &::before {   margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #ffc7c7;
          margin-right: 1rem;
      }
              &::after {
          margin: auto;
          content: "";
          width: 100px;
          height: 5px;
          background-color: #ffc7c7;
                    margin-left: 1rem;

        }
      }
    }
  }
}
</style>
