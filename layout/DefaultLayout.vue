<template>
    <div>
        <HeaderComponent />
        <slot />
        <FooterComponents />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '~/components/Header/HeaderComponent.vue'
import FooterComponents from '~/components/Footer/FooterComponents.vue'

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        HeaderComponent,
        FooterComponents
    },
})
</script>
