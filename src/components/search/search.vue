<template>
  <div class="search">
      <div class="search_heater">
        <mt-header title="搜索">
          <div slot="left">
              <mt-button icon="back" @click=" $router.go(-1)">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="search_box">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable
          @change="getData"
        >
        </el-input>
        <div class="search_tishi">
          <p>-----以下是搜索结果----</p>
        </div>
      </div>
      <div class="route" v-if="data">
        <router-link :to="{path:'/detailed',query: {name: item.name}}" class="result" v-for="item in data" :key="item.id">
          <div class="resule_img">
            <img :src="item.url" alt="">
          </div>
          <div class="result_msg">
            <div class="name">
              <p>{{item.name}}</p>
            </div>
            <div class="jieshao">
              <p>{{item.Intro}}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="result" v-else>
        <div class="result_null">
          暂无结果
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import { Search,Header  } from 'mint-ui';
export default {
  name: 'search',
  data () {
    return {
        input:'',
        data:true
    }
  },
  methods:{
      getData(){
        axios.get('api/search/'+this.input).then(this.getDataSucc)
      },
      getDataSucc(res){
          if(res.data.length == 0){
            this.data = null
          }else{
            this.data = res.data
          }
      }
  },
  components:{
      "mt-search": Search,
      "mt-header": Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mint-searchbar{
    background-color: #fff;
    padding: 2px 2px;
}
.search_box{
    height: 3.4em;
    margin-top:.6em;
    .search_tishi{
      font-size: .3em;
      text-align: center;
      margin-top: .8em;
      color:rgb(121, 116, 116);
    }
}
.result{
  margin-top: 1em;
  display:flex;
  justify-content: space-around;
  box-shadow: 2px 2px 3px #ccc;
  .resule_img{
    width: 6em;
    img{
      width: 100%;
      border-radius: 5px;
    }
  }
  .result_msg{
    .jieshao{
      padding-top: 1em;
      width: 12em;
      p{
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap;
      }
    }
  }
  .result_null{
    height: 3em;
    line-height: 3em;
    color: rgb(80, 75, 75);
  }
}
</style>