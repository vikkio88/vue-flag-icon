<style>
</style>
<template>
    <span v-if="iso" class="flag-icon flag-icon-squared" :class="[iso !== undefined ? flagIconClass:'']" :title="iso"></span>
</template>
<script>
    export default {
        name: 'flag',
        props: {
            iso: { type: String, default: null }
        },
        computed: {
            flagIconClass() {
                return 'flag-icon-' + this.iso.toLowerCase();
            }
        }
    }
</script>