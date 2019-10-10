<template>
  <div class="hello">
    <p>name:{{form.name}}</p>
    <p>age:{{form.age}}</p>
    <p>add:{{form.add.a}},{{form.add.b}}</p>
    <p>sex:{{form.sex}}</p>
    <p>
      <button @click="change('name')">change name</button>
      <br />
      <button @click="add(true)">add property 'sex' by this.form.sex = 'male'</button>
      <br />
      <button @click="add(false)">add property 'sex' by this.$set(this.form,'sex','male')</button>
    </p>
    <p>
      <input type="text" placeholder="auto focus" v-focus />
    </p>
    <p>
      <input type="text" placeholder="filters" v-model="input" />
      .toUpperCase()= {{input | cap}}
    </p>

    <div class="block">
        <h2>使用Vue.observable()传递状态</h2>
      <List />
      <Cart />
    </div>
  </div>
</template>

<script>
import List from "./List";
import Cart from "./Cart";

export default {
  name: "HelloWorld",
  components: {
    List,
    Cart
  },
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: "jason",
        age: 10,
        add: {
          a: 1,
          b: 2
        }
      },
      input: ""
    };
  },
  methods: {
    change(x) {
      this.form = Object.assign(this.form, {
        name: (this.form.name += ".")
      });
    },
    add(flag) {
      if (flag) this.form.sex = "male";
      else this.$set(this.form, "sex", "male");
    }
  },
  directives: {
    focus: {
      inserted(el, a, b) {
        el.focus();
      }
    }
  },
  filters: {
    cap: function(val) {
      return val.toUpperCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: rgb(230, 230, 230);
  margin-left: 50%;
  left: -250px;
}
</style>
