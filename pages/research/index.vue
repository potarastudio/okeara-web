<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat w-full h-[100dvh] relative"
            style="background-position: left 50% top 22%;">
            <div class="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none"
                style="background: linear-gradient(0deg, rgba(0,0,0,0.85) 1.62%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.00) 80%);">
                <div ref="textContainerRef"
                    class="absolute left-0 bottom-[20px] md:bottom-[40px] lg:bottom-[100px] px-[24px] md:px-[40px] lg:px-[64px] w-full flex flex-col md:flex-row items-stretch justify-between gap-[20px] md:gap-auto">
                    <div class="flex flex-col items-start justify-between">
                        <div class="text-[32px] md:text-[40px] lg:text-[64px] leading-[40px] lg:leading-[72px] font-light"
                            style="letter-spacing: -1.92px;">
                            Research for <br>
                            OKEARA Water
                        </div>
                        <button
                            class="hidden h-[48px] px-[16px] border border-[#fff] rounded-full md:flex items-center justify-center gap-[20px] cursor-pointer">
                            Shop Now
                            <img :src="ArrowRightWhite" alt="ArrowDown">
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
                        Research
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
            <div class="w-full flex flex-col items-start gap-[24px] lg:gap-[80px]">
                <div class="w-full flex flex-col lg:flex-row items-start justify-center gap-[24px] lg:gap-[40px]">
                    <div ref="research1Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research1" alt="Research1" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch1" alt="ProfileResearch1" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Gabriele Carullo</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Jan
                                        12,</span> 2023</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    Hydrogen’s Antioxidant Properties
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Molecular hydrogen (H₂) has been shown to act as a potent antioxidant, neutralizing
                                    Ream
                                    More n the body. This helps reduce oxidative stress, which is linked to aging,
                                    inflammation, and various chronic diseases.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">PMC</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
                    </div>
                    <div ref="research2Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research2" alt="Research2" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch2" alt="ProfileResearch2" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Gerald Pollack</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Sep
                                        25,</span> 2023</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    Structured Water for Better Absorption
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Structured water, or water with a specific molecular arrangement, is thought to be
                                    more
                                    readily absorbed by the cells. This can improve overall hydration and aid in
                                    nutrient
                                    transportation throughout the body.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">Aquaaffirm</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col lg:flex-row items-start justify-center gap-[24px] lg:gap-[40px]">
                    <div ref="research3Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research3" alt="Research3" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch3" alt="ProfileResearch3" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Yan Tian</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Dec
                                        21,</span> 2021</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    Hydrogen and Inflammation
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Research suggests that hydrogen (H₂) can regulate mitochondrial function by reducing
                                    free radical generation and controlling oxidative stress through transcriptional
                                    regulation of Nrf2. Additionally, H₂ may inhibit inflammatory proteins and prevent
                                    apoptosis, offering potential benefits for various conditions. Emerging studies
                                    propose that inhaling H₂ could also provide a promising approach to alleviating
                                    respiratory diseases like COVID-19.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">PMC</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
                    </div>
                    <div ref="research4Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research4" alt="Research4" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch4" alt="ProfileResearch4" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Kaixiang Zhou</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Oct
                                        07,</span> 2024</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    Hydrogen Water and Athletic Performance
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Some studies indicate that hydrogen water may improve recovery times and reduce
                                    muscle fatigue in athletes, owing to its ability to decrease oxidative damage during
                                    exercise.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">Frontiersin</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col lg:flex-row items-start justify-center gap-[24px] lg:gap-[40px]">
                    <div ref="research5Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research5" alt="Research5" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch5" alt="ProfileResearch5" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Toshio Mikami</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Sep
                                        01,</span> 2019</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    Hydrogen Water Reduces Fatigue and Boosts Endurance During Exercise
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Drinking hydrogen-infused water (H₂ water) before exercise significantly reduces
                                    fatigue and improves endurance, according to a randomized, double-blind study. In
                                    both non-trained and trained participants, H₂ water decreased fatigue and enhanced
                                    performance, demonstrating its potential as a powerful antioxidant that helps combat
                                    exercise-induced oxidative stress.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">Research Gate</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
                    </div>
                    <div ref="research6Ref"
                        class="bg-[#E4EDED] lg:w-[50%] p-[20px] md:p-[40px] flex items-stretch gap-[20px]">
                        <img :src="Research6" alt="Research6" class="w-[25%] md:w-[35%]">
                        <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                            <div class="flex items-center gap-[8px]">
                                <img :src="ProfileResearch6" alt="ProfileResearch6" class="w-[10%]">
                                <div class="text-black text-[12px] md:text-[18px]">Jesus Gonzalez</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]"><span
                                        class="hidden md:inline">Sep
                                        25,</span> 2023</div>
                            </div>
                            <div class="flex flex-col items-start gap-[12px]">
                                <div
                                    class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-2">
                                    The Consciousness of Water: Insights from Masaru Emoto’s Research
                                </div>
                                <div
                                    class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                    Masaru Emoto’s experiments show that water can change its molecular structure in
                                    response to human emotions, thoughts, and words. His work highlights the potential
                                    impact of intention and consciousness on water, sparking interest in the connection
                                    between energy, water, and wellness.
                                </div>
                            </div>
                            <div class="flex items-center gap-[8px]">
                                <div class="text-black text-[12px] md:text-[18px]">Medium</div>
                                <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                                <div class="text-[#838383] text-[12px] md:text-[18px]">1,4k views</div>
                            </div>
                        </div>
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
                        What does expert says about OKEARA
                    </div>
                    <div
                        class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18.2px] md:leading-[24px] md:w-[40%]">
                        OKEARA is more than just a wellness trends, it’s backed by scientific insight and global
                        research. Studies on structured water and molecular hydrogen highlight their powerful roles.
                    </div>
                </div>
            </div>

            <div class="relative">
                <div ref="sliderTrack" class="flex gap-[72px] mt-[40px] md:mt-[100px] scroll-smooth overflow-hidden">
                    <div v-for="(item, index) in slides" :key="index"
                        class="w-[100%] md:w-[30%] flex-shrink-0 flex flex-col gap-[24px] bg-[#E4EDED] p-[40px]">
                        <div class="text-[24px] text-[#203D4D] text-center">{{ item.title }}</div>
                        <img :src="item.image" :alt="item.title" class="w-full" />
                    </div>
                </div>

                <div class="w-full flex items-center gap-[32px] mt-[40px] md:mt-[100px]">
                    <div class="w-full md:w-[90%] flex items-center md:gap-[32px]">
                        <hr v-for="(item, index) in [0, 1, 2]" :key="'indicator-' + index" :class="[
                            'w-[33%] border',
                            currentIndex === index ? 'border-[#203D4D]' : 'border-[#C4CFD2]'
                        ]" />
                    </div>
                    <div class="hidden md:flex items-center gap-[32px] w-[10%]">
                        <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer transition" :class="[
                            currentIndex === 0 || isScrolling ? 'pointer-events-none opacity-20' : '',
                        ]" @click="prevSlide" />
                        <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer transition" :class="[
                            currentIndex === 2 || isScrolling ? 'pointer-events-none opacity-20' : '',
                        ]" @click="nextSlide" />
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
import Banner from '@/assets/images/BannerResearch.png';
import Research1 from '@/assets/images/Research1.png';
import Research2 from '@/assets/images/Research2.png';
import Research3 from '@/assets/images/Research3.png';
import Research4 from '@/assets/images/Research4.png';
import Research5 from '@/assets/images/Research5.png';
import Research6 from '@/assets/images/Research6.png';
import ProfileResearch1 from '@/assets/images/ProfileResearch1.png';
import ProfileResearch2 from '@/assets/images/ProfileResearch2.png';
import ProfileResearch3 from '@/assets/images/ProfileResearch3.png';
import ProfileResearch4 from '@/assets/images/ProfileResearch4.png';
import ProfileResearch5 from '@/assets/images/ProfileResearch5.png';
import ProfileResearch6 from '@/assets/images/ProfileResearch6.png';
import Certificate1 from '@/assets/images/certificate/NIE_ERBA3103563202500001-page-001.jpg';
import Certificate2 from '@/assets/images/certificate/NIE_ERBA3103563202500002-page-001.jpg';
import Certificate3 from '@/assets/images/certificate/NIE_ERBA3103563202500003-page-001.jpg';
import Certificate4 from '@/assets/images/certificate/NIE_ERBA3103563202500004-page-001.jpg';
import Certificate5 from '@/assets/images/certificate/Product Attachment PT ELEMENTIS SMART TECHNOLOGIES-00120273000225-page-001.jpg';
import Certificate6 from '@/assets/images/certificate/English Ver Sertifikat LSPro - PT. Elementis Smart Technologies-page-001.jpg';
import LongevityClub from '~/page-section/LongevityClub.vue';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import ArrowRightWhite from "@/assets/icons/ArrowRightWhite.svg";
import BgWave from '@/assets/images/WaveVertical.svg'
import ListBlack from '@/assets/icons/ListBlack.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';

