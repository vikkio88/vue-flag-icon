<template>
  <div class="hello">
    <h1>Flags</h1>
    <div class="flags">
      <flag iso="it" />
      <flag iso="gb" />
      <flag iso="us" />
    </div>

    <div class="flags">
      <flag squared="false" iso="it" />
      <flag squared="false" iso="gb" />
      <flag squared="false" iso="us" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped>
.flags * { margin: 5px }
</style>
