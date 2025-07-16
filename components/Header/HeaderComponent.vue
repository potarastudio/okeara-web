<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div :class="[
    'fixed top-0 z-[999] left-0 w-full px-[24px] md:px-[40px] lg:px-[64px] flex items-center justify-between transition-all duration-300',
    isTop ? 'bg-transparent pt-[40px] pb-[32px] md:py-[40px]' : 'bg-white pt-[40px] pb-[32px] md:-[40px] lg:py-[10px]',
  ]" :style="{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }">
    <NuxtLink to="/" class="w-[40%] md:w-[25%] lg:w-[10%]">
      <img :src="isTop ? logo : LogoBlue" alt="logo" class="w-fill" />
    </NuxtLink>

    <nav :class="[
      'hidden lg:flex items-center space-x-[40px] text-[14px] uppercase transition-colors duration-300',
      isTop ? 'text-white' : 'text-[#203D4D]',
    ]">
      <NuxtLink ref="navLinks" to="/our-water" :data-active="isWaterActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isWaterActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">OUR WATER</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
      <NuxtLink ref="navLinks" to="/our-community" :data-active="isClubActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isClubActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">OUR CLUB</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
      <NuxtLink ref="navLinks" to="/our-partners" :data-active="isPartnersActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isPartnersActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">OUR PARTNER</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
      <NuxtLink ref="navLinks" to="/shop" :data-active="isShopActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isShopActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">SHOP</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
      <NuxtLink ref="navLinks" to="/research" :data-active="isResearchActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isResearchActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">RESEARCH</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
      <NuxtLink ref="navLinks" to="/faq" :data-active="isFaqActive"
        class="nav-link h-[48px] flex items-center justify-center rounded-full relative" :class="isFaqActive
          ? isTop
            ? 'bg-[#EDF3F3] px-4 font-bold text-[#203D4D]'
            : 'bg-[#203D4D] px-4 font-bold text-[#EDF3F3]'
          : 'bg-transparent'">
        <span class="link-text relative z-10">FAQ</span>
        <span class="underline absolute bottom-[15px] left-0 h-[0.5px] w-full scale-x-0 origin-left" />
      </NuxtLink>
    </nav>

    <div class="w-[8%] md:w-[5%] flex flex-col gap-[8px] lg:hidden cursor-pointer" @click="toggleMenu">
      <hr ref="topLine" :class="[
        'w-full border origin-center',
        isTop ? 'border-white' : 'border-[#203D4D]'
      ]" />
      <hr ref="bottomLine" :class="[
        'w-full border origin-center',
        isTop ? 'border-white' : 'border-[#203D4D]'
      ]" />
    </div>

    <div class="hidden lg:flex items-start gap-[24px] relative">
      <div :class="[
        'absolute left-0 top-0 border rounded-full p-[14px] cursor-pointer',
        isTop ? 'border-white' : 'border-[#203D4D]',
      ]">
        <img :src="isTop ? cart : CartBlue" alt="cart" />
        <!-- <div class="absolute right-[-12px] top-[-8px] bg-[#FF4343] py-[4px] px-[10px] text-[12px] text-white rounded-full">
          4
        </div> -->
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
    class="fixed top-[85px] right-0 w-full h-[calc(100vh-100px)] bg-white z-[999] px-[24px] py-[20px] flex flex-col gap-6 shadow-xl lg:hidden"
    style="transform: translatey(-150%)">
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/our-water')">
      <div class="text-[#203D4D] text-[20px]">Our Water</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/our-community')">
      <div class="text-[#203D4D] text-[20px]">Our Club</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/our-partners')">
      <div class="text-[#203D4D] text-[20px]">Our Partner</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/shop')">
      <div class="text-[#203D4D] text-[20px]">Shop</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/research')">
      <div class="text-[#203D4D] text-[20px]">Research</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
    <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#203D4D] uppercase"
      @click="handleMobileMenu('/faq')">
      <div class="text-[#203D4D] text-[20px]">Faq</div>
      <img :src="ArrowTopRightBlue" alt="arrowTopRight">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import gsap from 'gsap'

import Logo from '@/assets/images/logo.svg'
import LogoBlue from '@/assets/images/LogoBlue.svg'
import Cart from '@/assets/icons/Cart.svg'
import CartBlue from '@/assets/icons/CartBlue.svg'
import Message from '@/assets/icons/Message.svg'
import MessageBlue from '@/assets/icons/MessageBlue.svg'
import ArrowTopRightBlue from '@/assets/icons/ArrowTopRightBlue.svg'

const router = useRouter();
const navLinks = ref<HTMLElement[]>([])

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

onMounted(() => {
  navLinks.value = Array.from(document.querySelectorAll('.nav-link'))

  navLinks.value.forEach((linkEl) => {
    const underline = linkEl.querySelector('.underline') as HTMLElement

    gsap.set(underline, {
      scaleX: 0,
      transformOrigin: 'left'
    })

    linkEl.addEventListener('mouseenter', () => {
      if (linkEl.getAttribute('data-active') === 'true') return
      const color = getComputedStyle(linkEl).color
      gsap.killTweensOf(underline)
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out',
        backgroundColor: color,
        transformOrigin: 'left'
      })
    })

    linkEl.addEventListener('mouseleave', () => {
      if (linkEl.getAttribute('data-active') === 'true') return
      gsap.killTweensOf(underline)
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.in',
        transformOrigin: 'right'
      })
    })

    linkEl.addEventListener("click", () => {
      gsap.killTweensOf(underline)
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.1,
        ease: 'power2.in',
        transformOrigin: 'right'
      })
    })
  })
})

const isMenuOpen = ref(false)
const topLine = ref<HTMLElement | null>(null)
const bottomLine = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isTop.value) {
    isTop.value = false
  }

  if (isMenuOpen.value) {
    gsap.to(topLine.value, { rotate: 45, y: 5, duration: 0.3 })
    gsap.to(bottomLine.value, { rotate: -45, y: -5, duration: 0.3 })
    gsap.to(menuRef.value, { y: '0', duration: 0.5, ease: 'power2.out' })
  } else {
    const currentScroll = window.scrollY
    isTop.value = currentScroll < 150
    gsap.to(topLine.value, { rotate: 0, y: 0, duration: 0.3 })
    gsap.to(bottomLine.value, { rotate: 0, y: 0, duration: 0.3 })
    gsap.to(menuRef.value, { y: '-150%', duration: 0.5, ease: 'power2.in' })
  }
}

const handleMobileMenu = (path: string) => {
  router.push(path)
  isMenuOpen.value = false

  const currentScroll = window.scrollY
  isTop.value = currentScroll < 150
  gsap.to(topLine.value, { rotate: 0, y: 0, duration: 0.3 })
  gsap.to(bottomLine.value, { rotate: 0, y: 0, duration: 0.3 })
  gsap.to(menuRef.value, { y: '-150%', duration: 0.5, ease: 'power2.in' })
}

const route = useRoute()
const isWaterActive = computed(() => route.path.startsWith('/our-water'))
const isClubActive = computed(() => route.path.startsWith('/our-community'))
const isPartnersActive = computed(() => route.path.startsWith('/our-partners'))
const isShopActive = computed(() => route.path.startsWith('/shop'))
const isResearchActive = computed(() => route.path.startsWith('/research'))
const isFaqActive = computed(() => route.path.startsWith('/faq'))
</script>

<style scoped>
.underline {
  transition: width 0.3s ease;
}
</style>