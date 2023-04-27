<template>
    <div class="body">
        <Navbar></Navbar>
        <div class="container">
            <!-- ===========left-sidebar============= -->
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

                            <v-list-item><v-btn text @click="$router.push('/settings')">Settings</v-btn></v-list-item>
                        </v-list>

                    </div>
                </div>
                <div class="sidebar-activity" id="sidebarActivity">
                    <div class="sidebar_second_col">
                        <div class="sidebar_title">More</div>
                        <v-list>
                            <v-list-item><v-btn text @click="$router.push('/mission')">Our Mission</v-btn></v-list-item>
                            <v-list-item><v-btn text @click="$router.push('/faq')">FAQ's</v-btn></v-list-item>
                            <v-list-item><v-btn text @click="$router.push('/guidelines')">Community Guidelines</v-btn></v-list-item>
                            <v-list-item><v-btn text @click="$router.push('/terms')">Terms</v-btn></v-list-item>
                        </v-list>

                    </div>
                </div>

                <p id="showMoreLink" onclick="toggleActivity()">Show More <b>+</b></p>
            </div>

            <!-- ==========main-content============== -->
            <div class="main-content">
                <div class="create-post">
                    <div class="create-post-input">
                        <img src="@/assets/images/dp.jpeg">
                        <v-text-field v-model="postcontent" label="Your post" required></v-text-field>
                        <v-btn @click="addNewPost" color="#FF8469" class="white--text">Post!</v-btn>
                    </div>
                    <div class="create-post-links">

                        <v-divider></v-divider>

                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="white" elevation="0" v-bind="attrs" v-on="on">
                                    Audio
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>Please select an audio to upload!</v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list>
                                    <v-list-item><input type="file" accept="audio/*" capture /></v-list-item>
                                </v-list>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="$router.push('')">
                                        Cancel
                                    </v-btn>
                                    <v-btn color="orange" text @click="$router.push('')">
                                        Post
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>

                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="white" elevation="0" v-bind="attrs" v-on="on">
                                    Event
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>Please pick a date for your event!</v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list>
                                    <v-list-item><v-date-picker v-model="date" :allowed-dates="allowedDates" class="mt-4"
                                            min="2023-04-28" no-title scrollable>
                                        </v-date-picker>
                                    </v-list-item>
                                </v-list>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="$router.push('')">
                                        Cancel
                                    </v-btn>
                                    <v-btn color="orange" text @click="$router.push('')">
                                        Schedule
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>





                    </div>
                </div>
                <br>

                Your Posts<v-divider></v-divider>
                <br>
                <v-list three-line>
                    <template v-for="(item, index) in posts">
                        <v-list-item-content>
                            <div class="post">
                                <div class="post-author">
                                    <img src="@/assets/images/dp.jpeg">
                                    <div>
                                        <h1>Tania Muley</h1>
                                        <small>You</small>
                                    </div>
                                </div>
                                <p><v-list-item-subtitle v-html="item.content"></v-list-item-subtitle></p>
                                <v-divider></v-divider>
                                <v-expansion-panels><v-expansion-panel>
                                        <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-text-field v-model="title" :rules="rules" counter="25"
                                                label="Comment here!"></v-text-field>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel></v-expansion-panels>

                            </div>
                        </v-list-item-content>

                    </template>
                </v-list>

                <br>
                Your Allies' Posts<v-divider></v-divider>
                <br>
                <div class="post">
                    <div class="post-author">
                        <img src="@/assets/images/fahemdp.png">
                        <div>
                            <h1>Fahem Ahmed</h1>
                            <small>Friend</small>
                        </div>
                    </div>
                    <p>
                        hello there, this is my first &#x261D; post on allies!</p>
                    <v-divider></v-divider>
                    <v-expansion-panels><v-expansion-panel>

                            <v-expansion-panel-header>Comments</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-text-field v-model="title" :rules="rules" counter="25" hint=""
                                    label="Comment here!"></v-text-field>
                            </v-expansion-panel-content>

                            <v-expansion-panel-content>
                                <p><b>Gopika Sudheer:</b> Welcome &#128540;</p>
                            </v-expansion-panel-content>

                            <v-expansion-panel-content>
                                <p><b>Tania Muley:</b> Leave pls</p>
                                <v-expansion-panel-content>
                                    <p><b>Krit Sinha:</b> <span style="color:blue">Tania Muley</span> you should leave</p>
                                </v-expansion-panel-content>
                            </v-expansion-panel-content>

                            
                        </v-expansion-panel></v-expansion-panels>
                    <br>
                </div>

                <div class="post">
                    <div class="post-author">
                        <img src="@/assets/images/kritdp.png">
                        <div>
                            <h1>Krit Sinha</h1>
                            <small>Friend</small>
                        </div>
                    </div>
                    <p>
                        <audio controls>
                            <source src="@/assets/images/kritaudio2.ogg" type="audio/ogg">
                        </audio>
                    </p>

                    <v-divider></v-divider>
                    <v-expansion-panels><v-expansion-panel>
                            <v-expansion-panel-header>Comments</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-text-field v-model="title" :rules="rules" counter="25"
                                    label="Comment here!"></v-text-field>
                            </v-expansion-panel-content>
                        </v-expansion-panel></v-expansion-panels>
                    <br>
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
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { db } from '@/firebase/init'
import Navbar from '../components/Navbar.vue'
import BottomNav from '../components/BottomNavbar.vue'
export default {
    data() {
        return {
            postcontent: '',
            posts: [
                
            ],
        }

    },
    components: {
        Navbar,
        BottomNav
    },

    methods: {
        async addNewPost() {
            
             const content = this.postcontent;
            
            //this.items.unshift(newpost)
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "Posts"), {
                content});
            console.log("Document written with ID: ", docRef.id);
        }
    },
    mounted() {
        const q = query(collection(db, "Posts"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                let postchange = change.doc.data()
                if (change.type === "added") {
                    console.log("New post: ", postchange);
                    this.posts.unshift(postchange)
                }
            });
        });
    }
}
</script>

<style lang="scss" scoped >
@import url('@/assets/profile.css');

.body {
    background-color: #f5f5f5
}
</style>