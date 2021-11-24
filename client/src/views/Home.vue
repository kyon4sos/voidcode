<template>
  <div class="home">
    <form-editor></form-editor>
  </div>
</template>
<script>
import FormEditor from "@/components/form-editor/index.vue";
export default {
  components: {
    FormEditor,
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
}
</style>
