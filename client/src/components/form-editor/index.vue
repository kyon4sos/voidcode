<template>
  <div class="form-editor">
    <div class="tool-container">
      <div class="tool-catalog">
        <div class="header">容器组件</div>
        <draggable
          :list="tools"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <span
            class="tool-item"
            v-for="tool in tools"
            :key="tool.id"
            @click="handleAdd(tool)"
          >
            {{ tool.name }}
          </span>
        </draggable>
      </div>
      <div class="tool-catalog">
        <div class="header">装饰组件</div>
        <draggable
          :list="tools"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <span
            class="tool-item"
            v-for="tool in tools"
            :key="tool.id"
            @click="handleAdd(tool)"
          >
            {{ tool.name }}
          </span>
        </draggable>
      </div>
      <div class="tool-catalog">
        <div class="header">普通组件</div>
        <draggable
          :list="tools"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <span
            class="tool-item"
            v-for="tool in tools"
            :key="tool.id"
            @click="handleAdd(tool)"
          >
            {{ tool.name }}
          </span>
        </draggable>
      </div>
      <div class="tool-catalog">
        <div class="header">高级组件</div>
        <draggable
          :list="tools"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <span
            class="tool-item"
            v-for="tool in tools"
            :key="tool.id"
            @click="handleAdd(tool)"
          >
            {{ tool.name }}
          </span>
        </draggable>
      </div>
    </div>
    <div class="view">
      <div class="tool-bar">
        <a-button
          type="primary"
          icon="code"
          size="small"
          @click="handleSave"
        ></a-button>
      </div>
      <div class="template-container">
        <div
          class="template"
          :style="{ width: paperWidth + 'px', height: paperHeight + 'px' }"
        >
          <a-form
            :style="{ width: paperWidth + 'px', height: paperHeight + 'px' }"
            :layout="formLayout"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <!-- <draggable :list="form.elements" group="people"> </draggable> -->
            <widget
              v-for="ele in form.elements"
              :componentName="ele.componentName"
              :config="ele.config"
              :key="ele.id"
              @resize="handleResize(ele, $event)"
              @drag="handleDrag(ele, $event)"
              @active="handleActive(ele)"
              @deactived="handleDeactived"
            ></widget>
            <!-- <tableConfiguration v-if="form.table"></tableConfiguration> -->
            <vue-draggable-resizable
              drag-handle=".drag"
              :enableNativeDrag="true"
            >
              <a-icon type="drag" class="drag" />
              <div>
                <tableConfiguration
                  v-if="form.table"
                  :columns="form.table.columns"
                ></tableConfiguration>
              </div>
            </vue-draggable-resizable>
          </a-form>
        </div>
      </div>
    </div>
    <div class="holder"></div>
    <panel
      :visible.sync="visible"
      :config="current.config"
      @change="handlePaneChange"
    ></panel>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import widget from "./widget";
import panel from "./panel";
import draggable from "vuedraggable";
export default {
  data() {
    return {
      paperWidth: 800,
      paperHeight: 900,
      visible: true,
      // 'horizontal'|'vertical'|'inline'
      formLayout: "horizontal",
      current: {},
      form: {
        elements: [],
        table: {
          columns: [
            {
              id: 1,
              name: "产品",
              column: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#fff",
                background: "#7e7e7e",
              },
              row: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                padding: "8px 8px",
              },
              componentName: "a-select",
            },
            {
              id: 2,
              name: "标题",
              column: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#fff",
                background: "#7e7e7e",
              },
              row: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                padding: "8px 8px",
              },
              componentName: "a-select",
            },
            {
              id: 3,
              name: "价格",
              column: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#fff",
                background: "#7e7e7e",
              },
              row: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                padding: "8px 8px",
              },
              componentName: "a-input",
            },
            {
              id: 4,
              name: "数量",
              column: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#fff",
                background: "#7e7e7e",
              },
              row: {
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                padding: "8px 8px",
              },
              componentName: "a-input",
            },
          ],
        },
      },

      tools: [
        {
          id: 1,
          componentName: "company",
          name: "公司名称",
          config: { label: "公司名称", fontSize: 20, fontWeight: 900 },
        },
        {
          id: 2,
          name: "公司电话",
          componentName: "phone",
          config: { label: "公司名称", fontSize: 20, fontWeight: 900 },
        },
        {
          id: 3,
          name: "表格",
          componentName: "ntable",
          config: { label: "公司名称", fontSize: 20, fontWeight: 900 },
        },
        {
          id: 4,
          name: "表格配置",
          componentName: "tableConfiguration",
          config: { label: "表单", fontSize: 20, fontWeight: 900 },
        },
      ],
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
          }
        : {};
    },
  },
  methods: {
    handlePaneChange(val) {
      console.log("current", val);
      const cur = this.form.elements.find((ele) => ele.id == this.current.id);
      console.log("id", cur.id);
      console.log(cur);
      cur.config = val;
    },
    handleSave() {},
    handleResize(ele, { x, y, width, height }) {
      const cur = this.form.elements.find((e) => e.id == ele.id);
      cur.config = { x, y, width, height };
    },
    handleDrag(ele, { x, y }) {
      console.log(ele);
      console.log({ x, y });
    },
    handleActive(ele) {
      this.visible = true;
      this.current = ele;
    },
    handleDeactived() {
      // this.visible = false;
    },
    handleAdd(tool) {
      this.form.elements.push({
        ...tool,
        id: nanoid(),
      });
    },
  },
  components: {
    widget,
    panel,
    draggable,
  },
};
</script>

<style lang="scss" scoped>
.pt-20 {
  padding-top: 20px;
}
.header {
  padding: 4px 8px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;
}
.holder {
  width: 300px;
  height: 100vh;
  flex-grow: 0;
  flex-shrink: 0;
}
.tool-bar {
  width: 100%;
  height: 40px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  background-color: #eee;
}
.tool-item {
  padding: 4px 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  margin-right: 4px;
  cursor: pointer;
}
.form-editor {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    ),
    linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    );
  background-position: 0 0, 13px 13px;
  background-size: 26px 26px;
  .view {
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .template-container {
    flex: 1;
    width: 100%;
    overflow: auto;
    padding-top: 60px;
    padding-bottom: 24px;
  }
  .template {
    background: #fff;
    border: 1px solid #ccc;
    margin: 0 auto;
    position: relative;
  }
  .tool-container {
    width: 300px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100vh;
    overflow: auto;
    background: #fff;
    .tool-catalog {
      margin-bottom: 48px;
    }
  }
}
::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 4px;
  background: #d6d6d6;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: #fff;
}
</style>
