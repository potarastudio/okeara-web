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
            <div class="fqa-container w-full flex items-start justify-between gap-[24px]">
                <!-- <div class="hidden md:block">
                    <div class="sidebar-sticky">
                        <div class="flex flex-col items-start gap-[22px]">
                            <div v-for="(item, idx) in faqSections" :key="item.title"
                                class="text-[#203D4D] text-[18px] leading-[16px] cursor-pointer transition-opacity"
                                :style="{ opacity: activeSection === idx ? 1 : 0.5 }" @click="scrollToSection(idx)">
                                {{ item.title }}
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="md:w-[100%]">
                    <div class="w-full flex flex-col items-start">
                        <div v-for="(item, index) in items" :key="index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapse(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
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
        title: 'What is OKEARA UltraLight Hydrogen Water?',
        desc: '<p>A unique water selected drop by drop through magnetic-vortex filtration and enriched with  molecular hydrogen for deep cellular hydration and a strong antioxidant effect.</p>',
        open: false,
    },
    {
        title: 'Why is low surface tension important?',
        desc: "<p>Thanks to its minimal surface tension, our water 'glides' through cell membranes without  resistance, instantly delivering moisture and nutrients inside cells, reducing strain on the body.</p>",
        open: false,
    },
    {
        title: 'How is OKEARA produced?',
        desc: "<ol><li>1. Deep purification (reverse osmosis)</li><li>2. Magnetic-vortex filtration and 'drop-by-drop' separation – we collect only the ultralight fraction</li><li>3. Saturation with molecular H₂ (800–1000 ppb) without electrolysis – preserving negative ORP for enhanced antioxidant action. </li></ol>",
        open: false,
    },
    {
        title: 'What are the key effects of taking OKEARA?',
        desc: "<ul><li>- Instant cellular hydration (low σ) </li><li>- Selective neutralization of free radicals</li><li>- Rapid detox and inflammation reduction </li><li>- Accelerated muscle recovery and increased endurance. </li></ul>",
        open: false,
    },
    {
        title: 'How to consume OKEARA?',
        desc: '500 ml in the morning (on an empty stomach), 500 ml during the day, and 500 ml in the evening in small sips to allow proper distribution and absorption.',
        open: false,
    },
    {
        title: 'When will I feel the effects?',
        desc: "<p>You will feel lightness, improved tone, and better sleep quality within 3–5 days of regular intake.</p>",
        open: false,
    },
    {
        title: 'Can it be consumed during pregnancy and breastfeeding?',
        desc: "<p>Yes, it is absolutely safe. Start with 250 ml per day and consult your doctor for dosage adjustment.</p>",
        open: false,
    },
    {
        title: 'Why is OKEARA more expensive than regular water?',
        desc: "<p>Investments in patented UltraLight filtration technology, scientific research, clinical validation, and eco-packaging deliver unmatched quality and effect.</p>",
        open: false,
    },
    {
        title: 'How should OKEARA be stored?',
        desc: "<p>Store in a dry, dark place at +5 to +25°C, away from direct sunlight.</p>",
        open: false,
    },
    {
        title: 'How can I verify its quality and certifications?',
        desc: "<p>All our certifications are available on our official website.</p>",
        open: false,
    },
    {
        title: 'What is the normal pH value of OKEARA?',
        desc: "<p>The pH ranges from 6.5 to 7.5 – close to physiological levels, ensuring gentle and safe hydration.</p>",
        open: false,
    },
    {
        title: 'What does ORP mean and why is it negative?',
        desc: "<p>ORP (oxidation-reduction potential) indicates antioxidant potential. A negative ORP (–300 to –450 mV) reflects a strong ability to neutralize free radicals.</p>",
        open: false,
    },
    {
        title: 'What is TDS and what is its value in OKEARA?',
        desc: "<p>TDS (total dissolved solids) is 5–15 ppm, confirming ultra-clean filtration and the absence of foreign impurities. </p>",
        open: false,
    },
    {
        title: 'How does low surface tension affect mineral absorption?',
        desc: "<p>Lower surface tension improves food and gastrointestinal mucosa wetting, accelerating dissolution and absorption of minerals and supplements.</p>",
        open: false,
    },
    {
        title: 'Can OKEARA be mixed with juices and smoothies?',
        desc: "<p>Yes, but to preserve the hydrogen concentration, it’s best to drink separately or add just before consumption.</p>",
        open: false,
    },
    {
        title: "What is Bovis Energy and what is OKEARA's value?",
        desc: "<p>Bovis Units measure 'life energy'. OKEARA shows ~12,000 BU, exceeding many natural sources.</p>",
        open: false,
    },
    {
        title: "How can Bovis Energy be tested at home?",
        desc: "<p>Using dowsing pendulums or special life energy detectors (available on marketplaces).</p>",
        open: false,
    },
    {
        title: "Does OKEARA contain any added preservatives?",
        desc: "<p>No, the water is completely natural with no preservatives, stabilizers, or chemical additives.</p>",
        open: false,
    },
    {
        title: "Can a subscription be gifted to someone else?",
        desc: "<p>Yes – when ordering, enter the recipient's delivery address and details. The system will activate the gift subscription automatically.</p>",
        open: false,
    },
    {
        title: "Can I pause or postpone my subscription?",
        desc: "<p>Yes, you can temporarily pause delivery in your personal account without penalties.</p>",
        open: false,
    },
    {
        title: "How can I change my delivery address?",
        desc: "<p>Before the next shipment, update the address in your personal account or notify us via Direct.</p>",
        open: false,
    },
    {
        title: "How to become an OKEARA ambassador?",
        desc: "<p>Message us in Direct with a brief description of your audience and wellness experience – we’ll contact you to discuss further.</p>",
        open: false,
    },
    {
        title: "Can I get a trial before subscribing?",
        desc: "<p>No, but you can start with a 1-month subscription.</p>",
        open: false,
    },
    {
        title: "What is the delivery cost?",
        desc: "<p>Delivery is included in the package price.</p>",
        open: false,
    },
    {
        title: "How to stay updated on news and offers?",
        desc: "<p>Subscribe to our Community – we regularly publish special deals.</p>",
        open: false,
    },
    {
        title: "How to stay updated on news and offers?",
        desc: "<p>Yes, in Dubai, Singapore, Europe, and Australia.</p>",
        open: false,
    },
    {
        title: "Is the water suitable for dietary nutrition?",
        desc: "<p>Yes – it supports metabolism, helps stabilize blood sugar, and reduces sugar cravings.</p>",
        open: false,
    },
    {
        title: "Can I drink the water during workouts?",
        desc: "<p>Yes – it helps maintain optimal fluid balance and speeds up recovery.</p>",
        open: false,
    },
    {
        title: "Does OKEARA boost energy levels?",
        desc: "<p>Yes – improved cellular metabolism and detox lead to more energy and mental clarity.</p>",
        open: false,
    },
    {
        title: "Are there any contraindications?",
        desc: "<p>None. For rare conditions – consult your doctor.</p>",
        open: false,
    },
    {
        title: "Can OKEARA be consumed daily?",
        desc: "<p>Yes, regular intake ensures consistent benefits.</p>",
        open: false,
    },
    {
        title: "How does OKEARA affect the skin?",
        desc: "<p>Improves internal hydration, boosts elasticity, and accelerates skin cell regeneration.</p>",
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
    gsap.registerPlugin(ScrollTrigger);

    const sidebar = document.querySelector('.sidebar-sticky')
    const container = document.querySelector('.faq-container')

    ScrollTrigger.create({
        trigger: container,
        start: 'top top+=120',
        end: 'bottom bottom',
        pin: sidebar,
        pinSpacing: false,
        markers: false,
        scrub: false,
    })

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
</script>
