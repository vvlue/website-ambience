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
      <v-parallax height="100" src="../assets/teal.jpg" alt="teal background">
      <v-card-text>
          Pop Music through the Years
      </v-card-text>
      </v-parallax>

      <!-- 50s Music -->
      <v-parallax
        height="1200"
        src="../assets/vintagecar.jpg"
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
            min-height="300"
            transition="fade-transition"
          >
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="cyan lighten-3" fill-dot right>
                <v-card>
                  <v-card-title class="cyan lighten-3">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Fifty's Music
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        When we think of the fiftys we think, retro, vintage,
                        Elvis Presley and so on. Fifty's Music however was more
                        than that. It was a time of music that was heavily
                        influenced by rock music as that was also beginning at
                        that time. A lot of songs in this genre could be
                        described as being melodic and simple with their catchy
                        lyrics.
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65"> mdi-amplifier </v-icon>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="teal lighten-3" fill-dot left small>
                <v-card>
                  <v-card-title class="teal lighten-3 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Playlist
                    </h2>
                    <v-icon dark size="42"> mdi-music-box-multiple </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        This is a playlist of Fiftys Music made by Spotify
                      </v-col>
                      <v-btn
                        @click="openFiftys"
                        color="teal lighten-3"
                        class="mx-0 white--text"
                      >
                        Open
                      </v-btn>
                      <!-- <v-btn href="https://open.spotify.com/playlist/37i9dQZF1DWSV3Tk4GO2fq?si=qdlGjhowSF6JN1AquPYT-Q" color="teal lighten-3" class="mx-0 white--text" > Open </v-btn> -->
                      <!-- <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSV3Tk4GO2fq" width="100" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-lazy>
        </v-responsive>
      </v-parallax>
      <!-- break -->
      <v-parallax height="100" src="../assets/blue.jpg" alt="teal background">
      <v-card-text>
          2010s Music
      </v-card-text>
      </v-parallax>
      
      <!-- 2000s Music -->
      <v-parallax height="1200" src="../assets/dj.jpg" alt="dj set">
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

            <v-timeline :dense="$vuetify.breakpoint.smAndDown" reverse>
              <v-timeline-item color="indigo darken-4" fill-dot right>
                <v-card>
                  <v-card-title class="indigo darken-4">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      2000's Music
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        2010s Music hits the listener with a wave of Nostalgia. From Lady Gaga to Rihanna, one might say they had an influence on the RnB, Hip Hop and electric sounds 
                        music during this time had. 
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65"> mdi-guitar-electric </v-icon>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="deep-purple darken-3" fill-dot left small>
                <v-card>
                  <v-card-title class="deep-purple darken-3 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Playlist
                    </h2>
                    <v-icon dark size="42"> mdi-music-box-multiple </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        This is a playlist of 2000s Music 
                      </v-col>
                      <v-btn
                        @click="open2000"
                        color="deep-purple darken-3"
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
      <!-- break -->
      <v-parallax height="100" src="../assets/black.jpg" alt="black background">
      <v-card-text>
          Music Now 
      </v-card-text>
      </v-parallax>

      <!-- Music Now -->
        <v-parallax height="1200" src="../assets/audience.jpg" alt="dj set">
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
            <v-timeline :dense="$vuetify.breakpoint.smAndDown" >
              <v-timeline-item color="grey darken-4" fill-dot right>
                <v-card>
                  <v-card-title class="grey darken-4">
                    <v-icon dark size="42" class="mr-4">
                      mdi-music-note
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Music Now
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        2010s Music hits the listener with a wave of Nostalgia. From Lady Gaga to Rihanna, one might say they had an influence on the RnB, Hip Hop and electric sounds 
                        music during this time had. 
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="65"> mdi-microphone-variant </v-icon>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="grey darken-3" fill-dot left small>
                <v-card>
                  <v-card-title class="grey darken-3 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Playlist
                    </h2>
                    <v-icon dark size="42"> mdi-music-box-multiple </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        This is a collaborative playlist
                      </v-col>
                      <v-btn
                        @click="openNow"
                        color="grey darken-3"
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
        <v-btn icon class="mx-4 white--text" color="brown lighten-1">
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
  methods: {
    openFiftys() {
      window.open(
        "https://open.spotify.com/playlist/37i9dQZF1DWSV3Tk4GO2fq?si=tVeJx_GmT4mDPi7MkmxvvA"
      );
    },
    open2000() {
        window.open("https://open.spotify.com/album/0IpuHl2S3rACtra5VzOfFr?si=IGOszNrPR0iK73rbDQy4eQ")
    }
  },
  openNow() {
      window.open("https://open.spotify.com/playlist/7lzNssRRKejqMBtiJH5JNI?si=yXGjl0dLTT2B7t0BxZqA_w")
  },
  openEmail() {
      window.open("https://forms.gle/7412ncHUmyRz5Fhc9")
    }
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