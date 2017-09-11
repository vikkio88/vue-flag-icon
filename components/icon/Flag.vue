<style>

</style>
<template>
    <span v-if="iso" class="flag-icon" :class="flagIconClass" :title="title || iso">
    </span>
</template>
<script>
export default {
    name: 'flag',
    props: {
        iso: { type: String, default: null },
        title: { type: String, default: null },
        squared: { type: Boolean, default: true },
    },
    computed: {
        flagIconClass() {
            return ((!!this.squared) ? 'flag-icon-squared ' : '') + 'flag-icon-' + this.iso.toLowerCase();
        }
    }
}
</script>