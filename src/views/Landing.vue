<template>
    <div>
        <LandingNavbar></LandingNavbar>
        <div class="body">
            <div class="heading">
                <h2> A Social Media That Lifts You Up!
                </h2>
                <p class="join"><v-btn elevation="0" color="#FF8469" class="join" rounded large  @click="$router.push('/register')">Join Allies</v-btn></p>
                <img src="@/assets/images/landingbg.png">

            </div>


            <div class="cards">
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-card class="pa-2">
                                <img src="@/assets/images/time.png" width="350px" height="450px">
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card class="pa-2">
                                <img src="@/assets/images/metrics.png" width="350px" height="450px">
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card class="pa-2">
                                <img src="@/assets/images/nudges.png" width="350px" height="450px">
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <br>

            <div class="waitlist">
                <h3>Join our waitlist!</h3>
                

                <form @submit.prevent="sendEmail">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="4">
                                
                        <input type="text" v-model="name" name="name" placeholder="Your Name">
                            </v-col>

                            <v-col cols="12" sm="6">
                                
                            <input type="email" v-model="email" name="email" placeholder="Your Email">
                            </v-col>
                            <v-col><input type="submit" value="   Send   " style="background-color: #FF8469; color: white; padding: 1rem; border-radius: 15%;"></v-col>
                        </v-row>
                    </v-container>
                </form>
            </div>

            <br>
            <div class="footer">
                <div class="row">
                    <div class="column">
                        <h3>Deepen your relationships.</h3>
                        <p>We believe in quality over quantity.</p>
                        <v-btn color="#FF8469" class="white--text" rounded large @click="$router.push('/register')">Join Us</v-btn>
                    </div>
                    <div class="column">
                        <br>
                        <v-list>
                            <v-list-item><v-btn text>About Us</v-btn></v-list-item>
                            <v-list-item><v-btn text>Community Guidelines</v-btn></v-list-item>

                            <v-list-item><v-btn text>Terms</v-btn></v-list-item>
                            <v-list-item><v-btn text>Blogs</v-btn></v-list-item>
                            <v-list-item><v-btn text>Wellbeing</v-btn></v-list-item>
                        </v-list>
                    </div>
                    <div class="column">
                        <h4>Made by</h4>
                        <p>Tania Muley, <br> Fahem Ahmed, <br> Gopika Sudheer, <br> Krit Sinha</p>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import LandingNavbar from '../components/LandingNav.vue'
import BottomNav from '../components/BottomNavbar.vue'
import emailjs from 'emailjs-com'
export default {
    data() {
        return {
            name: '',
            email: ''
        }
    },
    components: {
        LandingNavbar,
        BottomNav
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('Team Allies', 'template_t02e7lx', e.target,
                    '1FCqdQYQ5yXjcNuT0', {
                    name: this.name,
                    email: this.email
                })

            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            this.name = ''
            this.email = ''
        },
    }
}
</script>

<style lang="scss" scoped>
* {}

.body {
    align-content: center;
    justify-content: center;
    background-color: #f5f5f5;
}

h2 {
    padding-top: 2rem;
    text-align: center;
    font-size: 80px;
}

h3 {
    padding-top: 2rem;
    text-align: left;
    font-size: 50px;
}

h4 {
    padding-top: 2rem;
    font-size: 30px;
}


.body p {
    text-align: center;
}

.footer p {
    text-align: left;
}

.join {
    color: white;
    font-size: 20px;
}

.pa-2 {
    border-radius: 30px;
}

.waitlist {}

.waitlist h3 {
    text-align: center;
}

.waitlist .row {
    padding-left: 10rem;
}

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


.footer {
    background-color: white;
    padding-left: 12rem;
}

.column {
    float: left;
    width: 33.33%;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>