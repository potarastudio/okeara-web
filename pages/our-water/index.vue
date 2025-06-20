<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[120vh] relative">
            <div class="absolute left-0 bottom-[80px] text-[#EDF3F3] text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        OKEARA Water • OKEARA Water • OKEARA Water • Our Water
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] p-[64px] pb-0">
            <hr class="w-full border border-[#fff]">
            <div class="w-full flex items-start gap-[24px] mt-[120px]">
                <div class="flex items-center gap-[20px] w-[35%]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Sustainability
                    </div>
                </div>
                <div class="w-[60%]">
                    <div class="text-[#EDF3F3] text-[48px] font-light leading-[58px]">
                        For those who demand the best in hydration, OKEARA's structured hydrogen water is a
                        game-changer.
                    </div>
                    <div class="text-[#EDF3F3] text-[18px] leading-[26px] opacity-80 mt-[60px] w-[60%]">
                        Experience the rejuvenating benefits of hydrogen-enriched water free from impurities and
                        bacteria. Elevate your health with every sip.
                    </div>
                </div>
            </div>
        </div>
        <div :style="bgSafetyStyle" class="bg-cover bg-no-repeat bg-left w-full px-[64px] py-[120px]">
            <div class="w-full flex items-stretch">
                <div class="w-[50%] bg-[#EDF3F3] p-[40px] pr-0 flex flex-col items-start gap-[40px]">
                    <div class="text-[#1A4667] text-[52px] leading-[52px]">
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
                <div class="w-[50%] h-auto">
                    <img :src="BenefitOurWater" alt="BenefitOurWater" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-full flex items-start justify-between mt-[60px]">
                <div class="text-[#EDF3F3] text-[48px] font-light leading-[58px] w-[40%]">
                    Benefits of Structured Hydrogen Water
                </div>
                <div class="text-[#EDF3F3] text-[18px] leading-[26px] w-[30%]">
                    OKEARA structured hydrogen water offers a multitude of health benefits thanks to its high hydrogen
                    content:
                </div>
            </div>
        </div>
        <div :style="bgBenefitStyle" class="bg-cover bg-no-repeat bg-left w-full px-[64px] py-[120px]">
            <div class="w-full flex items-start justify-between">
                <div class="flex items-center gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#FFF] text-[18px] leading-[24px]">
                        Benefit
                    </div>
                </div>
                <div class="flex flex-col gap-[60px] w-[35%]">
                    <div class="text-[#fff] text-[48px] font-light leading-[58px]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#fff] text-[18px] leading-[26px] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
                <div class="text-[#fff] text-right text-[18px] leading-[24px]">
                    ( Keep Scrolling )
                </div>
            </div>
            <div class="w-full flex items-start justify-center mt-[100px]">
                <div :style="bgCardBenefitStyle"
                    class="bg-cover bg-no-repeat bg-center w-[50%] rotate-[-2deg] flex flex-col items-start gap-[156px]">
                    <div class="w-full flex items-start justify-between p-[40px]">
                        <div class="text-[#EDF3F3] text-[48px] leading-[58px]">
                            Powerful <br> Antioxidant
                        </div>
                        <div class="text-[#EDF3F3] text-[48px] leading-[58px]">
                            01
                        </div>
                    </div>
                    <div
                        class="text-[#EDF3F3] text-[18px] leading-[24px] backdrop-blur-[2px] bg-[linear-gradient(0deg,rgba(0,0,0,0.32),rgba(0,0,0,0))] p-[40px] h-[256px] flex items-center justify-center">
                        Hydrogen (H2) is the smallest molecule, allowing it to penetrate cell membranes and protect
                        mitochondria and DNA from oxidative stress. It neutralizes harmful free radicals, especially
                        hydroxyl radicals, effectively forming water and preventing damage
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full bg-[#EDF3F3] px-[64px] py-[120px]">
            <img :src="BgWave" alt="BgWave" class="absolute top-0 right-[15%]">
            <div class="w-full flex items-start justify-between">
                <div class="flex items-center gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col gap-[60px] w-[35%]">
                    <div class="text-[#203D4D] text-[48px] font-light leading-[58px]">
                        Get to Know About OKEARA Product
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[26px] opacity-77">
                        dedicated to redefining everyday hydration with products that promote holistic health and
                        wellbeing. OKEARA offers two signature water products
                    </div>
                </div>
                <div class="flex items-center gap-[40px]">
                    <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer">
                    <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer">
                </div>
            </div>
            <div class="w-full flex flex-col items-start gap-[100px] mt-[100px]">
                <div class="w-full bg-[#E4EDED] flex items-stretch">
                    <div class="w-[50%] p-[40px] flex flex-col items-center justify-center gap-[60px]">
                        <div class="w-full text-[#203D4D] text-[26px] text-left">
                            OKEARA Blue
                        </div>
                        <img :src="OkearaWater500ml" alt="OkearaWater500ml" class="w-[30%]">
                    </div>
                    <div class="relative h-auto w-[50%] flex flex-col">
                        <div class="w-full pl-[60px] pb-[60px] pr-[10px] bg-[#EDF3F3] text-[#203D4D] text-[18px] leading-[26px]">
                            Experience the power of structured H₂O in every sip. OKEARA Water 500ml is infused with
                            molecular hydrogen and energetically revitalized using the Bovis scale method for delivering
                            low surface tension for faster absorption and deeper cellular hydration. This dynamic
                            formula supports your body’s natural regeneration, boosts vitality, and promotes inner
                            balance
                        </div>
                        <div class="pr-[16px] pl-[16px] pb-[16px] bg-[#EDF3F3] inline-block ml-auto">
                            <img :src="Wave" alt="Wave">
                        </div>
                        <div class="text-[#203D4D] text-[18px] absolute right-[40px] bottom-[40px]">
                            500ml (16.9fl 0z)
                        </div>
                    </div>
                </div>
                <div class="w-full bg-[#E4EDED] flex items-stretch">
                    <div class="w-[50%] p-[40px] flex flex-col items-center justify-center gap-[60px]">
                        <div class="w-full text-[#203D4D] text-[26px] text-left">
                            OKEARA Blue
                        </div>
                        <img :src="OkearaWater12l" alt="OkearaWater12l" class="w-[60%]">
                    </div>
                    <div class="relative h-auto w-[50%] flex flex-col">
                        <div class="w-full pl-[60px] pb-[60px] pr-[10px] bg-[#EDF3F3] text-[#203D4D] text-[18px] leading-[26px]">
                            Experience the power of structured H₂O in every sip. OKEARA Water 500ml is infused with
                            molecular hydrogen and energetically revitalized using the Bovis scale method for delivering
                            low surface tension for faster absorption and deeper cellular hydration. This dynamic
                            formula supports your body’s natural regeneration, boosts vitality, and promotes inner
                            balance
                        </div>
                        <div class="pr-[16px] pl-[16px] pb-[16px] bg-[#EDF3F3] inline-block ml-auto">
                            <img :src="Wave" alt="Wave">
                        </div>
                        <div class="text-[#203D4D] text-[18px] absolute right-[40px] bottom-[40px]">
                            12 liter (405.768fl 0z)
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
