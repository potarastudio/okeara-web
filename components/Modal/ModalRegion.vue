<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <transition name="fade">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50"
            style="background: rgba(0, 0, 0, 0.60);">
            <div class="bg-[#E4EDED] w-[40%] p-[40px] relative flex flex-col items-center gap-[60px]">
                <div class="w-full flex flex-col items-center gap-[20px]">
                    <div class="text-[#203D4D] text-center text-[26px] font-light">Where Should We Send Your OKEARA?
                    </div>
                    <div class="text-[#203D4D] text-center text-[18px] font-bold leading-[25.2px]">
                        Pick your country to ensure smooth ordering, the right supplier,
                        and the fastest delivery to your door.
                    </div>
                </div>
                <div class="w-full">
                    <label class="block text-[18px] font-bold text-[#203D4D] mb-[28px]">
                        Location
                    </label>

                    <div class="relative">
                        <button type="button"
                            class="w-full flex justify-between items-center border-b border-gray-400 pb-1 text-left"
                            @click="isOpen = !isOpen">
                            <span class="text-[18px] font-bold text-[#203D4D]">
                                {{ selected?.country || 'Select location' }}
                            </span>
                            <svg class="w-4 h-4 text-gray-600 transform transition-transform"
                                :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div v-if="isOpen"
                            class="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul>
                                <li v-for="option in options" :key="option.value"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[18px] font-bold text-[#203D4D]"
                                    @click="selectOption(option)">
                                    {{ option.country }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-start gap-[24px]">
                    <button
                        class="border border-[#203D4D] rounded-full flex items-center justify-center h-[48px] w-[50%] text-[#203D4D] font-bold cursor-pointer"
                        @click="emit('close')">
                        Cancel
                    </button>
                    <button
                        class="bg-[#203D4D] border border-[#203D4D] rounded-full flex items-center justify-center h-[48px] w-[50%] font-bold cursor-pointer">
                        save
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

interface OptionType {
    value: number | string;
    name: string;
    country: string;
    code: string;
}

const isOpen = ref(false);

const _props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
})

const emit = defineEmits(['close'])

const { data: companies } = await useFetch("/api/odoo/companies");
console.log("companies:", companies.value);

function detectCountry(name: string) {
    if (name.includes("PT")) return { country: "Indonesia", code: "ID" };
    if (name.includes("UEA") || name.includes("Dubai")) return { country: "United Arab Emirates", code: "AE" };
    return { country: "Unknown", code: "--" };
}

// mapping ke format option
const options = computed(() =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    companies.value.map((c: any) => {
        const { country, code } = detectCountry(c.name);
        return {
            value: c.id,
            name: c.name,
            country,
            code
        };
    })
);

const selected = ref<OptionType | null>(null);

watch(options, (opts) => {
    if (!selected.value && opts.length > 0) {
        const indonesia = opts.find((o: OptionType) => o.country === "Indonesia");
        if (indonesia) {
            selected.value = indonesia;
        }
    }
});


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function selectOption(option: any) {
    selected.value = option;
    isOpen.value = false;
}

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
