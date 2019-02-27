<template>
    <div class="single-product-page-content">
        <div class="row">
            <!-- Product Thumbnail Start -->
            <div class="col-lg-5">
                <div class="product-thumbnail-wrap p-5">

                    <div class="product-carousel" v-swiper:swiperTop="swiperOption" ref="swiperTop">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide single-carousel-wrap slide-item-1"  v-if="product.img" style="border: 2px solid #e2e2e2;">
                                <a :href="product.img" target="_blank"><img class="img-fluid"
                                                                            :src="product.img"
                                                á                            alt="Product's main image"/>
                                </a>
                            </div>
                            <div class="swiper-slide single-carousel-wrap slide-item-2" v-if="product.videoDataLink">
                                <div class="single-thumb-item" data-dismiss="modal" style=" height: 300px;overflow:hidden;">
                                    <a>
                                        <div class="product-iframe-wrap h-100">
                                            <iframe style="width: 100%; height: 300px;" :src="product.videoDataLink" class="video-iframe product-video-frame"></iframe>
                                        </div>
                                    </a>
                                    <img class="fa fa-video-camera" src="~assets/img/single-pro-thumb.jpg" alt="360 video">
                                </div>
                            </div>
                            <div class="swiper-slide single-carousel-wrap slide-item-3" v-if="product.certLink">
                                <a :href="product.certLink" target="_blank">
                                    <img class="img-fluid" :src="product.certLink" alt="Certificate"/>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>


                    </div>
                    <div class="product-thumb-carousel"  v-swiper:swiperThumbs="swiperThumbOption" ref="swiperThumbs">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide single-carousel-wrap slide-item-1"  v-if="product.img">
                                    <img class="img-fluid"
                                                                            :src="product.img"
                                                                            alt="Product's main image"/>
                            </div>
                            <div class="swiper-slide single-carousel-wrap slide-item-2" v-if="product.videoDataLink">
                               <!-- <div class="single-thumb-item" data-dismiss="modal" style=" height: 300px;overflow:hidden;">
                                    <a>
                                        <div class="product-iframe-wrap h-100">
                                            <iframe style="width: 100%; height: 300px;" :src="product.videoDataLink" class="video-iframe product-video-frame"></iframe>
                                        </div>
                                    </a>
                                </div>-->

                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <i class="fa fa-camera fa-4x"></i>
                                </div>
                            </div>
                            <div class="swiper-slide single-carousel-wrap slide-item-3" v-if="product.certLink">
                                <img class="img-fluid" :src="product.certLink" alt="Certificate"/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <!-- Product Thumbnail End -->

            <!-- Product Details Start -->
            <div class="col-lg-7 mt-5 mt-lg-0">
                <div class="product-details">
                    <div class="d-flex justify-content-between">
                        <h2><a>{{product.title}}</a></h2>
                        <social-sharing :url="product.url"
                                        :title="product.title"
                                        :description="product.description"
                                        quote=""
                                        hashtags=""
                                        twitter-user=""
                                        inline-template
                        >
                            <div class="vue-social-sharing">
                                <!--
                                                                <?php include VIEW_V3_DIR . '/includes/gallery/items/includes/social-share-list.html.php' ?>
                                -->
                            </div>
                        </social-sharing>
                    </div>
                    <!--                                <div class="rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star-half"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>-->

                    <span class="price" v-html="product.price"></span>

                    <div class="product-info-stock-sku">
                        <span class="product-stock-status">{{product.stock_txt}}</span>
                        <span class="product-sku-status ml-5"><strong>GIA</strong> {{product.certId }}</span>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <!-- Product Full Description Start -->
                            <div class="product-full-info-reviews">
                                <!-- Single Product tab Menu -->
                                <nav class="nav" id="nav-tab">
                                    <a class="active" id="description-tab" data-toggle="tab" href="#description">SPECIFICATIONS</a>
                                    <!--                                    <a id="reviews-tab" data-toggle="tab" href="#reviews">Reviews</a>
                                    -->                                </nav>
                                <!-- Single Product tab Menu -->

                                <!-- Single Product tab Content -->
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="description" style="font-family: Montserrat">
                                        <div class="row justify-content-around">

                                            <section class="col-md-12">
                                                <h3>Description</h3>
                                                <hr>
                                                <p>
                                                    {{product.description}}
                                                </p>
                                            </section>

                                            <section class="col-md-12">
                                                <h3>Information</h3>
                                                <hr>
                                                <ul class="row product-desc-table pl-5">
                                                    <item-attrs :product="product"></item-attrs>
                                                </ul>
                                            </section>
                                        </div>

                                    </div>
                                </div>
                                <!-- Single Product tab Content -->
                            </div>
                            <!-- Product Full Description End -->
                        </div>
                    </div>

                    <!--                                <p class="products-desc">
                                                        <?/*= $product->description */?>

                                                    </p>-->

                    <div class="product-quantity mt-5 d-flex align-items-center cta-button">
                        <a href="#" class="btn btn-add-to-cart" @click.prevent="$root.addToCart(product)"><i class="fa fa-cart-plus pr-1" aria-hidden="true"></i>
                            Add to Cart</a>
                    </div>

                    <div class="product-btn-group d-none d-sm-block">
                        <a href="single-product.html" class="btn btn-add-to-cart btn-whislist">+ Add to
                            Wishlist</a>
                        <a href="single-product.html" class="btn btn-add-to-cart btn-whislist">+ Add to
                            Compare</a>
                        <!--                                    <a href="single-product.html" class="btn btn-add-to-cart btn-compare">Email</a>
                        -->                                </div>
                </div>
            </div>
            <!-- Product Details End -->
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: false,
                    speed: 1300,
                    loop: true,
                    height:'500px',
                    // some swiper options...
                    updateOnImagesReady:true
                }   ,
                swiperThumbOption: {
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper;
                const swiperThumbs = this.$refs.swiperThumbs.swiper;
                swiperTop.controller.control = swiperThumbs;
                swiperThumbs.controller.control = swiperTop;
            })
        },
        /*
        async fetch({params,$axios}){

            let data = await $axios.$get(`/api/products/product/${params.slug}`);
            console.log(data);
            return data;
        }*/
        async asyncData({params,$axios}){
            let data = await $axios.$get(`/api/products/product/${params.slug}`);
            //console.log(data);
            return data;
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../assets/scss/views/products-product";
    .product-carousel{
        .swiper-wrapper,.swiper-slide{
            min-height: 700px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .product-thumb-carousel{
        .swiper-wrapper,.swiper-slide{
            min-height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
        }
    }

</style>
