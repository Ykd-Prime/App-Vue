<template lang="html">
  <div>
    <h1> pink </h1>
    <input type="text" name="" value="" v-model="$store.state.msg">
    <h2>{{ $store.state.msg }}</h2>
  </div>
</template>

<script>
import store from '../store'
export default {
}
</script>

<style lang="css" scoped>
h1 {
  color: pink;
}
</style>
