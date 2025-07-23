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
                            Terms and Conditions • Terms and Conditions • Terms and Conditions •
                        </div>
                        <div class="marquee-text">
                            Terms and Conditions • Terms and Conditions • Terms and Conditions •
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
                                Welcome to the Bali.okeara.com web shop (the “Website”). The Website is operated by PT
                                ELEMENTIS SMART TECNOLOGIES, a company registered in Indonesia with its principal office
                                at Banjar Kemenuh, Jalan Insinyur Sutami, Desa/Kelurahan, Kemenuh, Kec. Sukawati, Kab.
                                Gianyar, Provinsi Bali, Kode Pos: 80582. These Terms and Conditions, our Privacy Policy,
                                and any other applicable policies (collectively, the “Terms”) apply exclusively to
                                customers residing in Bali areas. By accessing or purchasing from the Website, you
                                confirm that you are a resident of Bali and agree to be bound by these Terms. If you are
                                not a resident of Bali, you are not eligible to use the Website, place orders, or access
                                any prices, terms, or services. All prices, terms, and services on Bali.okeara.com are
                                available only to customers with residency in Bali. Please read these Terms carefully
                                before using our services.
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">General Provisions</div>
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
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Products and Availability</div>
                        <div v-for="(item, index) in itemsProduct" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseProduct(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-product-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-product-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Orders and Payments</div>
                        <div v-for="(item, index) in itemsOrder" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseOrder(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-order-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-order-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Shipping and Delivery</div>
                        <div v-for="(item, index) in itemsShipping" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseShipping(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-shipping-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-shipping-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Returns and Refunds</div>
                        <div v-for="(item, index) in itemsReturns" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseReturns(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-returns-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-returns-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Warranties and Liability</div>
                        <div v-for="(item, index) in itemsWarranties" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseWarranties(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-warranties-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-warranties-${index}`" x1="12" y1="5" x2="12"
                                                y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Customer Obligations</div>
                        <div v-for="(item, index) in itemsObligations" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseObligations(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-obligations-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-obligations-${index}`" x1="12" y1="5" x2="12"
                                                y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Intellectual Property</div>
                        <div v-for="(item, index) in itemsProperty" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseProperty(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-property-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-property-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-start gap-[40px]">
                        <div class="text-[#203D4D] text-[20px] md:text-[26px] leading-[100%]">Governing Law and Dispute Resolution
                        </div>
                        <div v-for="(item, index) in itemsGoverning" :key="'product_' + index"
                            class="relative flex flex-col border-b border-[#203D4D] w-full">
                            <div class="flex items-center justify-between py-[18px] md:py-[24px] cursor-pointer gap-[16px]"
                                @click="toggleCollapseGoverning(index);">
                                <div class="flex items-start justify-between gap-[24px] w-full">
                                    <div class="flex flex-col w-[90%]">
                                        <div class="text-[#203D4D] text-[16px] md:text-[20px]">{{ item.title }}
                                        </div>
                                        <div :id="`desc-governing-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div class="text-[#203D4D] text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] opacity-80"
                                                v-html="item.desc" />
                                        </div>
                                    </div>
                                    <div class="w-[10%] flex items-center justify-end">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#203D4D"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-governing-${index}`" x1="12" y1="5" x2="12" y2="19" />
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
        title: 'Eligibility',
        desc: '<p>You must be at least 18 years old or have parental/guardian consent to purchase goods or use services on this Website. Additionally, you must be a resident of Bali to be eligible. We reserve the right to verify your residency and cancel any orders or access if you do not meet this requirement.</p>',
        open: false,
    },
    {
        title: 'Amendments',
        desc: "<p>We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Website. Continued use of the Website following such changes will constitute your acceptance of the new Terms.</p>",
        open: false,
    },
])

const itemsProduct = ref([
    {
        title: 'Product Information',
        desc: '<p>We strive to ensure that all product descriptions, images, and prices are accurate. However, minor variations between the products displayed on the Website and the actual product may occur.</p>',
        open: false,
    },
    {
        title: 'Availability',
        desc: "<p>All products are subject to availability and are offered exclusively to customers residing in Bali. If a product is out of stock or otherwise unavailable after placing an order, we will inform you promptly and offer a refund or alternative product.</p>",
        open: false,
    },
    {
        title: 'Pricing',
        desc: "<p>All prices are displayed in Indonesian Rupiah (IDR) and include applicable taxes unless stated otherwise. Prices are available and applicable only to customers with residency in Bali. The system automatically converts prices based on the user's location or settings, using the current exchange rates, but access is restricted to Bali residents. Shipping fees are calculated separately at checkout and apply only for deliveries within Bali.</p>",
        open: false,
    },
])

const itemsOrder = ref([
    {
        title: 'Placing Orders',
        desc: '<p>To place an order, follow the steps on the Website and complete your payment. By placing an order, you confirm that all details provided are accurate, including your residency in Bali. We reserve the right to cancel any order if we determine that you are not a resident of Bali.</p>',
        open: false,
    },
    {
        title: 'Payment Methods',
        desc: "<p>We accept payments through secure third-party payment gateways (e.g., credit card, bank transfer, etc.). Full payment must be received before processing your order.</p>",
        open: false,
    },
    {
        title: 'Order Confirmation',
        desc: "<p>After your order is placed, you will receive an email confirmation. Please check your spam/junk folder if you do not receive this email.</p>",
        open: false,
    },
    {
        title: 'Order Cancellation',
        desc: "<p>Orders cannot be canceled automatically through the Website. If you wish to cancel your order, you must contact our sales team manually by using our Contact Form. We will confirm the cancellation once processed. Orders that have already been shipped cannot be canceled. Additionally, orders from non-Bali residents will be automatically canceled.</p>",
        open: false,
    },
])

const itemsShipping = ref([
    {
        title: 'Shipping Policy',
        desc: '<p>Our shipping policies, including processing times, delivery options, and shipping costs, are detailed separately on our Shipping Policy page and apply exclusively to deliveries within Bali areas. Please review the policy for complete information. Shipping and delivery services are not available outside Bali.</p>',
        open: false,
    },
    {
        title: 'Delivery Issues',
        desc: "<p>If a product is damaged upon delivery or the wrong item is received, you must notify us within 7 days. We will arrange a return, exchange, or refund where appropriate, provided the delivery was within Bali.</p>",
        open: false,
    },
])

const itemsReturns = ref([
    {
        title: 'Return and Refund Policy',
        desc: '<p>For detailed information on returns, exchanges, and refunds, please visit our Return and Refund Policy page. These policies apply only to customers residing in Bali.</p>',
        open: false,
    },
    {
        title: 'Refund Process',
        desc: "<p>Refunds will be issued to the original payment method, following the terms outlined in our Return and Refund Policy.</p>",
        open: false,
    },
])

const itemsWarranties = ref([
    {
        title: 'Product Warranty',
        desc: '<p>For Products Manufactured by OKEARA: Certain products sold on the Bali.okeara.com web shop are manufactured directly by OKEARA and come with an OKEARA Manufacturer’s Warranty. This warranty guarantees that these specific products are free from defects in materials and workmanship under normal use for a specified period from the date of purchase. The duration and details of the warranty for these products will be provided in the product description or accompanying documentation. This warranty is available only to customers residing in Bali.</p>',
        open: false,
    },
    {
        title: 'Coverage',
        desc: "<p>The warranty covers defects arising from normal use, ensuring that the product functions as intended.</p>",
        open: false,
    },
    {
        title: 'Exclusions',
        desc: "<p>It does not cover damages caused by misuse, accidents, unauthorized repairs, modifications, or regular wear and tear.</p>",
        open: false,
    },
    {
        title: 'Claim Process',
        desc: "<p>Customers can contact OKEARA directly at sales@okeara.com or +62 811-3831-4651 for warranty claims. Proof of purchase and a description of the defect may be required. If the claim is valid, OKEARA will repair, replace, or refund the product.</p>",
        open: false,
    },
    {
        title: 'For Products Not Manufactured by OKEARA',
        desc: "<p>Products sold on the Bali.okeara.com web shop that are not manufactured by OKEARA are covered by the manufacturer’s warranty of the respective brands. Warranty claims for these products will be handled according to the policies of the product’s original manufacturer and are available only to customers residing in Bali.</p><br/><p>OKEARA will assist customers by facilitating communication with the third-party manufacturer. Customers should contact OKEARA with the necessary details, and we will guide them through the warranty process.</p>",
        open: false,
    },
    {
        title: 'Limitation of Liability',
        desc: "<p>OKEARA shall not be liable for any indirect, incidental, or consequential damages arising from the use of this Website or the purchase of products, including but not limited to loss of profits, loss of data, or loss of business opportunity.</p>",
        open: false,
    },
    {
        title: 'Force Majeure',
        desc: "<p>We are not responsible for delays or failures in performance caused by circumstances beyond our control, including but not limited to natural disasters, governmental actions, or strikes.</p>",
        open: false,
    },
])

const itemsObligations = ref([
    {
        title: 'Account Information',
        desc: '<p>Customers are responsible for maintaining the confidentiality of their account and password and for restricting access to their devices. You must also ensure that your account information accurately reflects your residency in Bali.</p>',
        open: false,
    },
    {
        title: 'Compliance',
        desc: "<p>By using this Website, you agree to comply with all applicable laws, including but not limited to Indonesian consumer protection and e-commerce regulations, and confirm your residency in Bali.</p>",
        open: false,
    },
])

const itemsProperty = ref([
    {
        title: 'Description',
        desc: '<p>All content on the Website, including text, images, logos, and designs, is owned by OKEARA or licensed to us. You may not reproduce, distribute, or use any content without prior written consent from OKEARA.</p>',
        open: false,
    },
])

const itemsGoverning = ref([
    {
        title: 'Governing Law',
        desc: '<p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia.</p>',
        open: false,
    },
    {
        title: 'Dispute Resolution',
        desc: "<p>Any disputes arising out of or in connection with these Terms shall be settled amicably. If an amicable settlement cannot be reached, disputes will be submitted to the exclusive jurisdiction of the courts in Indonesia.</p>",
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

const toggleCollapseProduct = (index: number) => {
    const item = itemsProduct.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-product-${index}`)
    const verticalLine = document.querySelector(`#plus-line-product-${index}`)

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

const toggleCollapseOrder = (index: number) => {
    const item = itemsOrder.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-order-${index}`)
    const verticalLine = document.querySelector(`#plus-line-order-${index}`)

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

const toggleCollapseShipping = (index: number) => {
    const item = itemsShipping.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-shipping-${index}`)
    const verticalLine = document.querySelector(`#plus-line-shipping-${index}`)

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

const toggleCollapseReturns = (index: number) => {
    const item = itemsReturns.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-returns-${index}`)
    const verticalLine = document.querySelector(`#plus-line-returns-${index}`)

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

const toggleCollapseWarranties = (index: number) => {
    const item = itemsWarranties.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-warranties-${index}`)
    const verticalLine = document.querySelector(`#plus-line-warranties-${index}`)

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

const toggleCollapseObligations = (index: number) => {
    const item = itemsObligations.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-obligations-${index}`)
    const verticalLine = document.querySelector(`#plus-line-obligations-${index}`)

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

const toggleCollapseProperty = (index: number) => {
    const item = itemsProperty.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-property-${index}`)
    const verticalLine = document.querySelector(`#plus-line-property-${index}`)

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

const toggleCollapseGoverning = (index: number) => {
    const item = itemsGoverning.value[index]
    item.open = !item.open

    const descEl = document.querySelector(`#desc-governing-${index}`)
    const verticalLine = document.querySelector(`#plus-line-governing-${index}`)

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
