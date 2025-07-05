import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
    const router = useRouter()

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    router.afterEach(() => {
        requestAnimationFrame(() => {
            lenis.scrollTo(0, { immediate: true })
        })
    })
})
