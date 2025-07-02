<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat bg-center w-full h-[100dvh] relative"
            style="background-position: left 50% top 22%;">
            <div class="w-full h-[50dvh] absolute left-0 bottom-0"
                style="background: linear-gradient(0deg, #203D4D 0%, rgba(32, 61, 77, 0.00) 100%)" />
            <div
                class="absolute left-0 bottom-[40px] md:bottom-[25px] text-[#EDF3F3] text-[96px] md:text-[144px] font-light">
                <div ref="textBannerContainerRef" class="overflow-hidden w-full whitespace-nowrap">
                    <div ref="marqueeWrapper" class="inline-flex will-change-transform">
                        <div class="marquee-text">
                            Frequently Asked Questions • Frequently Asked Questions • Frequently Asked Questions •
                        </div>
                        <div class="marquee-text">
                            Frequently Asked Questions • Frequently Asked Questions • Frequently Asked Questions •
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="faq-container w-full flex items-start justify-between gap-[24px]">
                <div class="hidden md:block">
                    <div class="sidebar-sticky">
                        <div class="flex flex-col items-start gap-[22px]">
                            <div v-for="(item, idx) in faqSections" :key="item.title"
                                class="text-[#203D4D] text-[18px] leading-[16px] cursor-pointer transition-opacity"
                                :style="{ opacity: activeSection === idx ? 1 : 0.5 }" @click="scrollToSection(idx)">
                                {{ item.title }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-[65%]">
                    <div v-for="(item, idx) in faqSections" :key="item.title" :ref="sectionRefs[idx]" class="mb-[64px]">
                        <div class="text-[#203D4D] text-[26px] leading-[16px]">
                            {{ item.title }}
                        </div>
                        <div class="w-full mt-[20px] md:mt-[40px] flex flex-col items-start">
                            <div v-for="(item, index) in idx === 0 ? items : idx === 1 ? items2 : idx === 2 ? items3 : idx === 3 ? items4 : idx === 4 ? items5 : []"
                                :key="index" class="relative flex flex-col border-b border-[#203D4D] w-full">
                                <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                    @click="
                                        idx === 0 ? toggleCollapse(index) :
                                            idx === 1 ? toggleCollapseLibero(index) :
                                                idx === 2 ? toggleCollapseAliquam(index) :
                                                    idx === 3 ? toggleCollapseViverra(index) :
                                                        idx === 4 ? toggleCollapsePellentesque(index) :
                                                            console.log('test');
                                    ">
                                    <div class="flex items-start justify-between gap-[24px] w-full">
                                        <div class="flex flex-col w-[90%]">
                                            <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                            </div>
                                            <div :id="`desc-${idx === 1 ? 'libero-' : idx === 2 ? 'aliquam-' : idx === 3 ? 'viverra-' : idx === 3 ? 'pellentesque-' : ''}${index}`"
                                                class="overflow-hidden" :style="{ height: 0, opacity: 0 }">
                                                <div
                                                    class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80">
                                                    {{ item.desc }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-[10%]">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line
                                                    :id="`plus-line-${idx === 1 ? 'libero-' : idx === 2 ? 'aliquam-' : idx === 3 ? 'viverra-' : idx === 3 ? 'pellentesque-' : ''}${index}`"
                                                    x1="12" y1="5" x2="12" y2="19" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-[#203D4D] text-[20px] leading-[30px] mt-[120px]">
                        Can’t find what you’re looking for? <br>
                        Contact: sales@OKEARA.co
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
import BannerOurWater from '@/assets/images/BannerOurWater.png'

import LongevityClub from '~/page-section/LongevityClub.vue'

gsap.registerPlugin(ScrollTrigger)

const bannerRef = ref<HTMLElement | null>(null)
const textBannerContainerRef = ref<HTMLElement | null>(null)
const marqueeWrapper = ref<HTMLElement | null>(null)

const bannerStyle = {
    backgroundImage: `url(${BannerOurWater})`,
}

const faqSections = [
    { title: 'Risus cursus duis' },
    { title: 'Egestas libero' },
    { title: 'Adipiscing Aliquam' },
    { title: 'Amet Viverra' },
    { title: 'Feugiat Pellentesque' },
]

const activeSection = ref(0)
const sectionRefs = faqSections.map(() => ref<HTMLElement | null>(null))

const items = ref([
    {
        title: 'What is OKEARA structured hydrogen water?',
        desc: 'OKEARA structured hydrogen water is water enhanced with extra hydrogen gas, which acts as powerful antioxidants that may help reduce oxidative stress in the body.',
        open: false,
    },
    {
        title: 'How does OKEARA structured hydrogen water improve hydration?',
        desc: 'The hydrogen molecules in OKEARA water can potentially improve hydration at a cellular level by reducing oxidative stress, making it beneficial for overall health.',
        open: false,
    },
    {
        title: 'Why is drinking OKEARA structured hydrogen water essential for overall hydration?',
        desc: 'OKEARA structured hydrogen water is free from additives and impurities, making it easily absorbed by the body. This helps in maintaining proper bodily functions, detoxification, healthy skin, physical performance, and cognitive function.',
        open: false,
    },
    {
        title: 'What bodily functions does proper hydration support?',
        desc: 'Proper hydration supports various bodily functions including digestion, nutrient absorption, circulation, and temperature regulation.',
        open: false,
    },
    {
        title: 'How does OKEARA structured hydrogen water help with detoxification?',
        desc: 'Drinking enough OKEARA structured hydrogen water helps flush out toxins and waste products from the body through urine and sweat.',
        open: false,
    },
    {
        title: 'Can drinking OKEARA structured hydrogen water improve skin health?',
        desc: 'Yes, proper hydration with OKEARA structured hydrogen water can improve skin elasticity, reduce the appearance of wrinkles, and give your skin a healthy glow.',
        open: false,
    },
])

const items2 = ref([
    {
        title: 'What impact does hydration have on cognitive function?',
        desc: 'Dehydration can impair cognitive function and mood. Drinking enough Okeara structured hydrogen water helps maintain focus, concentration, and overall mental performance.',
        open: false,
    },
    {
        title: 'Does OKEARA structured hydrogen water contain any impurities?',
        desc: 'No, OKEARA structured hydrogen water does not contain additives or impurities, ensuring it is easily absorbed by the body for optimal hydration.',
        open: false,
    },
    {
        title: 'What is structured water?',
        desc: 'Structured water is water with a more organized molecular arrangement, making it more easily absorbed by the body and offering enhanced hydration benefits.',
        open: false,
    },
    {
        title: 'How does structured water improve hydration?',
        desc: 'The organized molecular structure of structured water allows for better absorption and hydration at the cellular level.',
        open: false,
    },
    {
        title: 'What are the benefits of drinking structured water?',
        desc: 'Drinking structured water can improve energy levels, support better digestion, and promote overall health by optimizing hydration.',
        open: false,
    },
    {
        title: 'Do people feel different when drinking structured water?',
        desc: 'Yes, many people find that they feel more hydrated and energized when drinking structured water.',
        open: false,
    },
    {
        title: 'How much OKEARA structured hydrogen water should I drink daily?',
        desc: 'The organized molecular structure of structured water allows for better absorption and hydration at the cellular level.',
        open: false,
    },
])

const items3 = ref([
    {
        title: 'Will I want to drink more OKEARA structured hydrogen water initially?',
        desc: 'Yes, initially you may want to drink more OKEARA structured hydrogen water due to the saturation of the body with hydrogen, but your consumption level should return to normal after a few days.',
        open: false,
    },
    {
        title: 'Can my water needs vary when drinking OKEARA structured hydrogen water?',
        desc: "Yes, water needs can vary from person to person and should be individualized based on your body's requirements.",
        open: false,
    },
    {
        title: 'What is the biggest advantage of hydrogen (H2) in water?',
        desc: 'The biggest advantage of H2 is its small size, allowing it to penetrate cell membranes and clogged vessels, protecting mitochondria and DNA from oxidative stress caused by Reactive Oxygen Species (ROS).',
        open: false,
    },
    {
        title: 'How does H2 neutralize free radicals?',
        desc: 'One molecule of H2 neutralizes two molecules of hydroxyl radicals (OH), the most dangerous free radical for the body, forming water (H2O) in the process, making H2 a very effective antioxidant.',
        open: false,
    },
    {
        title: 'What additional benefits does H2 provide?',
        desc: 'H2 stimulates biological antioxidant enzymes, reducing oxidative stress in the body. It also functions as an anti-inflammatory, anti-allergic, and anti-apoptotic molecule and is involved in energy metabolism.',
        open: false,
    },
    {
        title: 'How does hydrogen (H2) compare to oxygen?',
        desc: 'Like oxygen, H2 plays a crucial role in life by participating in oxidation and reduction reactions, where oxygen is responsible for oxidation and hydrogen is responsible for reduction.',
        open: false,
    },
    {
        title: 'What protection does OKEARA packaging offer for hydrogen water?',
        desc: 'OKEARA packaging protects water from ultraviolet and electromagnetic radiation, preserves its structure, and ensures no contact with hazardous plastics, detergent residues, or BPA.',
        open: false,
    },
])

const items4 = ref([
    {
        title: 'What materials are used in your packaging?',
        desc: 'Our carton packs are made from paperboard, which is a renewable resource. They have a low carbon footprint compared to other packaging materials, making them a more environmentally friendly choice.',
        open: false,
    },
    {
        title: 'Why is the packaging for OKEARA structured hydrogen water important?',
        desc: "OKEARA's packaging keeps the water's hydrogen content intact, prevents oxidation, and maintains the health benefits of the water by avoiding contamination.",
        open: false,
    },
    {
        title: 'How is the water purified?',
        desc: 'The water is purified using reverse osmosis filters that remove impurities and bacteria. After purification, the water is structured by a drip process.',
        open: false,
    },
    {
        title: 'How is hydrogen added to the water?',
        desc: 'The purified and structured water is then saturated with atomic hydrogen. The final product is pure, structured water enriched with hydrogen.',
        open: false,
    },
    {
        title: 'What are the benefits of this enriched water?',
        desc: 'This method provides pure water that retains structural integrity and is enriched with hydrogen, offering additional health benefits.',
        open: false,
    },
    {
        title: 'What measures do you take for quality control?',
        desc: 'We perform constant quality control, conduct laboratory tests, timely service our equipment, change filters, work closely with customers, receive feedback, and address any issues.',
        open: false,
    },
    {
        title: 'How do you ensure the taste of your water remains high?',
        desc: 'We focus on organoleptic properties, ensuring our water is not only pure but also the most tasty.',
        open: false,
    },
])

const items5 = ref([
    {
        title: 'How do you ensure the purity and safety of OKEARA structured hydrogen water?',
        desc: 'We maintain purity and safety by creating technology that ensures this and constantly monitors potentially dangerous points to prevent bacteriological contamination. ',
        open: false,
    },
    {
        title: 'What standards do you follow to ensure safety and quality?',
        desc: "We follow ISO and HACCP standards to ensure the highest levels of safety and quality. ISO standards ensure quality, safety, and efficiency, while HACCP (Hazard Analysis Critical Control Point) standards are systematic preventive approaches to food safety.",
        open: false,
    },
    {
        title: 'How do you prevent bacteriological contamination?',
        desc: 'We prevent bacteriological contamination by constantly monitoring potentially dangerous points and ensuring they are always under control.',
        open: false,
    },
    {
        title: 'What are the health benefits of OKEARA structured hydrogen water?',
        desc: 'OKEARA structured hydrogen water offers numerous health benefits including:',
        open: false,
    },
])

const handleScroll = () => {
    const scrollY = window.scrollY
    let found = 0
    sectionRefs.forEach((refEl, idx) => {
        const el = Array.isArray(refEl.value) ? refEl.value[0] : refEl.value
        if (el && typeof el.getBoundingClientRect === 'function') {
            const rect = el.getBoundingClientRect()
            if (rect.top + window.scrollY - 140 <= scrollY) {
                found = idx
            }
        }
    })
    activeSection.value = found
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

onMounted(() => {
    const sidebar = document.querySelector('.sidebar-sticky')
    const container = document.querySelector('.faq-container')

    ScrollTrigger.create({
        trigger: container,
        start: 'top top+=120',
        end: 'bottom 10%',
        pin: sidebar,
        pinSpacing: false,
        markers: false,
        scrub: false,
    })
})

const scrollToSection = (idx: number) => {
    const el = sectionRefs[idx].value
    if (el) {
        window.scrollTo({
            top: el.offsetTop - 100,
            behavior: 'smooth',
        })
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

const toggleCollapseLibero = (index: number) => {
    const item = items2.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-libero-${index}`)
    const verticalLine = document.querySelector(`#plus-line-libero-${index}`)

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

const toggleCollapseAliquam = (index: number) => {
    const item = items3.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-aliquam-${index}`)
    const verticalLine = document.querySelector(`#plus-line-aliquam-${index}`)

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

const toggleCollapseViverra = (index: number) => {
    const item = items4.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-viverra-${index}`)
    const verticalLine = document.querySelector(`#plus-line-viverra-${index}`)

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

const toggleCollapsePellentesque = (index: number) => {
    const item = items5.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-pellentesque-${index}`)
    const verticalLine = document.querySelector(`#plus-line-pellentesque-${index}`)

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
        textBannerContainerRef.value,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
        }
    )

    const wrapper = marqueeWrapper.value
    if (!wrapper) return

    if (wrapper.children.length < 2) {
        wrapper.innerHTML += wrapper.innerHTML
    }

    const contentWidth = wrapper.scrollWidth / 2
    let currentX = 0
    let direction = 1

    gsap.ticker.add(() => {
        currentX -= 1 * direction
        if (currentX <= -contentWidth) currentX = 0
        if (currentX >= 0) currentX = -contentWidth
        gsap.set(wrapper, { x: currentX })
    })

    ScrollTrigger.create({
        trigger: bannerRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate(self) {
            direction = self.direction === 1 ? 1 : -1
        },
    })
})
</script>
