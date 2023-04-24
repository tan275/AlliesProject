<template>
    <div class="article">
        <button class="back-button" @click="goBack">&#8592; Back</button>
        <br>
        <div class="article-header">
            <h1 class="article-title">{{ title }}</h1>
            <hr class="article-divider" />
        </div>
        <div class="article-body">
            <p class="article-content">We know that seeking help for mental health issues can be challenging, but we want
                you to know that you are not alone. There are resources available to support you. These organizations can
                provide you with a safe and confidential space to talk about your mental health and get the support you
                need.
                <br> <br>
                Helplines can be a valuable resource for those in need of mental health support. They are staffed by trained
                volunteers who can provide you with emotional support, crisis intervention, and referrals to mental health
                professionals in your area.
                <br> <br>
                We understand that navigating the mental health system can be overwhelming, which is why we have compiled a
                list of helplines that you can access from the comfort of your own home. You can find this list below, and
                we encourage you to reach out for support if you need it.
            </p>
            <p class="article-content">Vandrevala Foundation Helpline: 1860-2662-345 / 1800-2333-330 <br>iCALL Psychosocial
                Helpline: 022-25521111 / icall@tiss.edu <br>Sneha Foundation India: +914424640050 / help@snehaindia.org
                <br>The Samaritans Mumbai: +9122 6464 3267 / +91 84229 84528 / talk2samaritans@gmail.com <br>AASRA:
                +91-22-27546669 / aasrahelpline@yahoo.com <br>COOJ Mental Health Foundation: +918322252525 / cooj@cooj.org
            </p>
            <br>
            <p class="article-content">We at Allies understand that it may be hard to share your thoughts on a platform such
                as this. We urge you to reach out to us for any additional help, below.

                <h3 class="article-title1">Reach out to us for additional support</h3>
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
            </p>

            <h3>With Love, Team Allies.</h3>
        </div>
        

    </div>
</template>
  
<script>
import emailjs from 'emailjs-com'
export default {
    data() {
        return {
            title: "Dear Ally",
            name: '',
            email: ''
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        sendEmail(e) {
            try {
                emailjs.sendForm('Team Allies', 'template_yk6h2uh', e.target,
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
};
</script>
  
<style scoped >
.article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
}

.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
}

.article-header {
    margin-bottom: 30px;
    text-align: center;
}

.article-title {
    margin: 0;
    font-size: 2.5rem;
}

.article-title1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.article-details {
    margin-top: 0;
    font-size: 1rem;
    color: #777;
}

.article-divider {
    border: none;
    height: 1px;
    background-color: #ddd;
    margin-bottom: 30px;
}

.article-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    height: auto;
}

.article-content {
    line-height: 1.5;
    margin-top: 30px;
    text-align: justify;
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

</style>
  