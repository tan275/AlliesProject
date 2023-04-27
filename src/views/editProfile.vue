<template>
    <div>
        <SettingNavbar :drawer="drawer" />

        <div class="content" style="background-color: #f5f5f5">
            <v-col cols="4">
                <h2>Edit Profile</h2>
            </v-col>
            <v-container fluid>
                <v-form>
                    <v-text-field label="Name" v-model="name" hint="Help people discover your account by the name you're by: either your full name, or nickname.
				  You can only change your name twice within 14 days." persistent-hint></v-text-field>
                    <v-text-field label="Username" v-model="uname" :rules="nameRules" required
                        hint="You can only change your name twice within 14 days." persistent-hint></v-text-field>
                    <v-text-field label="Status" :rules="rules" counter="60" value="Student at Symbiosis Institute of Technology
  Pune, India"></v-text-field>
                    <v-text-field label="About" v-model="about" :rules="rules" counter="150"></v-text-field>

                    <br>
                    <p style="font-size: 12px; font-weight: 300; color: #888;">Personal information <br> <br>
                        Provide your personal information, even if the account is used for a business, a pet or something
                        else. This won't be a part of your public profile.</p>

                    <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
                    <v-text-field label="Phone Number" value="702800XXXX"></v-text-field>
                    <v-select v-model="selectedItem" :items="items" label="Gender" ></v-select>
                    <v-btn elevation="2" class="save">Save</v-btn>
                </v-form>
            </v-container>
        </div>
    </div>
</template>
	
<script>
import SettingNavbar from "@/components/SettingNavbar.vue";

export default {
    data() {
    return {
      selectedItem: null,
      items: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        { text: 'Prefer not to say', value: 'Prefer not to say' }
      ]
    }
  },
    components: {
        SettingNavbar
    }
};
</script>
  
  
	