const bannerRef = ref<HTMLElement | null>(null)
const textContainerRef = ref<HTMLElement | null>(null)
const research1Ref = ref<HTMLElement | null>(null)
const research2Ref = ref<HTMLElement | null>(null)
const research3Ref = ref<HTMLElement | null>(null)
const research4Ref = ref<HTMLElement | null>(null)
const research5Ref = ref<HTMLElement | null>(null)
const research6Ref = ref<HTMLElement | null>(null)
const sliderTrack = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

const bannerStyle = {
    backgroundImage: `url(${Banner})`
}

const slides = [
    {
        image: Certificate1,
        title: 'BPOM OKEARA 500ml',
        url: 'https://drive.google.com/file/d/1C6L0jsjrB8oHlaNNLjr4sib4V3jPiFw0/view'
    },
    {
        image: Certificate2,
        title: 'BPOM OKEARA 12lt',
        description: 'Hydrogen water that helps slow aging by reducing stress and inflammation in cells'
    },
    {
        image: Certificate3,
        title: 'BPOM OKEARA Blue 500ml',
        description: 'OKEARA help you boosts your energy, helping you feel more refreshed and less tired'
    },
    {
        image: Certificate4,
        title: 'BPOM OKEARA Blue 12lt',
        description: 'Supports detoxification by helping remove toxins & impurities bloodstream'
    },
    {
        image: Certificate5,
        title: 'Halal',
        description: 'Supports detoxification by helping remove toxins & impurities bloodstream'
    },
    {
        image: Certificate6,
        title: 'SNI',
        description: 'OKEARA Hydrogen water helps fight tiredness and boosts your energy'
    },
]

const isScrolling = ref(false)

const nextSlide = () => {
    if (isScrolling.value || currentIndex.value >= 4) return
    isScrolling.value = true
    currentIndex.value += 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.35
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}

const prevSlide = () => {
    if (isScrolling.value || currentIndex.value <= 0) return
    isScrolling.value = true
    currentIndex.value -= 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.35
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    if (research1Ref.value) {
        gsap.from(research1Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research1Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }

    if (research2Ref.value) {
        gsap.from(research2Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research2Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }

    if (research3Ref.value) {
        gsap.from(research3Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research3Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }

    if (research4Ref.value) {
        gsap.from(research4Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research4Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }

    if (research5Ref.value) {
        gsap.from(research5Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research5Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }

    if (research6Ref.value) {
        gsap.from(research6Ref.value, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: research6Ref.value,
                start: 'top 80%',
                toggleActions: 'play none none reset',
            },
        })
    }
})
</script>

<style scoped>
img {
    will-change: transform;
}
</style>
