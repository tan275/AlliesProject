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
                            <v-btn plain @click="$router.push('/settings')">
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
                            <v-btn plain @click="$router.push('')">
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


        <v-col cols="4">
            <AppHeader title="Help"></AppHeader>
        </v-col>
        <v-row align="center" justify="space-around" >
            <v-btn text>
                Help Center
            </v-btn>
        </v-row>
        <v-row align="center" justify="space-around" >
            <v-btn text>
                Privacy and Security help
            </v-btn>
        </v-row>
        <v-row align="center" justify="space-around" >
            <v-btn text>
                Support requests
            </v-btn>
        </v-row>
        
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
