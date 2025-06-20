<template>
    <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[120vh] px-[54px] py-[76px]">
        <div class="flex items-center gap-[20px]">
            <img :src="List" alt="list">
            <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                Our Longevity Club
            </div>
        </div>
        <div class="text-[#EDF3F3] mt-[15%] ml-[110px] w-[25%]">
            <div class="text-[48px] font-light leading-[58px]" style="text-edge: cap;">
                Welcome to <br>
                OKEARA <br>
                Longevity Club!
            </div>
            <div class="mt-[30px] text-[18px] leading-[26px]">
                We are dedicated to living our best lives, focusing on health and happiness together, and making each
                day special.
            </div>
            <div class="flex items-center gap-[8px] mt-[60px] cursor-pointer">
                <div class="w-[8px] h-[8px] rounded-full border border-[#EDF3F3]"/>
                <div class="pb-[2px] border-b border-[#EDF3F3]">Learn More</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Background from '@/assets/images/LongevityClubBackground.png';

import List from '@/assets/icons/List.svg';

const bannerStyle = {
    backgroundImage: `url(${Background})`
}
</script>