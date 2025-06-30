<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative">
            <div class="absolute left-0 bottom-[120px] px-[64px] w-full flex items-stretch justify-between">
                <div class="flex flex-col items-start justify-between">
                    <div class="text-[60px] leading-[72px] font-light" style="letter-spacing: -1.92px;">
                        Let’s Buy OKEARA <br>
                        Hydrogen Water
                    </div>
                    <button
                        class="h-[48px] px-[16px] border border-[#fff] rounded-full flex items-center justify-center gap-[20px] cursor-pointer">
                        Shop Now
                        <img :src="ArrowDown" alt="ArrowDown">
                    </button>
                </div>
                <div class="flex flex-col items-start gap-[100px] w-[30%]">
                    <div class="text-[20px] leading-[26px]" style="letter-spacing: -0.2px;">
                        Join OKEARA Longevity Club today and start your journey to ultimate Wellness with an exclusive
                        reward
                    </div>
                    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                        <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                        <img :src="ArrowTopRight" alt="arrowTopRight">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full relative bg-[#EDF3F3] px-[64px] py-[120px] flex flex-col gap-[80px]">
            <img :src="BgWave" alt="BgWave" class="absolute top-0 left-[15%]">
            <div class="w-full flex items-start justify-between">
                <div class="flex items-center gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex items-start gap-[90px] w-[65%]">
                    <div class="text-[#203D4D] text-[48px] font-light leading-[58px] mt-[-10px] w-[40%]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] w-[50%]">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature
                        and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
            </div>
            <div class="w-full flex items-start self-stretch gap-[40px]">
                <div class="w-[45%] bg-[#E4EDED] relative">
                    <div :class="[
                        'px-[12px] py-[8px] bg-white rounded-full text-black absolute left-[40px] top-[60px]',
                        activeIndex === 0 ? 'opacity-100' : 'opacity-0'
                    ]">
                        Preview 3D
                    </div>
                    <div class="w-full flex items-center justify-center self-stretch px-[40px] py-[60px]">
                        <div class="flex flex-col justify-end items-center gap-[52px]">
                            <img :src="OkearaWater500ml" alt="Okeara Water 500ml" :class="[
                                'h-[500px]',
                                activeIndex === 0 ? 'opacity-100' : 'opacity-50'
                            ]">
                            <div :class="[
                                'flex flex-col items-center gap-[32px]',
                                activeIndex === 0 ? 'opacity-100' : 'opacity-0'
                            ]">
                                <div class="flex flex-col items-center gap-[16px]">
                                    <div class="text-[#203D4D] text-[26px] leading-[26px]">
                                        OKEARA Water
                                    </div>
                                    <div class="text-[#203D4D] text-[18px] opacity-50">
                                        500ml (16.9fl 0z)
                                    </div>
                                </div>
                                <div class="flex items-center gap-[24px]">
                                    <button
                                        class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] cursor-pointer">
                                        Buy Now
                                        <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                    </button>
                                    <button
                                        class="bg-[#EDF3F3] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#203D4D] cursor-pointer">
                                        Add to Cart
                                        <img :src="CartBlue" alt="CartBlue" class="w-[16px]">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[45%] bg-[#E4EDED] relative">
                    <div :class="[
                        'px-[12px] py-[8px] bg-white rounded-full text-black absolute left-[40px] top-[60px]',
                        activeIndex === 1 ? 'opacity-100' : 'opacity-0'
                    ]">
                        Preview 3D
                    </div>
                    <div class="w-full flex items-center justify-center self-stretch px-[40px] py-[60px]">
                        <div class="flex flex-col justify-end items-center gap-[52px]">
                            <img :src="OkearaWater12l" alt="Okeara Water 12 l" :class="[
                                'h-[500px]',
                                activeIndex === 1 ? 'opacity-100' : 'opacity-50'
                            ]">
                            <div :class="[
                                'flex flex-col items-center gap-[32px]',
                                activeIndex === 1 ? 'opacity-100' : 'opacity-0'
                            ]">
                                <div class="flex flex-col items-center gap-[16px]">
                                    <div class="text-[#203D4D] text-[26px] leading-[26px]">
                                        OKEARA Water
                                    </div>
                                    <div class="text-[#203D4D] text-[18px] opacity-50">
                                        12 liter (405.768fl 0z)
                                    </div>
                                </div>
                                <div class="flex items-center gap-[24px]">
                                    <button
                                        class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] cursor-pointer">
                                        Buy Now
                                        <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                    </button>
                                    <button
                                        class="bg-[#EDF3F3] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#203D4D] cursor-pointer">
                                        Add to Cart
                                        <img :src="CartBlue" alt="CartBlue" class="w-[16px]">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center gap-[32px] mt-[100px]">
                <div class="w-[90%] flex items-center gap-[32px]">
                    <hr class="w-[20%] border border-[#203D4D]">
                    <hr class="w-[20%] border border-[#C4CFD2]">
                    <hr class="w-[20%] border border-[#C4CFD2]">
                    <hr class="w-[20%] border border-[#C4CFD2]">
                    <hr class="w-[20%] border border-[#C4CFD2]">
                </div>
                <div class="flex items-center gap-[32px] w-[10%]">
                    <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer">
                    <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer">
                </div>
            </div>
        </div>
        <LongevityClub />
    </div>
</template>

<script setup lang="ts">
import Banner from '@/assets/images/BannerShop.png';
import OkearaWater500ml from '@/assets/images/OkearaWater500ml.png';
import OkearaWater12l from '@/assets/images/OkearaWater12l.png';
import BgWave from '@/assets/images/WaveVertical.svg'
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import ListBlack from '@/assets/icons/ListBlack.svg';
import Dollar from '@/assets/icons/Dollar.svg';
import CartBlue from '@/assets/icons/CartBlue.svg';

import LongevityClub from '~/page-section/LongevityClub.vue';

const activeIndex = ref(0)

const bannerStyle = {
    backgroundImage: `url(${Banner})`
}
</script>