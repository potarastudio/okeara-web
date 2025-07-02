<!-- eslint-disable vue/html-self-closing -->
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
                        Drink <br>
                        Different
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
        <div class="w-full px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]  bg-[#203D4D]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[120px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="list">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Our Water
                    </div>
                </div>
                <div class="relative overflow-hidden w-full h-[650px] pt-[400px] flex flex-col gap-[40px] md:w-[60%]">
                    <img ref="imageWaterRef" :src="OurWater" alt="Our Water"
                        class="absolute top-0 left-0 w-full object-cover">
                    <div class="absolute flex flex-col items-start gap-[24px] lg:w-[70%]">
                        <div ref="titleWaterRef"
                            class="text-[32px] md:text-[48px] text-[#EDF3F3] font-light leading-[36px] md:leading-[58px]"
                            style="letter-spacing: -1.44px;">
                            For those who demand the best in hydration
                        </div>
                        <div ref="paragraphWaterRef" class="text-[#D1CCBF] text-[16px] md:text-[18px] leading-[24px]">
                            OKEARA structured hydrogen water is a game-changer. Experience the rejuvenating benefits of
                            hydrogen-enriched water free from impurities and bacteria. Elevate your health with every
                            sip.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :style="bgSafetyStyle"
            class="bg-cover bg-no-repeat bg-center w-full px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div
                class="w-full text-center text-[#EDF3F3] pt-[30px] text-[24px] md:text-[48px] leading-[31.2px] md:leading-[78px] md:mt-[40px]">
                Safety of Structured <br>
                Hydrogen Water
            </div>
            <div class="text-[26px] text-[#F8F8F8] leading-[36px] mt-[241px]">
                Safe Saturation <br>
                Method
            </div>
            <hr class="w-full border border-[#F8F8F8] my-[20px]">
            <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[20px] lg:gap-auto">
                <div class="text-[18px] text-[#F8F8F8] leading-[24px] flex gap-[32px]">
                    01
                    <div class="lg:hidden">Atomic Saturation Process</div>
                </div>
                <div class="flex items-start justify-between lg:w-[65%]">
                    <div class="hidden lg:inline  text-[18px] text-[#F8F8F8] leading-[24px]">
                        Atomic Saturation Process
                    </div>
                    <div class="text-[18px] text-[#F8F8F8] leading-[26px] lg:w-[50%]">
                        While other compounds linger in your tissues, hydrogen knows when to leave. It bonds with
                        harmful free radicals, turns them into harmless water, and exits cleanly — like a minimalist
                        houseguest with perfect manners
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[120px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Benefit
                    </div>
                </div>
                <div class="flex flex-col gap-[60px] md:w-[60%]">
                    <div ref="titleBenefitRef"
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] w-[70%] md:w-[90%] lg:w-[60%]">
                        Benefits of Structured Hydrogen Water
                    </div>
                    <div ref="paragraphBenefitRef"
                        class="text-[#203D4D] text-[18px] leading-[26px] opacity-77 w-[80%] lg:w-[40%]">
                        OKEARA structured hydrogen water offers a multitude of health benefits thanks to its high
                        hydrogen content:
                    </div>
                </div>
            </div>
            <div
                class="relative overflow-hidden w-full h-[400px] flex flex-col md:flex-row items-start justify-between gap-[4px] mt-[40px] md:mt-[100px]">
                <div class="w-full md:w-[30%] absolute top-0 left-0">
                    <img ref="imageLeftBenefitRef" :src="Benefit1" class="w-full object-cover">
                </div>
                <div class="w-full absolute top-0 right-0 md:w-[60%]">
                    <img ref="imageRightBenefitRef" :src="Benefit2" class="w-full object-cover">
                </div>
            </div>
            <div class="relative">
                <div class="w-full overflow-hidden">
                    <div ref="sliderTrack"
                        class="flex gap-[72px] mt-[40px] md:mt-[100px] transition-transform duration-100 ease-in-out">
                        <div v-for="(item, index) in slides" :key="index"
                            class="w-[100%] md:w-[25%] flex-shrink-0 flex flex-col gap-[24px]">
                            <img :src="item.image" :alt="item.title" class="w-[20%]" />
                            <div class="text-[#203D4D] text-[26px] leading-[36px]" v-html="item.title" />
                            <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                                {{ item.description }}
                            </div>
                            <div class="flex items-center gap-[8px] cursor-pointer">
                                <div class="w-[8px] h-[8px] rounded-full border border-[#203D4D]" />
                                <div class="pb-[2px] border-b border-[#203D4D] text-[#203D4D]">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-center gap-[32px] mt-[40px] md:mt-[100px]">
                    <div class="w-full md:w-[90%] flex items-center md:gap-[32px]">
                        <hr v-for="(item, index) in slides" :key="'indicator-' + index" :class="[
                            'w-[20%] border',
                            currentIndex === index ? 'border-[#203D4D]' : 'border-[#C4CFD2]'
                        ]" />
                    </div>
                    <div class="hidden md:flex items-center gap-[32px] w-[10%]">
                        <img :src="ArrowLeft" alt="Arrow Left"
                            class="cursor-pointer opacity-50 hover:opacity-100 transition"
                            :class="{ 'pointer-events-none opacity-20': currentIndex === 0 }" @click="prevSlide" />
                        <img :src="ArrowRight" alt="Arrow Right"
                            class="cursor-pointer opacity-50 hover:opacity-100 transition"
                            :class="{ 'pointer-events-none opacity-20': currentIndex >= maxSlideIndex }"
                            @click="nextSlide" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[120px]">
                <div class="flex items-center gap-[20px]">
                    <img :src="List" alt="list">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Safety
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[24px] md:gap-[80px] md:w-[60%]">
                    <div ref="titleSafetyRef"
                        class="text-[32px] md:text-[48px] text-[#EDF3F3] font-light leading-[36px] md:leading-[58px] w-[60%] md:w-[90%] lg:w-[60%]"
                        style="letter-spacing: -1.44px;">
                        Better For the Body, and For the Planet
                    </div>
                    <div ref="paragraphSafetyRef"
                        class="text-[#D1CCBF] text-[16px] md:text-[18px] leading-[24px] w-full md:w-[90%] lg:w-[60%]">
                        OKEARA is bottled with minimal material waste, using sleek lightweight bottles that preserve
                        water structure and reduce impact. Our entire process is optimized for integrity from source to
                        sip. Performance starts with what you put in your body. But it shouldn’t cost the Earth.
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-[100%] h-[100dvh] bg-[#EDF3F3]">
            <img ref="imageSafetyRef" :src="SafetyBlock" alt="Safety"
                class="absolute top-0 left-0 w-full h-[100dvh] object-cover">
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[120px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col gap-[20px] md:gap-[60px] md:w-[35%]">
                    <div class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[26px] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
                <div class="hidden md:flex items-center gap-[40px] w-full md:w-auto justify-end">
                </div>
            </div>
            <div class="w-full flex items-center justify-center mt-[40px] md:mt-[100px]">
                <div class="relative flex items-center gap-[2px] bg-[#E4EDED] rounded-full p-[4px] w-fit">
                    <div ref="indicatorRef" class="absolute top-[4px] left-0 h-[44px] bg-white rounded-full z-0"
                        style="width: 0px"></div>

                    <div v-for="(label, i) in ['OKEARA Water', 'OKEARA Blue']" :key="i"
                        :ref="(el) => (optionRefs[i] = el)"
                        class="h-[44px] px-[16px] flex items-center rounded-full justify-center relative z-10 cursor-pointer transition-colors duration-300"
                        :class="{
                            'text-[#203D4D]': activeIndex === i,
                            'text-[#AEC5C5]': activeIndex !== i
                        }" @click="switchTo(i)">
                        {{ label }}
                    </div>
                </div>
            </div>
            <div class="w-full overflow-hidden">
                <div class="w-full flex items-start self-stretch gap-[60px] mt-[72px]">
                    <div ref="container0"
                        class="w-[100%] lg:w-[50%] flex-shrink-0 flex items-center justify-center self-stretch"
                        @mouseenter="container0 && handleMouseEnter(container0)"
                        @mouseleave="container0 && handleMouseLeave(container0)">
                        <div class="flex flex-col justify-end items-center gap-[52px]">
                            <div class="px-[12px] py-[8px] bg-white rounded-full text-black fade-item opacity-0">
                                Preview 3D
                            </div>
                            <img :src="OkearaWater500ml" alt="Okeara Water 500ml" class="h-[500px]">
                            <div class="flex flex-col items-center gap-[32px] opacity-0 fade-item">
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
                    <div class="w-[100%] lg:w-[50%] flex-shrink-0 flex items-center justify-center self-stretch">
                        <div ref="container1" class="flex flex-col justify-end items-center gap-[52px]"
                            @mouseenter="container1 && handleMouseEnter(container1)"
                            @mouseleave="container1 && handleMouseLeave(container1)">
                            <div class="px-[12px] py-[8px] bg-white rounded-full text-black fade-item opacity-0">
                                Preview 3D
                            </div>
                            <img :src="OkearaWater12l" alt="Okeara Water 12 L" class="h-[500px]">
                            <div class="flex flex-col items-center gap-[32px] opacity-0 fade-item">
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
                                        class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] curos-pointer">
                                        Buy Now
                                        <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                    </button>
                                    <button
                                        class="bg-[#EDF3F3] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#203D4D] curos-pointer">
                                        Add to Cart
                                        <img :src="CartBlue" alt="CartBlue" class="w-[16px]">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#DAD6CB] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="flex items-center gap-[10px] md:gap-[20px]">
                <img :src="ListBlack" alt="ListBlack">
                <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                    Sustainability
                </div>
            </div>
            <div
                class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] mt-[120px] md:mt-[40px]">
                Our Packaging
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[40px] md:mt-[100px]">
                <div>
                    <img :src="Packing1" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[24px] md:text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton packs are made from responsibly sourced, renewable content, and recycled polymers.
                    </div>
                </div>
                <div>
                    <img :src="Packing2" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D]  text-[24px] md:text-[26px] mt-[24px]">
                        Compact and Practical
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        The packaging is lightweight and convenient, making it easy to carry and use on the go.
                    </div>
                </div>
                <div>
                    <img :src="Packing3" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[24px] md:text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton pack is durable and protects the structured hydrogen water from external
                        contaminants, ensuring its freshness and purity.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[8px] md:gap-auto">
                <img :src="Sustainability1" alt="Sustainability 1" class="md:w-[30%]">
                <img :src="Sustainability2" alt="Sustainability 2" class="md:w-[60%]">
            </div>
            <div
                class="w-full flex flex-col md:flex-row items-start justify-between gap-[120px] md:gap-auto mt-[40px] md:mt-[120px]">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Sustainability
                    </div>
                </div>
                <div class="md:w-[60%]">
                    <div class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Sustainable <br> Development
                    </div>
                    <div class="w-full mt-[40px] md:mt-[64px] flex flex-col items-start">
                        <div v-for="(item, index) in items" :key="index"
                            class="relative flex flex-col border-t border-[#EDF3F3] w-full">
                            <div class="flex items-center justify-between py-[24px] px-[8px] md:px-[16px] cursor-pointer gap-[16px]"
                                @click="toggleCollapse(index)">
                                <div class="flex items-start md:items-center gap-[24px]">
                                    <img :src="Collapse" alt="Collapse Icon" class="w-[10%]">
                                    <div class="flex flex-col">
                                        <div class="text-[#EDF3F3] text-[20px] md:text-[26px]">{{ item.title }}</div>
                                        <div :id="`desc-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div
                                                class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-40">
                                                {{ item.desc }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[5%]">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EDF3F3"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full bg-[#274A5C] flex flex-col md:flex-row items-stretch justify-between gap-[12px] px-[24px] py-[40px] md:p-[40px] lg:px-[180px] lg:py-[120px]">
            <div class="flex flex-col gap-[40px] gap-[150px] w-full md:w-[50%]">
                <img :src="Community1" alt="Community 1" class="w-full order-2 md:order-1">
                <div
                    class="text-[#EDF3F3] text-[32px] text-[48px] font-light leading-[36px] leading-[58px] order-1 md:order-2 md:mb-[275px]">
                    Our <br> Commitment
                </div>
            </div>
            <div
                class="flex flex-col items-start justify-between gap-[40px] md:gap-auto w-full md:w-[40%] md:pt-[60px] md:pb-[100px]">
                <img :src="Community2" alt="Community 2" class="w-full">
                <div
                    class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] md:w-[90%] opacity-77 mt-[40px] md:mt-[120px]">
                    OKEARA's commitment to sustainable packaging and environmental protection is evident in our use of
                    advanced, health-conscious, and reusable containers. By choosing OKEARA, you are supporting a
                    product that values both your well-being and the health of our planet.
                </div>
            </div>
        </div>
        <LongevityClub />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Banner from '@/assets/images/BannerHome.png';
import OurWater from '@/assets/images/OurWater.png';
import BgSafety from '@/assets/images/BgSafety.png';
import SafetyBlock from '@/assets/images/SafetyBlock.png';
import Benefit1 from '@/assets/images/benefit-1.png';
import Benefit2 from '@/assets/images/benefit-2.png';
import OkearaWater500ml from '@/assets/images/OkearaWater500ml.png';
import OkearaWater12l from '@/assets/images/OkearaWater12l.png';
import Packing1 from '@/assets/images/packing-1.png';
import Packing2 from '@/assets/images/packing-2.png';
import Packing3 from '@/assets/images/packing-3.png';
import Sustainability1 from '@/assets/images/sustainability-1.png';
import Sustainability2 from '@/assets/images/sustainability-2.png';
import Community1 from '@/assets/images/community-1.png';
import Community2 from '@/assets/images/community-2.png';
import LongevityClub from '~/page-section/LongevityClub.vue';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import List from '@/assets/icons/List.svg';
import ListBlack from '@/assets/icons/ListBlack.svg';
import Hydration from '@/assets/icons/Hydration.svg';
import Natural from '@/assets/icons/Natural.svg';
import Immune from '@/assets/icons/Immune.svg';
import Microplastic from '@/assets/icons/Microplastic.svg';
import Dollar from '@/assets/icons/Dollar.svg';
import CartBlue from '@/assets/icons/CartBlue.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import Collapse from '@/assets/icons/collapse.svg';

gsap.registerPlugin(ScrollTrigger)

const bannerRef = ref<HTMLElement | null>(null)
const textContainerRef = ref<HTMLElement | null>(null)

const imageWaterRef = ref<HTMLElement | null>(null)
const titleWaterRef = ref<HTMLElement | null>(null)
const paragraphWaterRef = ref<HTMLElement | null>(null)

const imageLeftBenefitRef = ref<HTMLElement | null>(null)
const imageRightBenefitRef = ref<HTMLElement | null>(null)
const titleBenefitRef = ref<HTMLElement | null>(null)
const paragraphBenefitRef = ref<HTMLElement | null>(null)

const titleSafetyRef = ref<HTMLElement | null>(null)
const paragraphSafetyRef = ref<HTMLElement | null>(null)

const imageSafetyRef = ref<HTMLElement | null>(null)

const activeIndex = ref(0)
const optionRefs = ref<(Element | ComponentPublicInstance | null)[]>([])
const indicatorRef = ref(null)
const items = ref([
    {
        title: 'Environmentally Friendly',
        desc: 'OKEARA is committed to sustainability and environmental responsibility. Our packaging is designed to be reusable, reducing waste significantly',
        open: false,
    },
    {
        title: 'Renewable Resource',
        desc: 'Our carton packs are made from paperboard, which is a renewable resource. They have a low carbon footprint compared to other packaging materials, making them a more environmentally friendly choice.',
        open: false,
    },
    {
        title: 'Carbon Footprint',
        desc: 'OKEARA carton packs are designed to be space-efficient, allowing for more efficient transportation and storage. This helps reduce energy consumption and overall environmental impact.',
        open: false,
    },
])

const sliderTrack = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const slidesPerView = 1

const slides = [
    {
        image: Hydration,
        title: 'Fast <br> Hydration',
        description: 'Keeps you energized and fully hydrated faster than any other water'
    },
    {
        image: Natural,
        title: 'Natural <br> Detoxification',
        description: 'Eliminates toxins and supports a clean, balanced body'
    },
    {
        image: Immune,
        title: 'Immune <br> Support',
        description: 'Supercharges your immune system for optimal health'
    },
    {
        image: Microplastic,
        title: 'No <br> Microplastics',
        description: 'Proven by independent laboratories, 100% free of microplastic.'
    }
]

const maxSlideIndex = computed(() => {
    return slides.length - slidesPerView
})


const goToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxSlideIndex.value))
    currentIndex.value = clampedIndex

    const percentage = -(100 / 4) * clampedIndex

    gsap.to(sliderTrack.value, {
        xPercent: percentage,
        duration: 0.6,
        ease: 'power1.inOut'
    })
}

