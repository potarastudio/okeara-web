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
                            Our Our Longevity Club • Our Longevity Club • Our Community •
                        </div>
                        <div class="marquee-text">
                            Our Our Longevity Club • Our Longevity Club • Our Community •
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
                        Our Water
                    </div>
                </div>
                <div class="md:w-[60%]">
                    <div ref="titleWaterRef"
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] font-light lg:w-[75%]">
                        Our Longevity Club is dedicated to living our best lives, focusing on health and happiness
                        together, and making each day special.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] pb-[40px] md:p-[40px] lg:px-[64px] lg:pb-[100px]">
            <div ref="carousel" class="flex items-start scroll-smooth gap-[28px] overflow-hidden">
                <div class="w-[35%] h-[20%] flex-shrink-0 flex flex-col">
                    <img :src="OurCommunity1" alt="OurCommunity1" class="w-full h-full object-cover">
                </div>
                <div class="w-[50%] flex-shrink-0 flex flex-col">
                    <img :src="OurCommunity2" alt="OurCommunity2" class="w-full h-full object-cover">
                </div>
                <div class="w-[35%] h-[20%] flex-shrink-0 flex flex-col">
                    <img :src="OurCommunity1" alt="OurCommunity1" class="w-full h-full object-cover">
                </div>
                <div class="w-[50%] flex-shrink-0 flex flex-col">
                    <img :src="OurCommunity2" alt="OurCommunity2" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-full flex items-start mt-[52px] md:mt-[100px]">
                <div class="hidden md:block w-[35%]"></div>
                <div class="md:w-[60%] flex flex-col gap-[52px] md:gap-[80px]">
                    <div class="hidden md:flex items-center">
                        <div class="w-[85%] flex">
                            <hr class="w-[50%] border border-[#EDF3F3]" :class="{ 'opacity-20': carouselIndex === 1 }">
                            <hr class="w-[50%] border border-[#EDF3F3]" :class="{ 'opacity-20': carouselIndex === 0 }">
                        </div>
                        <div class="flex items-center gap-[40px] pl-[24px]">
                            <img :src="ArrowLeftWhite" alt="ArrowLeftWhite" class="cursor-pointer transition"
                                :class="{ 'pointer-events-none opacity-20': carouselIndex === 0 }" @click="scrollLeft">
                            <img :src="ArrowRightWhite" alt="ArrowRightWhite" class="cursor-pointer transition"
                                :class="{ 'pointer-events-none opacity-20': carouselIndex === 1 }" @click="scrollRight">
                        </div>

                    </div>
                    <div ref="titlePartnersRef"
                        class="lg:w-[70%] text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Our partners, business associates, and health advocates share our vision and help make OKEARA
                        Community stronger.
                    </div>
                    <div ref="paragraphPartnersLeftRef"
                        class="w-[90%] ml-[10%] md:ml-0 md:w-full flex flex-col md:flex-row items-start gap-[50px]">
                        <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-80">
                            Their skills and resources enhance our experience, creating a lively place where health and
                            wellness enthusiasts can thrive. Our partnerships are founded on shared values and goals.
                            Health
                            advocates inspire us with their passion and knowledge about well-being.
                        </div>
                        <div ref="paragraphPartnersRightRef"
                            class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-80">
                            Our business associates bring new ideas and products that fit into our personalized
                            approach,
                            helping us grow and improve continuously. Together, we build a strong, supportive, and
                            evolving
                            network.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden w-[100%] h-[105dvh] bg-[#203D4D]">
            <img ref="imageCommunityRef" :src="OurCommunityBlock" alt="Safety"
                class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
        </div>
        <div
            class="w-full bg-[#EDF3F3] flex flex-col md:flex-row items-stretch justify-between gap-[12px] px-[24px] py-[40px] md:p-[40px] lg:px-[180px] lg:py-[120px]">
            <div class="flex flex-col gap-[40px] gap-[150px] w-full md:w-[50%]">
                <div class="relative overflow-hidden w-full h-[700px] order-2 md:order-1">
                    <img ref="imageCommunityLeftRef" :src="CommunityStructured1" alt="CommunityStructured1"
                        class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                </div>
                <div ref="titleStructuredRef"
                    class="text-[#274A5C] text-[32px] text-[48px] font-light leading-[36px] leading-[58px] order-1 md:order-2 md:mb-[275px]">
                    OKEARA structured hydrogen water shows our commitment to Wellness and Community.
                </div>
            </div>
            <div
                class="flex flex-col items-start justify-between gap-[40px] md:gap-auto w-full md:w-[40%] md:pt-[60px] md:pb-[100px]">
                <div class="w-full h-[400px] relative overflow-hidden">
                    <img ref="imageCommunityRightRef" :src="CommunityStructured2" alt="CommunityStructured2"
                        class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                </div>
                <div ref="paragraphStructuredRef"
                    class="text-[#274A5C] text-[16px] md:text-[18px] leading-[26px] md:w-[90%] opacity-77 mt-[40px] md:mt-[120px]">
                    We enjoy every moment, celebrate our successes, and support each other to achieve optimal health. We
                    welcome you to OKEARA community, where we live life to its fullest and use structured hydrogen water
                    for a happier, healthier future.
                </div>
            </div>
        </div>
        <LongevityClub />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BannerOurCommunity from '@/assets/images/BannerOurCommunity.png'
import OurCommunity1 from '@/assets/images/ourcommunity-1.png'
import OurCommunity2 from '@/assets/images/ourcommunity-3.png'
import OurCommunityBlock from '@/assets/images/OurCommunityBlock.png'
import CommunityStructured1 from '@/assets/images/CommunityStructured1.png'
import CommunityStructured2 from '@/assets/images/CommunityStructured2.png'
import List from '@/assets/icons/List.svg'
import ArrowLeftWhite from '@/assets/icons/ArrowLeftWhite.svg'
import ArrowRightWhite from '@/assets/icons/ArrowRightWhite.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const bannerRef = ref<HTMLElement | null>(null)
const textBannerContainerRef = ref<HTMLElement | null>(null)
const marqueeWrapper = ref<HTMLElement | null>(null)
const titleWaterRef = ref<HTMLElement | null>(null)
const titlePartnersRef = ref<HTMLElement | null>(null)
const paragraphPartnersLeftRef = ref<HTMLElement | null>(null)
const paragraphPartnersRightRef = ref<HTMLElement | null>(null)
const imageCommunityRef = ref<HTMLElement | null>(null)
const imageCommunityLeftRef = ref<HTMLElement | null>(null)
const imageCommunityRightRef = ref<HTMLElement | null>(null)
const titleStructuredRef = ref<HTMLElement | null>(null)
const paragraphStructuredRef = ref<HTMLElement | null>(null)
const carousel = ref<HTMLDivElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurCommunity})`,
}

const carouselIndex = ref(0)

function scrollLeft() {
    carouselIndex.value = carouselIndex.value - 1
    const el = carousel.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.85
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
}

function scrollRight() {
    carouselIndex.value = carouselIndex.value + 1
    const el = carousel.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.85
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
}


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

    if (titleWaterRef.value) {
        const lines = titleWaterRef.value.innerHTML.split('<br>')
        titleWaterRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleWaterRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleWaterRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    if (titlePartnersRef.value) {
        const lines = titlePartnersRef.value.innerHTML.split('<br>')
        titlePartnersRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titlePartnersRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titlePartnersRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphPartnersLeftRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphPartnersLeftRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    gsap.fromTo(
        paragraphPartnersRightRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphPartnersRightRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    gsap.fromTo(imageCommunityRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imageCommunityRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    gsap.fromTo(imageCommunityLeftRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imageCommunityLeftRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    gsap.fromTo(imageCommunityRightRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imageCommunityRightRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    if (titleStructuredRef.value) {
        const lines = titleStructuredRef.value.innerHTML.split('<br>')
        titleStructuredRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleStructuredRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleStructuredRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphStructuredRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphStructuredRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})
</script>
