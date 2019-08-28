<template>
  <div class="detailed"  v-if="data">
      <div class="detailed_heater">
        <mt-header :title="data.name">
          <div slot="left">
              <mt-button icon="back" @click=" $router.go(-1)">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="mesg">
          <div class="mesg_top">
            <div class="demo-image__preview">
              <el-image 
                style="width: 100%; height: 100%"
                :src="url" 
                :preview-src-list="srcList">
              </el-image>
            </div>
          </div>
          <div class="mesg_class">
            <table>
              <tr>
                <td class="table_one">名字</td>
                <td class="table_two">{{data.name}}</td>
                <td class="table_one">界</td>
                <td class="table_two">{{data.jie}}</td>
              </tr>
              <tr>
                <td class="table_one">门</td>
                <td class="table_two">{{data.men}}</td>
                <td class="table_one">纲</td>
                <td class="table_two">{{data.gang}}</td>
              </tr>
              <tr>
                <td class="table_one">目</td>
                <td class="table_two">{{data.mu}}</td>
                <td class="table_one">科</td>
                <td class="table_two">{{data.ke}}</td>
              </tr>
            </table>
          </div>
          <div class="mesg_bottom">
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  介绍
                </template>
                <div class="con">
                  {{data.Intro}}
                </div>
              </el-collapse-item>
              <el-collapse-item title="形态">
                <div class="con">
                  {{data.form}}
                </div>
              </el-collapse-item>
              <el-collapse-item title="习性">
                <div class="con">
                  {{data.habit}}
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="tishi">
              <p>---以上信息均来自百度百科---</p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import { Search } from 'mint-ui';
export default {
  name: 'detailed',
  data () {
    return {
        input:'',
        data:null,
        url: "",
        srcList: [],
        item:this.$route.query.name
    }
  },
  created(){
      this.getData();
  },
  methods:{
      getData(){
        axios.get('api/search/'+this.item).then(this.getDataSucc)
      },
      getDataSucc(res){
          if(res.data.length == 0){
            this.data = "没有找到"
          }else{
            this.data = res.data[0]
            this.url = this.data.url
            this.srcList[0] = this.data.url
          }
      }
  },
  components:{
      "mt-search": Search
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
}
.mesg{
  .mesg_top{
    display: flex;
    justify-content: space-between;
    .top_img{
      margin: 10px 10px;
      img{
        width: 100%;
      }
    }
  }
  .mesg_class{
    margin-top: 20px;
    table{
      width: 100%;
      height: 100px;
      line-height: 2em;
      text-align: center;
      tr{
        td{
          border: 1px solid #000;
          height: 2em;
        }
        .table_one{
          background-color: rgb(119, 115, 115);
          font-weight: bold;
        }
        
      }
    }
  }
  .mesg_bottom{
    .title{
      font-size: 1.4em;
      padding: .3em .2em;
      margin-top:.2em;
      background-color: rgb(109, 106, 106);
    }
    .con{
        text-indent: .6em;
        padding:.2em .3em;
        box-shadow: 2px 2px 2px #ccc;
    }
  }
  .tishi{
      text-align: center;
      font-size: .3em;
      color: rgb(51, 49, 49);
      margin:3em 0;
  }
}
</style>