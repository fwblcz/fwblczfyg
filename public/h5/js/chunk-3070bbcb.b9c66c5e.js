(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3070bbcb"],{"219e":function(t,e,a){"use strict";var s=a("7d08"),n=a.n(s);n.a},5608:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time"},[t._v("\n  "+t._s(t.tipText)),!0===t.isDay?a("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.dayText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.hourText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.minuteText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.secondText))])])},n=[],o=(a("c5f6"),{name:"CountDown",props:{tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,a=0,s=0,n=0,o=0;e>0?(a=!0===t.isDay?Math.floor(e/86400):0,s=Math.floor(e/3600)-24*a,n=Math.floor(e/60)-24*a*60-60*s,o=Math.floor(e)-24*a*60*60-60*s*60-60*n,s<=9&&(s="0"+s),n<=9&&(n="0"+n),o<=9&&(o="0"+o),t.day=a,t.hour=s,t.minute=n,t.second=o):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}}),i=o,r=a("2877"),c=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports},"64c5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.domStatus,expression:"domStatus"}],class:[t.posterImageStatus?"noscroll product-con":"product-con"]},[a("ProductConSwiper",{attrs:{imgUrls:t.imgUrls}}),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"share acea-row row-between row-bottom"},[a("div",{staticClass:"money font-color-red"},[t._v("\n        ￥"),a("span",{staticClass:"num",domProps:{textContent:t._s(t.storeInfo.price)}}),a("span",{staticClass:"y-money",domProps:{textContent:t._s("￥"+t.storeInfo.product_price)}})]),a("div",{staticClass:"iconfont icon-fenxiang",on:{click:t.setPosterImageStatus}})]),a("div",{staticClass:"introduce",domProps:{textContent:t._s(t.storeInfo.title)}}),a("div",{staticClass:"label acea-row row-between-wrapper"},[a("div",{domProps:{textContent:t._s("类型:"+t.storeInfo.people+"人团")}}),a("div",{domProps:{textContent:t._s("库存:"+t.storeInfo.stock+t.storeInfo.unit_name)}}),a("div",{domProps:{textContent:t._s("已拼:"+t.storeInfo.sales+t.storeInfo.unit_name)}})])]),a("div",{staticClass:"notice acea-row row-middle"},[a("div",{staticClass:"num font-color-red"},[a("span",{staticClass:"iconfont icon-laba"}),t._v("已拼"+t._s(t.storeInfo.sales)+t._s(t.storeInfo.unit_name)),a("span",{staticClass:"line"},[t._v("|")])]),a("div",{staticClass:"swiper-no-swiping swiper"},[a("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.swiperTip}},t._l(t.itemNew,function(e,s){return a("swiperSlide",{key:s,staticClass:"swiper-slide"},[a("div",{staticClass:"line1"},[t._v(t._s(e))])])}),1)],1)]),a("div",{staticClass:"assemble"},[t._l(t.groupList,function(e,s){return a("div",{key:s},[s<t.groupListCount?a("div",{staticClass:"item acea-row row-between-wrapper"},[a("div",{staticClass:"pictxt acea-row row-between-wrapper"},[a("div",{staticClass:"pictrue"},[a("img",{staticClass:"image",attrs:{src:e.avatar}})]),a("div",{staticClass:"text line1",domProps:{textContent:t._s(e.nickname)}})]),a("div",{staticClass:"right acea-row row-middle"},[a("div",[a("div",{staticClass:"lack"},[t._v("\n              还差"),a("span",{staticClass:"font-color-red",domProps:{textContent:t._s(e.count)}}),t._v("人成团\n            ")]),a("CountDown",{attrs:{"is-day":!1,"tip-text":"剩余 ","day-text":"","hour-text":":","minute-text":":","second-text":"",datatime:e.stop_time}})],1),a("div",{staticClass:"spellBnt",on:{click:function(a){return t.groupRule(e.id)}}},[t._v("\n            去拼单"),a("span",{staticClass:"iconfont icon-jiantou"})])])]):t._e()])}),t.groupList.length>t.groupListCount?a("div",{staticClass:"more",on:{click:t.setGroupListCount}},[t._v("\n      查看更多"),a("span",{staticClass:"iconfont icon-xiangxia"})]):t._e()],2),t._m(0),a("div",{staticClass:"userEvaluation"},[a("div",{staticClass:"title acea-row row-between-wrapper"},[a("div",{domProps:{textContent:t._s("用户评价("+t.replyCount+")")}}),a("div",{staticClass:"praise",on:{click:t.goReply}},[a("span",{staticClass:"font-color-red",domProps:{textContent:t._s(t.replyChance+"%")}}),t._v("好评率"),a("span",{staticClass:"iconfont icon-jiantou"})])]),a("UserEvaluation",{attrs:{reply:t.reply}})],1),a("div",{staticClass:"product-intro"},[a("div",{staticClass:"title"},[t._v("产品介绍")]),a("div",{staticClass:"conter",domProps:{innerHTML:t._s(t.storeInfo.description)}})]),a("div",{staticStyle:{height:"1.2rem"}}),a("div",{staticClass:"footer-group acea-row row-between-wrapper"},[a("div",{staticClass:"customerSer acea-row row-center-wrapper row-column",on:{click:function(e){return t.$router.push({path:"/customer/list"})}}},[a("div",{staticClass:"iconfont icon-kefu"}),a("div",[t._v("客服")])]),a("div",{staticClass:"bnt bg-color-violet",on:{click:t.openAlone}},[t._v("单独购买")]),a("div",{staticClass:"bnt bg-color-red",on:{click:t.openTeam}},[t._v("立即开团")])]),a("ProductWindow",{attrs:{attr:t.attr},on:{changeFun:t.changeFun}}),a("StorePoster",{attrs:{posterImageStatus:t.posterImageStatus,posterData:t.posterData},on:{setPosterImageStatus:t.setPosterImageStatus}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playWay"},[a("div",{staticClass:"title acea-row row-between-wrapper"},[a("div",[t._v("拼团玩法")])]),a("div",{staticClass:"way acea-row row-middle"},[a("div",{staticClass:"item"},[a("span",{staticClass:"num"},[t._v("①")]),t._v("开团/参团")]),a("div",{staticClass:"iconfont icon-arrow"}),a("div",{staticClass:"item"},[a("span",{staticClass:"num"},[t._v("②")]),t._v("邀请好友")]),a("div",{staticClass:"iconfont icon-arrow"}),a("div",{staticClass:"item"},[a("div",[a("span",{staticClass:"num"},[t._v("③")]),t._v("满员发货")])])])])}],o=a("7618"),i=(a("a481"),a("7f7f"),a("7212")),r=(a("e5d0"),a("c5f8")),c=a("5608"),u=a("edc3"),l=a("c6da"),d=a("cbd6"),p=a("ca41"),f=a("73f5"),m=a("e876"),v="GroupDetails",C={name:"GroupDetails",components:{ProductConSwiper:r["a"],CountDown:c["a"],UserEvaluation:u["a"],swiper:i["swiper"],swiperSlide:i["swiperSlide"],ProductWindow:l["a"],StorePoster:d["a"]},props:{},data:function(){return{domStatus:!1,posterData:{image:"",title:"",price:"",code:""},posterImageStatus:!1,reply:[],replyCount:0,replyChance:0,imgUrls:[],storeInfo:{},itemNew:{},groupListCount:2,groupList:{},swiperTip:{direction:"vertical",autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0},attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",stock:"",unique:"",cart_num:1}}}},watch:{$route:function(t){var e=this;console.log(t),t.name===v&&e.mountedStart()}},mounted:function(){this.mountedStart()},methods:{openAlone:function(){this.$router.replace({path:"/detail/"+this.storeInfo.id})},mountedStart:function(){var t=this,e=t.$route.params.id;Object(p["m"])(e).then(function(e){t.$set(t,"storeInfo",e.data.storeInfo),t.$set(t,"imgUrls",e.data.storeInfo.images),t.$set(t,"itemNew",e.data.pink_ok_list),t.$set(t,"groupList",e.data.pink),t.$set(t,"reply",[e.data.reply]),t.$set(t,"replyCount",e.data.replyCount),t.$set(t,"replyChance",e.data.replyChance),t.setProductSelect(),t.posterData.image=t.storeInfo.image_base,t.storeInfo.title.length>30?t.posterData.title=t.storeInfo.title.substring(0,30)+"...":t.posterData.title=t.storeInfo.title,t.posterData.price=t.storeInfo.price,t.posterData.code=t.storeInfo.code_base,t.domStatus=!0,t.getImageBase64()})},getImageBase64:function(){var t=this;Object(m["j"])(this.posterData.image,t.posterData.code).then(function(e){t.posterData.image=e.data.image,t.posterData.code=e.data.code})},setPosterImageStatus:function(){var t=document.body||document.documentElement;t.scrollTop=0,this.posterImageStatus=!this.posterImageStatus},groupRule:function(t){var e=this;e.$router.push({path:"/activity/group_rule/"+t})},goReply:function(){var t=this;t.$router.push({path:"/evaluate_list/"+t.storeInfo.product_id})},setGroupListCount:function(){this.groupListCount=this.groupListCount+2},changeFun:function(t){"object"!==Object(o["a"])(t)&&(t={});var e=t.action||"",a=void 0===t.value?"":t.value;this[e]&&this[e](a)},changeattr:function(t){var e=this;e.attr.cartAttr=t},ChangeCartNum:function(t){var e=this;console.log(t),e.attr.productSelect.cart_num=1,e.$dialog.message("每人每次限购1"+e.storeInfo.unit_name)},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeInfo.image,e.productSelect.store_name=t.storeInfo.title,e.productSelect.price=t.storeInfo.price,e.productSelect.stock=t.storeInfo.stock,e.cartAttr=!1,t.$set(t,"attr",e)},openTeam:function(){var t=this,e=this;if(0==e.attr.cartAttr)e.attr.cartAttr=!this.attr.cartAttr;else{var a={};a.productId=e.storeInfo.product_id,a.cartNum=e.attr.productSelect.cart_num,a.uniqueId=e.attr.productSelect.unique,a.combinationId=e.storeInfo.id,a.new=1,Object(f["m"])(a).then(function(t){e.$router.push({path:"/order/submit/"+t.data.cartId})}).catch(function(e){t.$dialog.error(e.msg)})}}}},_=C,g=(a("219e"),a("737f"),a("2877")),w=Object(g["a"])(_,s,n,!1,null,"76f55d04",null);e["default"]=w.exports},6815:function(t,e,a){},"737f":function(t,e,a){"use strict";var s=a("6815"),n=a.n(s);n.a},"7d08":function(t,e,a){},ca41:function(t,e,a){"use strict";a.d(e,"n",function(){return n}),a.d(e,"m",function(){return o}),a.d(e,"o",function(){return i}),a.d(e,"q",function(){return r}),a.d(e,"p",function(){return c}),a.d(e,"r",function(){return u}),a.d(e,"t",function(){return l}),a.d(e,"s",function(){return d}),a.d(e,"f",function(){return p}),a.d(e,"a",function(){return f}),a.d(e,"h",function(){return m}),a.d(e,"i",function(){return v}),a.d(e,"b",function(){return C}),a.d(e,"e",function(){return _}),a.d(e,"c",function(){return g}),a.d(e,"j",function(){return w}),a.d(e,"d",function(){return h}),a.d(e,"g",function(){return y}),a.d(e,"l",function(){return b}),a.d(e,"k",function(){return I});var s=a("b775");function n(t){return s["a"].get("/combination/list",t,{login:!1})}function o(t){return s["a"].get("/combination/detail/"+t,{},{login:!1})}function i(t){return s["a"].get("/combination/pink/"+t)}function r(t){return s["a"].post("/combination/remove",t)}function c(t){return s["a"].post("/combination/poster",t)}function u(){return s["a"].get("/seckill/index",{},{login:!1})}function l(t,e){return s["a"].get("/seckill/list/"+t,e,{login:!1})}function d(t){return s["a"].get("/seckill/detail/"+t,{},{login:!1})}function p(t){return s["a"].get("/bargain/list",t,{login:!1})}function f(t){return s["a"].get("/bargain/detail/"+t)}function m(t){return s["a"].post("/bargain/share",t)}function v(t){return s["a"].post("/bargain/start",t)}function C(t){return s["a"].post("/bargain/help",t)}function _(t){return s["a"].post("/bargain/help/price",t)}function g(t){return s["a"].post("/bargain/help/count",t)}function w(t){return s["a"].post("/bargain/start/user",t)}function h(t){return s["a"].post("/bargain/help/list",t)}function y(t){return s["a"].post("/bargain/poster",t)}function b(t){return s["a"].get("/bargain/user/list",t)}function I(t){return s["a"].post("/bargain/user/cancel",t)}},edc3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"evaluateWtapper"},t._l(t.reply,function(e,s){return a("div",{key:s,staticClass:"evaluateItem"},[a("div",{staticClass:"pic-text acea-row row-middle"},[a("div",{staticClass:"pictrue"},[a("img",{staticClass:"image",attrs:{src:e.avatar}})]),a("div",{staticClass:"acea-row row-middle"},[a("div",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"start",class:"star"+e.star})])]),a("div",{staticClass:"time"},[t._v(t._s(e.add_time)+" "+t._s(e.suk))]),a("div",{staticClass:"evaluate-infor"},[t._v(t._s(e.comment))]),a("div",{staticClass:"imgList acea-row"},t._l(e.pics,function(t,e){return a("div",{key:e,staticClass:"pictrue"},[a("img",{staticClass:"image",attrs:{src:t}})])}),0),e.merchant_reply_content?a("div",{staticClass:"reply"},[a("span",{staticClass:"font-color-red"},[t._v("店小二")]),t._v("："+t._s(e.merchant_reply_content)+"\n    ")]):t._e()])}),0)},n=[],o={name:"UserEvaluation",props:{reply:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{}},i=o,r=a("2877"),c=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3070bbcb.b9c66c5e.js.map