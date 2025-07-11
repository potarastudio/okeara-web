<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative"
            style="background-position: left 50% top 22%;">
            <div class="w-full h-[50dvh] absolute left-0 bottom-0"
                style="background: linear-gradient(0deg, #203D4D 0%, rgba(32, 61, 77, 0.00) 100%)" />
            <div
                class="absolute left-0 bottom-[40px] md:bottom-[25px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div ref="textBannerContainerRef" class="overflow-hidden w-full whitespace-nowrap">
                    <div ref="marqueeWrapper" class="inline-flex will-change-transform">
                        <div class="marquee-text">
                            OKEARA Water • OKEARA Water • OKEARA Water • Our Water •
                        </div>
                        <div class="marquee-text">
                            OKEARA Water • OKEARA Water • OKEARA Water • Our Water •
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <hr class="w-full border border-[#fff]">
            <div
                class="w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto mt-[56px] md:mt-[100px]">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Hydration
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[20px] lg:gap-[80px] md:w-[60%]">
                    <div ref="titleSustainabilityRef"
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] lg:w-[75%]">
                        For those who demand the best in hydration, OKEARA's structured hydrogen water is a
                        game-changer.
                    </div>
                    <div ref="paragraphSustainabilityRef"
                        class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] opacity-80 lg:w-[75%]">
                        Experience the rejuvenating benefits of hydrogen-enriched water free from impurities and
                        bacteria. Elevate your health with every sip.
                    </div>
                </div>
            </div>
        </div>
        <div :style="bgSafetyStyle"
            class="bg-cover bg-no-repeat bg-left w-full px-[24px] py-[40px] md:p-[40px] lg:px-[9%] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-stretch">
                <div
                    class="order-2 md:order-1 md:w-[50%] bg-[#EDF3F3] p-[20px] md:p-[40px] md:pr-0 flex flex-col items-start gap-[20px] md:gap-[40px]">
                    <div class="w-[90%] flex items-center justify-between">
                        <div class="text-[#1A4667] text-[32px] md:text-[36px] leading-[36px] md:leading-[58px]">
                            {{ indicator === 'water' ? OkearaIndicator.title : OkearaBlueIndicator.title }}
                        </div>
                        <div class="flex items-center gap-[32px] w-[10%]">
                            <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer transition"
                                :class="{ 'pointer-events-none opacity-20': indicator === 'water' }"
                                @click="prevIndicator">
                            <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer transition"
                                :class="{ 'pointer-events-none opacity-20': indicator === 'blue' }"
                                @click="nextIndicator">
                        </div>
                    </div>
                    <hr class="w-full border border-[#A5C2C2]">
                    <div v-for="(item, index) in indicator === 'water' ? OkearaIndicator.content : OkearaBlueIndicator.content"
                        :key="item.desc + index" ref="contentItems"
                        class="flex flex-col items-start gap-[20px] opacity-0 translate-y-4">
                        <div class="text-[#1A4667] text-[18px]" v-html="item.title" />
                        <div class="text-[#628DAD] text-[18px]">
                            {{ item.desc }}
                        </div>
                    </div>
                </div>
                <div class="order-1 md:order-2 md:w-[50%] h-[640px] relative overflow-hidden">
                    <div ref="sliderWrapper" class="flex w-[200%] h-full transition-none">
                        <img ref="imgLeft" class="w-1/2 h-full object-cover" :src="OkearaIndicator.images"
                            alt="Image 1" />
                        <img ref="imgRight" class="w-1/2 h-full object-cover" :src="OkearaBlueIndicator.images"
                            alt="Image 2" />
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col md:flex-row items-start justify-between mt-[60px] gap-[24px] md:gap-auto">
                <div
                    class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] md:w-[40%]">
                    Benefits of Structured Hydrogen Water
                </div>
                <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] opacity-80 md:w-[30%]">
                    OKEARA structured hydrogen water offers a multitude of health benefits thanks to its high hydrogen
                    content:
                </div>
            </div>
        </div>
        <div ref="container"
            class="relative w-full h-[100dvh] overflow-hidden px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[80px]">
            <div ref="bg0" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 will-change-transform"
                :style="{ backgroundImage: `url(${BgBenefitOurWater1})` }" />
            <div ref="bg1" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform"
                :style="{ backgroundImage: `url(${BgBenefitOurWater2})` }" />
            <div ref="bg2" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-30 will-change-transform"
                :style="{ backgroundImage: `url(${BgBenefitOurWater3})` }" />
            <div ref="bg3" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-40 will-change-transform"
                :style="{ backgroundImage: `url(${BgBenefitOurWater4})` }" />
            <div ref="bg4" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-50 will-change-transform"
                :style="{ backgroundImage: `url(${BgBenefitOurWater5})` }" />
            <div
                class="relative overflow-hidden z-60 w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#FFF] text-[16px] md:text-[18px] leading-[24px]">
                        Benefit
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-end gap-[24px] md:gap-[60px]">
                    <div
                        class="text-[#fff] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] md:w-[40%]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#fff] text-[16px] md:text-[18px] leading-[26px] md:w-[35%] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
            </div>
            <div class="z-60 relative  w-full flex items-start justify-center mt-[42px] md:mt-[80px]">
                <div class="relative overflow-hidden w-[90%] md:w-[60%] flex flex-col items-start gap-[20px]">
                    <div ref="bgCard0"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 will-change-transform"
                        :style="{ backgroundImage: `url(${BgCardBenefit1})` }" />
                    <div ref="bgCard1"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform"
                        :style="{ backgroundImage: `url(${BgCardBenefit2})` }" />
                    <div ref="bgCard2"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-30 will-change-transform"
                        :style="{ backgroundImage: `url(${BgCardBenefit3})` }" />
                    <div ref="bgCard3"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-40 will-change-transform"
                        :style="{ backgroundImage: `url(${BgCardBenefit4})` }" />
                    <div ref="bgCard4"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-50 will-change-transform"
                        :style="{ backgroundImage: `url(${BgCardBenefit5})` }" />
                    <div
                        class="relative z-60 w-full h-[250px] flex flex-col md:flex-row items-start justify-between gap-[20px] md:gap-auto p-[32px]">
                        <div
                            class="relative order-2 md:order-1 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] w-[60%]">
                            <div ref="title0" class="absolute inset-0 opacity-0">
                                Powerful <br> Antioxidant
                            </div>
                            <div ref="title1" class="absolute inset-0 opacity-0">
                                Enhanced <br> Detoxification
                            </div>
                            <div ref="title2" class="absolute inset-0 opacity-0">
                                Boost <br> Immunity
                            </div>
                            <div ref="title3" class="absolute inset-0 opacity-0">
                                Improved <br> Blood Flow
                            </div>
                            <div ref="title4" class="absolute inset-0 opacity-0">
                                Comprehensive <br> Health Benefit
                            </div>
                        </div>
                        <div
                            class="relative order-1 md:order-2 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] w-[10%]">
                            <div ref="number0" class="absolute inset-0 opacity-0">01</div>
                            <div ref="number1" class="absolute inset-0 opacity-0">02</div>
                            <div ref="number2" class="absolute inset-0 opacity-0">03</div>
                            <div ref="number3" class="absolute inset-0 opacity-0">04</div>
                            <div ref="number4" class="absolute inset-0 opacity-0">05</div>
                        </div>
                    </div>
                    <div
                        class="relative w-full z-60 text-[#EDF3F3] text-[16px] text-[18px] leading-[24px] backdrop-blur-[2px] bg-[linear-gradient(0deg,rgba(0,0,0,0.32),rgba(0,0,0,0))] p-[32px] h-[350px] md:h-[150px] flex items-center justify-center">
                        <div ref="desc0" class="absolute inset-0 opacity-0 p-[32px]">
                            Hydrogen (H2) is the smallest molecule, allowing it to penetrate cell membranes and protect
                            mitochondria and DNA from oxidative stress. It neutralizes harmful free radicals, especially
                            hydroxyl radicals, effectively forming water and preventing damage
                        </div>
                        <div ref="desc1" class="absolute inset-0 opacity-0 p-[32px]">
                            The structured water does not contain information clusters, ensuring efficient cellular
                            hydration and detoxification without depleting the body’s energy.
                            It aids in removing toxins effectively from every cell.
                        </div>
                        <div ref="desc2" class="absolute inset-0 opacity-0 p-[32px]">
                            By naturally raising the body's pH level and increasing ORP (Oxidation-Reduction Potential),
                            hydrogen water fortifies the immune system, enhancing resistance against viruses and
                            bacteria.
                        </div>
                        <div ref="desc3" class="absolute inset-0 opacity-0 p-[32px]">
                            Hydrogen helps thin the blood, facilitating better oxygenation and hydration of the body.
                        </div>
                        <div ref="desc4" class="absolute inset-0 opacity-0 p-[32px]">
                            By naturally raising the body's pH level and increasing ORP (Oxidation-Reduction Potential),
                            hydrogen water fortifies the immune system, enhancing resistance against viruses and
                            bacteria.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class=" w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col gap-[24px] md:gap-[60px] md:w-[35%]">
                    <div ref="titleProductRef" class="text-[#203D4D] text-[48px] font-light leading-[58px]">
                        Get to Know About OKEARA Product
                    </div>
                    <div ref="paragraphProductRef" class="text-[#203D4D] text-[18px] leading-[26px] opacity-77">
                        dedicated to redefining everyday hydration with products that promote holistic health and
                        wellbeing. OKEARA offers two signature water products
                    </div>
                </div>
                <div class="flex items-center gap-[40px] w-full md:w-auto justify-end" />
            </div>
            <div class="w-full flex items-center justify-center mt-[40px] md:mt-[100px]">
                <div class="relative flex items-center gap-[2px] bg-[#E4EDED] rounded-full p-[4px] w-fit">
                    <div ref="indicatorRef" class="absolute top-[4px] left-0 h-[44px] bg-white rounded-full z-0"
                        style="width: 0px"></div>

                    <div v-for="(label, i) in ['OKEARA', 'OKEARA Blue']" :key="i" :ref="(el) => (optionRefs[i] = el)"
                        class="h-[44px] px-[16px] flex items-center rounded-full justify-center relative z-10 cursor-pointer transition-colors duration-300"
                        :class="{
                            'text-[#203D4D]': activeIndex === i,
                            'text-[#AEC5C5]': activeIndex !== i
                        }" @click="switchTo(i)">
                        {{ label }}
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col md:flex-row items-stretch gap-[60px] mt-[100px]">
                <div ref="card500ml"
                    class="w-full relative md:w-[50%] bg-[#E4EDED] p-[40px] flex flex-col items-center justify-center gap-[60px] z-[20]">
                    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[16px]">
                        <div class="flex flex-col items-start gap-[16px]">
                            <div class="text-[#203D4D] text-[26px]">{{ indicatorProduct === 'water' ? 'OKEARA' :
                                'OKEARA Blue' }}</div>
                            <div class="text-[#203D4D] text-[18px] opacity-50">500ml (16.9fl 0z)</div>
                        </div>
                        <div class="px-[12px] py-[8px] bg-white rounded-full text-black">
                            Preview 3D
                        </div>
                    </div>
                    <img :src="indicatorProduct === 'water' ? OkearaWater500ml : OkearaBlue500ml" alt="OkearaWater500ml"
                        class="h-[350px]">
                    <div ref="description500ml"
                        class="w-full bg-white p-[24px] absolute left-0 bottom-0 text-black text-[12px] md:text-[16px] leading-[18px] md:leading-[26px]">
                        {{ indicatorProduct === 'water' ? 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally.It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' : 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally.It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' }}
                    </div>
                </div>
                <div ref="card12l"
                    class="w-full relative md:w-[50%] bg-[#E4EDED] p-[40px] flex flex-col items-center justify-center gap-[60px] z-[20]">
                    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[16px]">
                        <div class="flex flex-col items-start gap-[16px]">
                            <div class="text-[#203D4D] text-[26px]">{{ indicatorProduct === 'water' ? 'OKEARA' :
                                'OKEARA Blue' }}</div>
                            <div class="text-[#203D4D] text-[18px] opacity-50">12 liter (405.768fl 0z)</div>
                        </div>
                        <div class="px-[12px] py-[8px] bg-white rounded-full text-black">
                            Preview 3D
                        </div>
                    </div>
                    <img :src="indicatorProduct === 'water' ? OkearaWater12l : OkearaBlue12l" alt="OkearaWater12l"
                        class="h-[350px]">
                    <div ref="description12l"
                        class="w-full bg-white p-[24px] absolute left-0 bottom-0 text-black text-[12px] md:text-[16px] leading-[18px] md:leading-[26px]">
                        {{ indicatorProduct === 'water' ? 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally.It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' : 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally.It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' }}
                    </div>
                </div>
            </div>
            <img :src="BgWave" alt="BgWave" class="absolute top-0 right-[-20%] md:right-[15%] z-[1]">
            <img :src="BgWave" alt="BgWave" class="absolute bottom-0 left-[-5%] z-[10]">
        </div>
        <LongevityClub />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BannerOurWater from '@/assets/images/BannerOurWater.png'
