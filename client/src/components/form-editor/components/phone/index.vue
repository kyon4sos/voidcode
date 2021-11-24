<template>
  <a-form-item :label="label">
    <a-input :placeholder="placeholder"></a-input>
  </a-form-item>
</template>

<script>
export default {
  name: "phone",
  props: {
    label: {
      type: String,
      default: "公司电话",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
</style>
