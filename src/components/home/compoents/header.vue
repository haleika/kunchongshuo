<template>
  <div class="Header">
    <mt-header title="昆虫说">
      <mt-button slot="left">
          <i class="el-icon-s-operation i_icon" @click="drawer"></i>
      </mt-button>
      <mt-button slot="right">
        <router-link tag="div" to="/user">
          <i class="el-icon-user i_icon"></i>
        </router-link>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name: 'homeHeader',
  data () {
    return {

    }
  },
  components:{
    "mtHeader":Header
  },
  methods:{
    drawer(){
      this.$emit("drawer",true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.i_icon{
  font-size: 1.5em;
}
</style>