import BgSafety from '@/assets/images/BgSafety.png'
import OkearaWaterIndicator from '@/assets/images/OkearaIndicator.png'
import OkearaBlueImageIndicator from '@/assets/images/OkearaBlueIndicator.png'
import BgBenefitOurWater1 from '@/assets/images/BgBenefitOurWater1.png'
import BgBenefitOurWater2 from '@/assets/images/BgBenefitOurWater2.png'
import BgBenefitOurWater3 from '@/assets/images/BgBenefitOurWater3.png'
import BgBenefitOurWater4 from '@/assets/images/BgBenefitOurWater4.png'
import BgBenefitOurWater5 from '@/assets/images/BgBenefitOurWater5.png'
import BgCardBenefit1 from '@/assets/images/BgCardBenefit1.png'
import BgCardBenefit2 from '@/assets/images/BgCardBenefit2.png'
import BgCardBenefit3 from '@/assets/images/BgCardBenefit3.png'
import BgCardBenefit4 from '@/assets/images/BgCardBenefit4.png'
import BgCardBenefit5 from '@/assets/images/BgCardBenefit5.png'
import OkearaWater500ml from '@/assets/images/OkearaWater500ml.png'
import OkearaBlue500ml from '@/assets/images/OkearaBlue500ml.png'
import OkearaWater12l from '@/assets/images/OkearaWater12l.png'
import OkearaBlue12l from '@/assets/images/OkearaBlue12l.png'
import BgWave from '@/assets/images/BgWave.svg'
import List from '@/assets/icons/List.svg'
import ListBlack from '@/assets/icons/ListBlack.svg'
import ArrowLeft from '@/assets/icons/ArrowLeft.svg'
import ArrowRight from '@/assets/icons/ArrowRight.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const bannerRef = ref<HTMLElement | null>(null)
const textBannerContainerRef = ref<HTMLElement | null>(null)
const marqueeWrapper = ref<HTMLElement | null>(null)
const titleSustainabilityRef = ref<HTMLElement | null>(null)
const sliderWrapper = ref<HTMLElement | null>(null)
const contentItems = ref<HTMLElement[]>([])
const container = ref<HTMLElement | null>(null)
const bg0 = ref<HTMLElement | null>(null)
const bg1 = ref<HTMLElement | null>(null)
const bg2 = ref<HTMLElement | null>(null)
const bg3 = ref<HTMLElement | null>(null)
const bg4 = ref<HTMLElement | null>(null)
const bgCard0 = ref<HTMLElement | null>(null)
const bgCard1 = ref<HTMLElement | null>(null)
const bgCard2 = ref<HTMLElement | null>(null)
const bgCard3 = ref<HTMLElement | null>(null)
const bgCard4 = ref<HTMLElement | null>(null)
const title0 = ref<HTMLElement | null>(null)
const title1 = ref<HTMLElement | null>(null)
const title2 = ref<HTMLElement | null>(null)
const title3 = ref<HTMLElement | null>(null)
const title4 = ref<HTMLElement | null>(null)
const number0 = ref<HTMLElement | null>(null)
const number1 = ref<HTMLElement | null>(null)
const number2 = ref<HTMLElement | null>(null)
const number3 = ref<HTMLElement | null>(null)
const number4 = ref<HTMLElement | null>(null)
const desc0 = ref<HTMLElement | null>(null)
const desc1 = ref<HTMLElement | null>(null)
const desc2 = ref<HTMLElement | null>(null)
const desc3 = ref<HTMLElement | null>(null)
const desc4 = ref<HTMLElement | null>(null)
const paragraphProductRef = ref<HTMLElement | null>(null)
const titleProductRef = ref<HTMLElement | null>(null)
const paragraphSustainabilityRef = ref<HTMLElement | null>(null)
const indicatorRef = ref(null)
const optionRefs = ref<(Element | ComponentPublicInstance | null)[]>([])
const card500ml = ref<HTMLElement | null>(null)
const description500ml = ref<HTMLElement | null>(null)
const card12l = ref<HTMLElement | null>(null)
const description12l = ref<HTMLElement | null>(null)

