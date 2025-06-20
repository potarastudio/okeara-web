<template>
    <div 
        :class="[
            'fixed top-0 z-20 left-0 w-full px-[64px] flex items-center justify-between transition-all duration-300',
            isTop ? 'bg-transparent' : 'bg-white',
            isTop ? 'py-[40px]' : 'py-[20px]',
        ]"
        :style="{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }">
        <img :src="isTop? logo : LogoBlue" alt="logo">
        <nav
        :class="[
            'flex items-center space-x-[40px] text-[14px] uppercase transition-colors duration-300',
            isTop ? 'text-white' : 'text-[#203D4D]'
        ]"
        >
            <div>About us</div>
            <div>Products</div>
            <NuxtLink
                to="/shop"
                class="h-[48px] px-[16px] flex items-center justify-center rounded-full"
                :class="isShopActive ? 'bg-[#EDF3F3] font-bold text-[#203D4D]' : 'bg-transparent'"
            >
                Shop
            </NuxtLink>
            <div>Research</div>
            <div>Review</div>
        </nav>
        <div class="flex items-start gap-[24px] relative">
            <div
                :class="[
                    'absolute left-0 top-0 border rounded-full p-[14px] cursor-pointer',
                    isTop ? 'border-white' : 'border-[#203D4D]'
                ]"
            >
                <img :src="isTop? cart : CartBlue" alt="cart">
                <div
                    class="absolute right-[-12px] top-[-8px] bg-[#FF4343] py-[4px] px-[10px] text-[12px] text-white rounded-full">
                    4</div>
            </div>
            <div
                :class="[
                    'ml-[72px] border rounded-full p-[14px] cursor-pointer',
                    isTop ? 'border-white' : 'border-[#203D4D]'
                ]"
            >
                <img :src="isTop?message: MessageBlue" alt="message">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from 'vue-router';
import Logo from "@/assets/images/logo.svg";
import LogoBlue from "@/assets/images/LogoBlue.svg";
import Cart from '@/assets/icons/Cart.svg';
import CartBlue from '@/assets/icons/CartBlue.svg';
import Message from '@/assets/icons/Message.svg';
import MessageBlue from '@/assets/icons/MessageBlue.svg';


const logo = Logo;
const cart = Cart;
const message = Message;

const isVisible = ref(true);
const isTop = ref(true);
let lastScroll = 0;

const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
        isVisible.value = false;
    } else {
        isVisible.value = true;
    }
    lastScroll = currentScroll;

    if(currentScroll > 150) {
        isTop.value = false;
    } else {
        isTop.value = true;
    }
};

onMounted(() => {
    lastScroll = window.scrollY;
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const route = useRoute();
const isShopActive = computed(() => route.path.startsWith('/shop'));
</script>