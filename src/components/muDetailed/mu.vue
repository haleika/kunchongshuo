<template>
  <div class="mu">
      <div class="search_heater">
        <mt-header :title="getData">
          <div slot="left">
              <mt-button icon="back" @click=" $router.go(-1)">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="Mu_con">
        <router-link
          :to="{path:'/detailed',query:{name: item.name}}"
          tag="div"
          class="result"
          v-for="item in Mulist"
          :key="item.name"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img v-lazy="item.url" class="image">
            <div style="padding: 14px;">
              <span>名称：{{item.name}}</span>
            </div>
            <div class="jieshao">
              <p>{{item.Intro}}</p>
            </div>
          </el-card>
        </router-link>
      </div>
  </div>
</template>

<script>

import { Lazyload } from 'mint-ui';
import axios from 'axios'
export default {
  name: 'mu',
  data () {
    return {
        getData:this.$route.params.name,
        Mulist:[],
        loading:true
    }
  },
  methods:{
    getMudata(){
      axios.get("api/Mu/"+this.getData).then(this.getMudataSucc)
    },
    getMudataSucc(res){
      let dataList = res.data;
      this.Mulist = dataList
    }
  },
  mounted(){
    this.getMudata()
  }
}
</script>

<style lang="less" scoped>
.result{
  margin-top: 1em;
  display:flex;
  justify-content: space-around;
  box-shadow: 2px 2px 3px #ccc;
  .image {
      margin: .2em auto;
      width: 90%;
      display: block;
      border-radius: 5px;
    }
    .jieshao{
      margin: 0 .2em .6em .2em;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
    }
}


</style>
