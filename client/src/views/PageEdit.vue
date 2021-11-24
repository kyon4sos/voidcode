<template>
  <div class="edit-page">
    <div class="btn-container">
      <div class="btn">
        <a-icon type="form" :style="{ fontSize: '32px' }" />
        <span class="title">新建表单</span>
        <span class="desc">数据收集，事件跟进</span>
      </div>
      <div class="btn">
        <a-icon type="form" :style="{ fontSize: '32px' }" />
        <span class="title">新建流程</span>
        <span class="desc">任务流程，工作协同</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edit-page {
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-container {
    display: flex;
    gap: 16px;
  }
  .btn {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(82, 125, 255, 0.08);
    border-radius: 8px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    &:hover {
      cursor: pointer;
      border: 1px solid blue;
    }
    .anticon {
      height: 64px;
      width: 64px;
      margin-bottom: 14px;
      border-radius: 12px;
      text-align: center;
      line-height: 64px;
      background-color: #ccd9ff;
    }
    .title {
      font-size: 22px;
      margin-bottom: 4px;
    }
    .desc {
      font-size: 14px;
      color: #ababab;
    }
  }
}
</style>