<template lang="html">
  <div class="manageHead clearfix">
    <div class="col-xs-3"
      v-for="(all,index) in list"
      :class="{lborder:index == 0,rborder:index == 3}"
      >
      <p class="msg">{{all.all}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {id:'0',all:'约战中'},
        {id:'1',all:'备战中'},
        {id:'2',all:'开战中'},
        {id:'3',all:'已完结'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.manageHead {
  width: 100%;
}
p {
  margin: 0;
}

.msg {
  line-height: 5rem;
  text-align: center;
  padding: 0 1rem;
  color: rgb(75, 75, 75);
  background: #fff;
}
.col-xs-3 {
  padding: 0;
  overflow: hidden;
  margin-bottom: .5rem;
}

.col-xs-3:hover .msg {
  color: #333;
  background: #777777;
}

.lborder {
  border-radius: 5rem 0 0 5rem
}

.rborder {
  border-radius: 0 5rem 5rem 0
}
</style>
