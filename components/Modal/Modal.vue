<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <transition name="fade">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50"
            style="background: rgba(0, 0, 0, 0.60);">
            <div
                class="bg-[#E4EDED] w-[35%] py-[100px] px-[40px] relative rounded-2xl flex flex-col items-center justify-center">
                <div class="w-full flex items-center justify-end absolute top-5 right-5">
                    <div class="bg-white rounded-full flex items-center gap-[10px] px-[12px] py-[8px] text-black cursor-pointer"
                        @click="emit('close')">
                        <img :src="CloseBlack" alt="CloseBlack">
                    </div>
                </div>
                <div v-if="icon" :class="[
                    'border rounded-full p-[16px] w-[15%] mb-8',
                    'border-[#203D4D]',
                ]">
                    <img :src="icon" alt="icon" class="w-full" />
                </div>
                <div class="text-[#203D4D] text-[36px] text-center leading-[120%]">{{ message }}</div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import CloseBlack from '@/assets/icons/closeBlack.svg'

const _props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: false,
        default: '',
    },
})

const emit = defineEmits(['close'])

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
