import Vue from 'vue';

export let store = Vue.observable({
    count: 0,
    items:[]
})

export let mutation = {
    addCount() {
        store.count++
    },
    addToCart(item){
        store.items.push(item)
        this.addCount()
    },
    clearCart(){
        store.items = []
        store.count = 0
    }
}
