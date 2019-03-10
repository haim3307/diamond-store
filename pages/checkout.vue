<template>
  <div id="page-content-wrapper" class="p-9">
    <!--== Checkout Page Content Area ==-->
    <div class="ruby-container">
      <div class="row">
        <div class="col-12">
          <div class="checkoutaccordion row" id="checkOutAccordion">
            <div class="col-12">
              <div class="card" v-if="!initialData.is_logged_in">
                <h3>
                  Returning Customer?
                  <span v-b-toggle.login-accordion>Click Here To Login</span>
                </h3>

                <b-collapse id="login-accordion">
                  <div class="card-body">
                    <p>
                      If you have shopped with us before, please enter your details in the boxes below. If
                      you are a new customer, please proceed to the Billing &amp; Shipping section.
                    </p>
                    <div class="login-reg-form-wrap">
                      <form action="#" method="post">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="single-input-item">
                              <input type="email" placeholder="Enter your Email" required>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="single-input-item">
                              <input type="password" placeholder="Enter your Password" required>
                            </div>
                          </div>
                        </div>

                        <div class="single-input-item">
                          <div
                            class="login-reg-form-meta d-flex align-items-center justify-content-between"
                          >
                            <div class="remember-meta">
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="rememberMe">
                                <label class="custom-control-label" for="rememberMe">
                                  Remember
                                  Me
                                </label>
                              </div>
                            </div>

                            <a href="#" class="forget-pwd">Forget Password?</a>
                          </div>
                        </div>

                        <div class="single-input-item">
                          <button class="btn-login">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div class="card">
                <div>
                  <h3 v-b-toggle.shipping-and-billing variant="primary">Shipping Details</h3>
                  <b-collapse id="shipping-and-billing" v-model="showShippingDetails" v-if="showShippingDetails">
                    <b-card>
                      <div class="checkout-billing-details-wrap">
                        <h2>Shipping Details</h2>
                        <shipping-and-billing-form
                          :inputs="inputs"
                          :same_shipping="same_shipping"
                          :selects="selects"
                          @submit="customerPost"
                        >
                          <cart-summery :btn="'continue'" :mode="'shippingAndBilling'"></cart-summery>
                        </shipping-and-billing-form>
                      </div>
                    </b-card>
                  </b-collapse>
                </div>

                <!-- Order Summary Details -->
              </div>

              <div class="card">
                <h3 v-b-toggle.payment-method>Payment Method</h3>

                <b-collapse id="payment-method" v-model="showPaymentOptions" v-if="showPaymentOptions">
                  <div class="card-body">
                    <!-- Order Payment Method -->
                    <form
                      class="d-flex"
                      method="post"
                      style="    height: fit-content;"
                      @submit.prevent="paymentOptionPost"
                    >
                      <div class="order-payment-method col-md-8">
                        <div class="single-payment-method">
                          <div class="payment-method-name">
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                id="directbank"
                                name="payment_option"
                                value="ph"
                                v-model="order.payment_method_id"
                                class="custom-control-input"
                              >
                              <label class="custom-control-label" for="directbank">Phone Transfer</label>
                            </div>
                          </div>
                          <div class="payment-method-details" data-method="ph">
                            <p>
                              Make your payment directly into our bank account. Please use your Order ID as the
                              payment reference. Your order will not be shipped until the funds have cleared
                              in our account..
                            </p>
                          </div>
                        </div>

                        <div class="single-payment-method">
                          <div class="payment-method-name">
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                id="paypalpayment"
                                name="payment_option"
                                value="pp"
                                v-model="order.payment_method_id"
                                class="custom-control-input"
                              >
                              <label class="custom-control-label" for="paypalpayment">
                                Paypal
                                <img
                                  src="~assets/img/layout/paypal-784404.svg"
                                  class="img-fluid paypal-card"
                                  alt
                                >
                              </label>
                            </div>
                          </div>
                          <div class="payment-method-details" data-method="pp">
                            <p>
                              Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                              account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <cart-summery class="col-md-4" :btn="'continue'" :mode="'paymentMethod'"></cart-summery>
                    </form>
                  </div>
                </b-collapse>
              </div>
              <div class="card">
                <h3 v-b-toggle.review-order>Review Order</h3>

                <b-collapse
                  id="review-order"
                  data-parent="#checkOutAccordion"
                  v-model="showPlaceOrder" v-if="showPlaceOrder"
                >
                  <form action="/cart/review_post" method="post" class="card-body d-flex">
                    <!-- Order Payment Method -->
                    <div class="order-payment-method col-md-8" style="padding-top: 17px">
                      <div class="mt-2 mb-4">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="summery-section p-3 ship-to col-md-6">
                              <div class="info-title-wrap">
                                <div class="title uppercase">
                                  <!-- <?/*= text('ship-to-title') */?> -->
                                  Shipping Address:
                                </div>
                              </div>
                              <div class="content-wrap">
                                <div class="name">
                                  <!-- <?= $this->order->ship_first_name ?> <?= $this->order->ship_last_name ?> -->
                                </div>
                                <div class="street">
                                  <!-- <?= $this->order->ship_address ?> -->
                                </div>
                                <div class="zip-code">
                                  <!-- <?= $this->order->ship_city ?>, <?= $this->order->ship_state->name ?> <?= $this->order->ship_zipcode ?> -->
                                </div>
                                <div class>
                                  <!-- <?= $this->order->ship_country->name ?> -->
                                </div>
                              </div>
                              <div class="edit-det uppercase">
                                <!-- <? if($this->order->payment_method->id != 5): ?>
                                                                    <a href="<?= seo('/cart/customer', 'ssl')?>" class="edit" ><?= text('w-edit')?></a>
                                <? endif ?>-->
                              </div>
                            </div>
                            <div class="summery-section ship-to col-md-3">
                              <div class="info-title-wrap">
                                <div class="title uppercase">
                                  <!-- <?/*= text('bill-to-title') */?> -->
                                  Billing Address:
                                </div>
                              </div>
                              <div class="content-wrap"></div>
                              <div class="edit-det uppercase">
                                <!-- <?/* if($this->order->payment_method->id != 5): */?>
                                                                    <a href="<?/*= seo('/cart/customer', 'ssl')*/?>" class="edit" ><?/*= text('w-edit')*/?></a>
                                <?/* endif */?>-->
                              </div>
                            </div>
                            <div class="summery-section p-3 ship-to col-md-6">
                              <div class="info-title-wrap">
                                <div class="title uppercase">
                                  <!-- <?/*= text('payment-type-title') */?> -->
                                  Payment Method:
                                </div>
                              </div>
                              <div class="content-wrap">
                                <div class="card-number">
                                  <span class="type uppercase">
                                    <!-- <?= text('pay-method-' . ($this->order->payment_method->id??1)) ?> -->
                                  </span>
                                  <!-- <?php if (null !== ($cc_details = $this->order->cc_details())): ?>
                                                                        <span class="number">
                                                                            <?= $this->order->cc_type_name() ?><br/>
                                                                        </span>
                                  <?php endif; ?>-->
                                </div>
                              </div>
                              <div class="edit-det uppercase">
                                <!-- <? if($this->order->payment_method->id != 5): ?>
                                                                    <a href="<?= seo('/cart/payment', 'ssl')?>" class="edit"><?= text('w-edit')?></a>
                                <? endif ?>-->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-table table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th class="pro-thumbnail">Thumbnail</th>
                              <th class="pro-title">Product</th>
                              <th class="pro-price">Price</th>
                              <!--                            <th class="pro-quantity">Quantity</th>
                              <th class="pro-subtotal">Total</th>-->
                              <th class="pro-remove">Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                  <tr
                  is="cart-row"
                  v-for="orderItem in $store.state.initialData.orderItems"
                  :key="orderItem.id"
                  :order-item="orderItem"
                ></tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <cart-summery :btn="'place order'" :mode="'reviewOrder'"></cart-summery>
                  </form>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--== Checkout Page Content End ==-->
  </div>
