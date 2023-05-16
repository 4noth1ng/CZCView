<template>
  <div class="h-upload">
    <input :multiple="props.multiple" :accept="props.accept" ref="hIpt" type="file" v-show="false" @change="getFiles" />

    <!-- 上传文件列表展示区域 -->
    <div class="h-upload-list-content">
      <div class="h-upload-file">
        <div @click="fileUpload" v-if="!props.drag">
          <slot></slot>
        </div>
        <!-- 拖拽上传区域 -->
        <div class="h-upload-dragger" :class="{ ['h-upload-draggerenter']: isEnter }" ref="fileArea" @click="fileUpload" v-else>
          <div class="h-upload-content">
            <h-icon name="delete-solid" class="h-upload-icon"></h-icon>
            <div class="h-upload-text">将文件拖拽到此处或<em>点击上传</em></div>
          </div>
        </div>
        <!-- 以文件列表的形式展示上传的文件 -->
        <div class="h-upload-list">
          <div v-for="(item, index) in fileList" :key="index" class="h-upload-list_item">
            <div class="h-upload-list_item-name">{{ item.name }}</div>
            <div class="h-upload-list_item-status-label">
              <h-icon name="delete" @click="delFile(index)"></h-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import '../../../../theme-chalk/src/upload.less'
import { uploadProps } from './types'
defineOptions({ name: 'HUpload' })
const hIpt = ref()
const fileArea = ref<HTMLElement>()
const props = defineProps(uploadProps)
const emits = defineEmits(['getFilesList'])
const fileList = ref<File[]>([])
const isEnter = ref(false)

onMounted(() => {
  if (!props.drag) return
  fileArea.value.addEventListener(
    'drop',
    (e: any) => {
      e.preventDefault()
      console.log(e.dataTransfer.files)
      fileList.value.push(...Array.from(e.dataTransfer.files as FileList))
      emits('getFilesList', fileList.value)
    },
    false
  )
  fileArea.value.addEventListener(
    'dragover',
    (e: any) => {
      e.preventDefault()
    },
    false
  )
  fileArea.value.addEventListener(
    'dragenter',
    (e: any) => {
      isEnter.value = true
      e.preventDefault()
    },
    false
  )
  fileArea.value.addEventListener(
    'dragleave',
    (e: any) => {
      isEnter.value = false
      e.preventDefault()
    },
    false
  )
})

const fileUpload = () => {
  return hIpt.value.click()
}
const getFiles = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  fileList.value.push(...Array.from(files))
  emits('getFilesList', fileList.value)
}
const delFile = (index) => {
  fileList.value.splice(index, 1)
  emits('getFilesList', fileList.value)
}
</script>

<style scoped></style>
