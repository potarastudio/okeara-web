<template>
    <div>
        <HeaderComponent />
        <slot />
        <FooterComponents />
    </div>
</template>

<script lang="ts">
import HeaderComponent from '~/components/Header/HeaderComponent.vue';
import FooterComponents from '~/components/Footer/FooterComponents.vue';

onMounted(() => {
    useSmoothScroll()
})

export default {
    name: "DefaultLayout",
    components: {
        HeaderComponent,
        FooterComponents
    }
};
</script>
