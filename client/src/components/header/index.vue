<template>
  <div class="header">
    <slot>
      <ul class="menu">
        <li class="menu-item">开始</li>
        <li class="menu-item">模板中心</li>
        <li class="menu-item">我的应用</li>
        <li class="menu-item">帮助中心</li>
      </ul>
      <div class="">
        <a-avatar :size="32" icon="user" />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "n-header",
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  .menu {
    height: 100%;
    display: flex;
    align-items: center;
    .menu-item {
      margin-right: 32px;
      &:hover {
        cursor: pointer;
        color: blue;
      }
    }
  }
}
</style>