const isMobile = () => window.innerWidth < 768

let hoverIn: (this: HTMLElement, ev: MouseEvent) => void, hoverOut: (this: HTMLElement, ev: MouseEvent) => void

const bannerStyle = {
    backgroundImage: `url(${BannerOurWater})`,
}

const bgSafetyStyle = {
    backgroundImage: `url(${BgSafety})`
}

const indicator = ref<'water' | 'blue'>('water')
const direction = ref<'left' | 'right'>('right')
const indicatorProduct = ref('water')

const OkearaIndicator = ref({
    title: 'OKEARA Indicators',
    content: [
        {
            title: 'H<sub class="text-sm align-sub">2</sub> (Hydrogen Content)',
            desc: '800 - 1000 ppb'
        },
        {
            title: 'TDS (Amount of Impurities in Water)',
            desc: '6 - 9 ppm (Premium Quality)'
        },
        {
            title: 'pH (Acidity Level)',
            desc: '6.5 - 7.5 (Optimal softness)'
        },
        {
            title: 'ORP (Oxidation - Reduction Potential)',
            desc: '-300 to -450 mV (Energy - rich)'
        },
    ],
    images: OkearaWaterIndicator
})

const OkearaBlueIndicator = ref({
    title: 'OKEARA Blue Indicators',
    content: [
        {
            title: 'pH (Acidity Level)',
            desc: '6.5 - 7.5'
        },
        {
            title: 'ORP (Oxidation - Reduction Potential)',
            desc: '+500 to +700 mV'
        },
    ],
    images: OkearaBlueImageIndicator
})

