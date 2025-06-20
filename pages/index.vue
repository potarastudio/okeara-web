<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <div :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[140vh] relative">
            <div class="absolute left-0 bottom-[100px] px-[64px] w-full flex items-start justify-between">
                <div class="text-[64px] leading-[72px] font-light" style="letter-spacing: -1.92px;">
                    Drink <br>
                    Different
                </div>
                <div class="flex flex-col items-start gap-[70px] w-[35%]">
                    <div class="text-[20px] leading-[26px]" style="letter-spacing: -0.2px;">
                        You perform under pressure from mentally, physically, emotionally. But your system isn't built
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
        <div class="w-full p-[64px] pb-[128px] bg-[#203D4D]">
            <img :src="OurWater" alt="Our Water" class="ml-[40%] w-[60%] ">
            <div class="w-full flex items-start gap-[32%] mt-[120px]">
                <div class="flex items-center gap-[20px]">
                    <img :src="List" alt="list">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Our Water
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[80px] w-[40%]">
                    <div class="text-[48px] text-[#EDF3F3] font-light leading-[58px]" style="letter-spacing: -1.44px;">
                        For those who demand the best in hydration
                    </div>
                    <div class="text-[#D1CCBF] text-[18px] leading-[24px] w-[90%]">
                        OKEARA structured hydrogen water is a game-changer. Experience the rejuvenating benefits of
                        hydrogen-enriched water free from impurities and bacteria. Elevate your health with every sip.
                    </div>
                </div>
            </div>
        </div>
        <div :style="bgSafetyStyle" class="bg-cover bg-no-repeat bg-left w-full p-[64px]">
            <div class="w-full text-center text-[#EDF3F3] text-[48px] leading-[78px] mt-[40px]">
                Safety of Structured <br>
                Hydrogen Water
            </div>
            <div class="text-[26px] text-[#F8F8F8] leading-[36px] mt-[249px]">
                Safe Saturation <br>
                Method
            </div>
            <hr class="w-full border border-[#F8F8F8] my-[20px]">
            <div class="w-full flex items-start justify-between">
                <div class="text-[18px] text-[#F8F8F8] leading-[24px]">
                    01
                </div>
                <div class="flex items-start justify-between w-[65%]">
                    <div class="text-[18px] text-[#F8F8F8] leading-[24px]">
                        Atomic Saturation Process
                    </div>
                    <div class="text-[18px] text-[#F8F8F8] leading-[26px] w-[50%]">
                        While other compounds linger in your tissues, hydrogen knows when to leave. It bonds with
                        harmful free radicals, turns them into harmless water, and exits cleanly — like a minimalist
                        houseguest with perfect manners
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[64px] py-[120px]">
            <div class="w-full flex items-start gap-[64px]">
                <div class="flex items-center gap-[20px] w-[25%]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Sustainability
                    </div>
                </div>
                <div class="flex flex-col gap-[60px] w-[35%]">
                    <div class="text-[#203D4D] text-[48px] font-light leading-[58px]">
                        Benefits of Structured Hydrogen Water
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[26px] opacity-77 w-[80%]">
                        OKEARA structured hydrogen water offers a multitude of health benefits thanks to its high
                        hydrogen content:
                    </div>
                </div>
            </div>
            <div class="w-full flex items-end gap-[64px] mt-[100px]">
                <img :src="Benefit1" class="w-[25%]">
                <img :src="Benefit2" class="w-[70%]">
            </div>
            <div class="w-full flex items-start gap-[72px] mt-[100px]">
                <div class="w-[25%] flex flex-col gap-[24px]">
                    <img :src="Hydration" alt="Hydration" class="w-[20%]">
                    <div class="text-[#203D4D] text-[26px] leading-[36px]">
                        Fast <br>
                        Hydration
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                        Keeps you energized and fully
                        hydrated faster than any other water
                    </div>
                    <div class="flex items-center gap-[8px] cursor-pointer">
                        <div class="w-[8px] h-[8px] rounded-full border border-[#203D4D]" />
                        <div class="pb-[2px] border-b border-[#203D4D] text-[#203D4D]">Read More</div>
                    </div>
                </div>
                <div class="w-[25%] flex flex-col gap-[24px]">
                    <img :src="Natural" alt="Natural" class="w-[20%]">
                    <div class="text-[#203D4D] text-[26px] leading-[36px]">
                        Natural <br> Detoxification
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                        Eliminates toxins and supports
                        a clean, balanced body
                    </div>
                    <div class="flex items-center gap-[8px] cursor-pointer">
                        <div class="w-[8px] h-[8px] rounded-full border border-[#203D4D]" />
                        <div class="pb-[2px] border-b border-[#203D4D] text-[#203D4D]">Read More</div>
                    </div>
                </div>
                <div class="w-[25%] flex flex-col gap-[24px]">
                    <img :src="Immune" alt="Immune" class="w-[20%]">
                    <div class="text-[#203D4D] text-[26px] leading-[36px]">
                        Immune <br>
                        Support
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                        Supercharges your immune system for optimal health
                    </div>
                    <div class="flex items-center gap-[8px] cursor-pointer">
                        <div class="w-[8px] h-[8px] rounded-full border border-[#203D4D]" />
                        <div class="pb-[2px] border-b border-[#203D4D] text-[#203D4D]">Read More</div>
                    </div>
                </div>
                <div class="w-[25%] flex flex-col gap-[24px]">
                    <img :src="Microplastic" alt="Microplastic" class="w-[20%]">
                    <div class="text-[#203D4D] text-[26px] leading-[36px]">
                        No <br> Microplastics
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                        Proven by independent laboratories, 100% free of microplastic.
                    </div>
                    <div class="flex items-center gap-[8px] cursor-pointer">
                        <div class="w-[8px] h-[8px] rounded-full border border-[#203D4D]" />
                        <div class="pb-[2px] border-b border-[#203D4D] text-[#203D4D]">Read More</div>
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
        <div class="bg-[#203D4D] px-[64px] py-[190px]">
            <div class="w-full flex items-start gap-[32%] mt-[120px]">
                <div class="flex items-center gap-[20px]">
                    <img :src="List" alt="list">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Safety
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[80px] w-[40%]">
                    <div class="text-[48px] text-[#EDF3F3] font-light leading-[58px]" style="letter-spacing: -1.44px;">
                        Better For the Body, and For the Planet
                    </div>
                    <div class="text-[#D1CCBF] text-[18px] leading-[24px] w-[90%]">
                        OKEARA is bottled with minimal material waste, using sleek lightweight bottles that preserve
                        water structure and reduce impact. Our entire process is optimized for integrity from source to
                        sip. Performance starts with what you put in your body. But it shouldn’t cost the Earth.
                    </div>
                </div>
            </div>
        </div>
        <img :src="SafetyBlock" alt="Safety Block" class="w-full">
        <div class="w-full bg-[#EDF3F3] px-[64px] py-[120px]">
            <div class="w-full flex items-start justify-between">
                <div class="flex items-center gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col gap-[60px] w-[35%]">
                    <div class="text-[#203D4D] text-[48px] font-light leading-[58px]">
                        Great Product to Elevate Your Wellness
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[26px] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
                <div class="flex items-center gap-[40px]">
                    <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer">
                    <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer">
                </div>
            </div>
            <div class="w-full flex items-center justify-center mt-[100px]">
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
            <div class="w-full flex items-start self-stretch gap-[60px] mt-[72px]">
                <div class="w-[50%] flex items-center justify-center self-stretch">
                    <div class="flex flex-col justify-end items-center gap-[52px]">
                        <div :class="[
                            'px-[12px] py-[8px] bg-white rounded-full text-black',
                            activeIndex === 0 ? 'opacity-100' : 'opacity-0'
                        ]">
                            Preview 3D
                        </div>
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
                <div class="w-[50%] flex items-center justify-center self-stretch">
                    <div class="flex flex-col justify-end items-center gap-[52px]">
                        <div :class="[
                            'px-[12px] py-[8px] bg-white rounded-full text-black',
                            activeIndex === 1 ? 'opacity-100' : 'opacity-0'
                        ]">
                            Preview 3D
                        </div>
                        <img :src="OkearaWater12l" alt="Okeara Water 12 L" :class="[
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
        <div class="w-full bg-[#DAD6CB] p-[64px] pb-[100px]">
            <div class="flex items-center gap-[20px]">
                <img :src="ListBlack" alt="ListBlack">
                <div class="text-[#203D4D] text-[18px] leading-[24px]">
                    Sustainability
                </div>
            </div>
            <div class="text-[#203D4D] text-[48px] font-light leading-[58px] mt-[58px]">
                Our Packaging
            </div>
            <div class="grid grid-cols-3 gap-[32px] mt-[80px]">
                <div>
                    <img :src="Packing1" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton packs are made from responsibly sourced, renewable content, and recycled polymers.
                    </div>
                </div>
                <div>
                    <img :src="Packing2" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[26px] mt-[24px]">
                        Compact and Practical
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] mt-[14px] opacity-50">
                        The packaging is lightweight and convenient, making it easy to carry and use on the go.
                    </div>
                </div>
                <div>
                    <img :src="Packing3" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton pack is durable and protects the structured hydrogen water from external
                        contaminants, ensuring its freshness and purity.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] p-[64px]">
            <div class="w-full flex items-start gap-[24px]">
                <img :src="Sustainability1" alt="Sustainability 1" class="w-[35%]">
                <img :src="Sustainability2" alt="Sustainability 2" class="w-[65%]">
            </div>
            <div class="w-full flex items-start gap-[24px] mt-[120px]">
                <div class="flex items-center gap-[20px] w-[35%]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[18px] leading-[24px]">
                        Sustainability
                    </div>
                </div>
                <div class="w-[65%]">
                    <div class="text-[#EDF3F3] text-[48px] font-light leading-[58px]">
                        Sustainable <br> Development
                    </div>
                    <div class="w-full mt-[64px] flex flex-col items-start">
                        <div v-for="(item, index) in items" :key="index"
                            class="relative flex flex-col border-t border-[#EDF3F3] w-full">
                            <div class="flex items-center justify-between py-[24px] px-[16px] cursor-pointer gap-[16px]"
                                @click="toggleCollapse(index)">
                                <div class="flex items-center gap-[24px]">
                                    <img :src="Collapse" alt="Collapse Icon">
                                    <div class="flex flex-col">
                                        <div class="text-[#EDF3F3] text-[26px]">{{ item.title }}</div>
                                        <div :id="`desc-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#EDF3F3] text-[18px] leading-[24px] opacity-40">
                                                {{ item.desc }}
                                            </div>
                                        </div>
                                    </div>
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EDF3F3"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line :id="`plus-line-${index}`" x1="12" y1="12" x2="12" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#274A5C] p-[174px]">
            <div class="w-full flex items-start gap-[15%]">
                <img :src="Community1" alt="Community 1" class="w-[45%]">
                <img :src="Community2" alt="Community 2" class="w-[30%] mt-[10%]">
            </div>
            <div class="w-full flex items-start justify-between mt-[120px]">
                <div class="text-[#EDF3F3] text-[48px] font-light leading-[58px]">
                    Our <br> Commitment
                </div>
                <div class="text-[#EDF3F3] text-[18px] leading-[26px] w-[40%] opacity-77 mt-[120px]">
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
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import gsap from 'gsap'
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
            attr: { y1: 5, y2: 19 },
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
            attr: { y1: 12, y2: 12 },
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
</script>