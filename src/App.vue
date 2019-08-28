<template>
  <div id="app" name="search">
    <keep-alive include="search">
    <router-view/>
    </keep-alive> 
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'App'
}
</script>

<style>
</style>
