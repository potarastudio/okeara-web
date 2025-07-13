<template>
    <div :style="bannerStyle"
        class="bg-cover bg-no-repeat w-full h-[100dvh] flex flex-col items-start justify-between mt-[-2px] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]"
        style="background-position: left 10% top 0;">
        <div class="flex items-center gap-[10px] md:gap-[20px]">
            <img :src="List" alt="list">
            <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                Our Longevity Club
            </div>
        </div>
        <div class="text-[#EDF3F3] md:w-[40%] lg:w-[25%] md:ml-[80px]">
            <div class="text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]" style="text-edge: cap;">
                Welcome to <br>
                Longevity Club! <br>
                by Elementis
            </div>
            <div class="mt-[30px] text-[16px] md:text-[18px] leading-[26px]">
                We are dedicated to living our best lives, focusing on health and happiness together, and making each
                day special.
            </div>
            <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3] mt-[30px] md:mt-[60px] lg:mt-[80px]">
                <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                <img :src="ArrowTopRight" alt="arrowTopRight">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Background from '@/assets/images/LongevityClubBackground.png';

import List from '@/assets/icons/List.svg';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";

const bannerStyle = {
    backgroundImage: `url(${Background})`
}
</script>