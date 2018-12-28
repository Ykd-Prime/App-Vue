<template lang="html">
  <div class="mydata">
    <div class="hit">
      <p><span class="red">*</span>击球手数据</p>
      <div class="i1">
        <div><span v-for="(all,index) in hit" class="dt">{{all.fo}}</span></div>
        <div><span v-for="(all,index) in hit" class="dt">{{all.data}}</span></div>
      </div>
    </div>
    <div class="biu">
      <p><span class="red">*</span>投球手数据</p>
      <div class="i2">
        <div><span v-for="(all,index) in biu" class="dt">{{all.fo}}</span></div>
        <div><span v-for="(all,index) in biu" class="dt">{{all.data}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hit:[
        {fo:"AVG",data:0},
        {fo:"AB",data:0},
        {fo:"R",data:0},
        {fo:"H",data:0},
        {fo:"2B",data:0},
        {fo:"3B",data:0},
        {fo:"HR",data:0},
        {fo:"RBI",data:0},
        {fo:"SB",data:0},
      ],
      biu:[
        {fo:"ERA",data:0},
        {fo:"IP",data:0},
        {fo:"R",data:0},
        {fo:"H",data:0},
        {fo:"HP",data:0},
        {fo:"BB",data:0},
        {fo:"K",data:0},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mydata {
  margin-bottom: 1rem;
  height: 100%;
  padding-bottom: 20rem;
}
.red {
  color: #ff4b4b
}

p {
  margin-top: 1rem;
}

.dt {
  text-align: center;
  display: inline-block;
  padding: 1rem 0;
  width: 11.08%;
  border: 1px solid #C8C8C8;
}

.i2 {
  .dt {
    width: 14.22222%;
  }
}
</style>
