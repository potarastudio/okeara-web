<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative"
            style="background-position: left 50% top 22%;">
            <div class="w-full h-[50dvh] absolute left-0 bottom-0"
                style="background: linear-gradient(0deg, #203D4D 0%, rgba(32, 61, 77, 0.00) 100%)" />
            <div
                class="absolute left-0 bottom-[40px] md:bottom-[80px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[96px] md:text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        Our Our Longevity Club • Our Longevity Club • Our Community
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
                    <div
                        class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] font-light lg:w-[75%]">
                        Our Longevity Club is dedicated to living our best lives, focusing on health and happiness
                        together, and making each day special.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] pb-[40px] md:p-[40px] lg:px-[64px] lg:pb-[100px]">
            <div class="w-full flex items-start gap-[28px] flex-nowrap">
                <div class="w-[35%] h-[20%]">
                    <img :src="OurCommunity1" alt="OurCommunity1" class="w-full h-full object-cover">
                </div>
                <div class="w-[50%] ">
                    <img :src="OurCommunity2" alt="OurCommunity2" class="w-full h-full object-cover">
                </div>
                <div class="hidden md:inline-block w-[35%] h-[20%]">
                    <img :src="OurCommunity3" alt="OurCommunity3" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-full flex items-start mt-[52px] md:mt-[100px]">
                <div class="hidden md:block w-[35%]"></div>
                <div class="md:w-[60%] flex flex-col gap-[52px] md:gap-[80px]">
                    <div class="hidden md:flex items-center">
                        <div class="w-[85%] flex">
                            <hr class="w-[50%] border border-[#EDF3F3]">
                            <hr class="w-[50%] border border-[#EDF3F3] opacity-20">
                        </div>
                        <div class="flex items-center gap-[40px] pl-[24px]">
                            <img :src="ArrowLeftWhite" alt="ArrowLeftWhite" class="cursor-pointer">
                            <img :src="ArrowRightWhite" alt="ArrowRightWhite" class="cursor-pointer">
                        </div>

                    </div>
                    <div
                        class="lg:w-[70%] text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Our partners, business associates, and health advocates share our vision and help make OKEARA
                        Community stronger.
                    </div>
                    <div class="w-[90%] ml-[10%] md:ml-0 md:w-full flex flex-col md:flex-row items-start gap-[50px]">
                        <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-80">
                            Their skills and resources enhance our experience, creating a lively place where health and
                            wellness enthusiasts can thrive. Our partnerships are founded on shared values and goals.
                            Health
                            advocates inspire us with their passion and knowledge about well-being.
                        </div>
                        <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-80">
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
        <div :style="sectionBlcokStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh]" />
        <div
            class="w-full bg-[#EDF3F3] flex flex-col md:flex-row items-stretch justify-between gap-[12px] px-[24px] py-[40px] md:p-[40px] lg:px-[180px] lg:py-[120px]">
            <div class="flex flex-col gap-[40px] gap-[150px] w-full md:w-[50%]">
                <img :src="CommunityStructured1" alt="CommunityStructured1" class="w-full order-2 md:order-1">
                <div
                    class="text-[#274A5C] text-[32px] text-[48px] font-light leading-[36px] leading-[58px] order-1 md:order-2 md:mb-[275px]">
                    OKEARA structured hydrogen water shows our commitment to Wellness and Community.
                </div>
            </div>
            <div
                class="flex flex-col items-start justify-between gap-[40px] md:gap-auto w-full md:w-[40%] md:pt-[60px] md:pb-[100px]">
                <img :src="CommunityStructured2" alt="CommunityStructured2" class="w-full">
                <div
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
import BannerOurCommunity from '@/assets/images/BannerOurCommunity.png'
import OurCommunity1 from '@/assets/images/ourcommunity-1.png'
import OurCommunity2 from '@/assets/images/ourcommunity-3.png'
import OurCommunity3 from '@/assets/images/ourcommunity-2.png'
import OurCommunityBlock from '@/assets/images/OurCommunityBlock.png'
import CommunityStructured1 from '@/assets/images/CommunityStructured1.png'
import CommunityStructured2 from '@/assets/images/CommunityStructured2.png'
import List from '@/assets/icons/List.svg'
import ArrowLeftWhite from '@/assets/icons/ArrowLeftWhite.svg'
import ArrowRightWhite from '@/assets/icons/ArrowRightWhite.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const marquee = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurCommunity})`,
}

const sectionBlcokStyle = {
    backgroundImage: `url(${OurCommunityBlock})`,
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
