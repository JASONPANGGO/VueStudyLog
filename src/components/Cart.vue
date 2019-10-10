<template>
  <div>
      购物车：<span v-for="(item, index) in items" :key="index">{{item}},</span>共{{count}}个商品
  </div>
</template>

<script>
import { store, mutation } from "@/store";
export default {
  name: "Cart",
  data() {
      return {
          
      }
  },
  computed:{
      count(){
          return store.count
      },
      items(){
          return store.items
      }
  }
};
</script>

<style scoped>
</style>
