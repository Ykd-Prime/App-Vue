<template lang="html">
  <div class="edit tty5rem trainList">

      <div class="trainTimer">
        <p>
          <span></span>
          训练时间
        </p>
        <div class="date">
          <span>{{ year }}-{{ month }}-{{day}}</span>
          <span class="faDown" @click="dateOpt()"><i class="fa fa-chevron-down"></i></span>
        </div>
        <div class="dateOpt" v-show="show==0">
          <ul class="year">
            <li v-for="(y,index) in years"
                :class="{'bgfff':index == yearIndex}"
                @click="bgfff(index,y,'y')"
            >
              {{ y }}
            </li>
          </ul>

          <ul class="month">
            <li v-for="(m,index,key) in months"
              :class="{'bgfff':index == monthIndex}"
              @click="bgfff(index,m,'m')"
            >
              {{m}}
            </li>
          </ul>

          <ul class="day">
            <li v-for="(d,index,key) in days"
              :class="{'bgfff':index == dayIndex}"
              @click="bgfff(index,d,'d')"
            >
              {{d}}
            </li>
          </ul>
        </div>

        <div class="hour">
          <div class="hourOpt">
            <span>{{ hour }}:{{ minute }}</span>
            <span class="faDown" @click="hourOpt()"><i class="fa fa-chevron-down"></i></span>
          </div>

          <div class="hourOpt">
            <span>{{ hour }}:{{ minute }}</span>
            <span class="faDown" @click="hourOpt()"><i class="fa fa-chevron-down"></i></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: '2017-09-07',
      show:true,//控制下拉
      hourshow:true,
      notDay:30,
      day:'11',
      days:[
        '1日','2日','3日','4日','5日','6日','7日','8日','9日','10日',
        '11日','12日','13日','14日','15日','16日','17日','18日','19日','20日',
        '21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日',
      ],
      month:'11',
      months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      yearIndex:-1,
      monthIndex:-1,
      dayIndex:-1,
      years:['2017','2018','2019','2020','8012'],
      year:'8102',
      editDate:'',
      hour:'14',
      minute:'00',
      timerHour:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','00'],
      timerMinute:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','00']
    }
  },
  methods: {
    bgfff(index,date,name) {

      if (name == 'y') {
        this.yearIndex = index;
        this.year = date
      }
      if (name == 'm') {
        this.monthIndex = index;
        this.month = date;
      }
      if (name == 'd') {
        this.dayIndex = index;
        this.day = date;
      }

    },

    dateOpt() {
      this.show = !this.show
    },

    hourOpt() {
      this.hourshow = !this.hourshow
    }
  }
}
</script>

<style lang="css">
</style>
