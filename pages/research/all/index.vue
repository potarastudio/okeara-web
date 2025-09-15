<template>
    <div class="overflow-x-hidden">
        <div
            class="w-full relative bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] pt-[120px] lg:px-[64px] lg:py-[120px] flex flex-col gap-[52px] md:gap-[80px]">
            <img :src="BgWave" alt="BgWave" class="hidden lg:block absolute top-[40dvh] left-[-8rem] z-1">
            <img :src="BgWave" alt="BgWave" class="hidden lg:block absolute top-[155dvh] right-[-5rem] z-1">
            <div class="w-full flex flex-col gap-[40px] z-10">
                <div class="w-full flex items-center gap-[8px]">
                    <RouterLink to="/research" class="text-[18px] text-[#889494] leading-[26px] cursor-pointer">Research
                    </RouterLink>
                    <img :src="CaretRightGrey" alt="CaretRightGrey">
                    <div class="text-[18px] text-[#203D4D] leading-[26px]">See All</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row items-start justify-between gap-[42px] lg:gap-auto">
                    <div class="flex items-center gap-[10px] md:gap-[20px]">
                        <img :src="ListBlack" alt="ListBlack">
                        <div class="text-[#203D4D] text-[18px] leading-[24px]">
                            Research
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-start justify-end gap-[24px] md:gap-[90px] lg:w-[65%]">
                        <div
                            class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[41.6px] md:leading-[58px] mt-[-10px] w-[85%] md:w-[50%]">
                            Let’s See Research to Support OKEARA Water
                        </div>
                        <div
                            class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18.2px] md:leading-[24px] md:w-[40%]">
                            OKEARA Water isn’t just a wellness trend it’s backed by scientific insights and global
                            research.
                            Studies on structured water and molecular hydrogen highlight their powerful roles
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-row items-stretch flex-wrap gap-[24px] lg:gap-x-[40px] lg:gap-y-[80px]">
                <div v-for="(researchItem, index) in researches" :key="researchItem.id"
                    :ref="el => researchRefs[index].value = el as HTMLElement" @click="goToResearch(researchItem.id)"
                    class="bg-[#E4EDED] w-full lg:w-[48%] p-[20px] md:p-[40px] flex items-stretch gap-[20px] cursor-pointer z-10">
                    <img :src="researchItem.img" alt="Research1" class="h-[5rem] md:h-[9rem]">
                    <div class="flex flex-col items-start gap-[12px] md:gap-[24px]">
                        <div class="flex items-center gap-[8px]">
                            <div class="text-black text-[12px] md:text-[18px]">{{ researchItem.author }}</div>
                            <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                            <div class="text-[#838383] text-[12px] md:text-[18px]">{{ researchItem.date }}</div>
                        </div>
                        <div class="flex flex-col items-start gap-[12px]">
                            <div
                                class="text-[#203D4D] text-[16px] md:text-[26px] leading-[120%] md:leading-[100%] line-clamp-1">
                                {{ researchItem.title }}
                            </div>
                            <div class="hidden text-[#203D4D] opacity-77 text-[18px] leading-[26px] md:line-clamp-2">
                                {{ researchItem.desc }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center gap-[32px] md:px-[64px]">
                <div class="w-full md:w-[90%] flex items-center gap-[12px] md:gap-[32px]">
                    <hr v-for="(item, index) in [0, 1, 2, 4]" :key="'indicator-' + index" :class="[
                        'w-[25%] border',
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
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Research1 from '@/assets/images/Research1.png';
import Research2 from '@/assets/images/Research2.png';
import Research3 from '@/assets/images/Research3.png';
import Research4 from '@/assets/images/Research4.png';
import Research5 from '@/assets/images/Research5.png';
import Research6 from '@/assets/images/Research6.png';
import Research7 from '@/assets/images/Research7.png';
import Research8 from '@/assets/images/Research8.png';
import BgWave from '@/assets/images/WaveVertical.svg';
import CaretRightGrey from '@/assets/icons/CaretRightGrey.svg';
import ListBlack from '@/assets/icons/ListBlack.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';

const researchRefs = Array.from({ length: 8 }, () => ref<HTMLElement | null>(null))
const currentIndex = ref(0)
const isScrolling = ref(false)

const router = useRouter()

const goToResearch = (id: number) => {
    router.push(`/research/${id}`)
}

const researches = [
    {
        id: 1,
        img: Research1,
        author: 'Gabriele Carullo',
        date: 'Jan 12, 2023',
        title: 'Hydrogen’s Antioxidant Properties',
        desc: 'Molecular hydrogen (H₂) has been shown to act as a potent antioxidant, neutralizing free radicals in the body. This helps reduce oxidative stress, which is linked to aging, inflammation, and various chronic diseases.',
    },
    {
        id: 2,
        img: Research2,
        author: 'Gerald Pollack',
        date: 'Sep 25, 2023',
        title: 'Structured Water for Better Absorption',
        desc: 'Structured water, or water with a specific molecular arrangement, is thought to be more readily absorbed by the cells. This can improve overall hydration and aid in nutrient transportation throughout the body.',
    },
    {
        id: 3,
        img: Research3,
        author: 'Yan Tian',
        date: 'Dec 21, 2021',
        title: 'Hydrogen and Inflammation',
        desc: 'Research suggests that hydrogen (H₂) can regulate mitochondrial function by reducing free radical generation and controlling oxidative stress through transcriptional regulation of Nrf2. Additionally, H₂ may inhibit inflammatory proteins and prevent apoptosis, offering potential benefits for various conditions. Emerging studies propose that inhaling H₂ could also provide a promising approach to alleviating respiratory diseases like COVID-19.',
    },
    {
        id: 4,
        img: Research4,
        author: 'Kaixiang Zhou',
        date: 'Oct 07, 2024',
        title: 'Hydrogen Water and Athletic Performance',
        desc: 'Some studies indicate that hydrogen water may improve recovery times and reduce muscle fatigue in athletes, owing to its ability to decrease oxidative damage during exercise.',
    },
    {
        id: 5,
        img: Research5,
        author: 'Toshio Mikami',
        date: 'Sep 01, 2019',
        title: 'Hydrogen Water Reduces Fatigue and Boosts Endurance During Exercise',
        desc: 'Drinking hydrogen-infused water (H₂ water) before exercise significantly reduces fatigue and improves endurance, according to a randomized, double-blind study. In both non-trained and trained participants, H₂ water decreased fatigue and enhanced performance, demonstrating its potential as a powerful antioxidant that helps combat exercise-induced oxidative stress.',
    },
    {
        id: 6,
        img: Research6,
        author: 'Jesus Gonzalez',
        date: 'Sep 25, 2023',
        title: 'The Consciousness of Water: Insights from Masaru Emoto’s Research',
        desc: 'Masaru Emoto’s experiments show that water can change its molecular structure in response to human emotions, thoughts, and words. His work highlights the potential impact of intention and consciousness on water, sparking interest in the connection between energy, water, and wellness.',
    },
    {
        id: 7,
        img: Research7,
        author: 'Selena Yue',
        date: 'Sep 01, 2019',
        title: 'Overcoming Bali Belly: Your Essential Guide to Staying Healthy in Bali',
        desc: 'Bali Belly is a colloquial term for gastroenteritis, a common ailment characterized by symptoms such as diarrhea, stomach cramps, nausea, and dehydration. It usually occurs',
    },
    {
        id: 8,
        img: Research8,
        author: 'Matsumoto',
        date: 'Sep 25, 2023',
        title: 'The Hidden Language of Water: How Thoughts May Shape Reality',
        desc: 'His experiments showed water crystals forming beautifully under positive influence.',
    },
]

const nextSlide = () => {
    if (isScrolling.value || currentIndex.value >= 4) return
    isScrolling.value = true
    currentIndex.value += 1
}

const prevSlide = () => {
    if (isScrolling.value || currentIndex.value <= 0) return
    isScrolling.value = true
    currentIndex.value -= 1
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    researchRefs.forEach((r) => {
        if (r.value) {
            gsap.from(r.value, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: r.value,
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                },
            })
        }
    })
})
</script>