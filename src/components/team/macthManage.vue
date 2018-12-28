<!-- 队伍管理 -->
<template lang="html">
  <div class="macthManage clearfix" >
    <div class="macth" :class="{'tTab':this.h2xToggle}">
      <comMacthManageHead></comMacthManageHead>
      <invite style="overflow:hidden"></invite>
    </div>
    <div class="calendar">
      <div class="trainStatus clearfix" style="background:#fff"><!-- status状态 -->
        <calendar></calendar>
        <!-- <invite1></invite1> -->
      </div>
    </div>
  </div>
</template>

<script>
import invite from '../macth/invite.vue'
import calendar from '../calendar/calendar.vue'
import trainList from './comTrainList.vue'
import comMacthManageHead from './comMacthManageHead.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  components: {
    calendar,
    trainList,
    invite,
    comMacthManageHead
  },
  computed: {
    ...mapState([
      'h2xToggle',
      'teamFlag'
    ])
  },
}
</script>


<style lang="scss" scoped>
  .macthManage {
    padding-top: 5rem;
    width: 200%
  }

  .macth,
  .calendar {
    width: 50%;
    float: left;
  }
</style>
