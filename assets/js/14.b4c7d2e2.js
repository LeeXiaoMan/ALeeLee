(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{497:function(t,a,s){t.exports=s.p+"assets/img/vuex.5540e935.png"},538:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("vuex状态管理工具")]),t._v(" "),n("h2",{attrs:{id:"_1-vuex-的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuex-的原理"}},[t._v("#")]),t._v(" 1. Vuex 的原理")]),t._v(" "),n("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),t._v(" "),n("ul",[n("li",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),n("li",[t._v("改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(497),alt:"vuex"}})]),t._v(" "),n("p",[t._v("Vuex为Vue Components建立起了一个完整的生态圈，包括开发中的API调用一环。")]),t._v(" "),n("p",[n("strong",[t._v("（1）核心流程中的主要功能：")])]),t._v(" "),n("ul",[n("li",[t._v("Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是图中的 Actions;")]),t._v(" "),n("li",[t._v("在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex 中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;")]),t._v(" "),n("li",[t._v("然后 Mutations 就去改变（Mutate）State 中的数据;")]),t._v(" "),n("li",[t._v("当 State 中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。")])]),t._v(" "),n("p",[n("strong",[t._v("（2）各模块在核心流程中的主要功能：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Vue Components")]),t._v("∶ Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。")]),t._v(" "),n("li",[n("code",[t._v("dispatch")]),t._v("∶操作行为触发方法，是唯一能执行action的方法。")]),t._v(" "),n("li",[n("code",[t._v("actions")]),t._v("∶ 操作行为处理模块。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。")]),t._v(" "),n("li",[n("code",[t._v("commit")]),t._v("∶状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。")]),t._v(" "),n("li",[n("code",[t._v("mutations")]),t._v("∶状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。")]),t._v(" "),n("li",[n("code",[t._v("state")]),t._v("∶ 页面状态管理容器对象。集中存储Vuecomponents中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。")]),t._v(" "),n("li",[n("code",[t._v("getters")]),t._v("∶ state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。")])]),t._v(" "),n("h2",{attrs:{id:"_2-vuex中action和mutation的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-vuex中action和mutation的区别"}},[t._v("#")]),t._v(" 2. Vuex中action和mutation的区别")]),t._v(" "),n("p",[t._v("mutation中的操作是一系列的同步函数，用于修改state中的变量的的状态。当使用vuex时需要通过commit来提交需要操作的内容。mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是实际进行状态更改的地方，并且它会接受 state 作为第一个参数：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变更状态")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("当触发一个类型为 increment 的 mutation 时，需要调用此函数：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("而Action类似于mutation，不同点在于：")]),t._v(" "),n("ul",[n("li",[t._v("Action 可以包含任意异步操作。")]),t._v(" "),n("li",[t._v("Action 提交的是 mutation，而不是直接变更状态。")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。 所以，两者的不同点如下：")]),t._v(" "),n("ul",[n("li",[t._v("Mutation专注于修改State，理论上是修改State的唯一途径；Action业务代码、异步请求。")]),t._v(" "),n("li",[t._v("Mutation：必须同步执行；Action：可以异步，但不能直接操作State。")]),t._v(" "),n("li",[t._v("在视图更新时，先触发actions，actions再触发mutation")]),t._v(" "),n("li",[t._v("mutation的参数是state，它包含store中的数据；action的参数是context，它是 state 的父级，包含 state、getters")])]),t._v(" "),n("h2",{attrs:{id:"_3-vuex-和-localstorage-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-vuex-和-localstorage-的区别"}},[t._v("#")]),t._v(" 3. Vuex 和 localStorage 的区别")]),t._v(" "),n("p",[n("strong",[t._v("（1）最重要的区别")])]),t._v(" "),n("ul",[n("li",[t._v("vuex存储在内存中")]),t._v(" "),n("li",[t._v("localstorage 则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要 JSON的stringify和parse方法进行处理。 读取内存比读取硬盘速度要快")])]),t._v(" "),n("p",[n("strong",[t._v("（2）应用场景")])]),t._v(" "),n("ul",[n("li",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex用于组件之间的传值。")]),t._v(" "),n("li",[t._v("localstorage是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用 。")]),t._v(" "),n("li",[t._v("Vuex能做到数据的响应式，localstorage不能")])]),t._v(" "),n("p",[n("strong",[t._v("（3）永久性")])]),t._v(" "),n("p",[t._v("刷新页面时vuex存储的值会丢失，localstorage不会。")]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 对于不变的数据确实可以用localstorage可以代替vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage无法做到，原因就是区别1。")]),t._v(" "),n("h2",{attrs:{id:"_4-redux-和-vuex-有什么区别，它们的共同思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-redux-和-vuex-有什么区别，它们的共同思想"}},[t._v("#")]),t._v(" 4. Redux 和 Vuex 有什么区别，它们的共同思想")]),t._v(" "),n("p",[n("strong",[t._v("（1）Redux 和 Vuex区别")])]),t._v(" "),n("ul",[n("li",[t._v("Vuex改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需在对应的mutation函数里改变state值即可")]),t._v(" "),n("li",[t._v("Vuex由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的State即可")]),t._v(" "),n("li",[t._v("Vuex数据流的顺序是∶View调用store.commit提交对应的请求到Store中对应的mutation函数->store改变（vue检测到数据变化自动渲染）")])]),t._v(" "),n("p",[t._v("通俗点理解就是，vuex 弱化 dispatch，通过commit进行 store状态的一次更变;取消了action概念，不必传入特定的 action形式进行指定变更;弱化reducer，基于commit参数直接对数据进行转变，使得框架更加简易;")]),t._v(" "),n("p",[n("strong",[t._v("（2）共同思想")])]),t._v(" "),n("ul",[n("li",[t._v("单—的数据源")]),t._v(" "),n("li",[t._v("变化可以预测")])]),t._v(" "),n("p",[t._v("本质上：redux与vuex都是对mvvm思想的服务，将数据从视图中抽离的一种方案; 形式上：vuex借鉴了redux，将store作为全局的数据中心，进行mode管理;")]),t._v(" "),n("h2",{attrs:{id:"_5-为什么要用-vuex-或者-redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-为什么要用-vuex-或者-redux"}},[t._v("#")]),t._v(" 5. 为什么要用 Vuex 或者 Redux")]),t._v(" "),n("p",[t._v("由于传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致代码无法维护。")]),t._v(" "),n("p",[t._v('所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的"视图"，不管在树的哪个位置，任何组件都能获取状态或者触发行为。')]),t._v(" "),n("p",[t._v("另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护。")]),t._v(" "),n("p",[t._v("总结：便于数据的状态管理，解耦，便于后期代码维护。")]),t._v(" "),n("h2",{attrs:{id:"_6-vuex有哪几种属性？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-vuex有哪几种属性？"}},[t._v("#")]),t._v(" 6. Vuex有哪几种属性？")]),t._v(" "),n("p",[t._v("有五种，分别是 State、 Getter、Mutation 、Action、 Module")]),t._v(" "),n("ul",[n("li",[t._v("state => 基本数据(数据源存放地)")]),t._v(" "),n("li",[t._v("getters => 从基本数据派生出来的数据")]),t._v(" "),n("li",[t._v("mutations => 提交更改数据的方法，同步")]),t._v(" "),n("li",[t._v("actions => 像一个装饰器，包裹mutations，使之可以异步。")]),t._v(" "),n("li",[t._v("modules => 模块化Vuex")])]),t._v(" "),n("h2",{attrs:{id:"_7-vuex和单纯的全局对象有什么区别？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-vuex和单纯的全局对象有什么区别？"}},[t._v("#")]),t._v(" 7. Vuex和单纯的全局对象有什么区别？")]),t._v(" "),n("ul",[n("li",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),n("li",[t._v("不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。")])]),t._v(" "),n("h2",{attrs:{id:"_8-为什么-vuex-的-mutation-中不能做异步操作？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么-vuex-的-mutation-中不能做异步操作？"}},[t._v("#")]),t._v(" 8. 为什么 Vuex 的 mutation 中不能做异步操作？")]),t._v(" "),n("ul",[n("li",[t._v("Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。")]),t._v(" "),n("li",[t._v("每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。")])]),t._v(" "),n("h2",{attrs:{id:"_9-vuex的严格模式是什么-有什么作用，如何开启？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-vuex的严格模式是什么-有什么作用，如何开启？"}},[t._v("#")]),t._v(" 9. Vuex的严格模式是什么,有什么作用，如何开启？")]),t._v(" "),n("p",[t._v("在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。")]),t._v(" "),n("p",[t._v("在Vuex.Store 构造器选项中开启,如下")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    strict"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"_10-如何在组件中批量使用vuex的getter属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-如何在组件中批量使用vuex的getter属性"}},[t._v("#")]),t._v(" 10. 如何在组件中批量使用Vuex的getter属性")]),t._v(" "),n("p",[t._v("使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mapGetters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    computed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapGetters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'total'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'discountTotal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_11-如何在组件中重复使用vuex的mutation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-如何在组件中重复使用vuex的mutation"}},[t._v("#")]),t._v(" 11. 如何在组件中重复使用Vuex的mutation")]),t._v(" "),n("p",[t._v("使用mapMutations辅助函数,在组件中这么使用")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mapMutations "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\nmethods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapMutations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        setNumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SET_NUMBER'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("然后调用"),n("code",[t._v("this.setNumber(10)")]),t._v("相当调用"),n("code",[t._v("this.$store.commit('SET_NUMBER',10)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);