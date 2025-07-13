<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative">
            <div ref="textContainerRef"
                class="absolute left-0 bottom-[20px] md:bottom-[40px] lg:bottom-[100px] px-[24px] md:px-[40px] lg:px-[64px] w-full flex flex-col md:flex-row items-stretch justify-between gap-[20px] md:gap-auto">
                <div class="flex flex-col items-start justify-between">
                    <div class="text-[32px] md:text-[40px] lg:text-[64px] leading-[40px] lg:leading-[72px] font-light"
                        style="letter-spacing: -1.92px;">
                        Let’s Buy OKEARA <br>
                        Hydrogen Water
                    </div>
                    <button
                        class="hidden h-[48px] px-[16px] border border-[#fff] rounded-full flex items-center justify-center gap-[20px] cursor-pointer">
                        Shop Now
                        <img :src="ArrowDown" alt="ArrowDown">
                    </button>
                </div>
                <div class="flex flex-col items-start gap-[20px] md:gap-[120px] md:w-[35%]">
                    <div class="text-[16px] md:text-[20px] leading-[24px] md:leading-[26px]"
                        style="letter-spacing: -0.2px;">
                        Join OKEARA Longevity Club today and start your journey to ultimate Wellness with an exclusive
                        reward
                    </div>
                    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                        <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                        <img :src="ArrowTopRight" alt="arrowTopRight">
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full relative bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[120px] flex flex-col gap-[80px]">
            <img :src="BgWave" alt="BgWave" class="absolute top-0 left-[15%]">
            <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[42px] lg:gap-auto">
                <div class="flex items-center gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-end gap-[24px] md:gap-[90px] lg:w-[65%]">
                    <div
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[41.6px] md:leading-[58px] mt-[-10px] w-[85%] md:w-[40%]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div
                        class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18.2px] md:leading-[24px] md:w-[50%]">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature
                        and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
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
            <div class="w-full overflow-hidden">
                <div class="w-full flex items-start self-stretch gap-[60px] mt-[72px]">
                    <div ref="container0"
                        class="w-[100%] lg:w-[50%] flex-shrink-0 flex items-center justify-center self-stretch"
                        @mouseenter="container0 && handleMouseEnter(container0)"
                        @mouseleave="container0 && handleMouseLeave(container0)">
                        <div class="flex flex-col justify-end items-center gap-[52px]">
                            <div class="px-[12px] py-[8px] bg-white rounded-full text-black fade-item opacity-0 cursor-pointer"
                                @click="isOpen = true">
                                Preview 3D
                            </div>
                            <img :src="activeIndex === 0 ? OkearaWater500ml : OkearaBlue500ml" alt="Okeara Water 500ml"
                                class="h-[500px]">
                            <div class="flex flex-col items-center gap-[32px] opacity-0 fade-item">
                                <div class="flex flex-col items-center gap-[16px]">
                                    <div class="text-[#203D4D] text-[26px] leading-[26px]">
                                        {{ activeIndex === 0 ? 'OKEARA' : 'OKEARA Blue' }}
                                    </div>
                                    <div class="text-[#203D4D] text-[18px] opacity-50">
                                        500ml (16.9fl 0z)
                                    </div>
                                </div>
                                <div class="flex items-center gap-[24px]">
                                    <button
                                        class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] cursor-pointer"
                                        @click="detectAndRedirect">
                                        Buy Now
                                        <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                    </button>
                                    <button
                                        class="bg-[#EDF3F3] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#203D4D] cursor-pointer">
                                        Add to Cart
                                        <img :src="CartBlue" alt="CartBlue" class="w-[16px]">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[100%] lg:w-[50%] flex-shrink-0 flex items-center justify-center self-stretch">
                        <div ref="container1" class="flex flex-col justify-end items-center gap-[52px]"
                            @mouseenter="container1 && handleMouseEnter(container1)"
                            @mouseleave="container1 && handleMouseLeave(container1)">
                            <div class="px-[12px] py-[8px] bg-white rounded-full text-black fade-item opacity-0 cursor-pointer"
                                @click="isOpen = true">
                                Preview 3D
                            </div>
                            <img :src="activeIndex === 0 ? OkearaWater12l : OkearaBlue12l" alt="Okeara Water 12 L"
                                class="h-[500px]">
                            <div class="flex flex-col items-center gap-[32px] opacity-0 fade-item">
                                <div class="flex flex-col items-center gap-[16px]">
                                    <div class="text-[#203D4D] text-[26px] leading-[26px]">
                                        {{ activeIndex === 0 ? 'OKEARA' : 'OKEARA Blue' }}
                                    </div>
                                    <div class="text-[#203D4D] text-[18px] opacity-50">
                                        500ml (16.9fl 0z)
                                    </div>
                                </div>
                                <div class="flex items-center gap-[24px]">
                                    <button
                                        class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] curos-pointer"
                                        @click="detectAndRedirect">
                                        Buy Now
                                        <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                    </button>
                                    <button
                                        class="bg-[#EDF3F3] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#203D4D] curos-pointer">
                                        Add to Cart
                                        <img :src="CartBlue" alt="CartBlue" class="w-[16px]">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LongevityClub />
        <Modal3DViewerClient :show="isOpen" @close="isOpen = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Banner from '@/assets/images/BannerShop.png';
