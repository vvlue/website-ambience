<template>
  <v-app>
    <nav>
      <div class="navbar_main">
        <v-app-bar class="navbar_main">
          <v-container fluid>
            <v-row justify="center" align="center" class="navbar_main">
              <v-toolbar-items>
                <v-btn to="/rnb" text>
                  RnB
                  <v-icon>mdi-album</v-icon>
                </v-btn>

                <v-btn to="/pop" text>
                  Pop
                  <v-icon>mdi-microphone-variant</v-icon>
                </v-btn>

                <v-btn to="/classical" text>
                  Classical
                  <v-icon>mdi-music-clef-treble</v-icon>
                </v-btn>

                <v-btn to="/personal" text>
                  Personal
                  <v-icon>mdi-headphones</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-row>
          </v-container>
        </v-app-bar>
      </div>
    </nav>
    <v-card>
      <!-- break -->
      <v-parallax height="100" src="../assets/black.jpg" alt="black background">
      <v-card-text>
          Personal Playlists
      </v-card-text>
      </v-parallax>
      <!-- dejected playlist -->
      <v-parallax
        height="1045"
        src="../assets/carpark.jpg"
        alt="empty car park at night"
      >
        <v-responsive min-height="70vh"></v-responsive>

        <v-responsive class="overflow-y-auto" max-height="1145">
          <!-- Start if scroll down -->

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="50"
            transition="fade-transition"
          >
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="grey darken-4" fill-dot right>
                <v-card>
                  <v-card-title class="grey darken-4">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Dejected
                    </h2>
                  </v-card-title>
                  <v-container>
                    
                    <v-row>
                      <v-col cols="12" md="10">
                        <iframe src="https://open.spotify.com/embed/playlist/23ABSgGM70cKpoiirLOw50" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65"> mdi-emoticon-confused-outline </v-icon>
                      </v-col>
                    </v-row>
                    
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-lazy>
        </v-responsive>
      </v-parallax>
      
      <!-- break -->
      <v-parallax height="50" src="../assets/pink.jpg" alt="pink background"></v-parallax>

      <!-- ambience playlist -->
      <v-parallax
        height="1045"
        src="../assets/japan.jpg"
        alt="rainy street in japan"
      >
        <v-responsive min-height="70vh"></v-responsive>

        <v-responsive class="overflow-y-auto" max-height="1145">
          <!-- Start if scroll down -->

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="50"
            transition="fade-transition"
          >
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="pink darken-3" fill-dot right>
                <v-card>
                  <v-card-title class="pink darken-3">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Ambience
                    </h2>
                  </v-card-title>
                  <v-container>
                    
                    <v-row>
                      <v-col cols="12" md="10">
                        <iframe src="https://open.spotify.com/embed/playlist/3ehi4tDBAjC8xuxQIOEgtK" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65">mdi-wave</v-icon>
                      </v-col>
                    </v-row>
                    
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-lazy>
        </v-responsive>
      </v-parallax>
      <!-- break -->
      <v-parallax height="50" src="../assets/black.jpg" alt="black background"></v-parallax>
      
      <!-- remoteness playlist -->
      <v-parallax
        height="1045"
        src="../assets/umbrella.jpg"
        alt="teal retro car"
      >
        <v-responsive min-height="70vh"></v-responsive>

        <v-responsive class="overflow-y-auto" max-height="1145">
          <!-- Start if scroll down -->

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="50"
            transition="fade-transition"
          >
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="red lighten-1" fill-dot right>
                <v-card>
                  <v-card-title class="red lighten-1">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Remoteness 
                    </h2>
                  </v-card-title>
                  <v-container>
                    
                    <v-row>
                      <v-col cols="12" md="10">
                        <iframe src="https://open.spotify.com/embed/playlist/6dR2rT0VORSkFr9H2frhlU" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65">mdi-bus-stop-uncovered</v-icon>
                      </v-col>
                    </v-row>
                    
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-lazy>
        </v-responsive>
      </v-parallax>
    </v-card>

    <!-- start of footer -->
    <v-footer class="font-weight-medium">
      <v-col class="text-center" cols="12">
        Copyright © {{ new Date().getFullYear() }} —
        <strong>Naya Mugot</strong> —
        <v-btn icon class="mx-4 white--text" color="brown lighten-1" @click="openEmail">
          <v-icon> mdi-email-newsletter </v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  //   data: () => ({
  //     items: [
  //       {
  //         color: "cyan lighten-3",
  //         icon: "mdi-star",
  //         text: "test",
  //       },
  //       {
  //         color: "teal lighten-3",
  //         icon: "mdi-book-variant",
  //       },
  //       //   {
  //       //     color: "green lighten-1",
  //       //     icon: "mdi-airballoon",
  //       //   },
  //       //   {
  //       //     color: "indigo",
  //       //     icon: "mdi-buffer",
  //       //   },
  //     ],
  //   }),
  // methods: {
  //   openFiftys() {
  //     window.open(
  //       "https://open.spotify.com/playlist/37i9dQZF1DWSV3Tk4GO2fq?si=tVeJx_GmT4mDPi7MkmxvvA"
  //     );
  //   },
  //   open2000() {
  //       window.open("https://open.spotify.com/album/0IpuHl2S3rACtra5VzOfFr?si=IGOszNrPR0iK73rbDQy4eQ")
  //   },
  //   openNow() {
  //     window.open("https://open.spotify.com/playlist/7lzNssRRKejqMBtiJH5JNI?si=yXGjl0dLTT2B7t0BxZqA_w")
  // },
  // openEmail() {
  //     window.open("https://forms.gle/7412ncHUmyRz5Fhc9")
  //   }
  // },
  
};
</script>
<style scoped>
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