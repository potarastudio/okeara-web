<template>
    <div>
        <HeaderComponent />
        <slot />
        <FooterComponents />
        <ModalRegion :show="isModalOpen" @close="isModalOpen = false" />
    </div>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue"
import HeaderComponent from '~/components/Header/HeaderComponent.vue'
import FooterComponents from '~/components/Footer/FooterComponents.vue'
import ModalRegion from '~/components/Modal/ModalRegion.vue'

const isModalOpen = ref(false)
const companyId = ref<number | null>(1)
const companyCode = ref<string | null>("ID")

provide('isModalOpen', isModalOpen)
provide('openModal', () => (isModalOpen.value = true))
provide('closeModal', () => (isModalOpen.value = false))
provide('companyId', companyId)
provide('companyCode', companyCode)

</script>
