import Vue from "vue";
import
    'swiper/dist/css/swiper.css';

if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');

    Vue.use(VueAwesomeSwiper, /* { default global options } */)

}
var SocialSharing = require('vue-social-sharing');

Vue.component('cart-item',require('~/components/CartItem').default);
Vue.component('item-attrs', require('~/components/ItemAttrs').default);


/*
Vue.use(new apiService());
*/
Vue.use(SocialSharing);

