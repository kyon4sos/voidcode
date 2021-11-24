<template>
  <div>
    <a-drawer width="300px" :visible="visible" :mask="mask" :title="title">
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-form-item label="width" @change="emit">
          <a-input-number :defaultValue="config.width" v-model="width" />
        </a-form-item>
        <a-form-item label="height">
          <a-input-number
            :defaultValue="config.height"
            v-model="height"
            @change="emit"
          />
        </a-form-item>
        <a-form-item label="label">
          <a-input
            :defaultValue="config.label"
            v-model="label"
            @change="emit"
          />
        </a-form-item>
        <a-form-item label="font size">
          <a-input-number
            :min="10"
            :defaultValue="config.fontSize"
            @change="emit"
          />
        </a-form-item>
        <a-form-item label="weight">
          <a-slider
            :min="100"
            :max="900"
            :defaultValue="config.fontWeight"
            @change="emit"
          />
        </a-form-item>
        <!-- <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="width">
              <a-input />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="height">
              <a-input />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="label">
              <a-input />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="font size">
              <a-input-number :min="10" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="weight">
              <a-slider :min="100" :max="900" />
            </a-form-item>
          </a-col>
        </a-row> -->
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose"> Submit </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: this.config.width,
      height: this.config.height,
      fontSize: this.config.fontSize,
      fontWeight: this.config.fontWeight,
      label: this.config.label,
      form: this.$form.createForm(this),
    };
  },
  created() {
    console.log(this.config);
  },
  methods: {
    onClose() {
      console.log("close");
      this.$emit("update:visible", false);
    },
    emit() {
      this.$emit("change", {
        width: this.width,
        height: this.height,
        label: this.label,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight,
      });
    },
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: "Edit",
    },
  },
};
</script>

<style>
</style>