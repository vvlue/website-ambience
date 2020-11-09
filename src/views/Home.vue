<!-- to run website for development "npm run serve" and open at localhost:8080" -->
<template>
  <v-app>
    <nav>
        <v-app-bar class="navbar_main">
          <v-container fluid>
            <v-row justify="center" align="center" class="navbar_main">
              <v-toolbar-items>
                <v-btn to="/rnb" text >
                  RnB
                  <v-icon>mdi-album</v-icon>
                </v-btn>

                <v-btn to="/pop" text >
                  Pop
                  <v-icon>mdi-microphone-variant</v-icon>
                </v-btn>

                <v-btn to="/classical" text >
                  Classical
                  <v-icon>mdi-music-clef-treble</v-icon>
                </v-btn>

                <v-btn to="/personal" text >
                  Personal
                  <v-icon>mdi-headphones</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-row>
          </v-container>
        </v-app-bar>
      </nav>
    <v-card>
      <v-parallax
        height="1145"
        src="../assets/street.jpg"
        alt="musician in a street"
      >
      <v-responsive min-height="70vh"></v-responsive>
      
        <v-responsive class="overflow-y-auto" max-height="1145">
          
          <!-- Start if scroll down -->

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="300"
            transition="fade-transition"
          >
            <!-- this is for rachel you big fat white nasty smelling fatt bitch. why you take me off the mf schedule with your trifling dirty white racist ass big fat bicth oompa loompa body ass bitch. -->
            <!-- Content goes here -->
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <v-card class="mx-auto" max-width="450">
                  <v-card-title> Ambience </v-card-title>
                  <v-card-text>
                    Ambience is a website that was made to show three different Genres of Music.
                    It showcases three Genres <b> Pop, RnB and Classical music </b> <br>
                    It also showcases playlists that Ive made myself
                    <br>
                    Press vibe for a surpise 
                  </v-card-text>
                  <v-spacer />
                  <v-card-actions>
                  <v-col cols="12" class="text-center">
                    <v-btn href="https://bit.ly/33JnUaY"> vibe </v-btn>
                  </v-col>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-responsive
              height="200vh"
              class="text-center pa-2"
            ></v-responsive>
          </v-lazy>
        </v-responsive>
      </v-parallax>

      <!-- start of footer -->
      <v-footer class="font-weight-medium">
        <v-col class="text-center" cols="12">
          Copyright © {{ new Date().getFullYear() }} —
          <strong>Naya Mugot</strong> —
          <v-btn icon class="mx-4 white--text" color="brown lighten-1">
            <v-icon> mdi-email-newsletter </v-icon>
          </v-btn>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: "App",
  methods: {
    openEmail() {
      window.open("https://forms.gle/7412ncHUmyRz5Fhc9")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* Helper classes */
.ambience {
  background-color: #000 !important;
}
.ambience--text {
  color: #efebe9 !important;
}
/* nav bar */
.navbar_btn {
  text-decoration: none;
  margin: 1rem;
  color: #212121;
  padding: 0px;
  font-size: 1rem;
  width: 100%;
}
.navbar_main {
  position: relative;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: normal;
  color: #212121 !important;
}
</style>