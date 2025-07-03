<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative"
            style="background-position: left 30% top 22%;">
            <div class="w-full h-[50dvh] absolute left-0 bottom-0"
                style="background: linear-gradient(0deg, #203D4D 0%, rgba(32, 61, 77, 0.00) 100%)" />
            <div
                class="absolute left-0 bottom-[40px] md:bottom-[25px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div ref="textBannerContainerRef" class="overflow-hidden w-full whitespace-nowrap">
                    <div ref="marqueeWrapper" class="inline-flex will-change-transform">
                        <div class="marquee-text">
                            Our Partners • Our Partners • Our Partners •
                        </div>
                        <div class="marquee-text">
                            Our Partners • Our Partners • Our Partners •
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
                        Our Partners
                    </div>
                </div>
                <div class="md:w-[60%]">
                    <div ref="titlePartnerRef"
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] lg:w-[75%]">
                        At the heart of our community are our valued partners, whose collaboration and shared values
                        make everything possible.
                    </div>
                </div>
            </div>
        </div>
        <div :style="bannerCommunityStyle"
            class="bg-cover bg-no-repeat bg-center px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-auto">
                <div class="hidden md:flex items-center gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Community
                    </div>
                </div>
                <div class="bg-[#EDF3F3] p-[64px] w-[90%] md:w-[40%] flex flex-col items-center">
                    <div class="text-[#203D4D] text-[14px] leading-[18px]">
                        02 <span class="opacity-50">— 06</span>
                    </div>
                    <div
                        class="mt-[60px] text-[#203D4D] text-[22px] md:text-[28px] text-center font-light leading-[24px]">
                        Supporting <br> Sporting Events
                    </div>
                    <img :src="PartnersCommunity" alt="PartnersCommunity" class="w-full mt-[32px]">
                    <div
                        class="text-[#203D4D] text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-center mt-[32px]">
                        We proudly support various sporting events, advocating for the importance of physical activity.
                        Our involvement not only promotes an active lifestyle but also fosters a strong sense of
                        community and teamwork.
                    </div>
                </div>
                <div class="text-[#EDF3F3] text-right text-[16px] md:text-[18px] leading-[24px]">
                    ( Keep Scrolling )
                </div>
            </div>
        </div>
        <div
            class="w-full bg-[#274A5C] flex flex-col items-center justify-center px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="md:w-[70%] flex flex-col items-start gap-[56px] md:gap-[66px]">
                <div class="ml-[10%] w-[90%] md:w-[65%]">
                    <div ref="titlePartnersRef"
                        class="text-[#EDF3F3 ] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        These partnerships create a vibrant, supportive network where health and wellness enthusiasts
                        can
                        truly thrive.
                    </div>
                </div>
                <div ref="paragraphPartnersLeftRef"
                    class="ml-[30%] w-[70%] text-[#EDF3F3 ] text-[18px] leading-[26px] opacity-77 mt-[40px]">
                    OKEARA structured hydrogen water is a testament to our dedication to optimizing Wellness. We
                    celebrate every success and support one another in our health journeys.
                </div>
                <div class="w-full flex items-end justify-between">
                    <div class="pb-[30px] md:pb-[82px] w-[35%]">
                        <img :src="Partnership1" alt="Community 2">
                    </div>
                    <div class="flex flex-col items-start gap-[120px] w-[55%]">
                        <div ref="paragraphPartnersRightRef"
                            class="hidden md:block text-[#EDF3F3 ] text-[18px] leading-[26px] opacity-77 mt-[40px]">
                            OKEARA structured hydrogen water is a testament to our dedication to optimizing Wellness. We
                            celebrate every success and support one another in our health journeys.
                        </div>
                        <img :src="Partnership2" alt="Community 1">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Elementis Group
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[24px] lg:gap-[80px] md:w-[60%]">
                    <div ref="titleElementisRef"
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        HOT STONE Club <br>
                        Wellness Center
                    </div>
                    <div ref="paragraphElementisRef"
                        class="text-[#EDF3F3] text-[18px] leading-[26px] opacity-80 md:w-[70%]">
                        Our resorts and residences in Asia, Australia, and the Americas, are wellness destinations that
                        embrace a future defined by health, vitality, personalized well-being and longevity. ELEMENTIS
                        Resorts, Wellness Retreats and Residences go beyond providing a sustainable accommodation - it
                        creates a sense of connection, care, and sustainability, fostering a movement toward a better
                        world. ELEMENTIS is fast expanding across Asia, Australia and the Americas.
                    </div>
                </div>
            </div>
            <div class="w-full flex items-end justify-between mt-[56px] lg:mt-[100px]">
                <img :src="ElementisGroup1" alt="ElementisGroup1" class="md:w-[35%]">
                <img :src="ElementisGroup2" alt="ElementisGroup2" class="hidden md:block w-[60%]">
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[42px]">
                <div class="flex items-center gap-[10px] gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Elementis Development Group
                    </div>
                </div>
                <div class="flex flex-col gap-[24px] lg:gap-[80px] md:w-[60%]">
                    <div ref="titleDevelopmentRef"
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] lg:w-[60%]">
                        Designing a Life of Balance, Naturally
                    </div>
                    <div ref="paragraphDevelopmentRef"
                        class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] opacity-80 md:w-[70%]">
                        ELEMENTIS Development Group is redefining luxury and wellness living by creating sustainable,
                        nature-connected communities powered by innovation. Founded by Anton Titov and Andrey
                        Skripachev, the company focuses on climate-responsive design, energy efficiency, and
                        personalized wellness to support physical, mental, and spiritual health. With world-class
                        amenities like advanced saunas and OKEARA hydrogen water, ELEMENTIS offers healthy, balanced
                        lifestyles. Upcoming locations include Ubud and Uluwatu in Bali, Farellones in Chile, and future
                        sites across Indonesia and South America.
                    </div>
                </div>
            </div>
            <div class="w-full flex items-end justify-between mt-[56px] lg:mt-[100px]">
                <img :src="ElementisDevelopment1" alt="ElementisDevelopment1" class="hidden md:block w-[35%]">
                <img :src="ElementisDevelopment2" alt="ElementisDevelopment2" class="md:w-[60%]">
            </div>
        </div>
        <LongevityClub />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import BannerOurPartners from '@/assets/images/BannerOurPartners.png'