const nextSlide = () => {
    if (currentIndex.value < maxSlideIndex.value) {
        goToSlide(currentIndex.value + 1)
    }
}

const prevSlide = () => {
    if (currentIndex.value > 0) {
        goToSlide(currentIndex.value - 1)
    }
}


const toggleCollapse = (index: number) => {
    const item = items.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-${index}`)
    const verticalLine = document.querySelector(`#plus-line-${index}`)

    if (item.open) {
        gsap.to(descEl, {
            height: 'auto',
            opacity: 1,
            marginTop: '24px',
            duration: 0.4,
            ease: 'power2.out',
        })

        gsap.to(verticalLine, {
            attr: { y1: 12, y2: 12 },
            duration: 0.3,
            ease: 'power2.out',
        })
    } else {
        gsap.to(descEl, {
            height: 0,
            opacity: 0,
            marginTop: '0px',
            duration: 0.4,
            ease: 'power2.in',
        })

        gsap.to(verticalLine, {
            attr: { y1: 5, y2: 19 },
            duration: 0.3,
            ease: 'power2.in',
        })
    }
}

const switchTo = async (index: number) => {
    activeIndex.value = index

    await nextTick()
    const target = optionRefs.value[index]
    if (!target) return
    const el = (target as HTMLElement | null)
    if (!el || typeof el.getBoundingClientRect !== 'function') return
    const bounds = el.getBoundingClientRect()
    const parentNode = el.parentNode as HTMLElement | null
    if (!parentNode) return
    const containerBounds = parentNode.getBoundingClientRect()

    const x = bounds.left - containerBounds.left
    const width = bounds.width

    gsap.to(indicatorRef.value, {
        x,
        width,
        duration: 0.4,
        ease: 'power2.out',
    })
}

