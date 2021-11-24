<template>
  <div>
    <h1>render</h1>
    <form-render></form-render>
  </div>
</template>

<script>
import { application } from "@/api";
import formRender from "../components/form-editor/render/form-render.vue";
export default {
  async created() {
    const res = await application.getApplication();
    console.log(res);
  },
  components: { formRender },
};
</script>

<style></style>
