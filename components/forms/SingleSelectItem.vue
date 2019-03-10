<template>
  <div
    class="single-input-item"
    v-if="showChildSelect"
  >
    <label :for="name" class="required" v-html="label"></label>
    <!--       v-model="$parent.selects[name]"
 -->
    <b-form-select
      :options="options"
      size="sm"
      style="background-color: #f4f5f7;height: 55.63px;font-size: 1.4rem;padding-left: 15px;"
      v-on="events"
      v-bind="attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: ["$validator"],

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
    showChildSelect(){
        let {parent,parentId,parentModel} = this;
        return !parent || (parent && parentId == parentModel);
    },
    parentModel: function() {
      return this.$parent.userData[this.mode+"_" + this.parent];
    },
    events() {
      return {
        ...this.$listeners
      };
    },
    initialData() {
      return this.$store.state.initialData;
    },
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
    attrs() {
      const { label, delay, mode, dref, ...attrs } = this.$attrs;
      return attrs;
    }
  }
};
</script>

<style>
</style>
