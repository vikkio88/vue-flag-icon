<template>
  <span v-if="iso" class="fi" :class="flagIconClass" :title="title || iso">
  </span>
</template>

<script>
export default {
  name: "flag",
  props: {
    iso: { type: String, default: null },
    title: { type: String, default: null },
    squared: { type: Boolean, default: true },
  },
  computed: {
    flagIconClass() {
      return `fi-${this.iso.toLowerCase()} ${Boolean(this.squared) ? "fis " : ""}`;
    },
  },
};
</script>

<style>
</style>
