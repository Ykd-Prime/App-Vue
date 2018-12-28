 <!-- 队伍训练 -->
 <template lang="html"> <!--训练管理 -->
  <div class='train clearfix'>
    <div class="manage" v-if="this.teamFlag == 1">
      <!-- 队伍列表 -->
        <trainList :class="{'tTab':this.h1xToggle}"></trainList>

      <!-- 日历calendar -->
      <div class="calendar  pt5">
        <div class="trainStatus clearfix" style="background:#fff"><!-- status状态 -->
          <calendar></calendar>
          <!-- <invite1></invite1> -->
          <trainList style="width:100%"></trainList>
        </div>
      </div>
    </div>


    <div class="detail">
      <router-view/>
    </div>
  </div>
</template>

<script>
import invite1 from '../macth/invite1.vue'
import calendar from '../calendar/calendar.vue'
import trainList from './comTrainList.vue'
import detail from './trainDetail.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      trainStatus: ['进行中','未开始','两天后'],
    }
  },
  components: {
    detail,
    trainList,
    calendar,
    invite1,
  },
  computed: {
    ...mapState([
      'h1xToggle',
      'teamFlag'
    ])
  },
  methods: {
    ...mapMutations([
      'pushNext'
    ]),

    pushNextFunc() {
      this.pushNext();
      this.$router.push({name:'trainDetail'})
    }
  }
}
</script>

<style lang="scss">
</style>
