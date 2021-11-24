<template>
  <vue-draggable-resizable
    :w="conf.width"
    :h="conf.height"
    :minHeight="conf.minHeight"
    @dragging="onDrag"
    @resizing="onResize"
    @activated="onActivated"
    @deactivated="onDeactivated"
    drag-handle=".drag"
    :class-name="className"
  >
    <div>
      <a-icon type="drag" class="drag" />
      <component :is="componentName" :id="id"></component>
    </div>
  </vue-draggable-resizable>
  <!-- <div>
    <vue-draggable-resizable
      :w="config.width"
      :h="config.height"
      @dragging="onDrag"
      @resizing="onResize"
      @activated="onActivated"
      @deactivated="onDeactivated"
    >
      <component :is="componentName" :id="id"></component>
    </vue-draggable-resizable>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      className: "vdr",
      conf: { width: 385, height: 40, minHeight: 1 },
    };
  },
  created() {
    this.conf = Object.assign(this.conf, this.config);
    console.log(this.conf);
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.resize({ x, y, width, height });
    },
    onDrag: function (x, y) {
      this.x = x;
      this.y = y;

      this.drag({ x, y });
    },
    onActivated() {
      this.$emit("active");
    },
    onDeactivated() {
      this.$emit("deactived");
    },
    resize(val) {
      this.$emit("resize", val);
    },
    drag(val) {
      this.$emit("drag", val);
    },
  },
  props: {
    componentName: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
