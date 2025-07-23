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
                            Imprint • Imprint • Imprint •
                        </div>
                        <div class="marquee-text">
                            Imprint • Imprint • Imprint •
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="fqa-container w-full flex items-start justify-center gap-[24px]">
                <div class="md:w-[70%] flex flex-col gap-[40px] md:gap-[100px]">
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Introduction</div>
                        <div class="flex flex-col items-start gap-[32px]">
                            <div class="text-[#203D4D] text-[16px] md:text-[20px]">
                                Description
                            </div>
                            <div
                                class=" text-[#203D4D] text-[14px] md:text-[18px] leading-[36px] border-b border-[#203D4D] w-full pb-[32px]">
                                Company Name: ELEMENTIS SMART TECHNOLOGIES
                                <br/>
                                Legal Structure: PT
                                <br/>
                                Business Registration Number: 2202240024465
                                <br/>
                                Tax Identification Number: 03.787.359.3-907.000
                                <br/>
                                Registered Office: Banjar Kemenuh, Jalan Insinyur Sutami, Desa/Kelurahan, Kemenuh, Kec.
                                Sukawati, Kab. Gianyar, Provinsi Bali, Kode Pos: 80582
                                <br/>
                                Contact Email: sales@okeara.com
                                <br/>
                                Phone Number: +62 811-3831-4651
                                <br/>
                                Website: www.okeara.com
                            </div>
                        </div>
                    </div>
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
                    <div class="text-[#203D4D] text-[20px] leading-[30px]">
                        Can’t find what you’re looking for? <br>
                        Contact: sales@okeara.com
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
        title: 'Responsible for Content',
        desc: "<p>Ida Bagus Nyoman Devina Yesa, Director.</p>",
        open: false,
    },
    {
        title: 'Disclaimer',
        desc: "<p>The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, suitability, or availability of the information.</li></ul>",
        open: false,
    },
    {
        title: 'External Links',
        desc: "<p>Our website may contain links to external websites. We have no control over the content of those sites and cannot be held responsible for their accuracy or legality. The inclusion of any links does not imply a recommendation or endorsement of the views expressed in them.</p>",
        open: false,
    },
    {
        title: 'Data Protection',
        desc: "<p>For information on how we handle your personal data, please refer to our Privacy Policy.</p>",
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
