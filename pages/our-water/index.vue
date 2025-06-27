<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-screen relative"
            style="background-position: left 50% top 22%;">
            <div class="w-full h-[50vh] absolute left-0 bottom-0"
                style="background: linear-gradient(0deg, #203D4D 0%, rgba(32, 61, 77, 0.00) 100%)" />
            <div
                class="absolute left-0 bottom-[40px] md:bottom-[80px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[96px] md:text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        OKEARA Water • OKEARA Water • OKEARA Water • Our Water
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
                <div class="flex flex-col items-start gap-[24px] lg:gap-[80px] md:w-[60%]">
                    <div
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] lg:w-[75%]">
                        For those who demand the best in hydration, OKEARA's structured hydrogen water is a
                        game-changer.
                    </div>
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] opacity-80 lg:w-[75%]">
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
                    <div class="text-[#1A4667] text-[32px] md:text-[52px] leading-[36px] md:leading-[52px]">
                        OKEARA Indicators
                    </div>
                    <hr class="w-full border border-[#A5C2C2]">
                    <div class="flex flex-col items-start gap-[24px]">
                        <div class="text-[#1A4667] text-[26px]">
                            H<sub class="text-sm align-sub">2</sub> (Hydrogen Content)
                        </div>
                        <div class="text-[#628DAD] text-[26px]">
                            800 - 1000 ppb
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-[24px]">
                        <div class="text-[#1A4667] text-[26px]">
                            TDS (Amount of Impurities in Water)
                        </div>
                        <div class="text-[#628DAD] text-[26px]">
                            5 - 15 ppm (Premium quality)
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-[24px]">
                        <div class="text-[#1A4667] text-[26px]">
                            pH (Acidity Level)
                        </div>
                        <div class="text-[#628DAD] text-[26px]">
                            6.5 - 7.5 (Optimal softness)
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-[24px]">
                        <div class="text-[#1A4667] text-[26px]">
                            ORP (Oxidation - Reduction Potential)
                        </div>
                        <div class="text-[#628DAD] text-[26px]">
                            -300 to -450 mV (Energy - rich)
                        </div>
                    </div>
                </div>
                <div class="order-1 md:order-2 md:w-[50%] h-auto">
                    <img :src="BenefitOurWater" alt="BenefitOurWater" class="w-full h-full object-cover">
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
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="z-[999] flex flex-col gap-[24px] md:gap-[60px] md:w-[35%]">
                    <div class="text-[#203D4D] text-[48px] font-light leading-[58px]">
                        Get to Know About OKEARA Product
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[26px] opacity-77">
                        dedicated to redefining everyday hydration with products that promote holistic health and
                        wellbeing. OKEARA offers two signature water products
                    </div>
                </div>
                <div class="flex items-center gap-[40px] w-full md:w-auto justify-end">
                    <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer">
                    <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer">
                </div>
            </div>
            <div class="w-full flex flex-col items-start gap-[100px] mt-[100px]">
                <div class="w-full  flex flex-col lg:flex-row items-stretch">
                    <div class="lg:w-[50%] bg-[#E4EDED] p-[40px] flex flex-col items-center justify-center gap-[60px]">
                        <div class="w-full text-[#203D4D] text-[26px] text-center lg:text-left">
                            OKEARA Blue
                        </div>
                        <img :src="OkearaWater500ml" alt="OkearaWater500ml" class="w-[50%] md:w-[30%]">
                        <div class="text-[#203D4D] text-[18px] opacity-50 lg:hidden">
                            500ml (16.9fl 0z)
                        </div>
                    </div>
                    <div
                        class="lg:hidden bg-[#E4EDED] mt-[24px] p-[40px] flex flex-col items-center justify-center gap-[60px]">
                        <div class="w-full text-[#203D4D] text-[26px] text-center lg:text-left">
                            OKEARA Blue
                        </div>
                        <img :src="OkearaWater12l" alt="OkearaWater12l" class="w-[50%] md:w-[30%]">
                        <div class="text-[#203D4D] text-[18px] opacity-50 lg:hidden">
                            12 liter (405.768fl 0z)
                        </div>
                    </div>
                    <div class="relative lg:bg-[#E4EDED] h-auto lg:w-[50%] flex flex-col">
                        <div
                            class="w-full pt-[24px] lg:pt-0 lg:pl-[60px] lg:pb-[60px] lg:pr-[10px] bg-[#EDF3F3] text-[#203D4D] text-[18px] leading-[26px] opacity-77 lg:opacity-100">
                            Experience the power of structured H₂O in every sip. OKEARA Water 500ml is infused with
                            molecular hydrogen and energetically revitalized using the Bovis scale method for delivering
                            low surface tension for faster absorption and deeper cellular hydration. This dynamic
                            formula supports your body’s natural regeneration, boosts vitality, and promotes inner
                            balance
                        </div>
                        <div class="hidden pr-[16px] pl-[16px] pb-[16px] bg-[#EDF3F3] lg:inline-block ml-auto">
                            <img :src="Wave" alt="Wave">
                        </div>
                        <div class="hidden lg:block w-[35%] ml-[10%] mt-[-5%] opacity-50">
                            <img :src="OkearaWater12l" alt="OkearaWater12l" >
                        </div>
                        <div
                            class="hidden lg:inline-block text-[#203D4D] text-[18px] absolute right-[40px] bottom-[40px]">
                            500ml (16.9fl 0z)
                        </div>
                    </div>
                </div>
            </div>
            <img :src="BgWave" alt="BgWave" class="absolute top-0 right-[-20%] md:right-[15%]">
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
import OkearaWater12l from '@/assets/images/OkearaWater12l.png'
import Wave from '@/assets/images/wave.svg'
import BgWave from '@/assets/images/BgWave.svg'
import List from '@/assets/icons/List.svg'
import ListBlack from '@/assets/icons/ListBlack.svg'
import ArrowLeft from '@/assets/icons/ArrowLeft.svg'
import ArrowRight from '@/assets/icons/ArrowRight.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const marquee = ref<HTMLElement | null>(null)

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
