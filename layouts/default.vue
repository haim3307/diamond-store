<template>
  <div>
    <!--== Header Area Start ==-->
    <b-navbar class="header pt-0" sticky>
      <header id="header-area" class="header__3 w-100">
        <div class="ruby-container">
          <div class="row">
            <!-- Logo Area Start -->
            <div class="col-3 col-lg-1 col-xl-2 m-auto">
              <a href="index.html" class="logo-area">
                <img src="~assets/img/logo-black.png" alt="Logo" class="img-fluid">
              </a>
            </div>
            <!-- Logo Area End -->

            <!-- Navigation Area Start -->
            <div class="col-3 col-lg-9 col-xl-8 m-auto">
              <div class="main-menu-wrap">
                <nav id="mainmenu">
                  <ul>
                    <li>
                      <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="dropdown-show">
                      <a href="#">Shop</a>
                      <ul class="mega-menu-wrap dropdown-nav">
                        <li class="mega-menu-item">
                          <a href="shop.html" class="mega-item-title">Shop
                            Layout</a>
                          <ul>
                            <li><a href="shop.html">Shop Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                            <li><a href="shop-left-full-wide.html">Shop Left Full Wide</a></li>
                            <li><a href="shop-right-full-wide.html">Shop Right Full Wide</a></li>
                            <li><a href="shop-full-wide.html">Shop Without Sidebar</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a href="single-product.html" class="mega-item-title">Single
                            Products</a>
                          <ul>
                            <li><a href="single-product.html">Single Product</a></li>
                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                            <li><a href="single-product-group.html">Single Product Group</a></li>
                            <li><a href="single-product-external.html">Single Product External</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-show">
                      <a href="#">Pages</a>
                      <ul class="dropdown-nav">
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="compare.html">Compare</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="login-register.html">Login & Register</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="404.html">404 Error</a></li>
                      </ul>
                    </li>
                    <li class="dropdown-show">
                      <a href="#">Men</a>
                      <ul class="mega-menu-wrap dropdown-nav">
                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Shirt</a>
                          <ul>
                            <li><a href="shop.html">Tops & Tees</a></li>
                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                            <li><a href="shop.html">Jackets & Coats</a></li>
                            <li><a href="shop.html">Fashion Jackets</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Jeans</a>
                          <ul>
                            <li><a href="shop.html">Crochet</a></li>
                            <li><a href="shop.html">Sleeveless</a></li>
                            <li><a href="shop.html">Stripes</a></li>
                            <li><a href="shop.html">Sweaters</a></li>
                            <li><a href="shop.html">Hoodies</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Shoes</a>
                          <ul>
                            <li><a href="shop.html">Tops & Tees</a></li>
                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                            <li><a href="shop.html">Jackets & Coats</a></li>
                            <li><a href="shop.html">Fashion Jackets</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Watches</a>
                          <ul>
                            <li><a href="shop.html">Crochet</a></li>
                            <li><a href="shop.html">Sleeveless</a></li>
                            <li><a href="shop.html">Stripes</a></li>
                            <li><a href="shop.html">Sweaters</a></li>
                            <li><a href="shop.html">Hoodies</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-show">
                      <a href="shop-left-full-wide.html">Women</a>
                      <ul class="mega-menu-wrap dropdown-nav">
                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Kamiz</a>
                          <ul>
                            <li><a href="shop.html">Tops & Tees</a></li>
                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                            <li><a href="shop.html">Jackets & Coats</a></li>
                            <li><a href="shop.html">Fashion Jackets</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Life Style</a>
                          <ul>
                            <li><a href="shop.html">Crochet</a></li>
                            <li><a href="shop.html">Sleeveless</a></li>
                            <li><a href="shop.html">Stripes</a></li>
                            <li><a href="shop.html">Sweaters</a></li>
                            <li><a href="shop.html">Hoodies</a></li>
                          </ul>
                        </li>

                        <li class="mega-menu-item">
                          <a
                                  href="shop-left-full-wide.html"
                                  class="mega-item-title"
                          >Shoes</a>
                          <ul>
                            <li><a href="shop.html">Tops & Tees</a></li>
                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                            <li><a href="shop.html">Jackets & Coats</a></li>
                            <li><a href="shop.html">Fashion Jackets</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-show">
                      <a href="#">Blog</a>
                      <ul class="dropdown-nav">
                        <li><a href="blog.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-grid.html">Blog Grid Layout</a></li>
                        <li><a href="single-blog.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <nuxt-link to="/contact-us">Contact Us</nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Navigation Area End -->

            <!-- Header Right Meta Start -->
            <div class="col-6 col-lg-2 m-auto">
              <div class="header-right-meta text-right">
                <ul>
                  <li><a href="#" class="modal-active"><i class="fa fa-search" /></a></li>
                  <li class="settings">
                    <a href="#"><i class="fa fa-cog" /></a>
                    <div class="site-settings d-block d-sm-flex">
                      <dl class="currency">
                        <dt>Currency</dt>
                        <dd class="current">
                          <a href="#">USD</a>
                        </dd>
                        <dd><a href="#">AUD</a></dd>
                        <dd><a href="#">CAD</a></dd>
                        <dd><a href="#">BDT</a></dd>
                      </dl>

                      <dl class="my-account">
                        <dt>My Account</dt>
                        <dd><a href="#">Dashboard</a></dd>
                        <dd><a href="#">Profile</a></dd>
                        <dd><a href="#">Sign</a></dd>
                      </dl>

                      <dl class="language">
                        <dt>Language</dt>
                        <dd class="current">
                          <a href="#">English (US)</a>
                        </dd>
                        <dd><a href="#">English (UK)</a></dd>
                        <dd><a href="#">Chinees</a></dd>
                        <dd><a href="#">Bengali</a></dd>
                        <dd><a href="#">Hindi</a></dd>
                        <dd><a href="#">Japanees</a></dd>
                      </dl>
                    </div>
                  </li>
                  <li class="shop-cart">
                    <a href="#"><i class="fa fa-shopping-bag" /> <span
                            class="count" v-html="initialData.orderItems.length"></span></a>
                    <div class="mini-cart" ref="miniCart">
                      <div class="mini-cart-body">
                        <div v-if="initialData.orderItems.length" v-show="initialData.orderItems.length" style="display: none">
                          <cart-item class="single-cart-item d-flex" v-for="product in initialData.orderItems" :product="product" :key="'p-'+product.id"></cart-item>
                        </div>
                        <div v-else>
                          <h6 class="h4 text-center">Cart is empty.</h6>
                        </div>

                      </div>
                      <div class="mini-cart-footer">
                        <a href="checkout.html" class="btn-add-to-cart">Checkout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Header Right Meta End -->
          </div>
        </div>
      </header>
    </b-navbar>

    <!--== Header Area End ==-->

    <!--== Search Box Area Start ==-->
    <div class="body-popup-modal-area">
      <span class="modal-close"><img src="~assets/img/cancel.png" alt="Close" class="img-fluid"></span>
      <div class="modal-container d-flex">
        <div class="search-box-area">
          <div class="search-box-form">
            <form action="#" method="post">
              <input type="search" placeholder="type keyword and hit enter">
              <button class="btn" type="button">
                <i class="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--== Search Box Area End ==-->


    <nuxt />


    <!-- Footer Area Start -->
    <footer id="footer-area">
      <!-- Footer Call to Action Start -->
      <div class="footer-callto-action">
        <div class="ruby-container">
          <div class="callto-action-wrapper">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <!-- Single Call-to Action Start -->
                <div class="single-callto-action d-flex">
                  <figure class="callto-thumb">
                    <img src="~assets/img/air-plane.png" alt="WorldWide Shipping">
                  </figure>
                  <div class="callto-info">
                    <h2>Free Shipping Worldwide</h2>
                    <p>On order over $150 - 7 days a week</p>
                  </div>
                </div>
                <!-- Single Call-to Action End -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Single Call-to Action Start -->
                <div class="single-callto-action d-flex">
                  <figure class="callto-thumb">
                    <img src="~assets/img/support.png" alt="Support">
                  </figure>
                  <div class="callto-info">
                    <h2>24/7 CUSTOMER SERVICE</h2>
                    <p>Call us 24/7 at 000 - 123 - 456k</p>
                  </div>
                </div>
                <!-- Single Call-to Action End -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Single Call-to Action Start -->
                <div class="single-callto-action d-flex">
                  <figure class="callto-thumb">
                    <img src="~assets/img/money-back.png" alt="Money Back">
                  </figure>
                  <div class="callto-info">
                    <h2>MONEY BACK Guarantee!</h2>
                    <p>Send within 30 days</p>
                  </div>
                </div>
                <!-- Single Call-to Action End -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Single Call-to Action Start -->
                <div class="single-callto-action d-flex">
                  <figure class="callto-thumb">
                    <img src="~assets/img/cog.png" alt="Guide">
                  </figure>
                  <div class="callto-info">
                    <h2>SHOPPING GUIDE</h2>
                    <p>Quis Eum Iure Reprehenderit</p>
                  </div>
                </div>
                <!-- Single Call-to Action End -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Call to Action End -->

      <!-- Footer Follow Up Area Start -->
      <div class="footer-followup-area">
        <div class="ruby-container">
          <div class="followup-wrapper">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="follow-content-wrap">
                  <a href="index.html" class="logo"><img src="~assets/img/logo.png" alt="logo"></a>
                  <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum</p>

                  <div class="footer-social-icons">
                    <a href="#"><i class="fa fa-facebook" /></a>
                    <a href="#"><i class="fa fa-twitter" /></a>
                    <a href="#"><i class="fa fa-pinterest" /></a>
                    <a href="#"><i class="fa fa-instagram" /></a>
                    <a href="#"><i class="fa fa-flickr" /></a>
                  </div>

                  <a href="#"><img src="~assets/img/payment.png" alt="Payment Method"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Follow Up Area End -->

      <!-- Footer Image Gallery Area Start -->
      <div class="footer-image-gallery">
        <div class="ruby-container">
          <div class="image-gallery-wrapper">
            <div class="row">
              <div class="col-lg-12">
                <div class="imgage-gallery-carousel owl-carousel">
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-1.jpg" alt="Gallery"></a>
                  </div>
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-2.jpg" alt="Gallery"></a>
                  </div>
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-3.jpg" alt="Gallery"></a>
                  </div>
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-4.jpg" alt="Gallery"></a>
                  </div>
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-3.jpg" alt="Gallery"></a>
                  </div>
                  <div class="gallery-item">
                    <a href="#"><img src="~assets/img/gallery-img-2.jpg" alt="Gallery"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Image Gallery Area End -->

      <!-- Copyright Area Start -->
      <div class="copyright-area">
        <div class="ruby-container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="copyright-text">
                <p>Copyright © 2018 Ruby. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright Area End -->
    </footer>
    <!-- Footer Area End -->

    <!-- Scroll to Top Start -->
    <a href="#" class="scrolltotop"><i class="fa fa-angle-up" /></a>
    <!-- Scroll to Top End -->
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i|Dancing+Script|Sacramento|Montserrat|Playfair+Display:400,400i,700,700i";
</style>
<script>
  export default {
      created(){

      },
      computed: {
          initialData () {
              return this.$store.state.initialData;
          }
      },
      mounted(){

      }
  }
</script>
