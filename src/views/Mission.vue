<template>
    <div>
    <LandingNavbar></LandingNavbar>
    <div>
        <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Our Mission</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <h2>Our Purpose</h2>
        <p>
          Allies is a social media app designed to promote mental health and wellness. Our purpose is to create a supportive and empowering community where users can connect with each other, share their experiences, and receive support without fear of judgment or harassment.
        </p>
        <p>
          We believe that social media can be a positive force for good, and we're committed to creating a platform that fosters meaningful connections, promotes self-care, and helps users develop healthy habits and coping mechanisms.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Positivity:</strong> We strive to create a positive and uplifting environment for our users.</li>
          <li><strong>Kindness:</strong> We encourage kindness and compassion towards oneself and others.</li>
          <li><strong>Inclusivity:</strong> We believe in creating an inclusive and diverse community where everyone feels welcome.</li>
          <li><strong>Authenticity:</strong> We encourage users to be themselves and share their authentic experiences.</li>
          <li><strong>Growth:</strong> We believe in promoting personal growth and development.</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <h2>Our Features</h2>
        <ul>
          
          <li><strong> Tracker:</strong> Monitor your usage and identify patterns and triggers.</li>
          <li><strong>Community:</strong> Connect with others who share your interests and experiences.</li>
          <li><strong>Resources:</strong> Access a library of resources and tools to help you manage stress, anxiety, and other mental health issues.</li>
          <li><strong>Expert Advice:</strong> Get advice and insights from mental health professionals and wellness experts.</li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Our Goals</h2>
        <ul>
          <li>To create a safe and supportive community where users feel empowered and uplifted.</li>
          <li>To promote mental health and wellness by providing valuable resources and tools.</li>
          <li>To encourage users to develop healthy habits and coping mechanisms for managing stress and anxiety.</li>
          <li>To raise awareness about the importance of mental health and destigmatize mental health issues.</li>
        </ul>
        <p>
          At Allies, we believe that everyone deserves to feel supported and connected. Join us today and be part of a movement to make social media a more positive and empowering place for all.
        </p>
        
      </v-col>
    </v-row>
  </v-container>
    </div>
    <BottomNav></BottomNav>
    </div>
</template>

<script>
import LandingNavbar from '../components/LandingNav.vue'
import BottomNav from '../components/BottomNavbar.vue'
    export default {
        components: {
        LandingNavbar,
        BottomNav
        },
    }
</script>

<style lang="scss" scoped>

</style>