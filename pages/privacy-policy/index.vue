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
                            Privacy Policy • Privacy Policy • Privacy Policy •
                        </div>
                        <div class="marquee-text">
                            Privacy Policy • Privacy Policy • Privacy Policy •
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
                                class=" text-[#203D4D] text-[14px] md:text-[18px] border-b border-[#203D4D] w-full pb-[32px]">
                                At OKEARA, your privacy is of utmost importance to us. This Privacy Policy outlines how
                                we collect, use, disclose, and protect your personal information when you visit our
                                website and make purchases through the OKEARA web shop. By using our website and
                                services, you agree to the collection and use of information as described in this
                                policy.
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
        title: 'Information We Collect',
        desc: '<h2>1 Personal Information</h2><p>When you make a purchase or create an account, we collect the following personal information:</p><ul><li>• Name</li><li>• Email address</li><li>• Billing and shipping addresses</li><li>• Phone number</li><li>• Payment details (processed securely by third-party providers)</li></ul><br/><h2>2 Non-Personal Information</h2><p>We collect certain non-personal information automatically when you visit our website, such as:</p><ul><li>• IP address</li><li>• Browser type and version</li><li>• Pages you view on the site</li><li>• Time spent on each page</li><li>• Referring website or search engine</li></ul>',
        open: false,
    },
    {
        title: 'How We Use Your Information',
        desc: "<h2>1 To Process and Deliver Orders</h2><ul><li>We use your contact and payment details to process your orders and ensure successful delivery.</li></ul><br/><h2>2 Customer Support</h2><ul><li>Your information helps us to respond to customer service inquiries and provide after-sales support.</li></ul><br/><h2>3 Marketing and Communication</h2><ul><li>We may send you promotional emails about new products, offers, or events. You can opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails.</li></ul><br/><h2>4 Improving Our Website</h2><ul><li>Non-personal information is used to analyze trends, monitor site performance, and improve our website's user experience.</li></ul>",
        open: false,
    },
    {
        title: 'Sharing Your Information',
        desc: "<h2>1 Service Providers</h2><p>We work with trusted third-party service providers who help us operate the website, process payments, and deliver orders. These providers only receive the personal information necessary to perform their services.</p><br/><h2>2 Legal Requirements</h2><p>We may disclose your personal information if required by law, for example, to comply with legal proceedings or protect our rights.</p>",
        open: false,
    },
    {
        title: 'Data Security',
        desc: 'We are committed to protecting your personal information. We implement various security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. Payment information is encrypted and handled by secure third-party payment processors.',
        open: false,
    },
    {
        title: 'Cookies',
        desc: "<p>Our website uses cookies to enhance your browsing experience and to provide essential functionality. Cookies are small data files stored on your device that help us recognize you and remember your preferences during future visits.</p><br/><p>For detailed information on the types of cookies we use, their purpose, and how you can manage or disable them, please refer to our Cookie Policy.</p>",
        open: false,
    },
    {
        title: 'Your Rights',
        desc: "<p>You have the following rights regarding your personal data:</p><ul><li>• Access and Correction: You can request access to or correction of your personal information at any time by contacting us at [Contact Email].</li><li>• Deletion: You can request that we delete your personal information, provided that it is no longer necessary for the purpose for which it was collected.</li><li>• Data Portability: You may request a copy of your personal data in a portable format.</li><li>• Marketing Opt-Out: You may opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us.</li></ul>",
        open: false,
    },
    {
        title: 'Third-Party Links',
        desc: "<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of other websites. We encourage you to read the privacy policies of any linked websites you visit.</p>",
        open: false,
    },
    {
        title: 'Children’s Privacy',
        desc: "<p>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete it.</p>",
        open: false,
    },
    {
        title: 'Changes to This Privacy Policy',
        desc: "<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date at the top will be updated. Please review this policy periodically to stay informed of any changes.</p>",
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
