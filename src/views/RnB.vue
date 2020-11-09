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

              <v-btn to="/lofi" text>
                Lofi
                <v-icon>mdi-headphones</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-row>
        </v-container>
      </v-app-bar>
      </div>
    </nav>

    <v-card>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title class="title"> Lorem Ipsum Dolor </v-card-title>
            <v-card-text class="white text--primary">
              <p>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </p>
              <v-btn :color="item.color" class="mx-0" outlined> Button </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
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
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
      },
    ],
  }),
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