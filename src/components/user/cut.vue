<template lang="html">
  <div>
    <input type="text" name="" value="" v-model="userdate.userid">
    <input type="password" name="" value="" v-model="userdate.userpw">
    <div @click="fiu()">login</div>
    <div>{{userdate.userid}}-{{userdate.userpw}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userdate:{
          userid:'',
          userpw:''
        },
        result:'',
      }
    },
    methods: {
      // biu() {
      //   this.$axios({
      //     methods:"post",
      //     url:'/api/pjtinphp/name.php',
      //     headers: {
      //       'Content-type':'application/x-www-form-urlencoded'
      //     },
      //     data: {
      //       userid:this.userdate.userid
      //       userpw:this.userdate.userpw
      //     }
      //   })
      // },
      push() {
        this.$http.post('/api/pjtinphp/name.php',this.userdate,{emulateJSON:true}).then((response)=>{
        // this.axios.get('http://localhost:80/pjtinphp/name.php').then((response)=>{//{userid:'1',userpw:'2'}
          this.result = response.body;
          console.log(response.body);
          if (this.result == '') {
            console.log("bingo");
          }else {
            console.log("error");
            this.userdate.userid="";
            this.userdate.password="";
          }
        },(err)=>{

        })
      },

      fiu() {
        this.$axios.post('/api/pjtinphp/name.php',this.userdate,{emulateJSON:true})
        .then((response) => {
          this.result = response.body;
          console.log(response.body);
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="css">
</style>
