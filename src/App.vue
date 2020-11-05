<!-- to run website for development "npm run serve" and open at localhost:8080" -->
<template>
  <v-app>
    <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Ambience
      </h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="basil"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Pop
        <v-icon>mdi-microphone-variant</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        RnB
        <v-icon>mdi-album</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Classical
        <v-icon>mdi-music-clef-bass</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        Classical
        <v-icon>mdi-music-note</v-icon>
      </v-tab>
    </v-tabs>
    <!-- Start of Parallax -->
    <v-parallax
      height="1145"
      src="../src/assets/street.jpg"
      alt="musician in a street"
    >
    <!-- responsive -->
    <v-row align="center">
        <v-col class="text-center" cols="12">
        <v-card
          class="mx-auto"
          max-width="450"
        >
          <v-card-title>
            Ambience
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            Nunc vel mollis est. Quisque quis euismod lacus. 
            Morbi a consequat lectus. 
            Pellentesque id imperdiet ex. 
            Sed lacinia massa et turpis dapibus feugiat. 
            Nullam quis molestie sapien. Maecenas venenatis volutpat congue. 
            In hac habitasse platea dictumst. <br>
            Suspendisse sit amet egestas nisl, non ullamcorper dolor. 
            Sed nisl leo, varius vel metus sit amet, viverra semper elit. 
            Fusce aliquam condimentum erat, vel pellentesque tellus rhoncus vitae. 
            Fusce in arcu hendrerit, luctus nibh sit amet, finibus lacus. 
            Praesent sit amet euismod leo. 
            Vivamus arcu ante, fringilla tempor semper ut, semper non est. <br>
            Aenean volutpat dui a velit auctor, at interdum lacus consectetur. 
            Ut ex augue, varius a hendrerit eu, interdum at mauris.
          </v-card-text>
        </v-card>
  
    <!-- <Main v-model="showMain" @added="$emit('refresh')" /> -->
    
          <!-- <h1 class="display-1 font-weight-thin mb-4">
            Ambience
          </h1> -->
          <!-- <div class="subheading blue-grey--text text--lighten-1">
            <p>
            
            </p>
          </div> -->
          <v-spacer />
          <v-col cols="12" class="text-center">
          <v-btn href="https://bit.ly/33JnUaY" >
            vibe
          </v-btn>

          <!-- <v-btn @click="showMain = true" >
            vibe
          </v-btn> -->

          <!-- <v-btn :to="{name: 'Main', params: $route.params}">
            vibe
          </v-btn> -->
          </v-col>
        </v-col>
      </v-row>
    </v-parallax>
    
    <v-footer
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        Copyright © {{ new Date().getFullYear() }} — <strong>Naya Mugot</strong> — 
        <v-btn icon class="mx-4 white--text" color="brown lighten-1"> 
          <v-icon>
            mdi-twitter
          </v-icon>
        </v-btn>
        
      </v-col>
    </v-footer>
    </v-card>
  </v-app>
</template>
<script>
 
//  import Main from '@/components/Main.vue'

export default {
  name: 'App',
  props: {
    msg: String
  },
  data () {
      return {
        tab: null,
        items: [
          'Pop', 'RnB', 'Classical', 'Jazz',
        ],
        
        
      }
    },
    
  // components: {
  //   Main
  // },
  // data() {
  //   return {
  //     showMain: false,
  //   }
  // },
  // methods: {
  //   showMain() {
  //     this.showMain = true
  //   }
  // }
}
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
.basil {
  background-color: #8D6E63 !important;
}
.basil--text {
  color: #3E2723 !important;
}
</style>
