<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat w-full h-[100dvh] relative z-10"
            style="background-position: left 50% top 40%;">
            <div class="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none"
                style="background: linear-gradient(0deg, rgba(0,0,0,0.85) 1.62%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.00) 80%);">
                <div ref="textContainerRef"
                    class="absolute left-0 bottom-[20px] md:bottom-[40px] lg:bottom-[100px] px-[24px] md:px-[40px] lg:px-[64px] w-full flex flex-col md:flex-row items-stretch justify-between gap-[20px] md:gap-auto">
                    <div class="flex flex-col items-start justify-between">
                        <div class="text-[32px] md:text-[40px] lg:text-[64px] leading-[40px] lg:leading-[72px] font-light"
                            style="letter-spacing: -1.92px;">
                            Certificate for<br>
                            OKEARA Water
                        </div>
                        <button
                            class="hidden h-[48px] px-[16px] border border-[#fff] rounded-full md:flex items-center justify-center gap-[20px] cursor-pointer">
                            Shop Now
                            <img :src="ArrowRight" alt="ArrowDown">
                        </button>
                    </div>
                    <div class="flex flex-col items-start gap-[20px] md:gap-[120px] md:w-[35%]">
                        <div class="text-[16px] md:text-[20px] leading-[24px] md:leading-[26px] opacity-80"
                            style="letter-spacing: -0.2px;">
                            Join OKEARA Longevity Club today and start your journey to ultimate Wellness with an
                            exclusive reward
                        </div>
                        <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                            <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                            <img :src="ArrowTopRight" alt="arrowTopRight">
                        </div>
                    </div>
                    <div class="md:hidden">
                        <button
                            class="h-[48px] px-[16px] border border-[#fff] rounded-full flex items-center justify-center gap-[20px] cursor-pointer">
                            Shop Now
                            <img :src="ArrowRight" alt="ArrowDown">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full relative bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[120px] flex flex-col gap-[80px]">
            <img :src="BgWave" alt="BgWave" class="hidden lg:block absolute top-0 left-[15%] z-1">
            <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[42px] lg:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Certificate
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-end gap-[24px] md:gap-[90px] lg:w-[65%]">
                    <div
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[41.6px] md:leading-[58px] mt-[-10px] w-[85%] md:w-[45%]">
                        Let’s See Research to Support OKEARA Water
                    </div>
                    <div
                        class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18.2px] md:leading-[24px] md:w-[40%]">
                        OKEARA Water isn’t just a wellness trend it’s backed by scientific insights and global research.
                        Studies on structured water and molecular hydrogen highlight their powerful roles
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
import Banner from '@/assets/images/BannerCertificate.png';
import LongevityClub from '~/page-section/LongevityClub.vue';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import ArrowRight from "@/assets/icons/ArrowRightWhite.svg";
import BgWave from '@/assets/images/WaveVertical.svg'
import ListBlack from '@/assets/icons/ListBlack.svg';

onMounted(async () => {
    if (import.meta.client) {
        const gsapModule = await import('gsap')
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
        gsapModule.gsap.registerPlugin(ScrollTrigger)
    }
})

const bannerRef = ref<HTMLElement | null>(null)
const textContainerRef = ref<HTMLElement | null>(null)


const bannerStyle = {
    backgroundImage: `url(${Banner})`
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

<style scoped>
img {
    will-change: transform;
}
</style>
