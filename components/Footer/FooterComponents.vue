<template>
    <div class="w-full p-[20px] md:p-[40px] lg:p-[64px] pt-[120px] bg-[#203D4D] flex flex-col items-start justify-between gap-[20px] lg:gap-[175px]">
        <div class="w-full flex items-start justify-between self-stretch">
            <img :src="logo" alt="logo" class="hidden lg:inline">
            <div class="w-full lg:w-[40%]">
                <div class="text-[#EDF3F3] text-[20px] md:text-[26px] leading-[25px] md:leading-[36px] font-light md:font-normal">
                    Join OKEARA Longevity Club today and start your journey to ultimate Wellness with an exclusive
                    reward
                </div>
                <div class="mt-[60px] md:mt-[80px] w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[20px]">Enter email</div>
                    <img :src="arrowTopRight" alt="arrowTopRight">
                </div>
                <div class="flex items-center self-stretch gap-[24px] md:gap-[42px] mt-[100px] md:mt-[120px]">
                    <img :src="instagram" alt="instagram">
                    <img :src="facebook" alt="facebook">
                    <img :src="tiktok" alt="tiktok">
                    <img :src="pinterest" alt="pinterest">
                    <img :src="youtube" alt="youtube">
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[32px] border-t border-[#EDF3F3] gap-[100px] md:gap-auto">
            <div class="text-white text-[16px] md:text-[18px] font-light leading-[24px]" style="text-edge: cap;">© 2025 OKEARA. All Rights Reserved</div>
            <div class="flex flex-col md:flex-row items-start gap-[4px] md:gap-[20px] text-white text-[16px] md:text-[18px] font-light leading-[24px]"><span>Terms & Conditions</span> <div class="hidden md:inline">|</div> <span>Privacy Policy</span></div>
        </div>
    </div>
</template>

<script lang="ts">
import Logo from "@/assets/images/logo.svg";
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import Instagram from "@/assets/icons/Instagram.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import TikTok from "@/assets/icons/TikTok.svg";
import Pinterest from "@/assets/icons/Pinterest.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {
            logo: Logo,
            arrowTopRight: ArrowTopRight,
            instagram: Instagram,
            facebook: Facebook,
            tiktok: TikTok,
            pinterest: Pinterest,
            youtube: Youtube
        };
    }
});
</script>