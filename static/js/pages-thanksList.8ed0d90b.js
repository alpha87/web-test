(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-thanksList"],{"2c51":function(t,n,e){var a=e("fa07");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("c29217a4",a,!0,{sourceMap:!1,shadowMode:!1})},"59f0":function(t,n,e){"use strict";e.r(n);var a=e("b2ce"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"662d":function(t,n,e){"use strict";e.r(n);var a=e("e990"),i=e("59f0");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("906c");var c,o=e("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"05056c93",null,!1,a["a"],c);n["default"]=u.exports},"906c":function(t,n,e){"use strict";var a=e("2c51"),i=e.n(a);i.a},b2ce:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{priceData:[{name:"小蛋卷",money:30},{name:"柒月的風",money:10},{name:"英俊侠",money:3},{name:"乔克叔叔",money:1},{name:"ALITAers",money:1},{name:"无名",money:1},{name:"Ash",money:10},{name:"log",money:3},{name:"？！",money:5},{name:"酸辣土豆丝",money:1},{name:"波澜",money:1},{name:"匿名",money:10},{name:"luckyQ",money:6.66},{name:"hidigi",money:6.66}]}},onLoad:function(){this.getThanksList()},methods:{getThanksList:function(){var n=this;uni.request({url:"https://cdn.jsdelivr.net/gh/alpha87/thanks@master/thanksList.json",method:"GET",success:function(e){var a=e.data;n.priceData=a.data,t.log(a)}})}}};n.default=e}).call(this,e("5a52")["default"])},e990:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t._l(t.priceData,(function(n){return e("v-uni-view",{key:n.index},[e("v-uni-view",{staticClass:"bg-white padding-lr"},[e("v-uni-view",{staticClass:"solids-bottom  flex align-center"},[e("v-uni-view",{staticClass:"solid-bottom text-xxl padding"},[e("v-uni-text",{staticClass:"text-black"},[t._v(t._s(n.name))]),e("v-uni-text",{staticClass:"text-price text-red"},[t._v(t._s(n.money))])],1)],1)],1)],1)})),e("v-uni-view",{staticClass:"padding text-center"},[e("v-uni-image",{attrs:{src:"https://cdn.jsdelivr.net/gh/alpha87/thanks/wechat.jpg",mode:"widthFix"}})],1)],2)},s=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}))},fa07:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-text[data-v-05056c93]{padding:%?10?%}",""]),t.exports=n}}]);