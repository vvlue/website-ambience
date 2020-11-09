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
      <!-- What is Classical music -->
      <!-- break -->
      <v-parallax height="100" src="../assets/brown.jpg" alt="brown background">
        <v-card-text> What is Classical Music </v-card-text>
      </v-parallax>

      <!-- Classical Music -->
      <v-parallax height="1200" src="../assets/violin.jpg" alt="teal retro car">
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
              <v-timeline-item color="brown lighten-1" fill-dot right>
                <v-card>
                  <v-card-title class="brown lighten-1">
                    <v-icon dark size="42" class="mr-4">mdi-music-clef-treble</v-icon>
                    <h2 class="display-1 white--text font-weight-light">Classical Music</h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        Classical music is a type of music that spans over hundreds of years. There are three main periods, Baroque, classical and Romantic
                        It is one of the oldest lasting forms of entertainment 
                        and still continues to influence music today. 
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="openDean" icon v-bind="attrs" v-on="on">
                        <v-icon size="65"> mdi-metronome</v-icon>
                        </v-btn>
                        
                        </template>
                        <span>Credits to Dean</span>
                      </v-tooltip>
                      
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="brown darken-4" fill-dot left small>
                <v-card>
                  <v-card-title class="brown darken-4 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Playlist
                    </h2>
                    <v-icon dark size="42"> mdi-music-box-multiple </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        This is a playlist of Classical Music
                      </v-col>
                      <v-btn
                        @click="openClassical"
                        color="brown darken-4"
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
        <v-btn @click="openEmail" icon class="mx-4 white--text" color="brown lighten-1">
          <v-icon> mdi-email-newsletter </v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  methods: {
    openClassical() {
      window.open(
        "https://open.spotify.com/playlist/3Bo22UXkyga7XpzN3xTdjU?si=h09Bihz3RR-M3odZUb2r1Q"
      );
    },
    openDean() {
      window.open(
        "https://tenor.com/view/eyes-dancing-potato-potato-dance-cool-gif-12315869"
      );
    },
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