## 191009

* `watch` 和 `computed`的区别

`watch`支持异步操作比如调用接口，`computed`不可以

* `errorHandler`和`warnHandler`用于全局异常捕获

* `Vue.extend`用于独立组件

* `Vue.nextTick` 或者  `this.$nextTick(()=>{})` 代表在DOM异步更新完之后再执行回调函数。用于延迟一段代码的执行


## 191010

* `Vue.set(Object,propertyName,value)` （在组件中是`this.$set`）可以用于为data（响应式对象）中新增属性，并且是使新属性是响应式，还可以解决直接赋值data中的对象的属性数据无法监测到更新的问题。set完可以触发视图更新。

* 类似地有`Vue.delete( target, propertyName/index )`

* `Vue.directive`自定义指令或者在组件中传入`directive`属性。然后绑定钩子函数编写各种行为，`inserted,bind,update,componentUpdated,unbind`。传入的参数有`el,binding,vnode,oldVnode`

* `Vue.filters`或是在组件中定义`filters`属性指定过滤器，用于搜索，过滤，字符串处理等功能。在双花括号插值中使用`|`指定过滤器。
  
* `Vue.observable`【超好用】可以用作最小化的跨组件状态存储器，代替Vuex。