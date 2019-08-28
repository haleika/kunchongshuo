<template>
  <div class="home">
    <home-header @drawer="drawers"/>
    <home-swiper/>
    <div
      @click="$router.push({path:'/search'})"
      class="search_img"
    >
      <input 
        style="width:90%;height:2em;border-radius:3%;outline:none;border:1px solid #ccc;"
        type="text"
        placeholder="搜索"
      >
      <i class="el-icon-search"></i>
    </div>
    <div
      class="seg"
    >
      列表{{name}}
    </div>
    <home-class/>
    <!-- 左边弹窗 -->
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      style="width: 150%"
    >
      <div
        class="left_name drawer"
      >
        名称:{{name}}
      </div>
      <div
        class="left_collect drawer"
      >
        收藏:{{code}}
      </div>
      <el-button
        type="danger"
        class="left_button"
        @click="clearAllCookie()"
      >
        退出登录
      </el-button>
    </el-drawer>
    <!-- 左边弹窗 -->
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import homeHeader from "./compoents/header"
import homeSwiper from "./compoents/swiper"
import homeClass from "./compoents/class"
import axios from "axios"
import qs from 'qs'

export default {
  name: 'home',
  data () {
    return {
        drawer: false,
        direction: 'ltr',
        userid:0,
        name:"未登录",
        code:0
    }
  },
  components:{
    homeHeader,
    homeSwiper,
    homeClass
  },
  methods: {
    handleClose(done) {
      done()
    },
    drawers(data){
      this.drawer = data;
      this.getCookie("id","code");
      this.getUser()
    },
    getCookie(id,code) {
        if(this.code == 1){
          let arrone = document.cookie.match(new RegExp("(^| )" + id + "=([^;]*)(;|$)"));
          let arrtwo = document.cookie.match(new RegExp("(^| )" + code + "=([^;]*)(;|$)"));

          this.userid = arrone[2]
          this.code = arrtwo[2]
        }
    },
    clearAllCookie() {
        var date=new Date();
        date.setTime(date.getTime()-10000);
        var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
        console.log("需要删除的cookie名字："+keys);
        if (keys) {
            for (var i =  keys.length; i--;)
              document.cookie=keys[i]+"=0; expire="+date.toGMTString()+"; path=/";
        }
        location.reload();
    },
    getUser(){
      if(this.code == 1){
        let user = {};
        user.id = this.userid;
        axios({
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            method:'post',
            url:'api/user',
            data:qs.stringify(user)
        }).then(this.getUserSucc)
      }
    },
    getUserSucc(res){
      this.name = res.data[0].name;
    }
  },
  mounted(){
  }
}
</script>

<style lang="less" scoped>
.seg{
  margin-top:10px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  box-shadow: 0 2px 3px #ccc;  
}
.search_img{
  margin: .6em .6em;
}
.drawer{
  height: 2em;
  line-height: 2em;
}
.left_button{
  position:absolute;
  bottom: 6em;
}

</style>
