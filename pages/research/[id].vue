<template>
    <div class="overflow-x-hidden">
        <div
            class="w-full relative bg-[#EDF3F3] px-[24px] py-[40px] lg:p-[40px] pt-[120px] lg:px-[64px] lg:py-[120px] flex flex-col gap-[42px] lg:gap-[40px]">
            <img :src="BgRectangle" alt="BgRectangle" class="hidden lg:block absolute top-[40dvh] left-0 z-1">
            <img :src="BgRectangle" alt="BgRectangle" class="hidden lg:block absolute top-[130dvh] right-0 z-1">
            <div class="w-full flex items-center gap-[8px]">
                <RouterLink to="/research" class="text-[18px] text-[#889494] leading-[26px] cursor-pointer">Research
                </RouterLink>
                <img :src="CaretRightGrey" alt="CaretRightGrey">
                <RouterLink to="/research/all" class="text-[18px] text-[#889494] leading-[26px] cursor-pointer">See All
                </RouterLink>
                <img :src="CaretRightGrey" alt="CaretRightGrey">
                <div class="text-[18px] text-[#203D4D] leading-[26px]">Research Detail</div>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-stretch gap-[40px]">
                <div class="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:w-[70%]">
                    <div class="text-[32px] lg:text-[48px] text-[#203D4D] leading-[41.6px] lg:leading-[58px] font-light">
                        Hydrogen Water Reduces Fatigue and Boosts Endurance During Exercise
                    </div>
                    <div class="flex flex-col gap-[24px] lg:gap-[8px]">
                        <div class="text-[14px] lg:text-[18px] text-[#203D4D] font-regular opacity-77">
                            Drinking hydrogen-infused water (H₂ water) before exercise significantly reduces fatigue and
                            improves endurance, according to a randomized, double-blind study. In both non-trained and
                            trained participants, H₂ water decreased fatigue and enhanced performance, demonstrating its
                            potential as a powerful antioxidant that helps combat exercise-induced oxidative stress.
                        </div>
                        <div class="flex items-center gap-[8px]">
                            <div class="text-[#838383] text-[12px]">Research by Toshio Mikami</div>
                            <div class="w-[4px] h-[4px] rounded-full bg-[#A3BABA]" />
                            <div class="text-[#838383] text-[12px]">Published Sep 01, 2019</div>
                        </div>
                    </div>
                    <img :src="ResearchDetailImage" alt="ResearchDetailImage" class="w-full" />
                    <div class="text-[14px] lg:text-[18px] text-[#203D4D] font-regular opacity-77">
                        Acute physical exercise increases reactive oxygen species in skeletal muscle, leading to tissue
                        damage and fatigue. Molecular hydrogen (H2) acts as a therapeutic antioxidant directly or
                        indirectly by inducing antioxidative enzymes. Here, we examined the effects of drinking H2 water
                        (H2-infused water) on psychometric fatigue and endurance capacity in a randomized, double-blind,
                        placebo-controlled fashion. In Experiment 1, all participants drank only placebo water in the
                        first cycle ergometer exercise session, and for comparison they drank either H2 water or placebo
                        water 30 min before exercise in the second examination. In these healthy non-trained
                        participants (n = 99), psychometric fatigue judged by visual analogue scales was significantly
                        decreased in the H2 group after mild exercise. When each group was divided into 2 subgroups, the
                        subgroup with higher visual analogue scale values was more sensitive to the effect of H2. In
                        Experiment 2, trained participants (n = 60) were subjected to moderate exercise by cycle
                        ergometer in a similar way as in Experiment 1, but exercise was performed 10 min after drinking
                        H2 water. Endurance and fatigue were significantly improved in the H2 group as judged by maximal
                        oxygen consumption and Borg’s scale, respectively. Taken together, drinking H2 water just before
                        exercise exhibited anti-fatigue and endurance effects
                    </div>
                    <div class="text-[16px] lg:text-[24px] text-[#203D4D] font-regular">
                        Possible Continuation
                    </div>
                    <div class="text-[14px] lg:text-[18px] text-[#203D4D] font-regular opacity-77">
                        These findings suggest that molecular hydrogen (H₂), when consumed as hydrogen-infused water,
                        may help reduce oxidative stress and fatigue associated with physical activity. By acting as a
                        selective antioxidant, H₂ not only neutralizes harmful reactive oxygen species but may also
                        trigger the body’s own antioxidative defenses, creating a dual protective effect. Beyond
                        exercise performance, previous studies have linked H₂ consumption to potential benefits in
                        recovery, inflammation reduction, and overall cellular health. Its small molecular size allows
                        hydrogen to easily diffuse across cell membranes, reaching mitochondria and nuclei where
                        oxidative stress often begins. This unique property makes H₂ a promising candidate for sports
                        science, rehabilitation, and even broader wellness applications.
                    </div>
                </div>
                <div class="border-t lg:border-l border-[#122E3D] w-full lg:w-[1px] opacity-30" />
                <div class="flex flex-col gap-[28px] lg:gap-[32px] w-full lg:w-[30%]">
                    <div class="text-[24px] text-[#203D4D] font-light">Latest Research</div>
                    <div class="flex flex-col gap-[24px]">
                        <div v-for="research in researches" :key="research.id"
                            class="bg-[#E4EDED] flex gap-[20px] p-[24px] cursor-pointer"
                            @click="goToResearch(research.id)">
                            <img :src="research.img" :alt="research.title" class="w-[3rem] md:w-[5rem] object-cover" />
                            <div class="flex flex-col gap-[16px]">
                                <div class="text-[16px] lg:text-[20px] text-[#203D4D] font-light leading-[28px] line-clamp-1 lg:line-clamp-2">
                                    {{ research.title }}
                                </div>
                                <div class="text-[#838383] text-[12px] lg:text-[16px] flex items-center gap-[8px]">
                                    <div>{{ research.date }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import ResearchDetailImage from '@/assets/images/research-detail.png';
import Research1 from '@/assets/images/Research1.png';
import Research2 from '@/assets/images/Research2.png';
import Research3 from '@/assets/images/Research3.png';
import Research4 from '@/assets/images/Research4.png';
import Research5 from '@/assets/images/Research5.png';
import Research6 from '@/assets/images/Research6.png';
import BgRectangle from '@/assets/images/BgRectangle.svg';


import CaretRightGrey from '@/assets/icons/CaretRightGrey.svg';
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
]
</script>