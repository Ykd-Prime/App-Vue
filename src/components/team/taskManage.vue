<!-- 作业管理 -->
<template lang="html">
  <div class="taskHome">
    <div class="task">
      <div class="warp clearfix" :class="{'ml-100':h3xToggle == 1,'ml-200':h3xToggle == 2}">
        <!-- 未完成页 -->
        <div class="undone">
11
        </div>
        <!-- 完成页 -->
        <div class="comp">
22
        </div>
        <!-- 批改中 -->
        <div class="repair">
33
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },

  computed: {
    ...mapState([
      'h3xToggle'
    ])
  }
}
</script>

<style lang="css">
</style>