const slideTo = (target: 'water' | 'blue') => {
    if (!sliderWrapper.value) return

    const x = target === 'water' ? '0%' : '-50%'

    gsap.to(sliderWrapper.value, {
        x,
        duration: 0.6,
        ease: 'power2.inOut',
    })
}

const nextIndicator = () => {
    if (indicator.value === 'blue') return
    direction.value = 'right'
    indicator.value = 'blue'
    slideTo('blue')
}

const prevIndicator = () => {
    if (indicator.value === 'water') return
    direction.value = 'left'
    indicator.value = 'water'
    slideTo('water')
}

watch(indicator, async (_newVal, _oldVal) => {
    await nextTick()

    gsap.set(contentItems.value, {
        opacity: 0,
        y: direction.value === 'right' ? 30 : -30,
    })

    gsap.to(contentItems.value, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
    })
})


const activeIndex = ref(0)

const switchTo = async (index: number) => {
    activeIndex.value = index
    indicatorProduct.value = index === 0 ? "water" : "blue"

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

onMounted(() => {
    nextTick(() => {
        contentItems.value = contentItems.value.filter(Boolean)

        gsap.set(contentItems.value, {
            opacity: 0,
            y: 30,
        })

        gsap.to(contentItems.value, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
        })
    })
})


onMounted(() => {
    switchTo(activeIndex.value)
})

