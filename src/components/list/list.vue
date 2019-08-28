<template>
  <div class="list">
      <div class="search_heater">
        <mt-header :title="this.$route.params.name">
          <div slot="left">
            <mt-button icon="back" @click=" $router.go(-1)">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <waterfall :line-gap="width/2" :watch="list">
        <waterfall-slot
          v-for="(item, index) in list"
          :width="40"
          :height="item.height"
          :order="index"
          :key="item.id"
          :style="item.bgcolor"
        >
          <router-link :to="{name:'Mu',params:{name:item.name }}" tag="div" class="item">
            <div class="item_img">
              <img :src="item.url" alt="">
            </div>
            <div class="item_name">
              {{item.name}}
            </div>
          </router-link>
        </waterfall-slot>
      </waterfall>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import axios from "axios"
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  name: 'homeHeader',
  data () {
    return {
        list:[],
        width :window.screen.width,
        Mudata:""
    }
  },
  components:{
    "mtHeader":Header,
    Waterfall,
    WaterfallSlot
  },
  created(){
      this.gethttp();
  },
  methods:{
      gethttp(){
            switch(this.$route.params.name){
              case "目":
                axios.get("api/").then(this.getHttpSucc)
                break;
              case "科":
                console.log("科")
                break;
              case "属":
                console.log("属")
                break;
              case "种":
                console.log("种")
                break;
            }
        },
      getHttpSucc(res){
        this.list = res.data;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list{
  text-align: center;
  .item{
    padding:0 .2em;
    .item_img{
      padding-top:.6em;
      img{
        width: 100%;
        border-radius: .6em;
      }
    }
    .item_name{
      padding-top:.2em;
    }
  }
}



</style>
