<template>
  <div class="landingpage">
    <div class="title"><h1>Daan Van de Verre</h1>
    <p>Creative soul in heart and neeren</p></div>
  <nav class="landingpage_nav">    
    <div class="landingpage_nav_circle"><g-link to="/home#about">About</g-link></div>
    <div class="landingpage_nav_triangle"><g-link to="/work">Work</g-link></div>
<div class="landingpage_nav_square"><g-link to="/home#contact">Contact</g-link></div>
  </nav>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.landingpage{
  background-image:url("../assets/images/lines.png") ;
       background-size:cover ;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

&_nav{
   display: flex;
  justify-content: space-evenly;
  align-items: center;
 width: 90%;
 a{
   font-size: 1.9rem;
 }
  &_circle{
    width: 300px;
    height: 300px;
  background-image:url("../assets/images/circle.png") ;
      background-size:cover ;
  background-position: center;
  display: grid;
  place-items: center;
  }
  &_square{
    width: 300px;
    height: 300px;
  background-image:url("../assets/images/Square.png") ;
 display: grid;
   background-size:cover ;
  background-position: center;
  place-items: center;
  }
  &_triangle{
    width: 300px;
    height: 300px;
  background-image:url("../assets/images/triangle.png");
  background-size:cover ;
  background-position: center;
 display: flex;
 justify-content: center;
 align-items: center;
  
a{
  font-size: 3rem;
    margin: auto auto auto 2rem;
    color: white;
  }

  }
}
a{
  font-size: 3rem;
    color: white;
  }} 
</style>