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
                        Sustainability
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
            class="bg-cover bg-no-repeat bg-left w-full px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
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
                        :key="item.desc + index" class="flex flex-col items-start gap-[20px]">
                        <div class="text-[#1A4667] text-[18px]" v-html="item.title" />
                        <div class="text-[#628DAD] text-[18px]">
                            {{ item.desc }}
                        </div>
                    </div>
                </div>
                <div class="order-1 md:order-2 md:w-[50%] h-auto">
                    <img :src="indicator === 'water' ? OkearaIndicator.images : OkearaBlueIndicator.images"
                        alt="BenefitOurWater" class="w-full h-full object-cover">
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
        <div :style="bgBenefitStyle"
            class="bg-cover bg-no-repeat bg-left w-full px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#FFF] text-[16px] md:text-[18px] leading-[24px]">
                        Benefit
                    </div>
                </div>
                <div class="flex flex-col gap-[24px] md:gap-[60px] md:w-[35%]">
                    <div class="text-[#fff] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#fff] text-[16px] md:text-[18px] leading-[26px] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
                <div class="text-[#fff] text-right text-[18px] leading-[24px]">
                    ( Keep Scrolling )
                </div>
            </div>
            <div class="w-full flex items-start justify-center mt-[42px] md:mt-[100px]">
                <div :style="bgCardBenefitStyle"
                    class="bg-cover bg-no-repeat bg-center w-[90%] md:w-[60%] lg:w-[50%] flex flex-col items-start gap-[156px]">
                    <div
                        class="w-full flex flex-col md:flex-row items-start justify-between gap-[20px] md:gap-auto p-[40px]">
                        <div
                            class="order-2 md:order-1 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px]">
                            Powerful <br> Antioxidant
                        </div>
                        <div
                            class="order-1 md:order-2 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px]">
                            01
                        </div>
                    </div>
                    <div
                        class="text-[#EDF3F3] text-[16px] text-[18px] leading-[24px] backdrop-blur-[2px] bg-[linear-gradient(0deg,rgba(0,0,0,0.32),rgba(0,0,0,0))] p-[40px] h-[350px] md:h-[256px] flex items-center justify-center">
                        Hydrogen (H2) is the smallest molecule, allowing it to penetrate cell membranes and protect
                        mitochondria and DNA from oxidative stress. It neutralizes harmful free radicals, especially
                        hydroxyl radicals, effectively forming water and preventing damage
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
                <div class="flex items-center gap-[40px] w-full md:w-auto justify-end">
                    <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer transition"
                        :class="{ 'pointer-events-none opacity-20': indicatorProduct === 'water' }"
                        @click="prevIndicatorProduct">
                    <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer transition"
                        :class="{ 'pointer-events-none opacity-20': indicatorProduct === 'blue' }"
                        @click="nextIndicatorProduct">
                </div>
            </div>
            <div class="w-full flex flex-col md:flex-row items-stretch gap-[60px] mt-[100px]">
                <div ref="card500ml"
                    class="w-full relative md:w-[50%] bg-[#E4EDED] p-[40px] flex flex-col items-center justify-center gap-[60px] z-[20]">
                    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[16px]">
                        <div class="flex flex-col items-start gap-[16px]">
                            <div class="text-[#203D4D] text-[26px]">{{ indicatorProduct === 'water' ? 'OKEARA Water' :
                                'OKEARA Blue' }}</div>
                            <div class="text-[#203D4D] text-[18px] opacity-50">500ml (16.9fl 0z)</div>
                        </div>
                        <div class="px-[12px] py-[8px] bg-white rounded-full text-black">
                            Preview 3D
                        </div>
                    </div>
                    <img :src="indicatorProduct === 'water' ? OkearaWater500ml : OkearaBlue500ml" alt="OkearaWater500ml" class="w-[50%] md:w-[30%]">
                    <div ref="description500ml"
                        class="w-full bg-white p-[24px] absolute left-0 bottom-0 text-black text-[12px] md:text-[16px] leading-[18px] md:leading-[26px]">
                        {{ indicatorProduct === 'water' ? 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally. It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' : 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally. It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' }}
                    </div>
                </div>
                <div ref="card12l"
                    class="w-full relative md:w-[50%] bg-[#E4EDED] p-[40px] flex flex-col items-center justify-center gap-[60px] z-[20]">
                    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[16px]">
                        <div class="flex flex-col items-start gap-[16px]">
                            <div class="text-[#203D4D] text-[26px]">{{ indicatorProduct === 'water' ? 'OKEARA Water' :
                                'OKEARA Blue' }}</div>
                            <div class="text-[#203D4D] text-[18px] opacity-50">12 liter (405.768fl 0z)</div>
                        </div>
                        <div class="px-[12px] py-[8px] bg-white rounded-full text-black">
                            Preview 3D
                        </div>
                    </div>
                    <img :src="indicatorProduct === 'water' ? OkearaWater12l : OkearaBlue12l" alt="OkearaWater12l" class="w-[50%] md:w-[80%]">
                    <div ref="description12l"
                        class="w-full bg-white p-[24px] absolute left-0 bottom-0 text-black text-[12px] md:text-[16px] leading-[18px] md:leading-[26px]">
                        {{ indicatorProduct === 'water' ? 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally. It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' : 'OKEARA is ultralight hydrogen water in a 500ml bottle, designed to hydrate your body deeply and naturally. It helps boost energy, support recovery, and reduce inflammation it’s giving you powerful benefits in every sip.' }}
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
import BannerOurWater from '@/assets/images/BannerOurWater.png'
import BgSafety from '@/assets/images/BgSafety.png'
import BenefitOurWater from '@/assets/images/BenefitOurWater.png'
import BgBenefitOurWater1 from '@/assets/images/BgBenefitOurWater1.png'
import BenefitCard1 from '@/assets/images/benefitcard-1.png'
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
const titleSustainabilityRef = ref<HTMLElement | null>(null)
const paragraphProductRef = ref<HTMLElement | null>(null)
const titleProductRef = ref<HTMLElement | null>(null)
const paragraphSustainabilityRef = ref<HTMLElement | null>(null)
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

const bgBenefitStyle = {
    backgroundImage: `url(${BgBenefitOurWater1})`
}

const bgCardBenefitStyle = {
    backgroundImage: `url(${BenefitCard1})`
}

const indicator = ref('water')
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
            desc: '5 - 15 ppm (Premium quality)'
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
    images: BenefitOurWater
})

const OkearaBlueIndicator = ref({
    title: 'OKEARA Blue Indicators',
    content: [
        {
            title: 'H<sub class="text-sm align-sub">2</sub> (Hydrogen Content)',
            desc: '800 - 1000 ppb'
        },
        {
            title: 'TDS (Amount of Impurities in Water)',
            desc: '5 - 15 ppm (Premium quality)'
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
    images: BenefitOurWater
})

const nextIndicator = () => {
    indicator.value = "blue"
}

const prevIndicator = () => {
    indicator.value = "water"
}

const nextIndicatorProduct = () => {
    indicatorProduct.value = "blue"
}

const prevIndicatorProduct = () => {
    indicatorProduct.value = "water"
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
})

onMounted(() => {
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
})

onMounted(() => {
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
})

onMounted(() => {
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
})

onBeforeUnmount(() => {
    if (!isMobile() && card12l.value) {
        card12l.value.removeEventListener('mouseenter', hoverIn)
        card12l.value.removeEventListener('mouseleave', hoverOut)
    }
})

</script>