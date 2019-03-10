<template>
  <div
    class="single-input-item"
    v-if="!parent || (parent && parentId == $parent.selects[mode + '_' + parent])"
  >
    <label :for="name" class="required" v-html="label"></label>
    <b-form-select
      v-model="$parent.selects[name]"
      :options="options"
      size="sm"
      style="background-color: #f4f5f7;height: 55.63px;font-size: 1.4rem;padding-left: 15px;"
      :name="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    name: {},
    options: {},
    parent: { default: false },
    "parent-id": { default: false },
    mode: {}
  },
  created: function() {
    for (var e in this.events) {
      e = this.events[e];
      this.$on(e.name, e.callback); // Add event listeners
    }
  },
  mounted: function() {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    parentModel: function() {
      return this.$parent["bill_" + this.parent];
    }
  }
};
</script>

<style>
</style>
