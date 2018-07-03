//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   movies: [
     { url: 'http://p1.meituan.net/dpdeal/8e3f0b71053df6233bb441ff4d2e68e6197882.jpg' },
     { url: 'http://p0.meituan.net/dpdeal/400b052b19f3956651b74ca626653abd57573.jpg' },
     { url: 'http://p1.meituan.net/dpdeal/23b211bd1265ad89d0c819b44cdc5e76144646.jpg' }
   ],
   branch: [
     {
       url: 'image/jin.gif',
       text: '金虹店'
     },
     {
       url: 'image/dong.gif',
       text: '东城店'
     },
     {
       url: 'image/heng.gif',
       text: '恒大店'
     }
   ],
   img: [
     {
       url: 'image/img-1.gif',
       text: '酷奇KTV',
       price: '￥102',
       cart: 'image/cart.gif'
     },
     {
       url: 'image/img-2.gif',
       text: '金虹店(上午场/晚场6小时欢唱，节假日通用，免费)',
       price: '￥59',
       cart: 'image/cart.gif'
     }
   ],
   red: [
     {
       url: 'image/img-1.gif',
       text: '酷奇KTV',
       price: '￥102',
       cart: 'image/cart.gif'
     },
     {
       url: 'image/img-3.gif',
       text: '金虹店（下午场/晚场6小时欢唱+酒水套餐,节假日通用）',
       price: '￥179',
       cart: 'image/cart.gif'
     },
     {
       url: 'image/img-4.gif',
       text: '金虹店（下午场/晚场6小时欢唱,节假日通用,免费）',
       price: '￥59',
       cart: 'image/cart.gif'
     }
   ],
   heng: [
     {
       url: 'image/img-5.gif',
       text: '恒大店（下午场/晚场6小时欢唱,节假日通用，免开机）',
       price: '￥59',
       cart: 'image/cart.gif'
     },
     {
       url: 'image/img-6.gif',
       text: '恒大店（下午场/晚场6小时欢唱+酒水套餐,节假日通用，免开机）',
       price: '￥179',
       cart: 'image/cart.gif'
     }
   ],
   foot: [
     {
       url: 'image/shou.gif',
       text: '首页'
     },
     {
       url: 'image/fen.gif',
       text: '包厢'
     },
     {
       url: 'image/cart-1.gif',
       text: '购物车'
     },
     {
       url: 'image/hui.gif',
       text: '会员中心'
     },
     {
       url: 'image/my.gif',
       text: '联系我们'
     }
   ]
  },
  onLoad: function () {
  },
})
