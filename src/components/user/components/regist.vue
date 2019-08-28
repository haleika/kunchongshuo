<template>
  <div class="regist">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
      <mt-button class="regist_btn" :disabled="disf" type="primary" size="large" @click="regist">注册</mt-button>
  </div>
</template>

<script>
import axios from "axios"
import qs from 'qs'
import { Field,Toast  } from 'mint-ui'
export default {
  name: 'userRegist',
  data () {
    return {
      username:"",
      password:"",
      phone:"",
      birthday:""
    }
  },
  computed:{
    disf(){
      if(this.username==""||this.password==""||this.phone==""||this.birthday==""){
        return true;
      }else{
        return false;
      }
    }
  },
  components:{
    "mt-field":Field
  },
  methods:{
    regist(){
      let datar = {};
      datar.username = this.username;
      datar.password = this.password;
      datar.phone = this.phone;
      datar.birthday = this.birthday;
      axios({
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          method:'post',
          url:'api/postData',
          data:qs.stringify(datar)
      })
      .then(res=>{
          console.log('res=>',res);            
      })

      Toast({
        message: '注册成功',
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .regist_btn{
    margin-top:3em;
  }
</style>
