<template>
  <a-row :gutter="gutter" :align="align" :justify="justify">
    <slot></slot>
  </a-row>
</template>

<script>
export default {
  props: {
    gutter: {
      type: String,
      default: "",
    },
    align: {
      type: String,
      default: "",
    },
    justify: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
