(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10b30062"],{"1dc9":function(t,e,s){"use strict";var i=s("ffcb"),n=s.n(i);n.a},"3a25":function(t,e,s){},"563c":function(t,e,s){t.exports=s.p+"h5/img/noAddress.d76a1cef.png"},"5f10":function(t,e,s){t.exports=s.p+"h5/img/noCoupon.e524084b.png"},"6c69":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-submission"},[s("div",{staticClass:"allAddress",style:t.store_self_mention?"":"padding-top: 0.2rem"},[s("div",{staticClass:"nav acea-row"},[t.store_self_mention?s("div",{staticClass:"item font-color-red",class:0===t.shipping_type?"on":"on2",on:{click:function(e){return t.addressType(0)}}}):t._e(),t.store_self_mention?s("div",{staticClass:"item font-color-red",class:1===t.shipping_type?"on":"on2",on:{click:function(e){return t.addressType(1)}}}):t._e()]),0===t.shipping_type?s("div",{staticClass:"address acea-row row-between-wrapper",on:{click:t.addressTap}},[t.addressInfo.real_name?s("div",{staticClass:"addressCon"},[s("div",{staticClass:"name"},[t._v("\n          "+t._s(t.addressInfo.real_name)+"\n          "),s("span",{staticClass:"phone"},[t._v(t._s(t.addressInfo.phone))])]),s("div",[t.addressInfo.is_default?s("span",{staticClass:"default font-color-red"},[t._v("[默认]")]):t._e(),t._v("\n          "+t._s(t.addressInfo.province)+t._s(t.addressInfo.city)+t._s(t.addressInfo.district)+t._s(t.addressInfo.detail)+"\n        ")])]):s("div",{staticClass:"addressCon"},[s("div",{staticClass:"setaddress"},[t._v("设置收货地址")])]),s("div",{staticClass:"iconfont icon-jiantou"})]):s("div",{staticClass:"address acea-row row-between-wrapper"},[s("div",{staticClass:"addressCon"},[s("div",{staticClass:"name"},[t._v("\n          "+t._s(t.system_store.name)+"\n          "),s("span",{staticClass:"phone"},[t._v(t._s(t.system_store.phone))])]),s("div",[t._v("\n          "+t._s(t.system_store._detailed_address)+"\n        ")])])]),t._m(0)]),s("OrderGoods",{attrs:{evaluate:0,cartInfo:t.orderGroupInfo.cartInfo}}),s("div",{staticClass:"wrapper"},[!1===t.deduction?s("div",{staticClass:"item acea-row row-between-wrapper",on:{click:t.couponTap}},[s("div",[t._v("优惠券")]),s("div",{staticClass:"discount"},[t._v("\n        "+t._s(t.usableCoupon.coupon_title||"请选择")+"\n        "),s("span",{staticClass:"iconfont icon-jiantou"})])]):t._e(),!1===t.deduction?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("积分抵扣")]),s("div",{staticClass:"discount"},[s("div",{staticClass:"select-btn"},[s("div",{staticClass:"checkbox-wrapper"},[s("label",{staticClass:"well-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.useIntegral,expression:"useIntegral"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useIntegral)?t._i(t.useIntegral,null)>-1:t.useIntegral},on:{change:function(e){var s=t.useIntegral,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);i.checked?o<0&&(t.useIntegral=s.concat([a])):o>-1&&(t.useIntegral=s.slice(0,o).concat(s.slice(o+1)))}else t.useIntegral=n}}}),s("i",{staticClass:"icon"}),s("span",{staticClass:"integral"},[t._v("\n                当前积分\n                "),s("span",{staticClass:"num font-color-red"},[t._v("\n                  "+t._s(t.userInfo.integral||0)+"\n                ")])])])])])])]):t._e(),t.orderGroupInfo.priceGroup.vipPrice>0&&t.userInfo.vip&&0==t.pinkId&&0==t.orderGroupInfo.bargain_id&&0==t.orderGroupInfo.combination_id&&0==t.orderGroupInfo.seckill_id?s("div",{staticClass:"item acea-row row-between-wrapper"},[t._v("\n      会员优惠\n      "),s("div",{staticClass:"discount"},[t._v("￥"+t._s(t.orderGroupInfo.priceGroup.vipPrice))])]):t._e(),0===t.shipping_type?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("快递费用")]),s("div",{staticClass:"discount"},[t._v("\n        "+t._s(t.orderGroupInfo.priceGroup.storePostage>0?t.orderGroupInfo.priceGroup.storePostage:"免运费")+"\n      ")])]):s("div",[s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("联系人")]),s("div",{staticClass:"discount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"}],attrs:{type:"text",placeholder:"请填写您的联系姓名"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}})])]),s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("联系电话")]),s("div",{staticClass:"discount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactsTel,expression:"contactsTel"}],attrs:{type:"text",placeholder:"请填写您的联系电话"},domProps:{value:t.contactsTel},on:{input:function(e){e.target.composing||(t.contactsTel=e.target.value)}}})])])]),s("div",{staticClass:"item"},[s("div",[t._v("备注信息")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mark,expression:"mark"}],attrs:{placeholder:"请添加备注（150字以内）"},domProps:{value:t.mark},on:{input:function(e){e.target.composing||(t.mark=e.target.value)}}})])]),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"item"},[s("div",[t._v("支付方式")]),s("div",{staticClass:"list"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isWeixin,expression:"isWeixin"}],staticClass:"payItem acea-row row-middle",class:"weixin"===t.active?"on":"",on:{click:function(e){return t.payItem("weixin")}}},[s("div",{staticClass:"name acea-row row-center-wrapper"},[s("div",{staticClass:"iconfont icon-weixin2",class:"weixin"===t.active?"bounceIn":""}),t._v("\n            微信支付\n          ")]),s("div",{staticClass:"tip"},[t._v("微信快捷支付")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isWeixin,expression:"!isWeixin"}],staticClass:"payItem acea-row row-middle",class:"weixin"===t.active?"on":"",on:{click:function(e){return t.payItem("weixin")}}},[s("div",{staticClass:"name acea-row row-center-wrapper"},[s("div",{staticClass:"iconfont icon-weixin2",class:"weixin"===t.active?"bounceIn":""}),t._v("\n            微信支付\n          ")]),s("div",{staticClass:"tip"},[t._v("微信快捷支付")])]),s("div",{staticClass:"payItem acea-row row-middle",class:"yue"===t.active?"on":"",on:{click:function(e){return t.payItem("yue")}}},[s("div",{staticClass:"name acea-row row-center-wrapper"},[s("div",{staticClass:"iconfont icon-icon-test",class:"yue"===t.active?"bounceIn":""}),t._v("\n            余额支付\n          ")]),s("div",{staticClass:"tip"},[t._v("可用余额："+t._s(t.userInfo.now_money||0))])]),1===t.offlinePayStatus&&!1===t.deduction?s("div",{staticClass:"payItem acea-row row-middle",class:"offline"===t.active?"on":"",on:{click:function(e){return t.payItem("offline")}}},[s("div",{staticClass:"name acea-row row-center-wrapper"},[s("div",{staticClass:"iconfont icon-yinhangqia",class:"offline"===t.active?"bounceIn":""}),t._v("\n            线下支付\n          ")]),s("div",{staticClass:"tip"},[t._v("线下方便支付")])]):t._e()])])]),s("div",{staticClass:"moneyList"},[void 0!==t.orderPrice.total_price?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("商品总价：")]),s("div",{staticClass:"money"},[t._v("￥"+t._s(t.orderPrice.total_price))])]):t._e(),t.orderPrice.pay_postage>0?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("运费：")]),s("div",{staticClass:"money"},[t._v("￥"+t._s(t.orderPrice.pay_postage))])]):t._e(),t.orderPrice.coupon_price>0?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("优惠券抵扣：")]),s("div",{staticClass:"money"},[t._v("-￥"+t._s(t.orderPrice.coupon_price))])]):t._e(),t.orderPrice.deduction_price>0?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",[t._v("积分抵扣：")]),s("div",{staticClass:"money"},[t._v("-￥"+t._s(t.orderPrice.deduction_price))])]):t._e()]),s("div",{staticStyle:{height:"1.2rem"}}),s("div",{staticClass:"footer acea-row row-between-wrapper"},[s("div",[t._v("\n      合计:\n      "),s("span",{staticClass:"font-color-red"},[t._v("￥"+t._s(t.orderPrice.pay_price))])]),s("div",{staticClass:"settlement",on:{click:t.createOrder}},[t._v("立即结算")])]),s("CouponListWindow",{attrs:{price:t.orderPrice.total_price,checked:t.usableCoupon.id},on:{couponchange:function(e){return t.changecoupon(e)},checked:t.changeCoupon},model:{value:t.showCoupon,callback:function(e){t.showCoupon=e},expression:"showCoupon"}}),s("AddressWindow",{ref:"mychild",attrs:{checked:t.addressInfo.id},on:{checked:t.changeAddress,redirect:t.addressRedirect},model:{value:t.showAddress,callback:function(e){t.showAddress=e},expression:"showAddress"}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line"},[i("img",{attrs:{src:s("afa3")}})])}],a=(s("a481"),s("7f7f"),s("713c")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"coupon-list-window",class:!0===t.value?"on":""},[s("div",{staticClass:"title"},[t._v("\n      优惠券\n      "),s("span",{staticClass:"iconfont icon-guanbi",on:{click:t.close}})]),t.couponList.length>0?s("div",[s("div",{staticClass:"coupon-list"},t._l(t.couponList,function(e){return s("div",{key:e.id,staticClass:"item acea-row row-center-wrapper",on:{click:function(s){return t.click(e)}}},[s("div",{staticClass:"money"},[t._v("\n            ￥\n            "),s("span",{staticClass:"num"},[t._v(t._s(e.coupon_price))])]),s("div",{staticClass:"text"},[s("div",{staticClass:"condition line1"},[t._v(t._s(e.coupon_title))]),s("div",{staticClass:"data acea-row row-between-wrapper"},[s("div",[t._v("\n                "+t._s(e.start_time?e.start_time+"-":"")+t._s(e.end_time)+"\n              ")]),t.checked===e.id?s("div",{staticClass:"iconfont icon-xuanzhong1 font-color-red"}):s("div",{staticClass:"iconfont icon-weixuanzhong"})])])])}),0),s("div",{staticClass:"couponNo bg-color-red",on:{click:t.couponNo}},[t._v("不使用优惠券")])]):t._e(),!t.couponList.length&&t.loaded?s("div",[t._m(0)]):t._e()]),s("div",{staticClass:"mask",attrs:{hidden:!1===t.value},on:{touchmove:function(t){t.preventDefault()},click:t.close}})])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pictrue"},[i("img",{staticClass:"image",attrs:{src:s("5f10")}})])}],c=(s("c5f6"),s("f8b7")),d={name:"CouponListWindow",props:{value:Boolean,checked:Number,price:{type:[Number,String],default:void 0}},data:function(){return{couponList:[],loaded:!1}},watch:{price:function(t){void 0!==t&&null!=t&&this.getCoupon()}},mounted:function(){},methods:{close:function(){this.$emit("input",!1),this.$emit("close")},getCoupon:function(){var t=this;Object(c["e"])(this.price).then(function(e){t.couponList=e.data,t.loaded=!0})},click:function(t){this.$emit("checked",t),this.$emit("input",!1)},couponNo:function(){this.$emit("checked",null),this.$emit("input",!1)}}},u=d,l=(s("1dc9"),s("2877")),p=Object(l["a"])(u,o,r,!1,null,"71d8c8b6",null),f=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"address-window",class:!0===t.value?"on":""},[i("div",{staticClass:"title"},[t._v("\n      选择地址"),i("span",{staticClass:"iconfont icon-guanbi",on:{click:t.closeAddress}})]),t.addressList.length?i("div",{staticClass:"list"},t._l(t.addressList,function(e,s){return i("div",{key:s,staticClass:"item acea-row row-between-wrapper",class:e.id===t.checked?"font-color-red":"",on:{click:function(e){return t.tapAddress(s)}}},[i("span",{staticClass:"iconfont icon-ditu",class:e.id===t.checked?"font-color-red":""}),i("div",{staticClass:"addressTxt"},[i("div",{staticClass:"name",class:e.id===t.checked?"font-color-red":""},[t._v("\n            "+t._s(e.real_name)),i("span",{staticClass:"phone"},[t._v(t._s(e.phone))])]),i("div",{staticClass:"line1"},[t._v("\n            "+t._s(e.province)+t._s(e.city)+t._s(e.district)+t._s(e.detail)+"\n          ")])]),i("span",{staticClass:"iconfont icon-complete",class:e.id===t.checked?"font-color-red":""})])}),0):t._e(),t.addressList.length<1?i("div",{staticClass:"pictrue"},[i("img",{staticClass:"image",attrs:{src:s("563c")}})]):t._e(),i("div",{staticClass:"addressBnt bg-color-red",on:{click:t.goAddressPages}},[t._v("\n      新加地址\n    ")])]),i("div",{staticClass:"mask",attrs:{hidden:!1===t.value},on:{touchmove:function(t){t.preventDefault()},click:t.closeAddress}})])},_=[],h=s("c24f"),m={name:"AddressWindow",props:{value:Boolean,checked:Number},data:function(){return{addressList:[],current:0,cartId:0,pinkId:0,couponId:0}},mounted:function(){},methods:{getAddressList:function(){var t=this;Object(h["f"])().then(function(e){t.addressList=e.data})},closeAddress:function(){this.$emit("input",!1)},goAddressPages:function(){this.$router.push({path:"/user/add_address"}),this.$emit("redirect")},tapAddress:function(t){this.$emit("checked",this.addressList[t]),this.$emit("input",!1)}}},w=m,C=Object(l["a"])(w,v,_,!1,null,null,null),g=C.exports,I=s("74f9"),y=s("ed08"),b="OrderSubmission",k=Object(y["d"])(),$={name:b,components:{OrderGoods:a["a"],CouponListWindow:f,AddressWindow:g},props:{},data:function(){return{offlinePayStatus:2,from:k?"weixin":"weixinh5",deduction:!0,isWeixin:k,pinkId:0,active:k?"weixin":"yue",showCoupon:!1,showAddress:!1,addressInfo:{},couponId:0,orderGroupInfo:{priceGroup:{}},usableCoupon:{},addressLoaded:!1,useIntegral:!1,orderPrice:{pay_price:"计算中"},mark:"",system_store:{},shipping_type:0,contacts:"",contactsTel:"",store_self_mention:0,userInfo:{}}},watch:{useIntegral:function(){this.computedPrice()},$route:function(t){t.name===b&&(this.getUserInfo(),this.getCartInfo())},shipping_type:function(){this.computedPrice()}},mounted:function(){var t=this;t.getUserInfo(),t.getCartInfo(),void 0!==t.$route.query.pinkid&&(t.pinkId=t.$route.query.pinkid)},methods:{getUserInfo:function(){var t=this;Object(h["D"])().then(function(e){t.userInfo=e.data}).catch(function(){})},addressType:function(t){if(t&&!this.system_store.id)return this.$dialog.error("暂无门店信息，您无法选择到店自提！");this.shipping_type=t},computedPrice:function(){var t=this,e=this.shipping_type;Object(c["l"])(this.orderGroupInfo.orderKey,{addressId:this.addressInfo.id,useIntegral:this.useIntegral?1:0,couponId:this.usableCoupon.id||0,shipping_type:parseInt(e)+1}).then(function(e){var s=e.data;"EXTEND_ORDER"===s.status?t.$router.replace({path:"/order/detail/"+s.result.orderId}):t.orderPrice=s.result})},getCartInfo:function(){var t=this,e=this.$route.params.id;if(!e)return this.$dialog.error("参数有误"),this.$router.go(-1);Object(c["m"])(e).then(function(e){t.offlinePayStatus=e.data.offline_pay_status,t.orderGroupInfo=e.data,t.deduction=e.data.deduction,t.usableCoupon=e.data.usableCoupon||{},t.addressInfo=e.data.addressInfo||{},t.system_store=e.data.system_store||{},t.store_self_mention=e.data.store_self_mention,t.computedPrice()}).catch(function(){t.$dialog.error("加载订单数据失败")})},addressTap:function(){this.showAddress=!0,this.addressLoaded||(this.addressLoaded=!0,this.$refs.mychild.getAddressList())},addressRedirect:function(){this.addressLoaded=!1,this.showAddress=!1},couponTap:function(){this.showCoupon=!0},changeCoupon:function(t){this.usableCoupon=t||{coupon_title:"不使用优惠券",id:0},this.computedPrice()},payItem:function(t){this.active=t},changeAddress:function(t){this.addressInfo=t},createOrder:function(){var t=this,e=this.shipping_type;if(!this.active)return this.$dialog.toast({mes:"请选择支付方式"});if(!this.addressInfo.id&&!this.shipping_type)return this.$dialog.toast({mes:"请选择收货地址"});if(this.shipping_type){if((""===this.contacts||""===this.contactsTel)&&this.shipping_type)return this.$dialog.toast({mes:"请填写联系人或联系人电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/.test(this.contactsTel))return this.$dialog.toast({mes:"请填写正确的手机号"});if(!/^[\u4e00-\u9fa5\w]{2,16}$/.test(this.contacts))return this.$dialog.toast({mes:"请填写您的真实姓名"})}this.$dialog.loading.open("生成订单中"),Object(c["b"])(this.orderGroupInfo.orderKey,{real_name:this.contacts,phone:this.contactsTel,addressId:this.addressInfo.id,useIntegral:this.useIntegral?1:0,couponId:this.usableCoupon.id||0,payType:this.active,pinkId:this.pinkId,seckill_id:this.orderGroupInfo.seckill_id,combinationId:this.orderGroupInfo.combination_id,bargainId:this.orderGroupInfo.bargain_id,from:this.from,mark:this.mark||"",shipping_type:parseInt(e)+1}).then(function(e){t.$dialog.loading.close();var s=e.data;switch(s.status){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_DEFICIENCY":case"PAY_ERROR":t.$dialog.toast({mes:e.msg}),t.$router.replace({path:"/order/detail/"+s.result.orderId});break;case"SUCCESS":t.$dialog.success(e.msg),t.$router.replace({path:"/order/detail/"+s.result.orderId});break;case"WECHAT_H5_PAY":t.$router.replace({path:"/order/detail/"+s.result.orderId}),setTimeout(function(){location.href=s.result.jsConfig.mweb_url},100);break;case"WECHAT_PAY":Object(I["pay"])(s.result.jsConfig).finally(function(){t.$router.replace({path:"/order/detail/"+s.result.orderId})})}}).catch(function(e){console.log(e),t.$dialog.loading.close(),t.$dialog.error(e.msg||"创建订单失败")})}}},x=$,P=(s("cc65"),Object(l["a"])(x,i,n,!1,null,"4d324960",null));e["default"]=P.exports},"713c":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderGoods"},[s("div",{staticClass:"total"},[t._v("共"+t._s(t.cartInfo.length)+"件商品")]),s("div",{staticClass:"goodWrapper"},t._l(t.cartInfo,function(e){return s("div",{key:e.id,staticClass:"item acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{staticClass:"image",attrs:{src:e.productInfo.image}})]),s("div",{staticClass:"text"},[s("div",{staticClass:"acea-row row-between-wrapper"},[s("div",{staticClass:"name line1"},[t._v(t._s(e.productInfo.store_name))]),s("div",{staticClass:"num"},[t._v("x "+t._s(e.cart_num))])]),e.productInfo.attrInfo?s("div",{staticClass:"attr line1"},[t._v("\n          "+t._s(e.productInfo.attrInfo.suk)+"\n        ")]):t._e(),s("div",{staticClass:"money font-color-red"},[t._v("￥"+t._s(e.truePrice))]),3===t.evaluate?s("div",{staticClass:"evaluate",on:{click:function(s){return t.$router.push({path:"/goods_evaluate/"+e.unique})}}},[t._v("\n          评价\n        ")]):t._e()])])}),0)])},n=[],a=(s("c5f6"),{name:"OrderGoods",props:{evaluate:Number,cartInfo:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{}}),o=a,r=s("2877"),c=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},afa3:function(t,e,s){t.exports=s.p+"h5/img/line.05bf1c84.jpg"},cc65:function(t,e,s){"use strict";var i=s("3a25"),n=s.n(i);n.a},f8b7:function(t,e,s){"use strict";s.d(e,"m",function(){return n}),s.d(e,"l",function(){return a}),s.d(e,"e",function(){return o}),s.d(e,"b",function(){return r}),s.d(e,"f",function(){return c}),s.d(e,"g",function(){return d}),s.d(e,"a",function(){return u}),s.d(e,"i",function(){return l}),s.d(e,"h",function(){return p}),s.d(e,"n",function(){return f}),s.d(e,"o",function(){return v}),s.d(e,"c",function(){return _}),s.d(e,"d",function(){return h}),s.d(e,"k",function(){return m}),s.d(e,"j",function(){return w});var i=s("b775");function n(t){return i["a"].post("/order/confirm",{cartId:t})}function a(t,e){return i["a"].post("/order/computed/"+t,e)}function o(t){return i["a"].get("/coupons/order/"+(parseFloat(t)||0))}function r(t,e){return i["a"].post("/order/create/"+t,e||{})}function c(){return i["a"].get("/order/data")}function d(t){return i["a"].get("/order/list",t)}function u(t){return i["a"].post("/order/cancel",{id:t})}function l(t){return i["a"].get("/order/detail/"+t)}function p(){return i["a"].get("/order/refund/reason")}function f(t){return i["a"].post("/order/refund/verify",t)}function v(t){return i["a"].post("/order/take",{uni:t})}function _(t){return i["a"].post("/order/del",{uni:t})}function h(t){return i["a"].get("order/express/"+t)}function m(t,e,s){return i["a"].post("order/pay",{uni:t,paytype:e,from:s})}function w(t,e){return i["a"].post("order/order_verific",{verify_code:t,is_confirm:e})}},ffcb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-10b30062.93cd093b.js.map