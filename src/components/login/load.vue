<template lang="html">
  <div class="load" :style="load"></div>
</template>

<script>
export default {
  computed: {
    load() {
      var all = {
        'display':this.$store.state.loadShow ? 'block':'none',
        'opacity':this.$store.state.loadShow ? '1':'0',
      }
      return all
    }
  },
}
</script>

<style lang="scss" scoped>


.load {
    // background: #27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5);
    background: #f52727 linear-gradient(to right, #fb0000, #ff9605, #ffdb00, #00ff61, #ff0000);
    animation: 2s linear infinite ins,.5s ease-out insEnter;
    transition: opacity 0.2s ease-in-out;
    transform-origin: left;
    background-size: 500%;
    z-index: 999999;
    position: fixed;
    // display: block;
    width: 100%;
    opacity: 1;
    left: 0;
    bottom: 0;
}
@keyframes ins {
    0% { background-position:0% 0 }
    to { background-position: 125% 0 }
}

@keyframes insEnter {
    0% {transform:scaleX(0); transform:scaleX(0) }
    to {transform:scaleX(2); transform:scaleX(2) }
}
</style>
