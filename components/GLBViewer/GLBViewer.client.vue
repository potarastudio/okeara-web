<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- GLBViewer.client.vue -->
<template>
  <div class="w-[90%] h-[500px]">
    <model-viewer :src="modelPath" camera-controls auto-rotate disable-zoom="false" style="width: 100%; height: 100%"
      :style="{
        transform: `scale3d(${scale.x}, ${scale.y}, ${scale.z})`
      }">
    </model-viewer>
  </div>
</template>
<script setup lang="ts">
import '@google/model-viewer'

const _props = defineProps({
  modelPath: {
    type: String,
    required: true,
  },
  scale: {
    type: Object,
    default: () => ({ x: 1, y: 1, z: 1 }),
  },
})
</script>