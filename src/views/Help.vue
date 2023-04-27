<template>
    <div>
      <SettingNavbar :drawer="drawer" />
  
      <v-col cols="4">
            <AppHeader title="Help"></AppHeader>
        </v-col>
        <v-row align="center" justify="space-around" >
            <v-btn text @click="$router.push('/helpline')">
                Help Center
            </v-btn>
        </v-row>
        <v-row align="center" justify="space-around" >
            <v-btn text @click="$router.push('/guidelines')">
                Community Guidelines
            </v-btn>
        </v-row>
        <v-row align="center" justify="space-around" >
            <v-btn text @click="$router.push('')">
                Privacy and Security
            </v-btn>
        </v-row>
    </div>
  </template>
  
  <script>
  import SettingNavbar from "@/components/SettingNavbar.vue";
  
  export default {
    data() {
      return {
      };
    },
    components: {
      SettingNavbar
    }
  };
  </script>
  