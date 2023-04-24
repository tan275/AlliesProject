<template>
    <div class="body">
        <Navbar></Navbar>
        <div class="container">
            <div class="profile-main">
                <h1>Welcome to the Mindfulness Blog!</h1>
                
                <div class="blog-grid">
                    <div class="blog-card" v-for="blog in blogs" :key="blog.id" @click="$router.push('/blogview')">
                        <div class="blog-card-header">
                            <img :src="blog.image" alt="Blog Header Image">
                        </div>
                        <div class="blog-card-content">
                            <h2>{{ blog.title }}</h2>
                            <p>{{ blog.content }}</p>
                        </div>
                        <div class="blog-card-footer">
                            <p class="blog-author">Author: {{ blog.author }}</p>
                            <br>
                            <p class="blog-date">Published on: {{ blog.date }}</p>
                        </div>
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
      blogs: [
        {
          id: 1,
          title: 'The Benefits of Mindfulness Meditation',
          content: 'In this blog post, we explore the benefits of mindfulness meditation and how it can improve your overall wellbeing.',
          author: 'Preeti Mulay',
          date: 'April 1, 2023',
          image: 'https://www.verywellmind.com/thmb/MQWhY7u5mTDfaO4vgDHRvnHYcaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-938890492-becc3fc4757849bea672f148454943f9.jpg'
        },
        {
          id: 2,
          title: 'How to Practice Mindful Eating',
          content: 'Learn how to practice mindful eating and improve your relationship with food in this blog post.',
          author: 'Kanhaiya Sharma',
          date: 'April 3, 2023',
          image: 'https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2-1200x900.png'
        },
        {
          id: 3,
          title: 'The Science of Mindfulness',
          content: 'Discover the science behind mindfulness and how it can benefit your physical and mental health in this blog post.',
          author: 'Kapil Mundada',
          date: 'April 5, 2023',
          image: 'https://media.istockphoto.com/id/1358081661/vector/mental-health-mind-or-psychology-therapy-vector-illustration-with-human-hand-watering.jpg?s=612x612&w=0&k=20&c=eFMP-lXSdiklp9vN3QT1v6WfyDsFg_3SFo7-CKG1HGI='
        }
      ]
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