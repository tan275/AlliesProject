<template>
    <div>
      <v-app-bar app color="white" dark>
        <div class="d-flex align-center">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/images/allieslogo.png"
            transition="scale-transition" width="100" />
        </div>
  
        <v-spacer></v-spacer>
        <v-btn text color="black" @click="$router.push('/mission')"> our mission
        </v-btn>
        <v-btn text color="black" @click="$router.push('/faq')"> faq's
        </v-btn>
        <v-btn text color="black" @click="$router.push('/login')"> login
        </v-btn>
        <v-btn rounded elevation="0" color="#FF8469" @click="$router.push('/register')">Register</v-btn>
        <p>la</p>
        <v-btn rounded elevation="0" color="#FF8469" @click="$router.push('/helpline')">Help</v-btn>
        <p>la</p>
  
      </v-app-bar>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped></style>