</template>

<script>
import ShippingAndBillingForm from "~/components/forms/ShippingAndBillingForm";
import CartSummery from "~/components/CartSummery";
import CartRow from "~/components/CartRow";
export default {
  components: {
    CartRow,
    ShippingAndBillingForm,
    CartSummery
  },
  computed: {
    initialData() {
      return this.$store.state.initialData;
    },
    showShippingDetails: {
      get() {
        return !this.orderSteps.shippingDetails;
      },
      set(oldVal,newVal) {
         /*  debugger;
          this.orderSteps.shippingDetails = oldVal; */
          return oldVal;
      }
    },
    showPaymentOptions: {
      get() {
        return (
          !this.orderSteps.paymentOptions && this.orderSteps.shippingDetails
        );
      },
      set() {}
    },
    showPlaceOrder: {
      get() {
        return (
          !this.orderSteps.placeOrder &&
          this.orderSteps.paymentOptions &&
          this.orderSteps.shippingDetails
        );
      },
      set() {}
    }
  },
  async asyncData({ $axios }) {
    return await $axios.$get("/api/cart/one_page_checkout.json", {});
  },
  methods: {
    async customerPost(e) {
      let result = await this.$store.$axios.$post("/api/cart/one_page_checkout_post", {...this.userData,same_shipping:this.same_shipping});
      if(result){
            this.orderSteps = result.orderSteps;
      }
    },
    async paymentOptionPost(e) {
      let result = await this.$store.$axios.$post("/api/cart/payment_post", new FormData(e.target));
      debugger;
      if(result){
            this.orderSteps = result.orderSteps;
      }
    }
  }
};
</script>

<style>
</style>
