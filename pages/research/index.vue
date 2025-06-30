<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat w-full h-[100dvh] relative"
            style="background-position: left 50% top 22%;">
            <div class="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none"
                style="background: linear-gradient(0deg, rgba(0,0,0,0.85) 1.62%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.00) 80%);">
                <div ref="textContainerRef"
                    class="absolute left-0 bottom-[20px] md:bottom-[40px] lg:bottom-[100px] px-[24px] md:px-[40px] lg:px-[64px] w-full flex flex-col md:flex-row items-start justify-between gap-[20px] md:gap-auto">
                    <div class="text-[40px] md:text-[64px] leading-[40px] md:leading-[72px] font-light"
                        style="letter-spacing: -1.92px;">
                        Research for <br>
                        OKEARA Water
                    </div>
                    <div class="flex flex-col items-start gap-[20px] md:gap-[52px] md:gap-[70px] md:w-[35%]">
                        <div class="text-[16px] md:text-[20px] leading-[24px] md:leading-[26px] opacity-80"
                            style="letter-spacing: -0.2px;">
                            You perform under pressure from mentally, physically, emotionally. But your system isn't
                            built
                            for constant strain. OKEARA is more than purified water. It’s engineered to help your
                            body recover faster, think clearer, and function better
                        </div>
                        <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                            <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                            <img :src="ArrowTopRight" alt="arrowTopRight">
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
import ScrollTrigger from 'gsap/ScrollTrigger'
import Banner from '@/assets/images/BannerHome.png';
import LongevityClub from '~/page-section/LongevityClub.vue';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";

gsap.registerPlugin(ScrollTrigger)

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
