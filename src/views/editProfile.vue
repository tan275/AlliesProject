<template>
    <div>

        <v-navigation-drawer v-model="drawer" app>
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="@/assets/images/dp.jpeg" alt="Tania">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Tania Muley</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>


            <v-list dense>
                <v-list-item-group v-model="selectedItem" color="orange">

                    <v-list-item>
                        <v-list-item-content>
                            <v-btn plain @click="$router.push('')">
                                <span>Edit profile</span>
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-btn plain @click="$router.push('/changepw')">
                                <span>Change Password</span>
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>


                    <v-list-item>
                        <v-list-item-content>
                            <v-btn plain @click="$router.push('/help')">
                                <span>Help</span>
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-btn plain @click="$router.push('/profile')">
                                <span>Profile</span>
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>


                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="white">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Settings</v-toolbar-title>
        </v-app-bar>

        <div class="content">
            <v-col cols="4">
            <h2>Edit Profile</h2>
        </v-col>
        <v-container fluid>
            <v-form>
                <v-text-field label="Name" v-model="name" hint="Help people discover your account by the name you're by: either your full name, or nickname.
                You can only change your name twice within 14 days." persistent-hint></v-text-field>
                <v-text-field label="Username" v-model="uname" :rules="nameRules" required
                    hint="You can only change your name twice within 14 days." persistent-hint></v-text-field>
                <v-text-field label="About" v-model="about" :rules="rules" counter="150"></v-text-field>
                <v-text-field label="Email" value="Taniamuley@gmail.com"></v-text-field>
                <v-text-field label="Phone Number" value="702800XXXX"></v-text-field>
                <button class="save">Save</button>
            </v-form>
        </v-container>
        </div>
        
        
    </div>
</template>

<script>

import navbar from '@/components/Navbar.vue';

export default {
    data: () => ({ drawer: null }),
    
    components: {
        navbar
    }

}
</script>

< style lang = "scss" scoped >

</style >
