<template>
  <span
    class="alert alert-danger"
    v-show="field && field.touched && !field.valid"
    style="display: none;"
    v-html="msg"
  ></span>
</template>

<script>
export default {
  inject: ["$validator"],
  props: {
    mode: { default: "" },
  },
  computed: {
    field() {
      return this.fields[this.attrs.name];
    },
    attrs() {
      return this.$parent.attrs;
    },
    errors() {
      return this.$parent.errors;
    },
    msg(){
        return (this.errors.first(this.name) || '').replace('bill_','').replace('ship_','').replace('_',' ');
    },
    name(){
        return this.attrs.name;
    }
  }
};
</script>

<style>
</style>
