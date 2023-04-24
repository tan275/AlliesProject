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
                            <v-btn plain @click="$router.push('')">
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


        <v-row>
            <v-col cols="10" sm ="6" offset-sm="3" md="4" offset-md="4" offset="1">
                <v-list-item-avatar size="60" tile>
                    <v-img src="@/assets/images/dp.jpeg" alt="Tania"></v-img>
                </v-list-item-avatar>   
                <v-list-content>
                    Tania Muley
                </v-list-content> 
                
            <v-text-field
                label="Old password"
                v-model="username"
                outlined>
            </v-text-field>
            <v-text-field
                label="New password"
                v-model="Password"
                type=password
                outlined></v-text-field>
                <v-text-field
                label="Confirm new password"
                v-model="username"
                outlined>
            </v-text-field>
            <v-btn block>
                Change Password
            </v-btn>
                    
    
            </v-col>
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
