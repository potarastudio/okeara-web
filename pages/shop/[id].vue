<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div
            class="w-full relative bg-[#EDF3F3] flex flex-col items-start gap-[40px] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[120px]">
            <div class="w-full flex items-center gap-[8px]">
                <div class="text-[18px] text-[#889494] leading-[26px] cursor-pointer">Shop</div>
                <img :src="CaretRightGrey" alt="CaretRightGrey">
                <div class="text-[18px] text-[#203D4D] leading-[26px]">Product Detail</div>
            </div>
            <div class="w-full flex items-start gap-[40px]">
                <div class="flex gap-[32px]">
                    <div class="flex flex-col items-start gap-[32px]">
                        <div v-for="(image, index) in detailImages" :key="index"
                            class="bg-[#E4EDED] w-[100px] py-[16px] px-[30px] flex items-center justify-center cursor-pointer"
                            :class="{
                                'border border-[#203D4D]': selectedIndex === index,
                                'border-transparent': selectedIndex !== index
                            }" @click="selectImage(index)">
                            <img :src="image.src" :alt="image.alt" />
                        </div>
                    </div>
                    <div class="bg-[#E4EDED] w-[40rem] flex items-center justify-center">
                        <img :src="detailImages[selectedIndex].src" :alt="detailImages[selectedIndex].alt"
                            class="w-[40%]" />
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[32px]">
                    <div class="text-[#203D4D] text-[48px] font-light">OKEARA Water 500mL</div>
                    <div class="flex items-center gap-[12px]">
                        <div class="text-[#203D4D] text-[18px]">5.0</div>
                        <div class="flex items-center gap-[8px]">
                            <img :src="Star" alt="Star">
                            <img :src="Star" alt="Star">
                            <img :src="Star" alt="Star">
                            <img :src="Star" alt="Star">
                            <img :src="Star" alt="Star">
                        </div>
                        <div class="text-[#97AEBB] text-[18px]">(from 824 people)</div>
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[26px]">This structured H₂ water, infused with
                        molecular hydrogen and revitalized per the Bovis scale,
                        features low surface tension for rapid cellular hydration, triggering natural regeneration,
                        energy, and balance.
                    </div>
                    <hr class="border border-[#DBE4E4] w-full" />
                    <div class="w-full grid grid-cols-2 gap-[20px]">
                        <div class="bg-white flex flex-col items-start gap-[20px] p-[20px]">
                            <div class="text-[#4D6674]">Monthly Subscription</div>
                            <div class="text-[#203D4D] text-[26px]">$870</div>
                        </div>
                        <div class="border border-[#C8D3D9] flex flex-col items-start gap-[20px] p-[20px]">
                            <div class="text-[#92A0A8]">Annually Subscription</div>
                            <div class="text-[#8DA1AC] text-[26px]">$8,700</div>
                        </div>
                    </div>
                    <button
                        class="bg-[#203D4D] w-full flex items-center justify-center gap-[12px] py-[18px] rounded-full">
                        Buy Now <span>$</span>
                    </button>
                </div>
            </div>
        </div>
        <div
            class="w-full relative bg-[#DAD6CB] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[120px] flex flex-col gap-[80px]">
            <img :src="BgWave" alt="BgWave" class="absolute top-0 left-[15%]">
            <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[42px] lg:gap-auto">
                <div class="flex items-center gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Related
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-end gap-[24px] md:gap-[90px] lg:w-[65%]">
                    <div
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[41.6px] md:leading-[58px] mt-[-10px] w-[85%] md:w-[40%]">
                        Related Product <br /> From OKEARA
                    </div>
                    <div
                        class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18.2px] md:leading-[24px] md:w-[50%]">
                        Here is some product that related to OKEARA Water 500ml (16.9fl oz). Let’s check this out
                    </div>
                </div>
            </div>
            <div class="w-full overflow-hidden">
                <div class="w-full flex items-start gap-[60px] mt-[60px]">
                    <div v-for="(item, index) in items" :key="index" :ref="el => containers[index] = el"
                        class="bg-[#CFCABC] w-full md:w-1/2 lg:basis-[calc((100%-120px)/3)] py-[20px] lg:py-[50px] flex-shrink-0 flex items-center justify-center self-stretch transition-all duration-500 ease-in-out">
                        <div class="flex flex-col justify-end items-center gap-[40px]">
                            <div class="fade-item flex flex-col items-center gap-[16px]">
                                <div class="text-[#203D4D] text-[26px] leading-[26px]">{{ item.title }}</div>
                                <div class="text-[#203D4D] text-[18px] opacity-50">{{ item.desc }}</div>
                                <div class="px-[12px] py-[8px] bg-white rounded-full text-black cursor-pointer" @click="isOpen = true">Preview 3D</div>
                            </div>

                            <img :src="item.image" :alt="item.title" class="h-[300px]" />

                            <div class="fade-item flex flex-col items-center gap-[16px]">
                                <button class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] cursor-pointer" @click="detectAndRedirect">
                                    Buy Now
                                    <img :src="Dollar" alt="Dollar" class="w-[16px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal :show="isOpenError" message="Please allow location to continue buy this product"
                @close="isOpenError = false" />
        </div>
        <Modal3DViewerClient :show="isOpen" @close="isOpen = false" />
    </div>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'

