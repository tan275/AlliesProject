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
                  <p>Allies is a social media app designed to promote mental health and wellness. Our goal is to create a
                    supportive and empowering community where users can connect with each other, share their experiences,
                    and receive support without fear of judgment or harassment.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>Is Allies free to use?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>Yes, Allies is completely free to use. We believe that everyone should have access to mental health
                    resources and support, regardless of their financial situation.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>How can I get involved with Allies?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>There are many ways to get involved with Allies! You can sign up to become a user, join our
                    community, or even volunteer with us. Check out our website for more information.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>Is my information secure on Allies?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>Yes, we take the security and privacy of our users very seriously. We use industry-standard
                    encryption and security measures to protect your information, and we will never share your data with
                    third parties without your consent.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>How do I report a user?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>If you encounter a user who is behaving inappropriately or violating our community guidelines, please
                    report them to our support team. You can do this by clicking on the user's profile and selecting the
                    "Report User" option.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>How do I delete my account?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>If you wish to delete your Allies account, please contact our support team and they will assist you
                    with the process. Please note that once your account is deleted, all of your data and information will
                    be permanently removed and cannot be recovered.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h2>Still have questions?</h2>
            <p>If you have a question that is not answered here, please fill out the form below and we will get back to
              you as soon as possible.</p>
            <form @submit.prevent="sendEmail">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="4">

                    <input type="text" v-model="name" name="name" placeholder="Your Name">
                  </v-col>

                  <v-col cols="12" sm="6">

                    <input type="email" v-model="email" name="email" placeholder="Your Email">
                  </v-col>
                  <v-col cols="12" sm="10">

                    <input type="textarea" v-model="message" name="message" placeholder="Your Message">
                  </v-col>
                  <v-col><input type="submit" value="   Send   "
                      style="background-color: #FF8469; color: white; padding: 1rem; border-radius: 15%;"></v-col>
                </v-row>
              </v-container>

            </form>
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
import emailjs from 'emailjs-com';

export default {
  components: {
    LandingNavbar,
    BottomNav
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_11w8ele', 'template_z3ywrdg', e.target,
                    'Tizs4b9qK0T37BIWe', {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>

<style lang="scss" scoped>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #FF8469;
}

input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=email]:focus {
  border: 3px solid #FF8469;
}

input[type=textarea] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=textarea]:focus {
  border: 3px solid #FF8469;
}
</style>