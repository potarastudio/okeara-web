<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="overflow-x-hidden">
        <div ref="bannerRef" :style="bannerStyle" class="bg-cover bg-no-repeat w-full h-[100dvh] relative"
            style="background-position: left 50% top 35%;">
            <div class="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none"
                style="background: linear-gradient(0deg, rgba(0,0,0,0.85) 1.62%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.00) 80%);">
                <div ref="textContainerRef"
                    class="absolute left-0 bottom-[20px] md:bottom-[40px] lg:bottom-[100px] px-[24px] md:px-[40px] lg:px-[64px] w-full flex flex-col md:flex-row items-start justify-between gap-[20px] md:gap-auto">
                    <div class="text-[40px] md:text-[64px] leading-[40px] md:leading-[72px] font-light"
                        style="letter-spacing: -1.92px;">
                        Drink <br>
                        Different
                    </div>
                    <div class="flex flex-col items-start gap-[20px] md:gap-[52px] md:gap-[70px] md:w-[35%]">
                        <div class="text-[16px] md:text-[20px] leading-[24px] md:leading-[26px] opacity-80"
                            style="letter-spacing: -0.2px;">
                            You perform under pressure from mentally, physically, emotionally. But your system isn't
                            built
                            for constant strain. OKEARA is more than purified water. It’s engineered to help your
                            body recover faster, think clearer, and function better
                        </div>
                        <div class="w-full flex items-center justify-between pb-[16px] border-b border-[#EDF3F3]">
                            <div class="text-[#EDF3F3] text-[20px]">Learn more</div>
                            <img :src="ArrowTopRight" alt="arrowTopRight">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]  bg-[#203D4D]">
            <div
                class="water-section w-full flex flex-col md:flex-row items-start justify-between gap-[40px] md:gap-auto">
                <div class="text-sticky">
                    <div class="flex items-center gap-[10px] md:gap-[20px]">
                        <img :src="List" alt="list">
                        <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                            Our Water
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden w-full h-[650px] flex flex-col gap-[40px] md:w-[60%]">
                    <div class="relative overflow-hidden h-[350px]">
                        <img ref="imageWaterRef" :src="OurWater"
                            class="absolute top-0 scale-[1.4] h-full object-cover" />
                    </div>
                    <div class="absolute top-[400px] flex flex-col items-start gap-[24px] lg:w-[70%]">
                        <div ref="titleWaterRef"
                            class="text-[32px] md:text-[48px] text-[#EDF3F3] font-light leading-[36px] md:leading-[58px]"
                            style="letter-spacing: -1.44px;">
                            For those who demand the best in hydration
                        </div>
                        <div ref="paragraphWaterRef" class="text-[#D1CCBF] text-[16px] md:text-[18px] leading-[24px]">
                            OKEARA structured hydrogen water is a game-changer. Experience the rejuvenating benefits of
                            hydrogen-enriched water free from impurities and bacteria. Elevate your health with every
                            sip.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="container"
            class="relative w-full h-[100dvh] overflow-hidden px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[80px]">
            <div ref="bg0" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 will-change-transform"
                :style="{ backgroundImage: `url(${BgSafety})` }" />
            <div ref="bg1" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform"
                :style="{ backgroundImage: `url(${BgSafety2})` }" />
            <div ref="bg2" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-30 will-change-transform"
                :style="{ backgroundImage: `url(${BgSafety3})` }" />
            <div ref="bg3" class="absolute inset-0 bg-cover bg-center bg-no-repeat z-40 will-change-transform"
                :style="{ backgroundImage: `url(${BgSafety4})` }" />
            <div
                class="relative overflow-hidden z-60 w-full flex flex-col md:flex-row items-start justify-between gap-[42px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <div class="relative text-[#FFF] text-[16px] md:text-[18px] leading-[24px] w-[200px]">
                        <div ref="titleBg0" class="absolute inset-0 opacity-0">Safe Saturation Method</div>
                        <div ref="titleBg1" class="absolute inset-0 opacity-0">Hydrogenitation</div>
                        <div ref="titleBg2" class="absolute inset-0 opacity-0">Eco Packaging</div>
                        <div ref="titleBg3" class="absolute inset-0 opacity-0">Micro Plastics Free</div>
                    </div>
                </div>
                <div class="text-[#fff] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                    Safety of Structured <br />
                    Hydrogen Water
                </div>
            </div>
            <div class="z-60 relative  w-full flex items-start justify-center mt-[42px] md:mt-[90px]">
                <div
                    class="relative overflow-hidden w-full md:w-[60%] flex flex-col items-start gap-[60px] md:gap-[20px]">
                    <div ref="bgCard0"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 will-change-transform"
                        :style="{ backgroundImage: `url(${BgSafety})` }" />
                    <div ref="bgCard1"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform"
                        :style="{ backgroundImage: `url(${BgSafety2})` }" />
                    <div ref="bgCard2"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-30 will-change-transform"
                        :style="{ backgroundImage: `url(${BgSafety3})` }" />
                    <div ref="bgCard3"
                        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-40 will-change-transform"
                        :style="{ backgroundImage: `url(${BgSafety4})` }" />
                    <div
                        class="relative z-60 w-full h-[150px] md:h-[250px] flex flex-col md:flex-row items-start justify-between gap-[20px] md:gap-auto p-[32px]">
                        <div
                            class="relative order-2 md:order-1 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] w-full md:w-[60%]">
                            <div ref="title0" class="absolute inset-0 opacity-0">
                                Atomic Saturation
                            </div>
                            <div ref="title1" class="absolute inset-0 opacity-0">
                                The Best Antioxidant
                            </div>
                            <div ref="title2" class="absolute inset-0 opacity-0">
                                Packaging That Grows Back
                            </div>
                            <div ref="title3" class="absolute inset-0 opacity-0">
                                Noting Else, Just Water
                            </div>
                        </div>
                        <div
                            class="relative order-1 md:order-2 text-[#EDF3F3] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] w-[10%]">
                            <div ref="number0" class="absolute inset-0 opacity-0">01</div>
                            <div ref="number1" class="absolute inset-0 opacity-0">02</div>
                            <div ref="number2" class="absolute inset-0 opacity-0">03</div>
                            <div ref="number3" class="absolute inset-0 opacity-0">04</div>
                        </div>
                    </div>
                    <div
                        class="relative w-full z-60 text-[#EDF3F3] text-[16px] text-[18px] leading-[24px] backdrop-blur-[2px] bg-[linear-gradient(0deg,rgba(0,0,0,0.32),rgba(0,0,0,0))] p-[32px] h-[250px] md:h-[200px] flex items-center justify-center">
                        <div ref="desc0" class="absolute inset-0 opacity-0 p-[32px]">
                            OKEARA water is crafted by purifying water straight from the source using our advanced
                            filtration system, highlighted by our proprietary Magnetic Filter. This technology separates
                            heavier and lighter water molecules, creating structured water with a refined molecular
                            arrangement for superior quality.
                        </div>
                        <div ref="desc1" class="absolute inset-0 opacity-0 p-[32px]">
                            OKEARA Water is clean, pure water enriched with molecular hydrogen (H₂) to help protect your
                            cells, fight free radicals, and support overall health. It’s made with advanced filtration,
                            packed in eco-friendly, microplastic-free packaging, and designed to keep you feeling fresh
                            and energized
                        </div>
                        <div ref="desc2" class="absolute inset-0 opacity-0 p-[32px]">
                            We use environmentally friendly packaging that’s designed to have minimal impact on the
                            planet. By choosing sustainable materials, we significantly reduce our carbon footprint,
                            supporting a cleaner, greener future with every product we deliver
                        </div>
                        <div ref="desc3" class="absolute inset-0 opacity-0 p-[32px]">
                            Our advanced filtration process enables us to achieve an exceptionally low TDS (Total
                            Dissolved Solids) level of just 6–8 ppm, ensuring ultra-pure water that’s free from unwanted
                            minerals, heavy metals, and impurities. This level of purity reflects the high quality and
                            clarity of every drop of OKEARA
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[40px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Benefit
                    </div>
                </div>
                <div class="flex flex-col gap-[24px] md:gap-[60px] md:w-[60%]">
                    <div ref="titleBenefitRef"
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] w-[70%] md:w-[90%] lg:w-[60%]">
                        Benefits of Structured Hydrogen Water
                    </div>
                    <div ref="paragraphBenefitRef"
                        class="text-[#203D4D] text-[18px] leading-[26px] opacity-77 w-[80%] lg:w-[40%]">
                        OKEARA structured hydrogen water offers a multitude of health benefits thanks to its high
                        hydrogen content:
                    </div>
                </div>
            </div>
            <div
                class="relative overflow-hidden w-full flex flex-col md:flex-row items-start justify-between gap-[4px] mt-[40px] md:mt-[100px]">
                <div class="relative overflow-hidden h-[400px] w-full md:w-[30%]">
                    <img ref="imageLeftBenefitRef" :src="Benefit1"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
                <div class="relative overflow-hidden h-[600px] w-full md:w-[60%]">
                    <img ref="imageRightBenefitRef" :src="Benefit2"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
            </div>
            <div class="relative">
                <div ref="sliderTrack" class="flex gap-[72px] mt-[40px] md:mt-[100px] scroll-smooth overflow-hidden">
                    <div v-for="(item, index) in slides" :key="index"
                        class="w-[100%] md:w-[21%] flex-shrink-0 flex flex-col gap-[24px]">
                        <img :src="item.image" :alt="item.title" class="w-[20%]" />
                        <div class="text-[#203D4D] text-[26px] leading-[36px]" v-html="item.title" />
                        <div class="text-[#203D4D] text-[18px] leading-[24px] opacity-50 line-clamp-2">
                            {{ item.description }}
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-center gap-[32px] mt-[40px] md:mt-[100px]">
                    <div class="w-full md:w-[90%] flex items-center md:gap-[32px]">
                        <hr v-for="(item, index) in [0, 1, 2, 3, 4]" :key="'indicator-' + index" :class="[
                            'w-[33%] border',
                            currentIndex === index ? 'border-[#203D4D]' : 'border-[#C4CFD2]'
                        ]" />
                    </div>
                    <div class="hidden md:flex items-center gap-[32px] w-[10%]">
                        <img :src="ArrowLeft" alt="Arrow Left" class="cursor-pointer transition" :class="[
                            currentIndex === 0 || isScrolling ? 'pointer-events-none opacity-20' : '',
                        ]" @click="prevSlide" />
                        <img :src="ArrowRight" alt="Arrow Right" class="cursor-pointer transition" :class="[
                            currentIndex === 4 || isScrolling ? 'pointer-events-none opacity-20' : '',
                        ]" @click="nextSlide" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[40px]">
                <div class="flex items-center gap-[20px]">
                    <img :src="List" alt="list">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Safety
                    </div>
                </div>
                <div class="flex flex-col items-start gap-[24px] md:gap-[80px] md:w-[60%]">
                    <div ref="titleSafetyRef"
                        class="text-[32px] md:text-[48px] text-[#EDF3F3] font-light leading-[36px] md:leading-[58px] w-[60%] md:w-[90%] lg:w-[60%]"
                        style="letter-spacing: -1.44px;">
                        Better For the Body, and For the Planet
                    </div>
                    <div ref="paragraphSafetyRef"
                        class="text-[#D1CCBF] text-[16px] md:text-[18px] leading-[24px] w-full md:w-[90%] lg:w-[60%]">
                        OKEARA is bottled with minimal material waste, using sleek lightweight bottles that preserve
                        water structure and reduce impact. Our entire process is optimized for integrity from source to
                        sip. Performance starts with what you put in your body. But it shouldn’t cost the Earth.
                    </div>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden w-[100%] h-[105dvh] bg-[#203D4D]">
            <img ref="imageSafetyRef" :src="SafetyBlock" alt="Safety"
                class="absolute top-0 left-0 scale-[1.4] h-full object-cover">
        </div>
        <div class="w-full bg-[#EDF3F3] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-[40px] md:gap-auto">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="ListBlack" alt="ListBlack">
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                        Product
                    </div>
                </div>
                <div class="flex flex-col gap-[20px] md:gap-[60px] md:w-[35%]">
                    <div ref="titleProductRef"
                        class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        The Only Water You Need For Longevity
                    </div>
                    <div ref="paragraphProductRef"
                        class="text-[#203D4D] text-[16px] md:text-[18px] leading-[26px] opacity-77">
                        Introducing Okeara Structured Hydrogen Water, revolutionary approach to hydration, powered by
                        nature and perfected by science. Okeara isn’t just water it’s a wellness experience
                    </div>
                </div>
                <div class="hidden md:flex items-center gap-[40px] w-full md:w-auto justify-end">
                </div>
            </div>
            <div class="w-full flex items-center justify-center mt-[40px] md:mt-[100px]">
                <div class="relative flex items-center gap-[2px] bg-[#E4EDED] rounded-full p-[4px] w-fit">
                    <div ref="indicatorRef" class="absolute top-[4px] left-0 h-[44px] bg-white rounded-full z-0"
                        style="width: 0px"></div>

                    <div v-for="(label, i) in ['OKEARA', 'OKEARA Blue']" :key="i" :ref="(el) => (optionRefs[i] = el)"
                        class="h-[44px] px-[16px] flex items-center rounded-full justify-center relative z-10 cursor-pointer transition-colors duration-300"
                        :class="{
                            'text-[#203D4D]': activeIndex === i,
                            'text-[#AEC5C5]': activeIndex !== i
                        }" @click="switchTo(i)">
                        {{ label }}
                    </div>
                </div>
            </div>
            <div class="w-full overflow-hidden">
                <div class="w-full flex items-start self-stretch gap-[60px] mt-[60px]">
                    <div v-for="(product, idx) in filteredProducts" :key="product.id" class="w-[100%] lg:w-[50%]">

                        <div :ref="`container${idx}`"
                            class="bg-[#E4EDED] w-[100%] py-[20px] lg:py-[50px] flex-shrink-0 flex items-center justify-center self-stretch cursor-pointer">
                            <div class="flex flex-col justify-end items-center gap-[52px]">

                                <div class="px-[12px] py-[8px] bg-white rounded-full text-black fade-item cursor-pointer"
                                    @click.stop="isOpen = true">
                                    Preview 3D
                                </div>

                                <img :src="product.image_1920" :alt="product.name" class="h-[500px]">

                                <div class="flex flex-col items-center gap-[32px] fade-item">
                                    <div class="flex flex-col items-center gap-[16px]">
                                        <div class="text-[#203D4D] text-[26px] leading-[26px]">
                                            {{ product.name }}
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-[24px]">
                                        <a :href="'https://shop.okeara.com/detail/' + product.id">
                                            <button
                                                class="bg-[#203D4D] border border-[#203D4D] rounded-full h-[48px] px-[24px] flex items-center justify-center gap-[12px] text-[#EDF3F3] cursor-pointer">
                                                Buy Now
                                                <img :src="Dollar" alt="Dollar" class="w-[16px]">
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal :show="isOpenError" message="Please allow location to continue buy this product"
                @close="isOpenError = false" />
        </div>
        <div class="w-full bg-[#DAD6CB] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div class="flex items-center gap-[10px] md:gap-[20px]">
                <img :src="ListBlack" alt="ListBlack">
                <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px]">
                    Sustainability
                </div>
            </div>
            <div
                class="text-[#203D4D] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px] mt-[40px] md:mt-[40px]">
                Our Packaging
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[40px] md:mt-[100px]">
                <div>
                    <img :src="Packing1" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[24px] md:text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton packs are made from responsibly sourced, renewable content, and recycled polymers.
                    </div>
                </div>
                <div>
                    <img :src="Packing2" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D]  text-[24px] md:text-[26px] mt-[24px]">
                        Compact and Practical
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        The packaging is lightweight and convenient, making it easy to carry and use on the go.
                    </div>
                </div>
                <div>
                    <img :src="Packing3" alt="Packing 1" class="w-full">
                    <div class="text-[#203D4D] text-[24px] md:text-[26px] mt-[24px]">
                        Responsible Design
                    </div>
                    <div class="text-[#203D4D] text-[16px] md:text-[18px] leading-[24px] mt-[14px] opacity-50">
                        OKEARA carton pack is durable and protects the structured hydrogen water from external
                        contaminants, ensuring its freshness and purity.
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#203D4D] px-[24px] py-[40px] md:p-[40px] lg:px-[64px] lg:py-[100px]">
            <div
                class="relative overflow-hidden w-full flex flex-col md:flex-row items-start justify-between gap-[8px] md:gap-auto">
                <div class="relative overflow-hidden h-[400px] w-full md:w-[30%]">
                    <img ref="imageLeftSustainabilityRef" :src="Sustainability1" alt="Sustainability 1"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
                <div class="relative overflow-hidden h-[600px] w-full md:w-[60%]">
                    <img ref="imageRightSustainabilityRef" :src="Sustainability2" alt="Sustainability 2"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
            </div>
            <div
                class="w-full flex flex-col md:flex-row items-start justify-between gap-[40px] md:gap-auto mt-[40px] md:mt-[120px]">
                <div class="flex items-center gap-[10px] md:gap-[20px]">
                    <img :src="List" alt="List">
                    <div class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px]">
                        Sustainability
                    </div>
                </div>
                <div class="md:w-[60%]">
                    <div class="text-[#EDF3F3] text-[32px] md:text-[48px] font-light leading-[36px] md:leading-[58px]">
                        Sustainable <br> Development
                    </div>
                    <div class="w-full mt-[40px] md:mt-[64px] flex flex-col items-start">
                        <div v-for="(item, index) in items" :key="index"
                            class="relative flex flex-col border-t border-[#EDF3F3] w-full">
                            <div class="flex items-center justify-between py-[24px] px-[8px] md:px-[16px] cursor-pointer gap-[16px]"
                                @click="toggleCollapse(index)">
                                <div class="flex items-start md:items-center gap-[24px]">
                                    <img :src="item.icon" alt="Collapse Icon" class="w-[7%]">
                                    <div class="flex flex-col w-[88%]">
                                        <div class="text-[#EDF3F3] text-[20px] md:text-[26px]">{{ item.title }}</div>
                                        <div :id="`desc-${index}`" class="overflow-hidden"
                                            :style="{ height: 0, opacity: 0 }">
                                            <div
                                                class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[24px] opacity-40">
                                                {{ item.desc }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[5%]">
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EDF3F3"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line :id="`plus-line-${index}`" x1="12" y1="5" x2="12" y2="19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full bg-[#274A5C] flex flex-col md:flex-row items-stretch justify-between gap-[12px] px-[24px] py-[40px] md:p-[40px] lg:px-[180px] lg:py-[120px]">
            <div class="flex flex-col gap-[40px] gap-[150px] w-full md:w-[50%]">
                <div class="relative overflow-hidden w-full h-[700px] order-2 md:order-1">
                    <img ref="imageLeftCommitmentRef" :src="Community1" alt="Community 1"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
                <div ref="titleCommitmentRef"
                    class="text-[#EDF3F3] text-[32px] text-[48px] font-light leading-[36px] leading-[58px] order-1 md:order-2 md:mb-[275px]">
                    Our <br> Commitment
                </div>
            </div>
            <div
                class="flex flex-col items-start justify-between gap-[40px] md:gap-auto w-full md:w-[40%] md:pt-[60px] md:pb-[100px]">
                <div class="relative overflow-hidden w-full h-[600px]">
                    <img ref="imageRightCommitmentRef" :src="Community2" alt="Community 2"
                        class="absolute top-0 scale-[1.4] h-full object-cover">
                </div>
                <div ref="paragraphCommitmentRef"
                    class="text-[#EDF3F3] text-[16px] md:text-[18px] leading-[26px] md:w-[90%] opacity-77 mt-[40px] md:mt-[120px]">
                    OKEARA's commitment to sustainable packaging and environmental protection is evident in our use of
                    advanced, health-conscious, and reusable containers. By choosing OKEARA, you are supporting a
                    product that values both your well-being and the health of our planet.
                </div>
            </div>
        </div>
        <LongevityClub />
        <Modal3DViewerClient :show="isOpen" @close="isOpen = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Banner from '@/assets/images/BannerHome.png';
import OurWater from '@/assets/images/OurWater.png';
import BgSafety from '@/assets/images/BgSafety.png';
import BgSafety2 from '@/assets/images/BgSafety2.png';
import BgSafety3 from '@/assets/images/BgSafety3.png';
import BgSafety4 from '@/assets/images/BgSafety4.png';
import SafetyBlock from '@/assets/images/SafetyBlock.png';
import Benefit1 from '@/assets/images/benefit-1.png';
import Benefit2 from '@/assets/images/benefit-2.png';
import OkearaWater500ml from '@/assets/images/OkearaWater500ml.png';
import OkearaBlue500ml from '@/assets/images/OkearaBlue500ml.png';
import OkearaWater12l from '@/assets/images/OkearaWater12l.png';
import OkearaBlue12l from '@/assets/images/OkearaBlue12l.png';
import Packing1 from '@/assets/images/packing-1.png';
import Packing2 from '@/assets/images/packing-2.png';
import Packing3 from '@/assets/images/packing-3.png';
import Sustainability1 from '@/assets/images/sustainability-1.png';
import Sustainability2 from '@/assets/images/sustainability-2.png';
import Community1 from '@/assets/images/community-1.png';
import Community2 from '@/assets/images/community-2.png';
import ArrowTopRight from "@/assets/icons/ArrowTopRight.svg";
import List from '@/assets/icons/List.svg';
import ListBlack from '@/assets/icons/ListBlack.svg';
import Hydration from '@/assets/icons/Hydration.svg';
import Immune from '@/assets/icons/Immune.svg';
import Aging from '@/assets/icons/Aging.svg';
import Microplastic from '@/assets/icons/Microplastic.svg';
import Recovery from '@/assets/icons/Recovery.svg';
import Overweight from '@/assets/icons/Overweight.svg';
import Tired from '@/assets/icons/Tired.svg';
import Stress from '@/assets/icons/Stress.svg';
import Dollar from '@/assets/icons/Dollar.svg';
// import CartBlue from '@/assets/icons/CartBlue.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import Friendly from '@/assets/icons/Friendly.svg';
import Resource from '@/assets/icons/Resource.svg';
import Footprint from '@/assets/icons/Footprint.svg';

import LongevityClub from '~/page-section/LongevityClub.vue';
import Modal3DViewerClient from '~/components/Modal/Modal3DViewer.client.vue';
import Modal from '~/components/Modal/Modal.vue';

const bannerRef = ref<HTMLElement | null>(null)
const textContainerRef = ref<HTMLElement | null>(null)

const container = ref<HTMLElement | null>(null)
const bg0 = ref<HTMLElement | null>(null)
const bg1 = ref<HTMLElement | null>(null)
const bg2 = ref<HTMLElement | null>(null)
const bg3 = ref<HTMLElement | null>(null)

const bgCard0 = ref<HTMLElement | null>(null)
const bgCard1 = ref<HTMLElement | null>(null)
const bgCard2 = ref<HTMLElement | null>(null)
const bgCard3 = ref<HTMLElement | null>(null)

const titleBg0 = ref<HTMLElement | null>(null)
const titleBg1 = ref<HTMLElement | null>(null)
const titleBg2 = ref<HTMLElement | null>(null)
const titleBg3 = ref<HTMLElement | null>(null)

const title0 = ref<HTMLElement | null>(null)
const title1 = ref<HTMLElement | null>(null)
const title2 = ref<HTMLElement | null>(null)
const title3 = ref<HTMLElement | null>(null)

const number0 = ref<HTMLElement | null>(null)
const number1 = ref<HTMLElement | null>(null)
const number2 = ref<HTMLElement | null>(null)
const number3 = ref<HTMLElement | null>(null)

const desc0 = ref<HTMLElement | null>(null)
const desc1 = ref<HTMLElement | null>(null)
const desc2 = ref<HTMLElement | null>(null)
const desc3 = ref<HTMLElement | null>(null)

const imageWaterRef = ref<HTMLElement | null>(null)
const titleWaterRef = ref<HTMLElement | null>(null)
const paragraphWaterRef = ref<HTMLElement | null>(null)

const imageLeftBenefitRef = ref<HTMLElement | null>(null)
const imageRightBenefitRef = ref<HTMLElement | null>(null)
const titleBenefitRef = ref<HTMLElement | null>(null)
const paragraphBenefitRef = ref<HTMLElement | null>(null)

const titleSafetyRef = ref<HTMLElement | null>(null)
const paragraphSafetyRef = ref<HTMLElement | null>(null)

const imageSafetyRef = ref<HTMLElement | null>(null)

const titleProductRef = ref<HTMLElement | null>(null)
const paragraphProductRef = ref<HTMLElement | null>(null)

const imageLeftSustainabilityRef = ref<HTMLElement | null>(null)
const imageRightSustainabilityRef = ref<HTMLElement | null>(null)

const titleCommitmentRef = ref<HTMLElement | null>(null)
const paragraphCommitmentRef = ref<HTMLElement | null>(null)

const imageLeftCommitmentRef = ref<HTMLElement | null>(null)
const imageRightCommitmentRef = ref<HTMLElement | null>(null)

const isOpen = ref(false)
const isOpenError = ref(false)
const activeIndex = ref(0)
const optionRefs = ref<(Element | ComponentPublicInstance | null)[]>([])
const indicatorRef = ref(null)

const config = useRuntimeConfig()

const companyId = inject('companyId') as Ref<string>

const { data: products } = await useFetch("/api/odoo/products", {
    query: { company_id: companyId },
    watch: [companyId],
});

const items = ref([
    {
        icon: Friendly,
        title: 'Environmentally Friendly',
        desc: 'OKEARA is committed to sustainability and environmental responsibility. Our packaging is designed to be reusable, reducing waste significantly',
        open: false,
    },
    {
        icon: Resource,
        title: 'Renewable Resource',
        desc: 'Our carton packs are made from paperboard, which is a renewable resource. They have a low carbon footprint compared to other packaging materials, making them a more environmentally friendly choice.',
        open: false,
    },
    {
        icon: Footprint,
        title: 'Carbon Footprint',
        desc: 'OKEARA caFrton packs are designed to be space-efficient, allowing for more efficient transportation and storage. This helps reduce energy consumption and overall environmental impact.',
        open: false,
    },
])

const sliderTrack = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

const slides = [
    {
        image: Hydration,
        title: 'Anti <br> Oxidant',
        description: 'Hydrogen water protects your cells by fighting harmful free radicals'
    },
    {
        image: Aging,
        title: 'Anti <br> Aging',
        description: 'Hydrogen water that helps slow aging by reducing stress and inflammation in cells'
    },
    {
        image: Recovery,
        title: 'Energizing <br> Water',
        description: 'OKEARA help you boosts your energy, helping you feel more refreshed and less tired'
    },
    {
        image: Immune,
        title: 'Clean Your <br> Blood',
        description: 'Supports detoxification by helping remove toxins & impurities bloodstream'
    },
    {
        image: Overweight,
        title: 'Overweight <br> Reduction',
        description: 'Supports detoxification by helping remove toxins & impurities bloodstream'
    },
    {
        image: Tired,
        title: 'Tired and Low <br> Energy Solution',
        description: 'OKEARA Hydrogen water helps fight tiredness and boosts your energy'
    },
    {
        image: Stress,
        title: 'Stress <br> Management',
        description: 'Structured hydrogen water helps you relax and reduces stress'
    },
    {
        image: Microplastic,
        title: 'Microplastics <br> Free',
        description: 'Processed to be free of microplastics, ensuring a cleaner and safer'
    }
]

const isScrolling = ref(false)

const nextSlide = () => {
    if (isScrolling.value || currentIndex.value >= 4) return
    isScrolling.value = true
    currentIndex.value += 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.26
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}

const prevSlide = () => {
    if (isScrolling.value || currentIndex.value <= 0) return
    isScrolling.value = true
    currentIndex.value -= 1

    const el = sliderTrack.value
    if (el) {
        const scrollAmount = el.offsetWidth * 0.26
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })

        setTimeout(() => {
            isScrolling.value = false
        }, 400)
    } else {
        isScrolling.value = false
    }
}


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

