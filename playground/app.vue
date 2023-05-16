<template>
  <div>
    <h-upload @getFilesList="getFilesList" multiple drag>
      <h-button type="primary">点击上传</h-button>
    </h-upload>
  </div>
</template>
<script lang="ts" setup>
const getFilesList = (val: File[]) => {
  console.log(val)
}
</script>
<style></style>
