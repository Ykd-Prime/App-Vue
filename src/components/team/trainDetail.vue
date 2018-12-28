<template lang="html">
  <div class="trainDetail">
    <trainList style="transform: translateY(-5rem);" v-if="teamFlag == 11"></trainList>
    <trainEdit v-if="teamFlag == 12"></trainEdit>
  </div>
</template>

<script>
import trainEdit from './trainEdit.vue'
import trainList from './comTrainList.vue'
import {mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },

  computed: {
    ...mapState([
      'teamFlag'
    ])
  },

  components: {
    trainList,
    trainEdit
  }
}
</script>

<style lang="scss">
@import '../../css/team.scss'
</style>
