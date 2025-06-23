<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[70vh] md:h-[120vh] relative">
            <div class="absolute left-0 bottom-[40px] md:bottom-[80px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div class="overflow-hidden whitespace-nowrap w-full">
                    <div ref="marquee" class="inline-block text-[96px] md:text-[144px] font-light"
                        style="will-change: transform;letter-spacing: -2.88px ">
                        Our Partners • Our Partners • Our Partners
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] p-[20px] md:p-[40px] lg:p-[64px] md:pb-[120px]">
            <hr class="w-full border border-[#fff]">
            <div class="w-full flex-col md:flex-row items-start gap-[24px] mt-[56px] md:mt-[120px]">
                <div class="flex items-center gap-[10px] md:gap-[20px] w-[35%]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Our Partners
                    </div>
                </div>
                <div class="md:w-[50%]">
                    <div class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        At the heart of our community are our valued partners, whose collaboration and shared values
                        make everything possible.
                    </div>
                </div>
            </div>
        </div>
        <div :style="bannerCommunityStyle" class="bg-cover bg-no-repeat bg-center p-[20px] md:p-[40px] lg:p-[64px] py-[120px]">
            <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-auto">
                <div class="hidden md:flex items-center gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Community
                    </div>
                </div>
                <div class="bg-[#EDF3F3] p-[64px] w-[90%] md:w-[50%] flex flex-col items-center">
                    <div class="text-[#203D4D] text-[14px] leading-[18px]">
                        02 <span class="opacity-50">— 06</span>
                    </div>
                    <div class="mt-[60px] text-[#203D4D] text-[22px] md:text-[28px] text-center font-light leading-[24px]">
                        Supporting <br> Sporting Events
                    </div>
                    <img :src="PartnersCommunity" alt="PartnersCommunity" class="w-full mt-[32px]">
                    <div class="text-[#203D4D] text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-center mt-[32px]">
                        We proudly support various sporting events, advocating for the importance of physical activity.
                        Our involvement not only promotes an active lifestyle but also fosters a strong sense of
                        community and teamwork.
                    </div>
                </div>
                <div class="text-[#EDF3F3] text-right text-[16px] md:text-[18px] leading-[24px]">
                    ( Keep Scrolling )
                </div>
            </div>
        </div>
        <div class="w-full bg-[#274A5C] p-[20px] md:p-[40px] lg:p-[174px]">
            <div class="w-[80%] mx-auto md:mx-0 md:w-full flex flex-col md:flex-row items-start justify-between">
                <div class="text-[#EDF3F3 ] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] md:w-[60%]">
                    These partnerships create a vibrant, supportive network where health and wellness enthusiasts can
                    truly thrive.
                </div>
                <div class="text-[#EDF3F3 ] text-[18px] leading-[26px] w-[70%] md:w-[40%] ml-[30%] md:ml-0 opacity-77 mt-[40px] md:mt-[170px]">
                    OKEARA structured hydrogen water is a testament to our dedication to optimizing Wellness. We
                    celebrate every success and support one another in our health journeys.
                </div>
            </div>
            <div class="w-full flex items-start gap-[15%] mt-[80px  ] md:mt-[150px]">
                <img :src="Partnership1" alt="Community 2" class="w-[35%] mt-[10%]">
                <img :src="Partnership2" alt="Community 1" class="w-[45%]">
            </div>
        </div>
        <div class="w-full bg-[#203D4D] p-[20px] md:p-[40px] lg:px-[64px] lg:py-[120px]">
            <div class="w-full flex flex-col md:flex-row items-start gap-[24px] mt-[40px] md:mt-[120px]">
                <div class="flex items-center gap-[10px] md:gap-[20px] w-full md:w-[35%]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Elementis Group
                    </div>
                </div>
                <div class="w-[80%] mx-auto md:mx-0 md:w-[60%]">
                    <div class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        HOT STONE Club Wellness Center
                    </div>
                    <div class="text-[#EDF3F3] text-[18px] leading-[26px] opacity-80 mt-[20px] md:mt-[60px] md:w-[60%]">
                        Our resorts and residences in Asia, Australia, and the Americas, are wellness destinations that
                        embrace a future defined by health, vitality, personalized well-being and longevity. ELEMENTIS
                        Resorts, Wellness Retreats and Residences go beyond providing a sustainable accommodation - it
                        creates a sense of connection, care, and sustainability, fostering a movement toward a better
                        world. ELEMENTIS is fast expanding across Asia, Australia and the Americas.
                    </div>
                </div>
            </div>
            <div class="w-[80%] mx-auto md:mx-0 md:w-full flex items-end justify-between mt-[40px] md:mt-[120px]">
                <img :src="ElementisGroup1" alt="ElementisGroup1" class="md:w-[25%]">
                <img :src="ElementisGroup2" alt="ElementisGroup2" class="hidden md:block w-[63%]">
            </div>
        </div>
        <div class="w-full bg-[#203D4D] p-[20px] md:p-[40px] lg:px-[64px] lg:py-[120px]">
            <div class="w-full flex flex-col md:flex-row items-start gap-[24px] mt-[120px]">
                <div class="flex items-center gap-[10px] gap-[20px] md:w-[35%]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Elementis Development Group
                    </div>
                </div>
                <div class="w-[80%] mx-auto md:w-[60%] md:mx-0">
                    <div class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Designing a Life of Balance, Naturally
                    </div>
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] opacity-80 mt-[20px] md:mt-[60px] md:w-[60%]">
                        ELEMENTIS Development Group is redefining luxury and wellness living by creating sustainable,
                        nature-connected communities powered by innovation. Founded by Anton Titov and Andrey
                        Skripachev, the company focuses on climate-responsive design, energy efficiency, and
                        personalized wellness to support physical, mental, and spiritual health. With world-class
                        amenities like advanced saunas and OKEARA hydrogen water, ELEMENTIS offers healthy, balanced
                        lifestyles. Upcoming locations include Ubud and Uluwatu in Bali, Farellones in Chile, and future
                        sites across Indonesia and South America.
                    </div>
                </div>
            </div>
            <div class="w-[80%] mx-auto md:mx-0 md:w-full flex items-end justify-between mt-[20px] md:mt-[120px]">
                <img :src="ElementisDevelopment1" alt="ElementisDevelopment1" class="hidden md:block w-[25%]">
                <img :src="ElementisDevelopment2" alt="ElementisDevelopment2" class="md:w-[63%]">
            </div>
        </div>
        <LongevityClub />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import BannerOurPartners from '@/assets/images/BannerOurPartners.png'
import PartnersCommunity from '@/assets/images/PartnersCommunity.png'
import Partnership1 from '@/assets/images/Partnership1.png'
import Partnership2 from '@/assets/images/Partnership2.png'
import ElementisGroup1 from '@/assets/images/ElementisGroup1.png'
import ElementisGroup2 from '@/assets/images/ElementisGroup2.png'
import ElementisDevelopment1 from '@/assets/images/ElementisDevelopment1.png'
import ElementisDevelopment2 from '@/assets/images/ElementisDevelopment2.png'
import List from '@/assets/icons/List.svg'

import LongevityClub from '~/page-section/LongevityClub.vue'

const marquee = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurPartners})`,
}
const bannerCommunityStyle = {
    backgroundImage: `url(${PartnersCommunity})`,
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
