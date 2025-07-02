<!-- eslint-disable vue/html-self-closing -->
<template>
    <div
        class="w-full px-[24px] py-[40px] md:px-[40px] lg:px-[64px] lg:py-[100px] bg-[#203D4D] flex flex-col items-start justify-between gap-[40px] lg:gap-[100px]">
        <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[80px] md:gap-[20%]">
            <div class="w-full lg:w-[30%]">
                <img :src="Logo" alt="logo" class="hidden lg:inline lg:w-[30%]" />
                <div class="w-full mt-[100px]">
                    <div
                        class="text-[#EDF3F3] text-[18px] md:text-[24px] leading-[25px] md:leading-[36px] font-light md:font-normal">
                        Join OKEARA Longevity Club today and start your journey to ultimate Wellness with an exclusive
                        reward
                    </div>
                    <div
                        class="mt-[80px] md:mt-[80px] w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                        <div class="text-[#EDF3F3] text-[16px] md:text-[20px]">Enter email</div>
                        <img :src="ArrowTopRight" alt="arrowTopRight" />
                    </div>
                    <div class="w-full flex items-center justify-between mt-[40px] lg:mt-[100px]">
                        <img :src="Instagram" alt="instagram" />
                        <img :src="Facebook" alt="facebook" />
                        <img :src="TikTok" alt="tiktok" />
                        <img :src="Youtube" alt="youtube" />
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-[30%] flex items-start justify-between">
                <div class="flex flex-col items-start gap-[40px]">
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Story
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Water
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Mission
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Community
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Partners
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Our Certificate
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[32px]">
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        FAQ
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                    <div
                        class="nav-link relative text-white text-[18px] md:text-[24px] font-light leading-[28px] cursor-pointer">
                        Reviews
                        <span
                            class="underline absolute bottom-[-5px] left-0 h-[1px] w-full scale-x-0 origin-left"></span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[40px] border-t border-[#EDF3F3] gap-[100px] md:gap-auto">
            <div class="text-white text-[16px] md:text-[18px] font-light leading-[24px]">© 2025 OKEARA. All Rights
                Reserved</div>
            <div
                class="flex flex-col md:flex-row items-start gap-[4px] md:gap-[20px] text-white text-[16px] md:text-[18px] font-light leading-[24px]">
                <span>Terms & Conditions</span>
                <div class="hidden md:inline">|</div>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

// Import your assets (replace with your real path)
import Logo from '@/assets/images/logo.svg'
import ArrowTopRight from '@/assets/icons/ArrowTopRight.svg'
import Instagram from '@/assets/icons/Instagram.svg'
import Facebook from '@/assets/icons/Facebook.svg'
import TikTok from '@/assets/icons/TikTok.svg'
import Youtube from '@/assets/icons/Youtube.svg'

onMounted(() => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))

    navLinks.forEach((linkEl) => {
        const underline = linkEl.querySelector('.underline') as HTMLElement
        if (!underline) return

        gsap.set(underline, {
            scaleX: 0,
            transformOrigin: 'left'
        })

        linkEl.addEventListener('mouseenter', () => {
            const color = getComputedStyle(linkEl).color

            gsap.killTweensOf(underline)
            gsap.to(underline, {
                scaleX: 1,
                duration: 0.4,
                ease: 'power2.out',
                backgroundColor: color,
                transformOrigin: 'left'
            })
        })

        linkEl.addEventListener('mouseleave', () => {
            gsap.killTweensOf(underline)
            gsap.to(underline, {
                scaleX: 0,
                duration: 0.3,
                ease: 'power2.in',
                transformOrigin: 'right'
            })
        })

        linkEl.addEventListener('click', () => {
            gsap.killTweensOf(underline)
            gsap.to(underline, {
                scaleX: 0,
                duration: 0.1,
                ease: 'power2.in',
                transformOrigin: 'right'
            })
        })
    })
})
</script>

<style scoped>
.underline {
    pointer-events: none;
    background-color: white;
}
</style>