const filteredProducts = computed(() => {
    if (!products.value) return []

    if (activeIndex.value === 0) {
        return products.value.filter((p: any) => !p.name.includes("Blue"))
    } else {
        return products.value.filter((p: any) => p.name.includes("Blue"))
    }
})


const switchTo = async (index: number) => {
    activeIndex.value = index

    await nextTick()
    const target = optionRefs.value[index]
    if (!target) return
    const el = target as HTMLElement
    const bounds = el.getBoundingClientRect()
    const parentNode = el.parentNode as HTMLElement
    if (!parentNode) return
    const containerBounds = parentNode.getBoundingClientRect()

    const x = bounds.left - containerBounds.left
    const width = bounds.width

    gsap.to(indicatorRef.value, {
        x,
        width,
        duration: 0.4,
        ease: "power2.out",
    })
}

onMounted(() => {
    switchTo(activeIndex.value)
})

const bannerStyle = {
    backgroundImage: `url(${Banner})`
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
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
        textContainerRef.value,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
        }
    )

    const sidebar = document.querySelector('.text-sticky')
    const waterSectionContainer = document.querySelector('.water-section')

    if (window.innerWidth > 768) {
        ScrollTrigger.create({
            trigger: waterSectionContainer,
            start: 'top top+=120',
            end: 'bottom bottom-=370',
            pin: sidebar,
            pinSpacing: false,
            markers: false,
            scrub: false,
        })
    }

    if (window.innerWidth > 768) {
        gsap.fromTo(imageWaterRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageWaterRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }

    const bgs: HTMLElement[] = [bg0.value, bg1.value, bg2.value, bg3.value].filter(Boolean) as HTMLElement[]
    const bgCards: HTMLElement[] = [
        bgCard0.value, bgCard1.value, bgCard2.value, bgCard3.value
    ].filter(Boolean) as HTMLElement[]
    const titlesBg: HTMLElement[] = [
        titleBg0.value, titleBg1.value, titleBg2.value, titleBg3.value
    ].filter(Boolean) as HTMLElement[]
    const titles: HTMLElement[] = [
        title0.value, title1.value, title2.value, title3.value
    ].filter(Boolean) as HTMLElement[]
    const numbers: HTMLElement[] = [
        number0.value, number1.value, number2.value, number3.value
    ].filter(Boolean) as HTMLElement[]
    const descs: HTMLElement[] = [
        desc0.value, desc1.value, desc2.value, desc3.value
    ].filter(Boolean) as HTMLElement[]

    bgs.forEach((el, i) => {
        gsap.set(el, { opacity: i === 0 ? 1 : 0 })
    })

    bgCards.forEach((el, i) => {
        gsap.set(el, { yPercent: i === 0 ? 0 : 100 })
    })
    titlesBg.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    titles.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    numbers.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })
    descs.forEach((el, i) => {
        gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 10,
        })
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value as HTMLElement,
            start: 'top top',
            end: `+=${(bgs.length - 1) * 100}%`,
            scrub: true,
            pin: true,
        },
    })

    for (let i = 1; i < bgs.length; i++) {
        tl.to(bgs[i], {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
        }, i)
        tl.to(bgCards[i], {
            yPercent: 0,
            duration: 0.6,
            ease: 'power2.out',
        }, i)
        tl.to(titles[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(titles[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)

        tl.to(titlesBg[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(titlesBg[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)

        tl.to(numbers[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(numbers[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)

        tl.to(descs[i - 1], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power1.out',
        }, i - 0.2)

        tl.fromTo(descs[i], {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power1.out',
        }, i + 0.1)
    }

    if (titleWaterRef.value) {
        const lines = titleWaterRef.value.innerHTML.split('<br>')
        titleWaterRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleWaterRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleWaterRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphWaterRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphWaterRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (window.innerWidth > 768) {
        gsap.fromTo(imageLeftBenefitRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageLeftBenefitRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )


        gsap.fromTo(imageRightBenefitRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageRightBenefitRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }

    if (titleBenefitRef.value) {
        const lines = titleBenefitRef.value.innerHTML.split('<br>')
        titleBenefitRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleBenefitRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleBenefitRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphBenefitRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphBenefitRef.value,
                start: 'top 75%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (titleSafetyRef.value) {
        const lines = titleSafetyRef.value.innerHTML.split('<br>')
        titleSafetyRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleSafetyRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleSafetyRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphSafetyRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphSafetyRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (titleProductRef.value) {
        const lines = titleProductRef.value.innerHTML.split('<br>')
        titleProductRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleProductRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleProductRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphProductRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphProductRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (window.innerWidth > 768) {
        gsap.fromTo(imageLeftSustainabilityRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageLeftSustainabilityRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )


        gsap.fromTo(imageRightSustainabilityRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageRightSustainabilityRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }

    if (titleCommitmentRef.value) {
        const lines = titleCommitmentRef.value.innerHTML.split('<br>')
        titleCommitmentRef.value.innerHTML = ''

        lines.forEach((line, i) => {
            const span = document.createElement('span')
            span.innerHTML = line
            span.style.display = 'block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            titleCommitmentRef.value?.appendChild(span)

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power2.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: titleCommitmentRef.value,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            })
        })
    }

    gsap.fromTo(
        paragraphCommitmentRef.value,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: paragraphCommitmentRef.value,
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
        }
    )

    if (window.innerWidth > 768) {
        gsap.fromTo(imageLeftCommitmentRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageLeftCommitmentRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )


        gsap.fromTo(imageRightCommitmentRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageRightCommitmentRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }

    if (window.innerWidth > 768) {
        gsap.fromTo(imageSafetyRef.value,
            { yPercent: 30, ease: 'none' },
            {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageSafetyRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }
})

const container0 = ref(null)
const container1 = ref(null)

const detectAndRedirect = () => {
    if (!navigator.geolocation) {
        alert('Browser Anda tidak mendukung Geolocation.')
        return
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        try {
            const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${config.public.geoapifyApiKey}`
            const response = await fetch(url)
            const result = await response.json()

            const properties = result.features?.[0]?.properties

            if (!properties) {
                isOpenError.value = true
                return
            }

            const country = properties.country || ''
            const state = properties.state || ''
            const city = properties.city || ''
            const county = properties.county || ''


            if (country === 'Indonesia') {
                const isBali = [state, city, county].some(val =>
                    val?.toLowerCase().includes('bali')
                )

                if (isBali) {
                    window.location.href = 'https://wa.me/6281138314651'
                } else {
                    window.location.href = 'https://www.okearacommunity.id'
                }
            } else {
                alert('Saat ini hanya tersedia untuk pengguna di Indonesia.')
            }
        } catch (error) {
            console.error('Gagal mengambil lokasi:', error)
            isOpenError.value = true
        }
    }, (err) => {
        console.error('Geolocation error:', err)
        isOpenError.value = true
    })
}

</script>

<style scoped>
img {
    will-change: transform;
}

.transition {
    transition: all 0.3s ease-in-out;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.5s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
