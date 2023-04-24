<template>
    <div class="body">
        <Navbar></Navbar>
        <div class="container">
            <div class="profile-main">
                <div class="article">
                    <button class="back-button" @click="$router.push('/blog')">&#8592; Back</button>
                    <div class="article-header">
                        <h1 class="article-title">{{ title }}</h1>
                        <p class="article-details">
                            By {{ author }} | {{ date }}
                        </p>
                        <hr class="article-divider" />
                    </div>
                    <div class="article-body">
                        <img class="article-image" :src="image" alt="Article Placeholder Image"  />
                        <p class="article-content">{{ body }}</p>
                        <p class="article-content">{{ body }}</p>
                        <p class="article-content">{{ body }}</p>
                    </div>
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
    components: {
        Navbar
    },
    data() {
    return {
      title: "Lorem Ipsum",
      author: "John Doe",
      date: "April 17, 2023",
      image: "https://via.placeholder.com/600x300",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
    background-color: #f5f5f5
}

@import url('@/assets/profile.css');


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
</style>