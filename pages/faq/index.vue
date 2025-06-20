<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[120vh] relative">
            <div class="absolute left-0 bottom-[80px] text-[#EDF3F3] text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        Frequently Asked Questions • Frequently Asked Questions • Frequently Asked Questions
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[64px] py-[120px]">
            <div class="w-full flex items-start gap-[24px] mt-[120px]">
                <div class="flex flex-col items-start gap-[22px] w-[35%]">
                    <div class="text-[#203D4D] text-[18px] leading-[16px] cursor-pointer">
                        Risus cursus duis
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[16px] opacity-50 cursor-pointer">
                        Egestas libero
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[16px] opacity-50 cursor-pointer">
                        Adipiscing Aliquam
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[16px] opacity-50 cursor-pointer">
                        Amet Viverra
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[16px] opacity-50 cursor-pointer">
                        Feugiat Pellentesque
                    </div>
                </div>
                <div class="w-[65%]">
                    <div class="text-[#203D4D] text-[26px] leading-[16px]">
                        Risus cursus duis
                    </div>
                    <div class="w-full mt-[40px] flex flex-col items-start">
                        <div v-for="(item, index) in items" :key="index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapse(index)">
                                <div class="flex items-center gap-[24px]">
                                    <div class="flex flex-col">
                                        <div class="text-[#203D4D] text-[20px]">{{ item.title }}</div>
                                        <div :id="`desc-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-80">
                                                {{ item.desc }}
                                            </div>
                                        </div>
                                    </div>
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line :id="`plus-line-${index}`" x1="12" y1="12" x2="12" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LongevityClub />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import BannerOurWater from '@/assets/images/BannerOurWater.png'

import LongevityClub from '~/page-section/LongevityClub.vue'

const marquee = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurWater})`,
}

const items = ref([
    {
        title: 'What is OKEARA structured hydrogen water?',
        desc: 'OKEARA structured hydrogen water is water enhanced with extra hydrogen gas, which acts as powerful antioxidants that may help reduce oxidative stress in the body.',
        open: false,
    },
    {
        title: 'How does OKEARA structured hydrogen water improve hydration?',
        desc: 'The hydrogen molecules in OKEARA water can potentially improve hydration at a cellular level by reducing oxidative stress, making it beneficial for overall health.',
        open: false,
    },
    {
        title: 'Why is drinking OKEARA structured hydrogen water essential for overall hydration?',
        desc: 'OKEARA structured hydrogen water is free from additives and impurities, making it easily absorbed by the body. This helps in maintaining proper bodily functions, detoxification, healthy skin, physical performance, and cognitive function.',
        open: false,
    },
    {
        title: 'What bodily functions does proper hydration support?',
        desc: 'Proper hydration supports various bodily functions including digestion, nutrient absorption, circulation, and temperature regulation.',
        open: false,
    },
    {
        title: 'How does OKEARA structured hydrogen water help with detoxification?',
        desc: 'Drinking enough OKEARA structured hydrogen water helps flush out toxins and waste products from the body through urine and sweat.',
        open: false,
    },
    {
        title: 'Can drinking OKEARA structured hydrogen water improve skin health?',
        desc: 'Yes, proper hydration with OKEARA structured hydrogen water can improve skin elasticity, reduce the appearance of wrinkles, and give your skin a healthy glow.',
        open: false,
    },
])

const toggleCollapse = (index: number) => {
    const item = items.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-${index}`)
    const verticalLine = document.querySelector(`#plus-line-${index}`)

    if (item.open) {
        gsap.to(descEl, {
            height: 'auto',
            opacity: 1,
            marginTop: '24px',
            duration: 0.4,
            ease: 'power2.out',
        })

        gsap.to(verticalLine, {
            attr: { y1: 5, y2: 19 },
            duration: 0.3,
            ease: 'power2.out',
        })
    } else {
        gsap.to(descEl, {
            height: 0,
            opacity: 0,
            marginTop: '0px',
            duration: 0.4,
            ease: 'power2.in',
        })

        gsap.to(verticalLine, {
            attr: { y1: 12, y2: 12 },
            duration: 0.3,
            ease: 'power2.in',
        })
    }
}

onMounted(() => {
    if (marquee.value) {
        gsap.to(marquee.value, {
            xPercent: -100,
            repeat: -1,
            duration: 100,
            ease: 'linear',
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0),
            },
        })
    }
})
</script>
