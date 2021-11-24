<template>
  <div class="start">
    <h4 class="title">创建应用</h4>
    <div class="container">
      <div class="create-item">
        <span>创建空白应用</span>
        <a-button type="primary" @click="visible = true">开始创建</a-button>
      </div>
    </div>
    <a-modal :visible.sync="visible" title="创建应用" :width="400" @ok="save">
      <a-form layout="inline">
        <a-form-item label="应用名称" required>
          <a-input v-model="appname" placeholder="请输入应用名称"></a-input>
        </a-form-item>
        <a-form-item></a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      appname: "",
    };
  },
  methods: {
    save() {
      console.log("click");
      this.$router.replace("/page-edit");
    },
  },
};
</script>

<style lang="scss" scoped>
.start {
  padding: 16px 16px;
  .title {
    margin-bottom: 16px;
  }
  .conatiner {
    background: #ccc;
  }
  .create-item {
    width: 220px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    > span {
      margin-bottom: 16px;
    }
  }
}
</style>