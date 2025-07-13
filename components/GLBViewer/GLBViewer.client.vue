<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="w-full h-[500px]">
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
      <Camera :position="{ x: 2, y: 1, z: 2 }" />
      <Scene background="#E4EDED">
        <AmbientLight></AmbientLight>
        <GltfModel :src="modelPath" :position="{ x: 0, y: -0.8, z: 0 }" :scale="scale" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
} from 'troisjs';

const _props = defineProps({
  modelPath: {
    type: String,
    required: true,
  },
  scale: {
    type: Object,
    required: true,
  },
})

</script>