<template>
  <login-register-layout>
          <form
        id="account_reg_form"
        method="post"
        action="/api/users/create"
        @submit.prevent="onSubmit"
        ref="account_reg_form"
        name="account_reg_form"
        novalidate="true"
      >
        <div class="row">
          <div class="col-md-6">
            <single-input-item
              label="First Name"
              name="bill_first_name"
              validate="required"
              mode
              :delay="1000"
            ></single-input-item>
          </div>
          <div class="col-md-6">
            <single-input-item
              label="Last Name"
              name="bill_last_name"
              validate="required"
              mode
              :delay="1000"
            ></single-input-item>
          </div>
        </div>

        <single-input-item
          label="Email Address"
          name="email"
          validate="required|email|email_exists"
          mode
          :delay="1000"
        ></single-input-item>
        <single-input-item label="Password" name="password" mode type="password">
          <input
            type="password"
            v-validate.immediate="'required|min:6'"
            placeholder=" "
            ref="password"
            name="password"
          >
        </single-input-item>
        <single-input-item label="Confirm Password" name="password-again" mode type="password">
          <input
            type="password"
            placeholder=" "
            v-validate.immediate="'confirmed:password'"
            name="password-again"
          >
        </single-input-item>

        <div class="single-input-item">
          <div class="login-reg-form-meta">
            <div class="remember-meta">
              <div class="custom-control custom-checkbox" style="display: none;">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="registerAgreeCheckBox"
                  name="registerAgreeCheckBox"
                  checked
                >
                <label class="custom-control-label" for="subnewsletter">agree_gdpr
                  <!-- <?= text('agree_gdpr') ?> -->
                </label>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/sign-in" class="forget-pwd">Already have a user?</nuxt-link>

        <div class="single-input-item">
          <button class="btn-login">Register</button>
        </div>
      </form>
  </login-register-layout>

</template>

<script>
import LoginRegisterLayout from '~/layouts/nested/LoginRegister';
import SingleInputItem from "~/components/forms/SingleInputItem";
import ErrorMsg from "~/components/forms/ErrorMsg.vue";
export default {
  components: {
    ErrorMsg,
    SingleInputItem,
    LoginRegisterLayout
  },
  methods: {
    onSubmit(e) {
      this.forms.onSubmit(this, e);
    }
  }
};
</script>