import OkearaWater500ml from '@/assets/images/OkearaWater500ml.png';
import OkearaBlue500ml from '@/assets/images/OkearaBlue500ml.png';
import OkearaWater12l from '@/assets/images/OkearaWater12l.png';
import OkearaBlue12l from '@/assets/images/OkearaBlue12l.png';
import ListBlack from '@/assets/icons/ListBlack.svg';
import BgWave from '@/assets/images/WaveVertical.svg'
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import Dollar from '@/assets/icons/Dollar.svg';
import CartBlue from '@/assets/icons/CartBlue.svg';

import LongevityClub from '~/page-section/LongevityClub.vue';
import Modal3DViewerClient from '~/components/Modal/Modal3DViewer.client.vue';

const bannerRef = ref<HTMLElement | null>(null)
const textContainerRef = ref<HTMLElement | null>(null)
const indicatorRef = ref(null)
const optionRefs = ref<(Element | ComponentPublicInstance | null)[]>([])

const activeIndex = ref(0)
const container0 = ref(null)
const container1 = ref(null)
const isOpen = ref(false)

const config = useRuntimeConfig()

const bannerStyle = {
    backgroundImage: `url(${Banner})`
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

interface FadeItemContainer extends Element {
    querySelectorAll(selectors: string): NodeListOf<HTMLElement>;
}

const handleMouseEnter = (el: FadeItemContainer) => {
    gsap.to(el.querySelectorAll('.fade-item'), { opacity: 1, duration: 0.5, ease: 'power2.out' })
}

const handleMouseLeave = (el: FadeItemContainer) => {
    gsap.to(el.querySelectorAll('.fade-item'), { opacity: 0, duration: 0.5, ease: 'power2.out' })
}

const detectAndRedirect = () => {
    if (!navigator.geolocation) {
        alert('Browser Anda tidak mendukung Geolocation.')
        return
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        try {
            const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${config.public.geoapifyApiKey}`
            const response = await fetch(url)
            const result = await response.json()

            const properties = result.features?.[0]?.properties

            if (!properties) {
                alert('Lokasi tidak dapat ditentukan.')
                return
            }

            const country = properties.country || ''
            const state = properties.state || ''
            const city = properties.city || ''
            const county = properties.county || ''

            console.log('📍 Detected:', { country, state, city, county })

            if (country === 'Indonesia') {
                const isBali = [state, city, county].some(val =>
                    val?.toLowerCase().includes('bali')
                )

                if (isBali) {
                    window.location.href = 'https://wa.me/6281138314651'
                } else {
                    window.location.href = 'https://www.okearacommunity.id'
                }
            } else {
                alert('Saat ini hanya tersedia untuk pengguna di Indonesia.')
            }
        } catch (error) {
            console.error('Gagal mengambil lokasi:', error)
            alert('Terjadi kesalahan saat mendeteksi lokasi.')
        }
    }, (err) => {
        console.error('Geolocation error:', err)
        alert('Izin lokasi dibutuhkan untuk melanjutkan.')
    })
}

onMounted(() => {
    switchTo(activeIndex.value)
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
        textContainerRef.value,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
        }
    )
})
</script>