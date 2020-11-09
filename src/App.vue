<template>
  <div id="app">
    <v-card color="ambience">
      <div class="text-center justify-center py-6">
        <v-btn to="/" text x-large block>
          <h1 class="font-weight-bold display-3 ambience--text">ambience</h1>
        </v-btn>
      </div>
      
      <!-- <nav>
        <v-app-bar class="navbar_main">
          <v-container fluid>
            <v-row justify="center" align="center" class="navbar_main">
              <v-toolbar-items>
                <v-btn to="/rnb" text color="white">
                  RnB
                  <v-icon>mdi-album</v-icon>
                </v-btn>

                <v-btn to="/pop" text color="white">
                  Pop
                  <v-icon>mdi-microphone-variant</v-icon>
                </v-btn>

                <v-btn to="/classical" text color="white">
                  Classical
                  <v-icon>mdi-music-clef-treble</v-icon>
                </v-btn>

                <v-btn to="/lofi" text color="white">
                  Lofi
                  <v-icon>mdi-headphones</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-row>
          </v-container>
        </v-app-bar>
      </nav> -->
    </v-card>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// #nav {
//   position: relative;
//   box-sizing: border-box;
//   font-size: 1.2rem;
//   font-weight: normal;
//   color: #212121 !important;

//   // a {
//   //   // font-weight: bold;
//   //   // color: #2c3e50;

//   //   &.router-link-exact-active {
//   //     color: #42b983;
//   //   }
//   // }
// }
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
