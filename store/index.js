import vuex from 'vuex';
import ApiModule from './modules/api';
import $ from "jquery";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const config = {
    state: () => ({
        initialData: {},
        breadcrumbs: []
    }),
    actions: {
        async nuxtServerInit({ commit },store)
        {
            const {app,$axios} = store;

            console.log(Object.keys(store));
            const data = await $axios.$get('/api/api/globaldata.json');
            //console.log(data);
            console.log('start : app.router',app.router.history.current.path,'end : app.router');
            commit('setInitialData',data);

            /*commit('setBreadCrumb',paths);*/
        },
        saveToCart({state},product,element)
        {
            this.$axios(`/api/cart/add/product_id/${product.id}.json?no-redirect=1`)
                .then( result =>  {
                    var product = result.data;
                    if(product){
                        $('.mini-cart').addClass('hover');
                        setTimeout(function () {
                            $('.mini-cart').removeClass('hover');
                        },3 * 1000);
                        state.initialData.orderItems.push(product);
                        if('seo' in this && 'cart' in this.seo)
                            window.location = this.seo.cart;
                    }
                });
            if(element) element.inDash = false;
        },
        async removeFromCart({state},id)
        {
            let deleteUrl = `/api/cart/${id}/remove.json`;
            await this.$axios.$get(deleteUrl);
            state.initialData.orderItems = state.initialData.orderItems.filter( item => item.productOrderId != id);
        }


    },
    mutations:{
        setInitialData(state,data)
        {
            state.initialData = data;
        },


    },
    modules:{
        ApiModule
    }
};

export default function () {
    return new vuex.Store(config);
}