import PartnersCommunity from '@/assets/images/PartnersCommunity.png'
import Partnership1 from '@/assets/images/Partnership1.png'
import Partnership2 from '@/assets/images/Partnership2.png'
import ElementisGroup1 from '@/assets/images/ElementisGroup1.png'
import ElementisGroup2 from '@/assets/images/ElementisGroup2.png'
import ElementisDevelopment1 from '@/assets/images/ElementisDevelopment1.png'
import ElementisDevelopment2 from '@/assets/images/ElementisDevelopment2.png'
import List from '@/assets/icons/List.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

onMounted(async () => {
    if (import.meta.client) {
        const gsapModule = await import('gsap')
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
        gsapModule.gsap.registerPlugin(ScrollTrigger)
    }
})

const bannerRef = ref<HTMLElement | null>(null)
const textBannerContainerRef = ref<HTMLElement | null>(null)
const marqueeWrapper = ref<HTMLElement | null>(null)
const titlePartnerRef = ref<HTMLElement | null>(null)
const titlePartnersRef = ref<HTMLElement | null>(null)
const paragraphPartnersLeftRef = ref<HTMLElement | null>(null)
const paragraphPartnersRightRef = ref<HTMLElement | null>(null)
const titleElementisRef = ref<HTMLElement | null>(null)
const paragraphElementisRef = ref<HTMLElement | null>(null)
const titleDevelopmentRef = ref<HTMLElement | null>(null)
const paragraphDevelopmentRef = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurPartners})`,
}
const bannerCommunityStyle = {
    backgroundImage: `url(${PartnersCommunity})`,
}


onMounted(() => {
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
})

onMounted(() => {
    if (titlePartnerRef.value) {
        const lines = titlePartnerRef.value.innerHTML.split('<br>')
        titlePartnerRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titlePartnerRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titlePartnerRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }
})

onMounted(() => {
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
            scrollTrigger: {
                trigger: paragraphPartnersRightRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})

onMounted(() => {
    if (titleElementisRef.value) {
        const lines = titleElementisRef.value.innerHTML.split('<br>')
        titleElementisRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleElementisRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleElementisRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphElementisRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphElementisRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})

onMounted(() => {
    if (titleDevelopmentRef.value) {
        const lines = titleDevelopmentRef.value.innerHTML.split('<br>')
        titleDevelopmentRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleDevelopmentRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleDevelopmentRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphDevelopmentRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphDevelopmentRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})
</script>
