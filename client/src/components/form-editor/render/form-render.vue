<template>
  <div>
    <component
      v-for="item in components.list"
      :is="item.componentName"
      :key="item.id"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    components: {
      type: Object,
      default: () => ({
        list: [],
      }),
    },
  },
};
</script>

<style>
</style>