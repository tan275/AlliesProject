<template>
  
    <div class="container" style="background-color: #f5f5f5"> 
      
      <SettingNavbar :drawer="drawer" />
      <v-row>
        <v-col cols="10" sm="6" offset-sm="3" md="4" offset-md="4" offset="1">
          <v-list-item-avatar size="60" >
            <v-img src="@/assets/images/dp.jpeg" alt="Tania"></v-img>
          </v-list-item-avatar>
          <v-list-content>
            Tania Muley
          </v-list-content>
  
          <v-text-field label="Old password" v-model="username" outlined>
          </v-text-field>
          <v-text-field label="New password" v-model="Password" type=password outlined></v-text-field>
          <v-text-field label="Confirm new password" v-model="username" outlined>
          </v-text-field>
          <v-btn block>
            Change Password
          </v-btn>
  
  
        </v-col>
      </v-row>
    </div>
  </template>
    
  <script>
  import SettingNavbar from "@/components/SettingNavbar.vue";
  
  export default {
    data() {
      return {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
    },
    components: {
      SettingNavbar
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; }
    </style>
    