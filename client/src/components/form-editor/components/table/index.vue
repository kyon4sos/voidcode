<template>
  <a-table bordered :columns="columns" :data-source="dataSource">
    <template v-slot:action>
      <a href="javascript:;">Delete</a>
    </template>
  </a-table>
</template>

<script>
export default {
  name: "ntable",
  props: {
    dataSource: {
      type: Array,
      default: () => [
        {
          key: 0,
          date: "2018-02-11",
          amount: 120,
          type: "income",
          note: "transfer",
        },
        {
          key: 1,
          date: "2018-03-11",
          amount: 243,
          type: "income",
          note: "transfer",
        },
        {
          key: 2,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer",
        },
      ],
    },
    columns: {
      default: () => [
        {
          title: "Date",
          dataIndex: "date",
          width: 200,
        },
        {
          title: "Amount",
          dataIndex: "amount",
          width: 100,
        },
        {
          title: "Type",
          dataIndex: "type",
          width: 100,
        },
        {
          title: "Note",
          dataIndex: "note",
          width: 100,
        },
        {
          title: "Action",
          key: "action",
          scopedSlots: { customRender: "action" },
        },
      ],
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.resize-table-th {
  position: relative;
  .table-draggable-handle {
    height: 100% !important;
    bottom: 0;
    left: auto !important;
    right: -5px;
    cursor: col-resize;
    touch-action: none;
    position: absolute;
  }
}
</style>