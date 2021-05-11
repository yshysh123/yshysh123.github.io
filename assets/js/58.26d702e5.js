(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{528:function(e,t,v){"use strict";v.r(t);var i=v(31),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[e._v("vue 全局 api")])]),e._v(" "),v("h1",{attrs:{id:"vue-use-plugin-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-use-plugin-做了什么？"}},[e._v("#")]),e._v(" Vue.use(plugin) 做了什么？")]),e._v(" "),v("p",[e._v("负责安装 plugin 插件，其实就是执行插件提供的 install 方法。")]),e._v(" "),v("ul",[v("li",[e._v("首先判断该插件是否已经安装过")]),e._v(" "),v("li",[e._v("如果没有，则执行插件提供的 install 方法安装插件，具体做什么有插件自己决定")])]),e._v(" "),v("h1",{attrs:{id:"vue-mixin-options-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-mixin-options-做了什么？"}},[e._v("#")]),e._v(" Vue.mixin(options) 做了什么？")]),e._v(" "),v("p",[e._v("负责在 Vue 的全局配置上合并 options 配置。然后在每个组件生成 vnode 时会将全局配置合并到组件自身的配置上来。")]),e._v(" "),v("ul",[v("li",[e._v("标准化 options 对象上的 props、inject、directive 选项的格式")]),e._v(" "),v("li",[e._v("处理 options 上的 extends 和 mixins，分别将他们合并到全局配置上")]),e._v(" "),v("li",[e._v("然后将 options 配置和全局配置进行合并，选项冲突时 options 配置会覆盖全局配置")])]),e._v(" "),v("h1",{attrs:{id:"vue-component-compname-comp-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-component-compname-comp-做了什么？"}},[e._v("#")]),e._v(" Vue.component(compName, Comp) 做了什么？")]),e._v(" "),v("p",[e._v("负责注册全局组件。其实就是将组件配置注册到全局配置的 components 选项上（options.components），然后各个子组件在生成 vnode 时会将全局的 components 选项合并到局部的 components 配置项上。")]),e._v(" "),v("ul",[v("li",[e._v("如果第二个参数为空，则表示获取 compName 的组件构造函数")]),e._v(" "),v("li",[e._v("如果 Comp 是组件配置对象，则使用 Vue.extend 方法得到组件构造函数，否则直接进行下一步")]),e._v(" "),v("li",[e._v("在全局配置上设置组件信息，this.options.components.compName = CompConstructor")])]),e._v(" "),v("h1",{attrs:{id:"vue-directive-my-directive-xx-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-directive-my-directive-xx-做了什么？"}},[e._v("#")]),e._v(" Vue.directive('my-directive', {xx}) 做了什么？")]),e._v(" "),v("p",[e._v("在全局注册 my-directive 指令，然后每个子组件在生成 vnode 时会将全局的 directives 选项合并到局部的 directives 选项中。原理同 Vue.component 方法：")]),e._v(" "),v("ul",[v("li",[e._v("如果第二个参数为空，则获取指定指令的配置对象")]),e._v(" "),v("li",[e._v("如果不为空，如果第二个参数是一个函数的话，则生成配置对象 { bind: 第二个参数, update: 第二个参数 }")]),e._v(" "),v("li",[e._v("然后将指令配置对象设置到全局配置上，this.options.directives['my-directive'] = {xx}")])]),e._v(" "),v("h1",{attrs:{id:"vue-filter-my-filter-function-val-xx-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-filter-my-filter-function-val-xx-做了什么？"}},[e._v("#")]),e._v(" Vue.filter('my-filter', function(val) {xx}) 做了什么？")]),e._v(" "),v("p",[e._v("负责在全局注册过滤器 my-filter，然后每个子组件在生成 vnode 时会将全局的 filters 选项合并到局部的 filters 选项中。原理是：")]),e._v(" "),v("ul",[v("li",[e._v("如果没有提供第二个参数，则获取 my-filter 过滤器的回调函数")]),e._v(" "),v("li",[e._v("如果提供了第二个参数，则是设置 this.options.filters['my-filter'] = function(val) {xx}。")])]),e._v(" "),v("h1",{attrs:{id:"vue-extend-options-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-extend-options-做了什么？"}},[e._v("#")]),e._v(" Vue.extend(options) 做了什么？")]),e._v(" "),v("p",[e._v("Vue.extend 基于 Vue 创建一个子类，参数 options 会作为该子类的默认全局配置，就像 Vue 的默认全局配置一样。所以通过 Vue.extend 扩展一个子类，一大用处就是内置一些公共配置，供子类的子类使用。")]),e._v(" "),v("ul",[v("li",[e._v("定义子类构造函数，这里和 Vue 一样，也是调用 _init(options)")]),e._v(" "),v("li",[e._v("合并 Vue 的配置和 options，如果选项冲突，则 options 的选项会覆盖 Vue 的配置项")]),e._v(" "),v("li",[e._v("给子类定义全局 API，值为 Vue 的全局 API，比如 Sub.extend = Super.extend，这样子类同样可以扩展出其它子类")]),e._v(" "),v("li",[e._v("返回子类 Sub")])]),e._v(" "),v("h1",{attrs:{id:"vue-set-target-key-val-做了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-set-target-key-val-做了什么"}},[e._v("#")]),e._v(" Vue.set(target, key, val) 做了什么")]),e._v(" "),v("p",[e._v("由于 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')，所以通过 Vue.set 为向响应式对象中添加一个 property，可以确保这个新 property 同样是响应式的，且触发视图更新。")]),e._v(" "),v("ul",[v("li",[e._v("更新数组指定下标的元素：Vue.set(array, idx, val)，内部通过 splice 方法实现响应式更新")]),e._v(" "),v("li",[e._v("更新对象已有属性：Vue.set(obj, key ,val)，直接更新即可 => obj[key] = val")]),e._v(" "),v("li",[e._v("不能向 Vue 实例或者 $data 动态添加根级别的响应式数据")]),e._v(" "),v("li",[e._v("Vue.set(obj, key, val)，如果 obj 不是响应式对象，会执行 obj[key] = val，但是不会做响应式处理")]),e._v(" "),v("li",[e._v("Vue.set(obj, key, val)，为响应式对象 obj 增加一个新的 key，则通过 defineReactive 方法设置响应式，并触发依赖更新")])]),e._v(" "),v("h1",{attrs:{id:"vue-delete-target-key-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-delete-target-key-做了什么？"}},[e._v("#")]),e._v(" Vue.delete(target, key) 做了什么？")]),e._v(" "),v("p",[e._v("删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。当然同样不能删除根级别的响应式属性。")]),e._v(" "),v("ul",[v("li",[e._v("Vue.delete(array, idx)，删除指定下标的元素，内部是通过 splice 方法实现的")]),e._v(" "),v("li",[e._v("删除响应式对象上的某个属性：Vue.delete(obj, key)，内部是执行 delete obj.key，然后执行依赖更新即可")])]),e._v(" "),v("h1",{attrs:{id:"vue-nexttick-cb-做了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick-cb-做了什么？"}},[e._v("#")]),e._v(" Vue.nextTick(cb) 做了什么？")]),e._v(" "),v("p",[e._v("Vue.nextTick(cb) 方法的作用是延迟回调函数 cb 的执行，一般用于 this.key = newVal 更改数据后，想立即获取更改过后的 DOM 数据：")]),e._v(" "),v("p",[e._v("其内部的执行过程是：")]),e._v(" "),v("ul",[v("li",[e._v("this.key = 'new val，触发依赖通知更新，将负责更新的 watcher 放入 watcher 队列")]),e._v(" "),v("li",[e._v("将刷新 watcher 队列的函数放到 callbacks 数组中")]),e._v(" "),v("li",[e._v("在浏览器的异步任务队列中放入一个刷新 callbacks 数组的函数")]),e._v(" "),v("li",[e._v("Vue.nextTick(cb) 来插队，将 cb 函数放入 callbacks 数组")]),e._v(" "),v("li",[e._v("待将来的某个时刻执行刷新 callbacks 数组的函数")]),e._v(" "),v("li",[e._v("然后执行 callbacks 数组中的众多函数，触发 watcher.run 的执行，更新 DOM")]),e._v(" "),v("li",[e._v("由于 cb 函数是在后面放到 callbacks 数组，所以这就保证了先完成的 DOM 更新，再执行 cb 函数")])])])}),[],!1,null,null,null);t.default=a.exports}}]);