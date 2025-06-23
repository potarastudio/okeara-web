<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div :class="[
        'fixed top-0 z-20 left-0 w-full px-[20px] md:px-[64px] flex items-center justify-between transition-all duration-300',
        isTop ? 'bg-transparent' : 'bg-white',
        isTop ? 'py-[20px] md:py-[40px]' : 'py-[20px]',
    ]" :style="{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }">
        <img :src="isTop ? logo : LogoBlue" alt="logo" class="w-[40%] md:w-[25%] lg:w-[10%]" />

        <nav :class="[
            'hidden lg:flex items-center space-x-[40px] text-[14px] uppercase transition-colors duration-300',
            isTop ? 'text-white' : 'text-[#203D4D]',
        ]">
            <div>About us</div>
            <div>Products</div>
            <NuxtLink to="/shop" class="h-[48px] px-[16px] flex items-center justify-center rounded-full"
                :class="isShopActive ? 'bg-[#EDF3F3] font-bold text-[#203D4D]' : 'bg-transparent'">
                Shop
            </NuxtLink>
            <div>Research</div>
            <div>Review</div>
        </nav>

        <div class="w-[8%] md:w-[5%] flex flex-col gap-[8px] lg:hidden cursor-pointer" @click="toggleMenu">
            <hr ref="topLine" :class="[
                'w-full border origin-center',
                isTop ? 'border-white' : 'border-[#101010]'
            ]" />
            <hr ref="bottomLine" :class="[
                'w-full border origin-center',
                isTop ? 'border-white' : 'border-[#101010]'
            ]" />
        </div>

        <div class="hidden lg:flex items-start gap-[24px] relative">
            <div :class="[
                'absolute left-0 top-0 border rounded-full p-[14px] cursor-pointer',
                isTop ? 'border-white' : 'border-[#203D4D]',
            ]">
                <img :src="isTop ? cart : CartBlue" alt="cart" />
                <div
                    class="absolute right-[-12px] top-[-8px] bg-[#FF4343] py-[4px] px-[10px] text-[12px] text-white rounded-full">
                    4
                </div>
            </div>
            <div :class="[
                'ml-[72px] border rounded-full p-[14px] cursor-pointer',
                isTop ? 'border-white' : 'border-[#203D4D]',
            ]">
                <img :src="isTop ? message : MessageBlue" alt="message" />
            </div>
        </div>
    </div>

    <div ref="menuRef"
        class="fixed top-[58px] right-0 w-full h-[calc(100vh-100px)] bg-white z-10 p-6 flex flex-col gap-6 shadow-xl lg:hidden"
        style="transform: translateX(100%)">
        <NuxtLink to="/" class="text-[#203D4D] text-lg font-semibold">About Us</NuxtLink>
        <NuxtLink to="/products" class="text-[#203D4D] text-lg font-semibold">Products</NuxtLink>
        <NuxtLink to="/shop" class="text-[#203D4D] text-lg font-semibold">Shop</NuxtLink>
        <NuxtLink to="/research" class="text-[#203D4D] text-lg font-semibold">Research</NuxtLink>
        <NuxtLink to="/review" class="text-[#203D4D] text-lg font-semibold">Review</NuxtLink>
    </div>
</template>


<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'

import Logo from '@/assets/images/logo.svg'
import LogoBlue from '@/assets/images/LogoBlue.svg'
import Cart from '@/assets/icons/Cart.svg'
import CartBlue from '@/assets/icons/CartBlue.svg'
import Message from '@/assets/icons/Message.svg'
import MessageBlue from '@/assets/icons/MessageBlue.svg'

const logo = Logo
const cart = Cart
const message = Message

const isVisible = ref(true)
const isTop = ref(true)
let lastScroll = 0

const handleScroll = () => {
    const currentScroll = window.scrollY
    isVisible.value = currentScroll < lastScroll || currentScroll < 100
    lastScroll = currentScroll
    isTop.value = currentScroll < 150
}

onMounted(() => {
    lastScroll = window.scrollY
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const isMenuOpen = ref(false)
const topLine = ref<HTMLElement | null>(null)
const bottomLine = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    isTop.value = !isTop.value

    if (isMenuOpen.value) {
        gsap.to(topLine.value, { rotate: 45, y: 5, duration: 0.3 })
        gsap.to(bottomLine.value, { rotate: -45, y: -5, duration: 0.3 })
        gsap.to(menuRef.value, { x: 0, duration: 0.5, ease: 'power2.out' })
    } else {
        gsap.to(topLine.value, { rotate: 0, y: 0, duration: 0.3 })
        gsap.to(bottomLine.value, { rotate: 0, y: 0, duration: 0.3 })
        gsap.to(menuRef.value, { x: '100%', duration: 0.5, ease: 'power2.in' })
    }
}

const route = useRoute()
const isShopActive = computed(() => route.path.startsWith('/shop'))
</script>
