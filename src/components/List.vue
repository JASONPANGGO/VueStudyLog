<template>
  <div>
    <div class="item" v-for="(item, index) in items" :key="index" @click="addToCart(item)">{{item}}</div>
    <button @click="clearCart">清空购物车</button>
  </div>
</template>

<script>
import { store, mutation } from "../store";

export default {
  name: "List",
  data() {
    return {
      items: ["apple", "bear", "choclate", "coffee"]
    };
  },
  methods: {
    addToCart(item) {
      mutation.addToCart(item);
    },
    clearCart(){
        mutation.clearCart()
    }
  }
};
</script>

<style scoped>
.item {
  width: 60px;
  height: 30px;
  background-color: #868686;
  color: white;
  margin-top: 10px;
  cursor: pointer;
}
.item:hover {
  background-color: #999999;
}
</style>
