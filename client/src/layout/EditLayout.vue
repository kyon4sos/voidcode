<template>
  <div class="edit-layout">
    <n-header>
      <div class="">
        <ul class="menu">
          <li class="menu-item">页面管理</li>
          <li>应用数据</li>
        </ul>
      </div>
      <div class="">
        <a-button type="primary" size="small">访问</a-button>
      </div>
    </n-header>
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
</style>