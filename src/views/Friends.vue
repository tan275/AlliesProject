<template>
    <div class="body">
        <Navbar></Navbar>
        <div class="container">
            <div class="profile-main">
                <h1 class="heading">Allies </h1>
                <v-text-field outlined label="Search" append-icon="mdi-magnify" @input="searchInFriends($event)"
                    class="heading"></v-text-field>
                <v-list-item v-for="(item, i) in friends" :key="i">
                    <v-list-item-avatar tile>
                        <v-img :src="item.img"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.bio }}</v-list-item-subtitle>
                        <v-list-item-subtitle>Status: {{ item.status }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on" text>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="$router.push('/message/' + friend._id)">
                                        <v-list-item-title>Message</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>
                                            <div class="text-center">
                                                <v-dialog v-model="dialog" width="500">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn  v-bind="attrs" v-on="on">
                                                            Report
                                                        </v-btn>
                                                    </template>

                                                    <v-card>
                                                        <v-card-title class="text-h5 grey lighten-2">
                                                            Report this user?
                                                        </v-card-title>

                                                        <v-card-text>
                                                            Hello there,

                                                            It appears that you have clicked on the "report user" button.
                                                            Before we proceed, we want to confirm that you definitely want
                                                            to report this user. Reporting a user is a serious action that
                                                            may result in their account being suspended or terminated.
                                                            If you still wish to report this user, please click "Yes" to
                                                            confirm. Otherwise, you can click "Cancel" to abort the process.
                                                            Thank you for helping us maintain a safe and respectful
                                                            community.
                                                        </v-card-text>

                                                        <v-divider></v-divider>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="secondary" text @click="dialog = false">
                                                               Cancel
                                                            </v-btn>
                                                            <v-btn color="primary" text @click="dialog = false">
                                                                I accept
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-list-item-icon>
                </v-list-item>
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
import friendList from '@/data/friends.json'
export default {
    components: {
        Navbar
    },
    data() {
        return {
            friends: friendList,
            dialog: false,
        }
    },
    methods: {
        searchInFriends(searchText) {
            if (searchText) {
                this.friends = friendList.filter(rec => rec.name.toLowerCase().includes(searchText));
            }
            else {
                this.friends = friendList;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.body {
    background-color: #f5f5f5
}

.profile-main {
    padding: 1rem;
    background-color: white
}

@import url('@/assets/profile.css');</style>