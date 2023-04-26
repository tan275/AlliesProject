<template>
    <div>
    <LandingNavbar></LandingNavbar>
    <div>
        <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">Frequently Asked Questions</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>What is Allies?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Allies is a social media app designed to promote mental health and wellness. Our goal is to create a supportive and empowering community where users can connect with each other, share their experiences, and receive support without fear of judgment or harassment.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Is Allies free to use?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Yes, Allies is completely free to use. We believe that everyone should have access to mental health resources and support, regardless of their financial situation.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>How can I get involved with Allies?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>There are many ways to get involved with Allies! You can sign up to become a user, join our community, or even volunteer with us. Check out our website for more information.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Is my information secure on Allies?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Yes, we take the security and privacy of our users very seriously. We use industry-standard encryption and security measures to protect your information, and we will never share your data with third parties without your consent.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>How do I report a user?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>If you encounter a user who is behaving inappropriately or violating our community guidelines, please report them to our support team. You can do this by clicking on the user's profile and selecting the "Report User" option.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>How do I delete my account?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>If you wish to delete your Allies account, please contact our support team and they will assist you with the process. Please note that once your account is deleted, all of your data and information will be permanently removed and cannot be recovered.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Still have questions?</h2>
          <p>If you have a question that is not answered here, please fill out the form below and we will get back to you as soon as possible.</p>
          <v-form v-model="valid">
            <v-text-field
              outlined
              v-model="name"
              label="Name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              outlined
              v-model="email"
              label="Email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-textarea
              outlined
              v-model="message"
              label="Message"
              :rules="messageRules"
              required
            ></v-textarea>
            <v-btn color="orange" @click="submitForm">Submit</v-btn>
          </v-form>
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