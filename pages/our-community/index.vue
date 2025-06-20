<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[120vh] relative">
            <div class="absolute left-0 bottom-[80px] text-[#EDF3F3] text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        Our Our Longevity Club • Our Longevity Club • Our Community
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
                        Our Water
                    </div>
                </div>
                <div class="w-[50%]">
                    <div class="text-[#EDF3F3] text-[48px] font-light leading-[58px]">
                        Our Longevity Club is dedicated to living our best lives, focusing on health and happiness
                        together, and making each day special.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[64px] py-[120px]">
            <div class="w-full flex items-start gap-[24px] mt-[120px] flex-nowrap">
                <div class="w-[35%] h-[20%]">
                    <img :src="OurCommunity1" alt="OurCommunity1" class="w-full h-full object-cover">
                </div>
                <div class="w-[50%] ">
                    <img :src="OurCommunity2" alt="OurCommunity2" class="w-full h-full object-cover">
                </div>
                <div class="w-[35%] h-[20%]">
                    <img :src="OurCommunity3" alt="OurCommunity3" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-full flex items-start mt-[64px]">
                <div class="w-[35%]"></div>
                <div class="w-[50%] flex items-start">
                    <div class="w-[85%] flex">
                        <hr class="w-[50%] border border-[#EDF3F3]">
                        <hr class="w-[50%] border border-[#EDF3F3] opacity-20">
                    </div>
                    <div class="flex items-center gap-[40px] pl-[24px]">
                        <img :src="ArrowLeftWhite" alt="ArrowLeftWhite" class="cursor-pointer">
                        <img :src="ArrowRightWhite" alt="ArrowRightWhite" class="cursor-pointer">
                    </div>
                </div>
            </div>
            <div class="w-full flex items-start mt-[100px]">
                <div class="w-[35%]"></div>
                <div class="w-[50%] text-[#EDF3F3] text-[48px] font-light leading-[58px]">
                    Our partners, business associates, and health advocates share our vision and help make OKEARA
                    Community stronger.
                </div>
            </div>
            <div class="mt-[80px] w-full flex items-start">
                <div class="w-[35%]"></div>
                <div class="w-[65%] flex items-start gap-[50px]">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px] opacity-80">
                        Their skills and resources enhance our experience, creating a lively place where health and
                        wellness enthusiasts can thrive. Our partnerships are founded on shared values and goals. Health
                        advocates inspire us with their passion and knowledge about well-being.
                    </div>
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px] opacity-80">
                        Our business associates bring new ideas and products that fit into our personalized approach,
                        helping us grow and improve continuously. Together, we build a strong, supportive, and evolving
                        network.
                    </div>
                </div>
            </div>
        </div>
        <div :style="sectionBlcokStyle" class="bg-cover bg-no-repeat bg-center w-full h-screen" />
        <div class="w-full bg-[#EDF3F3] p-[174px]">
            <div class="w-full flex items-start gap-[15%]">
                <img :src="CommunityStructured1" alt="Community 1" class="w-[45%]">
                <img :src="CommunityStructured2" alt="Community 2" class="w-[30%] mt-[10%]">
            </div>
            <div class="w-full flex items-start justify-between mt-[120px]">
                <div class="text-[#274A5C] text-[48px] font-light leading-[58px] w-[50%]">
                    OKEARA structured hydrogen water shows our commitment to Wellness and Community.
                </div>
                <div class="text-[#274A5C] text-[18px] leading-[26px] w-[40%] opacity-77 mt-[120px]">
                    We enjoy every moment, celebrate our successes, and support each other to achieve optimal health. We welcome you to OKEARA community, where we live life to its fullest and use structured hydrogen water for a happier, healthier future.
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
