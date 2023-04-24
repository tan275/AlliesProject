<template>
    <div class="body">
        <Navbar></Navbar>
    <div class="container">
        <div class="profile-main">
            <div class="profile-container">
                <img src="@/assets/images/landing.png" width="100%" height="200px">
                <div class="profile-container-inner">
                    <img src="@/assets/images/dp.jpeg" class="profile-pic">
                    <h1>Tania Muley</h1>
                    <b>Student at Symbiosis Institute of Technology</b>
                    <br>
                    <b>Pune, India</b>
                    <div class="profile-btn">
                        <v-btn class="white--text" color="#FF8469" @click="$router.push('/settings')"><v-icon>mdi-cogs</v-icon>Settings</v-btn>
                    </div>
                </div>
            </div>

            <div class="profile-description">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt cum asperiores non voluptates fugiat voluptas officia pariatur et exercitationem facilis, nostrum recusandae quis? Inventore labore praesentium alias modi esse! Ducimus?</p>
                
            </div>

        </div>
        <div class="profile-sidebar">
            <div class="sidebar-people">
                <h3>People you may know</h3>
                <div class="sidebar-people-row">
                    <img src="@/assets/images/gopikadp.png">
                    <div>
                        <h2>Gopika Sudheer</h2>
                        <p>Pune, India</p>
                        <a href="#">Invite</a>
                    </div>
                </div>
                <div class="sidebar-people-row">
                    <img src="@/assets/images/leezadp.png">
                    <div>
                        <h2>Leeza Batra</h2>
                        <p>Pune, India</p>
                        <a href="#">Invite</a>
                    </div>
                </div>
                <div class="sidebar-people-row">
                    <img src="@/assets/images/aryandp.png">
                    <div>
                        <h2>Aryan Narayn</h2>
                        <p>Pune, India</p>
                        <a href="#">Invite</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
    export default {
        components:{
            Navbar
        }
    }
</script>

<style lang="scss" scoped>
.body{
    background-color: #f5f5f5
}
@import url('@/assets/profile.css');
</style>