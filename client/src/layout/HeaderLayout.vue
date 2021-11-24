<template>
  <div class="header-layout">
    <n-header></n-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NHeader from "@/components/header";
export default {
  components: {
    NHeader,
  },
};
</script>

<style>
.header-layout {
}
</style>