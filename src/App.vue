<template>
  <div id="app">
   <TheHeader />
   <main>
     <transition mode="out-in">
     <router-view />
     </transition>
   </main>
   <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"


export default{
  components:{
    TheHeader,
    TheFooter
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',Arial, Helvetica, sans-serif;
}

ul{
  list-style: none;
}

a{
  color: rgb(46, 46, 46);
  text-decoration: none;
}

h2{
  margin: 0 auto 30px auto;
  font-size: 2.2rem;
  color: rgb(90, 90, 90);
}

img{
  max-width: 100%;
  display: block;
}

#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main{
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: auto;
}

.btn{
  display: block;
  padding: 12px 25px;
  background: rgb(90, 90, 90);
  color: #fff;
  border-radius: 4px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}
.btn:hover{
  background:rgb(124, 124, 124);
}

input{
  display: block;
  width: 100%;
  max-width: 700px;
  padding: 13px 10px;
  font-size: 1.1rem;
  outline: none;
  border: 2px solid rgb(124, 124, 124);
  margin: 0 10px;
  transition: .4s;
}
input:focus{
  border: 2px solid rgb(46, 46, 46);
}

.v-enter,
.v-leave-to{
  opacity: 0;
}

.v-enter{
  transform: translate3d(0,-20px,0);
}

.v-leave-to{
  transform: translate3d(0,20px,0);
}

.v-enter-active,
.v-leave-active{
  transition: all 0.3s;
}



</style>
