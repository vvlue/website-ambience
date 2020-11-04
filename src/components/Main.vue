<!-- to run website for development "npm run serve" and open at localhost:8080" -->
<template>
  <v-parallax
    height="1145"
    src="../assets/street.jpg"
    alt="musician in a street"
  >
  <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">
          Ambience
        </h1>
        <h4 class="subheading">
          A website for Music
        </h4>
        <v-spacer />
        <v-col cols="12" class="text-center">
        <v-btn>
          Vibe
        </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-parallax>
  
</template>
<script>
 
export default {
  name: 'Main',
  props: {
    msg: String
  }
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
</style>
