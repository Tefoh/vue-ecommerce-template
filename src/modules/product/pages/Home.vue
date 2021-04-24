<template>
  <main class="main">
    <div class="container">
      <div class="header__top">
        <div class="header__top-content">
          <h1 class="header__top-h1">spacody - webamooz</h1>
          <p class="header__top-p">be professional</p>
        </div>
        <form class="header__form">
          <div class="header__search">
            <input
              type="text"
              class="header__serach-input"
              placeholder="search..."
            />
            <button
              class="header__search-btn btn btn--brand btn--boxshadow"
            ></button>
          </div>
        </form>
      </div>
      <div class="slideshow">
        <a
          href=""
          class="slideshow__slide"
          v-for="(slide, index) in slides"
          :key="slide.img"
          :style="index === slideShowIndex ? 'display:block;' : 'display:none;'"
        >
          <img :src="slide.img" class="slideshow__img" />
        </a>

        <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
        <a @click="move(1)" class="slideshow__next">&#10094;</a>

        <div class="slideshow__items">
          <div
            class="slideshow__item"
            v-for="(slide, index) in slides"
            :key="slide.img"
          >
            <div
              class="slideshow__item-inner"
              :style="
                index === slideShowIndex ? `width: ${progressWidth}%` : ''
              "
            ></div>
          </div>
        </div>
      </div>
      <SwiperSlider v-if="products.length">
        <template #title> Mobile</template>
        <router-link
          :to="{ name: 'Product', params: { id: 1 } }"
          class="swiper-slide"
          v-for="item in products"
          :key="item.id"
        >
          <div class="card">
            <div class="card__image">
              <img
                :src="require(`@/assets/img/slider/${item.id}.jpg`)"
                alt=""
                class="card__img"
              />
            </div>
            <div class="card__title2">{{ item.name }}</div>
            <div class="card__price">
              <span class="card__total-price">{{
                formattedPrice(item.price)
              }}</span>
            </div>
            <span class="card__discount">%6</span>
          </div>
        </router-link>
      </SwiperSlider>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SwiperSlider from '../components/SwiperSlider'
export default {
  name: 'Home',

  metaInfo: {
    titleTemplate: null
  },

  components: {
    SwiperSlider
  },

  data: () => ({
    slides: [
      { img: require('@/assets/img/slideshow/1.png') },
      { img: require('@/assets/img/slideshow/2.png') },
      { img: require('@/assets/img/slideshow/3.png') },
      { img: require('@/assets/img/slideshow/4.png') }
    ],
    slideShowIndex: 0,
    sliderInterval: null,
    progressWidth: 0
  }),

  computed: {
    ...mapGetters('products', ['products'])
  },

  methods: {
    move(n) {
      if (this.slides.length <= this.slideShowIndex + n) {
        this.slideShowIndex = 0
      } else if (this.slideShowIndex + n < 0) {
        this.slideShowIndex = this.slides.length - 1
      } else {
        this.slideShowIndex += n
      }
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    }
  },

  created() {
    this.$store.dispatch('products/getProducts', { text: 'dfjghkdfhgdrigh' })
    this.sliderInterval = setInterval(() => {
      if (this.progressWidth >= 100) {
        this.progressWidth = 0
        this.move(1)
      } else {
        this.progressWidth++
      }
    }, 15)
  },

  unmounted() {
    clearInterval(this.sliderInterval)
  }
}
</script>
