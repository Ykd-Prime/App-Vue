<template>
  <div id="app">
    <load></load>
    <mainNav></mainNav>
    <div class="main">
      <transition name="router-fade" mode="out-in" style="height:100%">
          <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import load from './components/login/load.vue'
import mainNav from './components/mainNav.vue'


export default {
  name: 'App',
  components: {
    load,
    mainNav,
  },
  mounted() {
    setTimeout(() => {
      this.$store.state.loadShow = false
    },200)
    console.log(this.$store.state.loadShow);
  },
  created() {
    this.$store.state.loadShow = true;
    this.$router.beforeEach((to, from, next) => {
      this.$store.state.loadShow = true
      next()
    });
    console.log(this.$store.state.loadShow);
    this.$router.afterEach((to, from) => {
      setTimeout(() => {
        this.$store.state.loadShow = false
      },500)
    })
    console.log(this.$store.state.loadShow);
  }
}

</script>

<style>
.router-fade-enter-active, router-fade-leave-active {
  transition:all .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity:0;
}
.router-fade-leave {
  opacity:0;
}

#app {
  /* padding-bottom: 5rem; */
  height: 100%;
  max-width: 768px;
  margin: 0 auto;
}
.load {
  height: .35rem;
}

.main {
  height: 100%;
}
.container {
  position: relative;
}

</style>
