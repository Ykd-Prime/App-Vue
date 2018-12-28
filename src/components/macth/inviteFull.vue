<template lang="html">
  <div class="inviteFull">
    <invite v-show="this.$store.state.macthFlag == 1"></invite>
    <invite1 v-show="this.$store.state.macthFlag == 2"></invite1>
    <invite11 v-show="this.$store.state.macthFlag == 2"></invite11>
  </div>
</template>

<script>
import invite from './invite.vue'
import invite1 from './invite1.vue'
import invite11 from './invite11.vue'
import {mapMutations,mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },
  components: {
    invite,
    invite1,
    invite11
  },

  computed: {
    ...mapState([
      'macthHeadFlag'
    ])
  },

  methods: {
    ...mapMutations([
      'pushitvite'
    ]),

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.inviteFull {
  padding-top: 5.5rem;
  overflow: hidden;
}
</style>
