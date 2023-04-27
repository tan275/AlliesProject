<template>
  <div class="body">
      <Navbar></Navbar>
      <div class="container">
          <div class="profile-main">
            <button class="back-button" @click="$router.push('/blog')">&#8592; Back</button>
              <h1>Write your own Article</h1>
              <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="articleName"
            :counter="40"
            label="Article Name"
            required
            hint="Enter a name for your article"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="articleContent"
            :counter="100"
            label="Content Preview"
            required
            hint="Enter a preview of your article"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="authorName"
            label="Author"
            readonly value="Tania Muley"
            hint="The author name is fixed as 'Tania Muley'"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">

          <v-text-field
            label="Date"
            readonly
            v-model="articleDate"
            hint="The article date is automatically generated"
          ></v-text-field>

        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="articleBody"
            label="Article Body"
            required
            hint="Enter the body content of your article"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="center-align">
      <v-btn color="primary" @click="navigateToFeed">Create Article</v-btn>
    </v-container>

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
    articleName:"",
    articleContent:"",
    authorName: "Tania Muley",
    articleDate: new Date().toISOString().substr(0,10),
    articleBody:""
  }
},
methods: {
  goToBlog(id) {
    this.$router.push(`/blogview/${id}`);
  }
}
}
</script>

<style lang="scss" scoped>
.body {
  background-color: #f5f5f5
}

@import url('@/assets/profile.css');

.home-container {
padding: 20px;
}

.blog-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 20px;
}

.blog-card {
background-color: #fff;
border-radius: 20px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
overflow: hidden;
}

.blog-card:hover {
box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.blog-card-header img {
width: 100%;
height: 200px;
object-fit: cover;
}

.blog-card-content {
padding: 20px;
}

.blog-card-footer {
display: flex;
justify-content: space-between;
padding: 10px 20px;
background-color: #f8f8f8;
border-top: 1px solid #eee;
}

.blog-author {
font-size: 14px;
color: #999;
}

.blog-date {
font-size: 14px;
color: #999;
}

.blog-card {
border-radius: 20px;
overflow: hidden;
transition: box-shadow 0.2s ease
}

.blog-card {
background-color: #ffffff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
transition: box-shadow 0.2s ease-in-out;
cursor: pointer;
display: flex;
flex-direction: column;
}

.blog-card:hover {
box-shadow: 0 8px 16px;
rgba:(0, 0, 0, 0.2);
}

.blog-card-header {
border-top-left-radius: 5px;
border-top-right-radius: 5px;
color: #ffffff;
font-size: 24px;
}

.blog-card-content {
padding: 20px;
background-color: #ffffff;
color: #666666;
}

.blog-card-footer {
padding: 10px 20px;
background-color: #ffffff;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
display: flex;
justify-content: space-between;
}

.blog-date {
font-size: 14px;
color: #999999;
}

.blog-author {
font-size: 14px;
color: #999999;
}
</style>