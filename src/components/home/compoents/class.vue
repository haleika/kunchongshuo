<template>
    <div class="class">
        <div class="class_item" v-for="item in items" :key="item"  @click="topath(item)">
            <!-- <touch-ripple :speed="1" transition="ease" > -->
                <router-link to="">
                    {{item}}
                </router-link>
            <!-- </touch-ripple> -->
        </div>
    </div>
</template>

<script>
import { touchRipple } from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
export default {
  name: 'homeClass',
  data () {
    return {
        items: ["目","科","属","种"]
    }
  },
  components:{
      touchRipple 
  },
  methods:{
      topath(item){
        this.$router.push({name:'classList',params: { name: item }});
        // console.log(item)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class_item{
    font-size: 3em;
    float: left;
    width: 47%;
    height: 3em;
    margin: .1em;
    line-height: 3em;
    text-align: center;
    box-shadow: 1px 1px 2px #ccc;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
</style>
