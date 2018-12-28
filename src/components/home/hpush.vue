<template lang="html">
  <div class="hpush">
    <div class="mainBox pb10 pt10">
      <p>动态详情</p>
      <!-- <input type="text" name="" value="" placeholder="balabalabalabala" class="bala"> -->
      <textarea class="bala form-control" rows="3" placeholder="balablalaaabal" style="height:12rem" v-model="msg"></textarea>
      <p>动态图片</p>
      <div class="clearfix">
        <div class="img-rounded"
            v-for="(all,index) in imgList"
            :key="index"
            >
          <img :src="all.file.src" alt="" class="addimg" >
          <div class="del" @click="delImg(index)">删除</div>
        </div>

        <div class="img-rounded" v-if="imgCount != 6">
          <label for="fiile" >
            <span class="fa fa-camera fa-2x"></span>
            <div class="add">添加照片</div>
          </label>
        </div>
        <span class="pull-right" style="position: relative;top: 6rem;">
          <span class="codeRed">{{imgCount}}</span>
          <span>/6 张</span>
        </span>
      </div>
      <div class="gps mt10 ">
        <span class="fa fa-map"></span>
        <span>{{ usergps }}</span>
      </div>
      <input type="file" name="" value="" id="fiile" @change="fileChange($event)">
      <!-- <div>{{ fiiles }}</div> -->
      <div class="ipush">
        <div @click="biu">发表动态</div>
      </div>

      <!-- <div v-for="(item,index) in imgList" style="text-align: left">
        {{index}}：{{item.file.name}}
      </div> -->
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name:'hpush',
  data () {
    return {
      // files: '',
      del:0,
      showFace: false,
      imgCount: 0,
      usergps: '广州宝钢体育中心',
      jpg: '',
      limit:6,
      size:0,
      imgList:[],
      tepImgs:[],
      infos:[],
      msg:''
    }
  },
  computed:{
    ...mapState([
      'user',
      'hotmsg',
    ])
  },
  methods: {
    ...mapMutations([
      'info'
    ]),
    biu() {
      // for (let all in this.imgList) {
      //   this.imgList[all].file.src;
      // }
      var ls = []
      console.log("list:",this.imgList);
      this.imgList.forEach(( all, i ) => {
        var img = all.file.src;
        ls.push(img)
      })
      this.limit = 6
      this.imgList = []
      this.infos=ls
      var all = {
        name:this.user.name,
        head:this.user.head,
        src:this.infos,
        msg:this.msg
      }
      this.info(all)
      this.$store.state.mainNavShow = true
    },

    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = ''
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type != '') {
              this.fileAdd(files[i]);
          } else {
              //文件夹处理
              this.folders(fileList.items[i]);
          }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
          files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
    },
    fileAdd(file) {
        let inthis = this;
        if (this.limit !== undefined) this.limit--;
        if (this.limit !== undefined && this.limit < 0) return;
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
          this.$dialog.toast({mes: '请选择图片文件'});
        } else {
          let reader = new FileReader();
          let image = new Image();
          let _this = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            image.onload = function(){
              let width = image.width;
              let height = image.height;
              file.width = width;
              file.height = height;
              _this.imgList.push({
                  file
              });
              inthis.imgCount = _this.imgList.length;
              // console.log(inthis.imgCount);
            };
            image.src= file.src;
          }
        }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].file.size;//总大小
      this.imgList.splice(index, 1);
      this.imgCount = this.imgList.length;
      if (this.limit !== undefined) this.limit = 6-this.imgList.length;
    },
  }
}
</script>

<style lang="scss" scoped>

.gps .glyphicon {
  color: rgb(238, 60, 60)
}
.gps {
  font-size: 1.3rem
}

.mainBox {
  width: 100%;
  background-color: #fff;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /* box-shadow: 0rem 2rem 2rem 9px #999; */
}

#fiile {
  display: none;
}
.fa-map {
  color: #ff6b6b
}
.addimg {
  border-radius: 6px;
}

.ipush {
  position: fixed;
  top: 90%;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  border-radius: 5rem;
  text-align: center;
  color: #fff;
  line-height: 4rem;
  background: #d44343;
}

.hpush{
  background: #888;
}


.bala {
  width: 100%;
  height: 12rem;
  background: #efefef
  /* vertical-align:middle; */
  /* line-height: 0 */
}
.addimg {
  // width: 100%;
}


.img-rounded {
  position: relative;
  background: #e0e0e0;
  display: table-cell;
  width: 8rem;
  height: 8rem;
  float: left;
  text-align: center;
  line-height: 8rem;
  overflow: hidden;
  color: #3c3c3c;
  margin: 0 .5rem 0 0;
  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
}

.img-rounded:hover .del {
  bottom: 0
}

.del {
  bottom:-2rem;
  background:rgba(0, 0, 0, 0.51);
  border-radius: 0 0 6px 6px;
  color: rgb(238, 238, 238);
  line-height: 2rem;
}

.delin {
  bottom: 0;
}

.del,.add {
  position: absolute;
  text-align: center;
  width: 100%;
}

.fa-camera:before {
    position: absolute;
    left: 2.2rem;
    top: 2rem;
}

.add {
  top: 2rem;
  left: 0;
}
</style>
