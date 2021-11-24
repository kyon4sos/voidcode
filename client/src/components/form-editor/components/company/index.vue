<template>
  <a-form-item :label="label">
    <a-input :placeholder="placeholder"></a-input>
  </a-form-item>
</template>

<script>
export default {
  name: "company",
  props: {
    label: {
      type: String,
      default: "公司名称",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.company {
  display: flex;
}
</style>
