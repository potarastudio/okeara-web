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
        <div ref="container"
            class="relative w-full h-[100dvh] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[80px]">
            <div ref="bg0" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity})` }" />
            <div ref="bg1" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity2})` }" />
            <div ref="bg2" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-30 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity3})` }" />
            <div ref="bg3" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-40 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity4})` }" />
            <div ref="bg4" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-50 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity5})` }" />
            <div ref="bg5" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-60 will-change-transform"
                :style="{ backgroundImage: `url(${PartnersCommunity6})` }" />
            <div
                class="relative z-70 w-full flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-auto">
                <div class="hidden md:flex items-center gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Community
                    </div>
                </div>
                <div class="bg-[#EDF3F3] p-[32px] w-[90%] md:w-[40%] flex flex-col items-center">
                    <div class="relative flex items-center gap-[4px] text-[#203D4D] text-[14px] leading-[18px]">
                        <div ref="number0" class="absolute inset-0 opacity-0">
                            01
                        </div>
                        <div ref="number1" class="absolute inset-0 opacity-0">
                            02
                        </div>
                        <div ref="number2" class="absolute inset-0 opacity-0">
                            03
                        </div>
                        <div ref="number3" class="absolute inset-0 opacity-0">
                            04
                        </div>
                        <div ref="number4" class="absolute inset-0 opacity-0">
                            05
                        </div>
                        <div ref="number5" class="absolute inset-0 opacity-0">
                            06
                        </div>
                        <span class="opacity-50 ml-[24px]">— 06</span>
                    </div>
                    <div
                        class="relative mt-[40px] text-[#203D4D] text-[22px] md:text-[28px] text-center font-light leading-[24px] w-[70%] h-[80px]">
                        <div ref="title0" class="absolute inset-0 opacity-0">Longevity <br> Mindset</div>
                        <div ref="title1" class="absolute inset-0 opacity-0">Exclusive <br> Content & Events</div>
                        <div ref="title2" class="absolute inset-0 opacity-0">Access to Longevity <br> Club Concierge
                        </div>
                        <div ref="title3" class="absolute inset-0 opacity-0">Benefits from All <br> ELEMENTIS Group
                            Services</div>
                        <div ref="title4" class="absolute inset-0 opacity-0">Beyond Wellness: <br> Longevity and
                            Happiness</div>
                        <div ref="title5" class="absolute inset-0 opacity-0">Limited <br> Availability</div>
                    </div>
                    <div class="relative overflow-hidden w-full h-[280px]">
                        <img ref="imgCard0" :src="PartnersCommunity" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-10 will-change-transform">
                        <img ref="imgCard1" :src="PartnersCommunity2" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-20 will-change-transform">
                        <img ref="imgCard2" :src="PartnersCommunity3" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-30 will-change-transform">
                        <img ref="imgCard3" :src="PartnersCommunity4" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-40 will-change-transform">
                        <img ref="imgCard4" :src="PartnersCommunity5" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-50 will-change-transform">
                        <img ref="imgCard5" :src="PartnersCommunity6" alt="PartnersCommunity"
                            class="absolute inset-0 object-cover z-60 will-change-transform">
                    </div>
                    <div
                        class="relative w-full h-[100px] text-[#203D4D] text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-center mt-[32px]">
                        <div ref="desc0" class="absolute inset-0 opacity-0">
                            Join a vibrant community of like-minded individuals who share your passion for longevity and
                            wellness. Surround yourself with people who inspire and support each other in the pursuit of
                            a healthier, more fulfilling life.
                        </div>
                        <div ref="desc1" class="absolute inset-0 opacity-0">
                            Gain access to exclusive events and content tailored specifically for our members. From
                            private wellness workshops to intimate gatherings with industry experts, its designed to
                            enrich your journey towards longevity.
                        </div>
                        <div ref="desc2" class="absolute inset-0 opacity-0">
                            Experience unparalleled support with our dedicated Longevity Club Concierge. Available
                            exclusively to members, this service ensures that your wellness journey is effortless and
                            tailored to your needs.
                        </div>
                        <div ref="desc3" class="absolute inset-0 opacity-0">
                            You’ll enjoy comprehensive benefits from all ELEMENTIS Group services, including OKEARA’s
                            premium hydrogen water, Hot Stone Club’s personalized wellness programs, and ELEMENTIS
                            Development’s luxury villas.
                        </div>
                        <div ref="desc4" class="absolute inset-0 opacity-0">
                            The Longevity Club is more than just a wellness program; it’s a pathway to a happier, more
                            fulfilling life. By focusing on longevity, wellness, and happiness, you’ll reap benefits
                            that extend beyond physical health.
                        </div>
                        <div ref="desc5" class="absolute inset-0 opacity-0">
                            Membership to the Longevity Club is a rare privilege, with only a limited number of spots
                            available.
                            This ensures that each member receives the highest level of personalized attention and care.
                        </div>
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
                        <div class="relative overflow-hidden w-full h-[400px]">
                            <img ref="imgParnershipLeftRef" :src="Partnership1" alt="Community 2"
                                class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-[120px] w-[55%]">
                        <div ref="paragraphPartnersRightRef"
                            class="hidden md:block text-[#EDF3F3 ] text-[18px] leading-[26px] opacity-77 mt-[40px]">
                            OKEARA structured hydrogen water is a testament to our dedication to optimizing Wellness. We
                            celebrate every success and support one another in our health journeys.
                        </div>
                        <div class="relative overflow-hidden w-full h-[700px]">
                            <img ref="imgParnershipRightRef" :src="Partnership2" alt="Community 1"
                                class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                        </div>
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
                <div class="relative overflow-hidden md:w-[35%] h-[400px]">
                    <img ref="imgElementisLeftRef" :src="ElementisGroup1" alt="ElementisGroup1"
                        class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                </div>
                <div class="relative overflow-hidden hidden md:block w-[60%] h-[600px]">
                    <img ref="imgElementisRightRef" :src="ElementisGroup2" alt="ElementisGroup2"
                        class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                </div>
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
                <div class="relative overflow-hidden hidden md:block h-[400px] w-[35%]">
                    <img ref="imgDevelopmentLeftRef" :src="ElementisDevelopment1" alt="ElementisDevelopment1"
                        class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
                </div>
                <div class="relative overflow-hidden w-full md:w-[60%] h-[600px]">
                    <img ref="imgDevelopmentRightRef" :src="ElementisDevelopment2" alt="ElementisDevelopment2" class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
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
import BannerOurPartners from '@/assets/images/BannerOurPartners.png'
import PartnersCommunity from '@/assets/images/PartnersCommunity.png'
import PartnersCommunity2 from '@/assets/images/PartnersCommunity2.png'
import PartnersCommunity3 from '@/assets/images/PartnersCommunity3.png'
import PartnersCommunity4 from '@/assets/images/PartnersCommunity4.png'
import PartnersCommunity5 from '@/assets/images/PartnersCommunity5.png'
import PartnersCommunity6 from '@/assets/images/PartnersCommunity6.png'
import Partnership1 from '@/assets/images/Partnership1.png'
import Partnership2 from '@/assets/images/Partnership2.png'
import ElementisGroup1 from '@/assets/images/ElementisGroup1.png'
import ElementisGroup2 from '@/assets/images/ElementisGroup2.png'
import ElementisDevelopment1 from '@/assets/images/ElementisDevelopment1.png'
import ElementisDevelopment2 from '@/assets/images/ElementisDevelopment2.png'
import List from '@/assets/icons/List.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const bannerRef = ref<HTMLElement | null>(null)
const textBannerContainerRef = ref<HTMLElement | null>(null)
const marqueeWrapper = ref<HTMLElement | null>(null)
const titlePartnerRef = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const bg0 = ref<HTMLElement | null>(null)
const bg1 = ref<HTMLElement | null>(null)
const bg2 = ref<HTMLElement | null>(null)
const bg3 = ref<HTMLElement | null>(null)
const bg4 = ref<HTMLElement | null>(null)
const bg5 = ref<HTMLElement | null>(null)
const number0 = ref<HTMLElement | null>(null)
const number1 = ref<HTMLElement | null>(null)
const number2 = ref<HTMLElement | null>(null)
const number3 = ref<HTMLElement | null>(null)
const number4 = ref<HTMLElement | null>(null)
const number5 = ref<HTMLElement | null>(null)
const title0 = ref<HTMLElement | null>(null)
const title1 = ref<HTMLElement | null>(null)
const title2 = ref<HTMLElement | null>(null)
const title3 = ref<HTMLElement | null>(null)
const title4 = ref<HTMLElement | null>(null)
const title5 = ref<HTMLElement | null>(null)
const imgCard0 = ref<HTMLElement | null>(null)
const imgCard1 = ref<HTMLElement | null>(null)
const imgCard2 = ref<HTMLElement | null>(null)
const imgCard3 = ref<HTMLElement | null>(null)
const imgCard4 = ref<HTMLElement | null>(null)
const imgCard5 = ref<HTMLElement | null>(null)
const desc0 = ref<HTMLElement | null>(null)
const desc1 = ref<HTMLElement | null>(null)
const desc2 = ref<HTMLElement | null>(null)
const desc3 = ref<HTMLElement | null>(null)
const desc4 = ref<HTMLElement | null>(null)
const desc5 = ref<HTMLElement | null>(null)
const titlePartnersRef = ref<HTMLElement | null>(null)
const paragraphPartnersLeftRef = ref<HTMLElement | null>(null)
const paragraphPartnersRightRef = ref<HTMLElement | null>(null)
const imgParnershipLeftRef = ref<HTMLElement | null>(null)
const imgParnershipRightRef = ref<HTMLElement | null>(null)
const titleElementisRef = ref<HTMLElement | null>(null)
const paragraphElementisRef = ref<HTMLElement | null>(null)
const imgElementisLeftRef = ref<HTMLElement | null>(null)
const imgElementisRightRef = ref<HTMLElement | null>(null)
const titleDevelopmentRef = ref<HTMLElement | null>(null)
const paragraphDevelopmentRef = ref<HTMLElement | null>(null)
const imgDevelopmentLeftRef = ref<HTMLElement | null>(null)
const imgDevelopmentRightRef = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurPartners})`,
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

    const bgs: HTMLElement[] = [bg0.value, bg1.value, bg2.value, bg3.value, bg4.value, bg5.value].filter(Boolean) as HTMLElement[]
    const numbers: HTMLElement[] = [
        number0.value, number1.value, number2.value, number3.value, number4.value, number5.value
    ].filter(Boolean) as HTMLElement[]
    const titles: HTMLElement[] = [
        title0.value, title1.value, title2.value, title3.value, title4.value, title5.value
    ].filter(Boolean) as HTMLElement[]
    const imgCards: HTMLElement[] = [
        imgCard0.value, imgCard1.value, imgCard2.value, imgCard3.value, imgCard4.value, imgCard5.value
    ].filter(Boolean) as HTMLElement[]
    const descs: HTMLElement[] = [
        desc0.value, desc1.value, desc2.value, desc3.value, desc4.value, desc5.value
    ].filter(Boolean) as HTMLElement[]

    bgs.forEach((el, i) => {
        gsap.set(el, { opacity: i === 0 ? 1 : 0 })
    })

    numbers.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    titles.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    imgCards.forEach((el, i) => {
        gsap.set(el, { yPercent: i === 0 ? 0 : 100 })
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

        tl.to(imgCards[i], {
            yPercent: 0,
            duration: 0.6,
            ease: 'power2.out',
        }, i)

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

    gsap.fromTo(imgParnershipLeftRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgParnershipLeftRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    gsap.fromTo(imgParnershipRightRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgParnershipRightRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

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
                immediateRender: false,
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
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphElementisRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    gsap.fromTo(imgElementisLeftRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgElementisLeftRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    gsap.fromTo(imgElementisRightRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgElementisRightRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

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
                immediateRender: false,
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
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphDevelopmentRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    gsap.fromTo(imgDevelopmentLeftRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgDevelopmentLeftRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )

    gsap.fromTo(imgDevelopmentRightRef.value,
        { yPercent: 30, ease: 'none' },
        {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: imgDevelopmentRightRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        }
    )
})
</script>