import OkearaBlue500ml from '@/assets/images/OkearaBlue500ml.png';
import OkearaWater12l from '@/assets/images/OkearaWater12l.png';
import OkearaBlue12l from '@/assets/images/OkearaBlue12l.png';
import DetailPreview from '@/assets/images/500ml - Preview.png';
import DetailFront from '@/assets/images/500ml - Front.png';
import DetailBack from '@/assets/images/500ml - Back.png';
import DetailRight from '@/assets/images/500ml - Right.png';
import Detailleft from '@/assets/images/500ml - Left.png';

import BgWave from '@/assets/images/WaveVertical.svg';
import CaretRightGrey from '@/assets/icons/CaretRightGrey.svg';
import Star from '@/assets/icons/Star.svg';
import ListBlack from '@/assets/icons/ListBlack.svg';
import Dollar from '@/assets/icons/Dollar.svg';

import Modal3DViewerClient from '~/components/Modal/Modal3DViewer.client.vue';
import Modal from '~/components/Modal/Modal.vue';

// const route = useRoute()
// const id = route.params.id
const config = useRuntimeConfig()

const isOpen = ref(false)
const isOpenError = ref(false)
const selectedIndex = ref(0)
const containers = ref<(Element | ComponentPublicInstance | null)[]>([])

const detailImages = [
    { src: DetailPreview, alt: 'DetailPreview' },
    { src: DetailFront, alt: 'DetailFront' },
    { src: DetailBack, alt: 'DetailBack' },
    { src: DetailRight, alt: 'DetailRight' },
    { src: Detailleft, alt: 'Detailleft' }
]

const items = [
    {
        title: 'OKEARA',
        desc: '12 Liter (405.768fl oz)',
        image: OkearaWater12l,
    },
    {
        title: 'OKEARA Blue',
        desc: '12 Liter (405.768fl oz)',
        image: OkearaBlue12l,
    },
    {
        title: 'OKEARA Blue',
        desc: '500ml (16.9fl oz)',
        image: OkearaBlue500ml,
    }
]

function selectImage(index: number) {
    selectedIndex.value = index
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
                isOpenError.value = true
                return
            }

            const country = properties.country || ''
            const state = properties.state || ''
            const city = properties.city || ''
            const county = properties.county || ''


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
            isOpenError.value = true
        }
    }, (err) => {
        console.error('Geolocation error:', err)
        isOpenError.value = true
    })
}

onMounted(() => {
    containers.value.forEach(container => {
        if (container && container instanceof Element) {
            const fadeItems = container.querySelectorAll('.fade-item')

            gsap.set(fadeItems, {
                opacity: 0,
                y: -10,
                display: 'none'
            })

            container.addEventListener('mouseenter', () => {
                gsap.to(fadeItems, {
                    opacity: 1,
                    y: 0,
                    display: 'flex',
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out'
                })
            })

            container.addEventListener('mouseleave', () => {
                gsap.to(fadeItems, {
                    opacity: 0,
                    y: -10,
                    display: 'none',
                    duration: 0.3,
                    stagger: 0.1,
                    ease: 'power2.in'
                })
            })
        }
    })
})
</script>