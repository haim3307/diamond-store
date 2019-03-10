<template>
  <form
    action
    ref="billingAndShippingForm"
    @submit.prevent="onSubmit($event)"
    novalidate
    method="post"
    id="billingAndShippingForm"
  >
    <div class="row">
      <div class="billing-form-wrap col-lg-8">
        <div class="row">
          <div
            class="col-md-6"
            v-for="(inputVal,inputKey) in inputs.input"
            :key="'ship_' +inputKey"
          >
            <!-- {{JSON.stringify(userData['ship_'+inputKey])}} -->
            <single-input-item
              :label="typeof inputVal == 'object' &&  ('label' in  inputVal) ? inputVal.label:inputKey.replace('_',' ')"
              :name="'ship_'+inputKey"
              :validate="inputVal.validate"
              :mode="'ship'"
              @input="userData['ship_'+inputKey] = $event.target.value"
              :value="userData['ship_'+inputKey]"
            ></single-input-item>
          </div>
          <div class="col-md-6">
            <single-input-item
              v-if="!initialData.is_logged_in"
              label="Email Address"
              name="email"
              validate="required|email|email_exists"
              mode
              :delay="1000"
              @input="userData['email'] = $event.target.value"
              :value="userData['email']"
            ></single-input-item>
          </div>
          <!-- {{JSON.stringify(userData)}} -->
          <div
            class="col-md-6"
            v-for="(selectVal,selectKey) in inputs.select"
            :key="'ship_' + selectKey"
          >
            <single-select-item
              :options="selectVal.options"
              :name="'ship_' + selectKey"
              :label="selectVal.label"
              :parent="selectVal.parent"
              :parent-id="selectVal.parent_id"
              :mode="'ship'"
              @change="onSelectChange($event,'ship',selectKey)"
              :value="userData['ship_'+selectKey]"
            ></single-select-item>
          </div>
          <div class="checkout-box-wrap col-12" v-if="!initialData.is_logged_in">
            <div class="single-input-item">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="create_pwd"
                  name="create_pwd"
                  v-model="create_pwd"
                >
                <label class="custom-control-label" for="create_pwd">Create an account?</label>
              </div>
            </div>
            <div class="account-create single-form-row">
              <p>
                Create an account by entering the information below. If you are a returning
                customer please login at the top of the page.
              </p>
              <div class="col-md-6">
                <single-input-item
                  v-if="create_pwd"
                  label="Account Password"
                  name="password"
                  validate="required|min:6"
                  mode
                  type="password"
                ></single-input-item>
              </div>
            </div>
          </div>
          <div class="checkout-box-wrap col-12">
            <div class="single-input-item">
              <div class="custom-control custom-checkbox"><!--                   @change="differentAddress($event)"
 -->
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same_shipping"
                  v-model="source.same_shipping"
                  name="same_shipping"
                >
                <label
                  class="custom-control-label"
                  for="same_shipping"
                >Billing Address is the same as shipping?</label>
              </div>
            </div>
            <div class="ship-to-different single-form-row" v-if="!same_shipping">
              <div class="row">
                <div
                  class="col-md-6"
                  v-for="(inputVal,inputKey) in inputs.input"
                  :key="'bill_' + inputKey"
                >
                  <single-input-item
                    :label="typeof inputVal == 'object' &&  ('label' in  inputVal) ? inputVal.label:inputKey.replace('_',' ')"
                    :name="'bill_'+inputKey"
                    :validate="inputVal.validate"
                    :mode="'bill'"
                    @input="userData['bill_'+inputKey] = $event.target.value"
                    :value="userData['bill_'+inputKey]"
                  ></single-input-item>
                </div>
                <div
                  class="col-md-6"
                  v-for="(selectVal,selectKey) in inputs.select"
                  :key="'bill_' + selectKey"
                >
                  <single-select-item
                    :options="selectVal.options"
                    :name="'bill_' + selectKey"
                    :label="selectVal.label"
                    :parent="selectVal.parent"
                    :parent-id="selectVal.parent_id"
                    :mode="'bill'"
                    @change="onSelectChange($event,'bill',selectKey)"
                    :value="userData['bill_'+selectKey]"
                  ></single-select-item>
                </div>
              </div>
            </div>
          </div>

          <div class="single-input-item col-12">
            <div class="custom-control custom-checkbox" v-if="!initialData.is_logged_in">
              <input
                type="checkbox"
                class="custom-control-input"
                id="terms"
                name="checkout_agree_checkBox"
                v-validate="'required'"
              >
              
              <label
                class="custom-control-label"
                :class="{'text-danger':errors.first('checkout_agree_checkBox')}"
                for="terms"
              >
                I have read and agree to the website
                <a
                  href="#"
                  :class="{'text-danger':errors.first('checkout_agree_checkBox')}"
                >terms and conditions.</a>
                <span class="text-danger">*</span>
              </label>
            </div>
          </div>
          <!--                                                <div class="single-input-item col-md-6">
                                                                                                                        <label for="ordernote">Order Note</label>
                                                                                                                        <textarea name="ordernote" id="ordernote" cols="30" rows="1"
                                                                                                                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          </div>-->
        </div>
      </div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
import SingleInputItem from "~/components/forms/SingleInputItem";
import SingleSelectItem from "~/components/forms/SingleSelectItem";
import { debug } from "util";

export default {
  props: ["inputs", "same_shipping", "selects"],
  components: { SingleInputItem, SingleSelectItem },
  computed: {
    initialData() {
      return this.$store.state.initialData;
    },
    userData() {
      return this.$parent.$parent.userData;
    },
    source(){
        return this.$parent.$parent;
    }
  },
  methods: {
    onSubmit(e) {
      debugger;
      this.forms.onSubmit(this, e, false);
    },
    onSelectChange(e, mode = "ship", selectKey) {
      this.userData[`${mode}_${selectKey}`] = e;
    }
  }
};
</script>

<style>
</style>
