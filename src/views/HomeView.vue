<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>


<div class="heading">
  <h2> A Social Media That Lifts You Up!
  </h2>
  <p class="join"><v-btn elevation="0" color="#FF8469" class="join" rounded large  @click="$router.push('/register')">Join Allies</v-btn></p>
  <img src="@/assets/images/landingbg.png">

</div>
