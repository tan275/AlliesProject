<template>
	<div class="body">
		<Navbar></Navbar>
		<div class="container">
			
			<div class="left-sidebar">
				<div class="sidebar-profile-box">
					<img src="@/assets/images/landingbg.png" width="100%" height="150px">
					<div class="sidebar-profile-info">
						<img src="@/assets/images/dp.jpeg">
						<h1>Tania Muley</h1>
						<h3>20, Pune, India</h3>
						<br>
					</div>
					<div class="sidebar-profile-link">
						<br>
						<br>
						<v-btn text @click="$router.push('/profile')">
							<v-icon color="grey">mdi-account</v-icon>
							Profile
						</v-btn>
						<br>
						<v-btn text @click="$router.push('/settings')">
							<v-icon color="grey">mdi-cogs</v-icon>
							Settings
						</v-btn>

					</div>
				</div>
				<div class="sidebar-activity" id="sidebarActivity">
					<div class="sidebar_second_col">
						<div class="sidebar_title">Action Center</div>
						<v-list>
							<v-list-item><v-btn text @click="$router.push('/blog')">Mindfullness</v-btn></v-list-item>
							<v-list-item><v-btn text @click="$router.push('/tracker')">Tracker</v-btn></v-list-item>
							<v-list-item><v-btn text @click="$router.push('/blog')">Bookmarks</v-btn></v-list-item>
							<v-list-item><v-btn text @click="$router.push('/settings')">Settings</v-btn></v-list-item>
						</v-list>
						<div class="sidebar_title" style="color:blue">Followed Hashtags</div>
						<div class="recent">
							<div class="sidebar_second_text">#selfcare</div>
							<div class="sidebar_second_text">#allies</div>
						</div>
					</div>
				</div>

				<p id="showMoreLink" onclick="toggleActivity()">Show More <b>+</b></p>
			</div>

			
			<div class="main-content">
				<div class="create-post">
					<div class="create-post-input">
						<img src="@/assets/images/dp.jpeg">
						<label>What would you like to post today?</label>	
					</div>
					
				</div>

				
				<div class="sort-by">
					<hr>
					<p>Sortby: <span>top</span> <v-icon color="grey">mdi-menu-down</v-icon></p>
				</div>

				<div class="post">
					<div class="post-author">
						<img src="@/assets/images/fahemdp.png">
						<div>
							<h1>Fahem Ahmed</h1>
							<small>Friend</small>
							<small>2 hours ago</small>
						</div>
					</div>
					<p>
						just finished my interview for Bajaj, honestly very excited about the outcomes!</p>
					<v-divider></v-divider>
					<div class="post-activity">
						<div class="post-activity-links">

							<v-expansion-panels><v-expansion-panel>
									<v-expansion-panel-header>Comments</v-expansion-panel-header>
									<v-expansion-panel-content>
										<p>Gopika Sudheer: Good Luck!</p>
									</v-expansion-panel-content>
								</v-expansion-panel></v-expansion-panels>
						</div>
					</div>

				</div>

				<div class="post">
					<div class="post-author">
						<img src="@/assets/images/kritdp.png">
						<div>
							<h1>Krit Sinha</h1>
							<small>Friend</small>
							<small>3 hours ago</small>
						</div>
					</div>
					<p>
						<audio controls>
							<source src="@/assets/images/kritaudio2.ogg" type="audio/ogg">
						</audio>
					</p>
					<v-divider></v-divider>
					<div class="post-activity">
						<div class="post-activity-links">
							<span><v-icon color="grey">mdi-comment</v-icon> comment</span>
						</div>
					</div>
				</div>

				<div class="post">
					<div class="post-author">
						<img src="@/assets/images/dp.jpeg">
						<div>
							<h1>Tania Muley</h1>
							<small>You</small>
							<small>3 hours ago</small>
						</div>
					</div>
					<p>
						Currently developing allies! &#128564;</p>
					<v-divider></v-divider>
					<div class="post-activity">
						<div class="post-activity-links">
							<span><v-icon color="grey">mdi-comment</v-icon> comment</span>
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
import BottomNav from '../components/BottomNavbar.vue'
export default {
	data: () => ({
      date: null,
      post: {
        name: '',
        start: null,
      },
      
    }),
	components: {
		Navbar,
		BottomNav
	}
}
</script>

<style lang="scss" scoped >
@import url('@/assets/profile.css');

.body {
	background-color: #f5f5f5
}
</style>