<template>
  <div class="slider">
    <div class="slider__head">
      <span class="slider__title"><slot name="title" /></span>
    </div>
    <div class="slider__content">
      <div class="swiper-container" ref="sliderSwiper">
        <div class="swiper-wrapper">
          <slot />
        </div>
      </div>
    </div>
    <div class="swiper-button-next" ref="nextBtn">&#10095;</div>
    <div class="swiper-button-prev" ref="prevBtn">&#10094;</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use([Navigation])

export default {
  name: 'SwiperSlider',

  mounted() {
    new Swiper(this.$refs.sliderSwiper, {
      loop: false,
      navigation: {
        nextEl: this.$refs.nextBtn,
        prevEl: this.$refs.prevBtn
      },
      slidesPerView: 4,
      clickable: true,
      spaceBetween: 20,
      breakpoints: {
        1920: { slidesPerView: 4, spaceBetween: 20 },
        1028: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 0 }
      }
    })
  }
}
</script>

<style scoped>
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  display: none;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  display: none;
}
</style>
