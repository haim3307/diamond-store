<template>
  <login-register-layout>
    <form
      novalidate
      name="login_form"
      ref="login_form"
      action="/api/users/login"
      method="post"
      id="login_form"
      @submit.prevent="onSubmit"
    >

      <single-input-item
        label="Email Address"
        name="email"
        validate="required|email"
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
      <a is="nuxt-link" to="/recover-password" class="forget-pwd mt-4 d-block">Forgot your password?</a>

      <div class="single-input-item">
        <button class="btn-login">Login</button>
      </div>
    </form>
  </login-register-layout>
</template>

<script>
import LoginRegisterLayout from "~/layouts/nested/LoginRegister";
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

<style>
</style>