<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-text="'CUSTOME DIRECTIVE'" v-highlight:background="green"></p>
    <p v-text="'cutome arguments'" v-highlight:background="yellow"></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Directives'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
