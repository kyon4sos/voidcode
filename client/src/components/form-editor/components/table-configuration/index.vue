<template>
  <div class="table-configuration">
    <draggable
      :list="mcolumns"
      group="columns"
      tag="tr"
      @star="drag = true"
      @end="drag = false"
    >
      <th v-for="element in mcolumns" :key="element.id" :style="element.column">
        {{ element.name }}
        <!-- <span class="column-item" :style="element.column">
             
            </span> -->
      </th>
    </draggable>
    <div class="rows">
      <div v-for="element in mcolumns" :key="element.id" :style="element.row">
        <div class="td">
          <component :is="element.componentName"></component>
        </div>
      </div>
    </div>
    <!-- <table>
      <thead>
        <draggable
          v-model="mcolumns"
          group="columns"
          tag="tr"
          @start="drag = true"
          @end="drag = false"
        >
          <th
            v-for="element in mcolumns"
            :key="element.id"
            :style="element.column"
          >
            {{ element.name }} -->
    <!-- <span class="column-item" :style="element.column">
             
            </span> -->
    <!-- </th>
        </draggable>
      </thead>
      <tbody class="rows">
        <tr v-for="element in mcolumns" :key="element.id" :style="element.row">
          <td class="td">
            <component :is="element.componentName"></component>
          </td>
        </tr>
      </tbody>
    </table> -->

    <!-- <div>
      <div class="row" :style="element.row">
        <component :is="element.componentName"></component>
      </div>
    </div> -->
    <!-- <div class="columns">
        <span
          class="column-item"
          :style="element.column"
          v-for="element in mcolumns"
          :key="element.id"
        >
          {{ element.name }}
        </span>
      </div>
      <div class="rows" v-for="element in mcolumns" :key="element.id">
        <div class="row" :style="element.row">
          <component :is="element.componentName"></component>
        </div>
      </div> -->
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "tableConfiguration",
  props: {
    columns: {
      type: Array,
      default: () => [
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
          id: 2,
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
  data() {
    return {
      mcolumns: this.columns,
      drag: true,
    };
  },
  created() {
    console.log(this.columns);
  },
  watch: {
    columns: {
      handler(newVal) {
        console.log("newval", newVal);
        this.mcolumns = newVal;
      },
      deep: true,
    },
  },
  components: {
    draggable,
  },
};
</script>

<style lang="scss">
.column-item {
  display: inline-block;
}
.rows {
  display: flex;
}
.td {
  display: flex;
}
</style>