onMounted(() => {
    indicator.value = "water"
})


onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        bannerRef.value,
        { scale: 1.4 },
        {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
        }
    )

    gsap.fromTo(
        textBannerContainerRef.value,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
        }
    )

    const wrapper = marqueeWrapper.value
    if (!wrapper) return

    if (wrapper.children.length < 2) {
        wrapper.innerHTML += wrapper.innerHTML
    }

    const contentWidth = wrapper.scrollWidth / 2
    let currentX = 0
    let direction = 1

    gsap.ticker.add(() => {
        currentX -= 1 * direction
        if (currentX <= -contentWidth) currentX = 0
        if (currentX >= 0) currentX = -contentWidth
        gsap.set(wrapper, { x: currentX })
    })

    ScrollTrigger.create({
        trigger: bannerRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate(self) {
            direction = self.direction === 1 ? 1 : -1
        },
    })

    if (titleSustainabilityRef.value) {
        const lines = titleSustainabilityRef.value.innerHTML.split('<br>')
        titleSustainabilityRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleSustainabilityRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleSustainabilityRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphSustainabilityRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphSustainabilityRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    const bgs: HTMLElement[] = [bg0.value, bg1.value, bg2.value, bg3.value, bg4.value].filter(Boolean) as HTMLElement[]
    const bgCards: HTMLElement[] = [
        bgCard0.value, bgCard1.value, bgCard2.value, bgCard3.value, bgCard4.value
    ].filter(Boolean) as HTMLElement[]
    const titles: HTMLElement[] = [
        title0.value, title1.value, title2.value, title3.value, title4.value
    ].filter(Boolean) as HTMLElement[]
    const numbers: HTMLElement[] = [
        number0.value, number1.value, number2.value, number3.value, number4.value
    ].filter(Boolean) as HTMLElement[]
    const descs: HTMLElement[] = [
        desc0.value, desc1.value, desc2.value, desc3.value, desc4.value
    ].filter(Boolean) as HTMLElement[]

    bgs.forEach((el, i) => {
        gsap.set(el, { opacity: i === 0 ? 1 : 0 })
    })

    bgCards.forEach((el, i) => {
        gsap.set(el, { yPercent: i === 0 ? 0 : 100 })
    })
    titles.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    numbers.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    descs.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value as HTMLElement,
            start: 'top top',
            end: `+=${(bgs.length - 1) * 100}%`,
            scrub: true,
            pin: true,
        },
    })

    for (let i = 1; i < bgs.length; i++) {
        tl.to(bgs[i], {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
        }, i)
        tl.to(bgCards[i], {
            yPercent: 0,
            duration: 0.6,
            ease: 'power2.out',
        }, i)
        tl.to(titles[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(titles[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)

        tl.to(numbers[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(numbers[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)

        tl.to(descs[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(descs[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)
    }

    if (titleProductRef.value) {
        const lines = titleProductRef.value.innerHTML.split('<br>')
        titleProductRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleProductRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleProductRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphProductRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphProductRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (isMobile()) {
        gsap.set(description500ml.value, { clearProps: 'all' })
    } else {
        gsap.set(description500ml.value, {
            opacity: 0,
            y: 20,
            position: 'absolute'
        })

        hoverIn = () => {
            gsap.to(description500ml.value, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        }
        hoverOut = () => {
            gsap.to(description500ml.value, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' })
        }

        if (card500ml.value) {
            card500ml.value.addEventListener('mouseenter', hoverIn)
            card500ml.value.addEventListener('mouseleave', hoverOut)
        }
    }

    if (isMobile()) {
        gsap.set(description12l.value, { clearProps: 'all' })
    } else {
        gsap.set(description12l.value, {
            opacity: 0,
            y: 20,
            position: 'absolute'
        })

        hoverIn = () => {
            gsap.to(description12l.value, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        }
        hoverOut = () => {
            gsap.to(description12l.value, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' })
        }

        if (card12l.value) {
            card12l.value.addEventListener('mouseenter', hoverIn)
            card12l.value.addEventListener('mouseleave', hoverOut)
        }
    }
})

onBeforeUnmount(() => {
    if (!isMobile() && card500ml.value) {
        card500ml.value.removeEventListener('mouseenter', hoverIn)
        card500ml.value.removeEventListener('mouseleave', hoverOut)
    }

    if (!isMobile() && card12l.value) {
        card12l.value.removeEventListener('mouseenter', hoverIn)
        card12l.value.removeEventListener('mouseleave', hoverOut)
    }
})


</script>