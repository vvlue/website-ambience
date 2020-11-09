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
      <!-- What is pop music -->
      <!-- break -->
      <v-parallax height="100" src="../assets/black.jpg" alt="black background">
      <v-card-text>
          What is RnB
      </v-card-text>
      </v-parallax>

      <!-- 50s Music -->
      <v-parallax
        height="1200"
        src="../assets/vinyl.jpg"
        alt="teal retro car"
      >
        <v-responsive min-height="80vh"></v-responsive>

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

            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="red darken-3" fill-dot right>
                <v-card>
                  <v-card-title class="red darken-3">
                    <v-icon dark size="42" class="mr-4">
                      mdi-disc
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      RnB
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        Rnb, sometimes known as R&B, stands for rhythmn and blues. Originating from 
                        African American comunities in the 1940s. It is now a mainstream genre that has HipHop mixed into it.
                        With artists like Joji, Khalis, SZA, topping the charts RnB has become more than just sound but how vocals 
                        can make you feel. 
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65"> mdi-microphone-variant </v-icon>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="orange darken-3" fill-dot left small>
                <v-card>
                  <v-card-title class="orange darken-3 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Playlist
                    </h2>
                    <v-icon dark size="42"> mdi-music-box-multiple </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        This is a playlist of RnB Music
                      </v-col>
                      <v-btn
                        @click="openRnb"
                        color="orange darken-3"
                        class="mx-0 white--text"
                      >
                        Open
                      </v-btn>
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
  methods: {
    openRnb() {
      window.open(
        "https://open.spotify.com/playlist/37i9dQZF1DX7J2y2eWxEnR?si=augBAQFyQjKY56SjBPkKSg"
      );
    },
  //   open2000() {
  //       window.open("https://open.spotify.com/album/0IpuHl2S3rACtra5VzOfFr?si=IGOszNrPR0iK73rbDQy4eQ")
  //   },
  //   openNow() {
  //     window.open("https://open.spotify.com/playlist/7lzNssRRKejqMBtiJH5JNI?si=yXGjl0dLTT2B7t0BxZqA_w")
  // },
  openEmail() {
      window.open("https://forms.gle/7412ncHUmyRz5Fhc9")
    }
  },
  
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