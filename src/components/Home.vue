<!-- to run website for development "npm run serve" and open at localhost:8080" -->
<template>
  <v-parallax
    height="900"
    src="/Users/naymugo/Desktop/website-test/src/assets/street.jpg"
    alt="musician in a street"
  >
  </v-parallax>
  
</template>
<script>
 
export default {
  name: 'Home',
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