onMounted(() => {
    switchTo(activeIndex.value)
})

const bannerStyle = {
    backgroundImage: `url(${Banner})`
}

const bgSafetyStyle = {
    backgroundImage: `url(${BgSafety})`
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

onMounted(() => {
    gsap.to(imageWaterRef.value, {
        y: -300,
        ease: 'none',
        scrollTrigger: {
            trigger: imageWaterRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    if (titleWaterRef.value) {
        const lines = titleWaterRef.value.innerHTML.split('<br>')
        titleWaterRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleWaterRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleWaterRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphWaterRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphWaterRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})

onMounted(() => {
    gsap.to(imageLeftBenefitRef.value, {
        y: -300,
        ease: 'none',
        scrollTrigger: {
            trigger: imageLeftBenefitRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.to(imageRightBenefitRef.value, {
        y: -300,
        ease: 'none',
        scrollTrigger: {
            trigger: imageRightBenefitRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    if (titleBenefitRef.value) {
        const lines = titleBenefitRef.value.innerHTML.split('<br>')
        titleBenefitRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleBenefitRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleBenefitRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphBenefitRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphBenefitRef.value,
                start: 'top 75%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})

onMounted(() => {
    if (titleSafetyRef.value) {
        const lines = titleSafetyRef.value.innerHTML.split('<br>')
        titleSafetyRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleSafetyRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleSafetyRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphSafetyRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: paragraphSafetyRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )
})

onMounted(() => {
    gsap.to(imageSafetyRef.value, {
        y: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: imageSafetyRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
})

const container0 = ref(null)
const container1 = ref(null)

interface FadeItemContainer extends Element {
    querySelectorAll(selectors: string): NodeListOf<HTMLElement>;
}

const handleMouseEnter = (el: FadeItemContainer) => {
    gsap.to(el.querySelectorAll('.fade-item'), { opacity: 1, duration: 0.5, ease: 'power2.out' })
}

const handleMouseLeave = (el: FadeItemContainer) => {
    gsap.to(el.querySelectorAll('.fade-item'), { opacity: 0, duration: 0.5, ease: 'power2.out' })
}
</script>

<style scoped>
img {
    will-change: transform;
}

.transition {
    transition: all 0.3s ease-in-out;
}
</style>
