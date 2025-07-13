<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <transition name="fade">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50"
            style="background: rgba(0, 0, 0, 0.60);">
            <div class="bg-[#E4EDED] w-[90%] h-[90dvh] p-[40px] relative">
                <div class="w-full flex items-center justify-between">
                    <div>
                        <div class="relative flex items-center gap-[2px] bg-[#D7E6E6] rounded-full p-[4px] w-fit">
                            <div ref="indicatorRef" class="absolute top-[4px] left-0 h-[44px] bg-white rounded-full z-0"
                                style="width: 0px"></div>

                            <div v-for="(label, i) in ['OKEARA', 'OKEARA Blue']" :key="i"
                                :ref="(el) => (optionRefs[i] = el)"
                                class="h-[44px] px-[16px] flex items-center rounded-full justify-center relative z-10 cursor-pointer transition-colors duration-300"
                                :class="{
                                    'text-[#203D4D]': activeIndex === i,
                                    'text-[#AEC5C5]': activeIndex !== i
                                }" @click="switchTo(i)">
                                {{ label }}
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-full flex items-center gap-[10px] px-[12px] py-[8px] text-black cursor-pointer"
                        @click="emit('close')">
                        Exit 3D
                        <img :src="CloseBlack" alt="CloseBlack">
                    </div>
                </div>

                <div class="relative">
                    <div class="absolute top-1/2 left-0 bg-[#203D4D] rounded-full p-[10px] cursor-pointer" :class="[
                        currentIndex === 0 || isScrolling ? 'pointer-events-none opacity-20' : '',
                    ]" @click="prevSlide">
                        <img :src="CaretLeft" alt="CaretLeft">
                    </div>
                    <div class="absolute top-1/2 right-0 bg-[#203D4D] rounded-full p-[10px] cursor-pointer" :class="[
                        currentIndex === 1 || isScrolling ? 'pointer-events-none opacity-20' : '',
                    ]" @click="nextSlide">
                        <img :src="CaretRight" alt="CaretRight">
                    </div>

                    <div ref="sliderTrack" class="flex scroll-smooth overflow-hidden">
                        <div class="flex-shrink-0 w-full h-full">
                            <div v-if="activeIndex == 0">
                                <GLBViewer :model-path="modelPath" :scale="{ x: 1, y: 1, z: 1 }"/>
                            </div>
                            <div v-else>
                                <GLBViewer :model-path="modelBluePath" :scale="{ x: 2, y: 2, z: 2 }" />
                            </div>
                        </div>
                        <div class="flex-shrink-0 w-full h-full">
                            <div v-if="activeIndex == 0">
                                <GLBViewer :model-path="modelPath12l" :scale="{ x: 1, y: 1, z: 1 }" />
                            </div>
                            <div v-else>
                                <GLBViewer :model-path="modelBluePath12l" :scale="{ x: 1, y: 1, z: 1 }" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, nextTick } from 'vue'
import gsap from 'gsap'
import GLBViewer from '../GLBViewer/GLBViewer.client.vue'
import CloseBlack from '@/assets/icons/closeBlack.svg'
import CaretLeft from '@/assets/icons/CaretLeft.svg'
import CaretRight from '@/assets/icons/CaretRight.svg'

const optionRefs = ref<(Element | ComponentPublicInstance | null)[]>([])
const indicatorRef = ref(null)
const activeIndex = ref(0)
const sliderTrack = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

const _props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
})



const modelPath = ref('assets/model/Okeara500ml.glb');
const modelPath12l = ref('assets/model/Okeara12l.glb');

const modelBluePath = 'assets/model/OkearaBlue500ml.glb';
const modelBluePath12l = 'assets/model/OkearaBlue12l.glb';

const emit = defineEmits(['close'])

const isScrolling = ref(false)

const nextSlide = () => {
    if (isScrolling.value || currentIndex.value >= 4) return
    isScrolling.value = true
    currentIndex.value += 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 1
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}

const prevSlide = () => {
    if (isScrolling.value || currentIndex.value <= 0) return
    isScrolling.value = true
    currentIndex.value -= 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 1
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}

const switchTo = async (index: number) => {
    activeIndex.value = index

    await nextTick()
    const target = optionRefs.value[index]
    if (!target) return
    const el = (target as HTMLElement | null)
    if (!el || typeof el.getBoundingClientRect !== 'function') return
    const bounds = el.getBoundingClientRect()
    const parentNode = el.parentNode as HTMLElement | null
    if (!parentNode) return
    const containerBounds = parentNode.getBoundingClientRect()

    const x = bounds.left - containerBounds.left
    const width = bounds.width

    gsap.to(indicatorRef.value, {
        x,
        width,
        duration: 0.4,
        ease: 'power2.out',
    })
}

watch(
    () => _props.show,
    async (val) => {
        if (val) {
            document.body.style.overflow = 'hidden'
            await nextTick()
            switchTo(0)
        } else {
            document.body.style.overflow = ''
        }
    }
)
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
