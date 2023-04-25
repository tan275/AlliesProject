<template>
  <div>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/images/allieslogo.png"
          transition="scale-transition" width="100" />

      </div>
      <center><h4> &nbsp;  Screen Time on Allies</h4>
                       <div class="timer">
                       <h3 id = "countup"></h3>
                       <span id="minutes"></span>:<span id="seconds"></span>
                       </div></center>
      

      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/feed')"> <v-icon color="grey">mdi-home</v-icon>
      </v-btn>
      <v-btn text @click="$router.push('/profile')"> <v-icon color="grey">mdi-account</v-icon>
      </v-btn>
      <v-btn text @click="$router.push('/helpline')"> <v-icon color="grey">mdi-handshake-outline</v-icon>
      </v-btn>
      <v-btn text @click="$router.push('/friends')"> <v-icon color="grey">mdi-account-group</v-icon>
      </v-btn>


      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#FF8469" dark v-bind="attrs" v-on="on">
            MORE
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="@/assets/images/dp.jpeg">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Tania Muley</v-list-item-title>
                <v-list-item-subtitle>Student, Pune, India</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="orange"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Activity</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-btn plain text @click="$router.push('/profile')">Profile</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn plain text @click="$router.push('/settings')">Settings</v-btn>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="$router.push('/')">
              Logout
            </v-btn>
            <v-btn color="orange" text @click="$router.push('/helpline')">
              Help
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

    </v-app-bar>
  </div>
</template>

<script>
export default {

}
var second = 0;

function upTimer ( count ) { return count > 9 ? count : "0" + count; }
setInterval( function(){
document.getElementById("seconds").innerHTML= upTimer(++second % 60);
document.getElementById("minutes").innerHTML= upTimer(parseInt(second / 60, 10));
}, 1000);
</script>

<style lang="scss" scoped>
p {
  color: black;
  padding-left: 10rem;
  padding-top: 1rem;

}

h4{
  color: black;
}

.timer{
  color: black;
}


</style>