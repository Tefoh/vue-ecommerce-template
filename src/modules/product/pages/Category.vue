<template>
  <main class="main">
    <div class="container">
      <div class="page">
        <div class="page__sidebar">
          <div class="box" v-show="selectedFilters.length > 0">
            <div class="box-filters">
              <div class="box-filters__header">
                <span class="box-filters__title">filters</span>
                <a class="box-filters__clear" @click.prevent="removeAll"
                  >remove all</a
                >
              </div>
              <ul class="box-filters__ul">
                <li
                  class="box-filters__li"
                  v-for="filter in selectedFilters"
                  :key="filter"
                >
                  <button
                    class="box-filters__button"
                    @click="removeFilter(filter)"
                  ></button>
                  <span class="box-filters__name">{{ filter }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">
            <div class="box__row">
              <div
                class="box__header"
                :class="{ 'box--togglable': !isBrandOpen }"
                @click="isBrandOpen = !isBrandOpen"
              >
                brands
              </div>
              <div class="box__filter" v-show="isBrandOpen">
                <div class="box__content-container">
                  <div class="box__content">
                    <ul class="box__ul">
                      <li class="box__li">
                        <label
                          class="ui-checkbox"
                          data-fa="samsung"
                          data-en="Sumsung"
                          data-serach="Sumsung samsung"
                        >
                          <input
                            type="checkbox"
                            class="ui-checkbox__input"
                            value="samsung"
                            v-model="selectedFilters"
                          />
                          <span class="ui-checkbox__mark"></span>
                          samsung
                        </label>
                      </li>
                      <li class="box__li">
                        <label
                          class="ui-checkbox"
                          data-fa="sony"
                          data-en="sony"
                          data-serach="sony sony"
                        >
                          <input
                            type="checkbox"
                            class="ui-checkbox__input"
                            value="sony"
                            v-model="selectedFilters"
                          />
                          <span class="ui-checkbox__mark"></span>
                          sony
                        </label>
                      </li>
                      <li class="box__li">
                        <label
                          class="ui-checkbox"
                          data-fa="apple"
                          data-en="apple"
                          data-serach="apple apple"
                        >
                          <input
                            type="checkbox"
                            class="ui-checkbox__input"
                            value="apple"
                            v-model="selectedFilters"
                          />
                          <span class="ui-checkbox__mark"></span>
                          apple
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box__row">
              <div
                class="box__header"
                :class="{ 'box--togglable': !isColorOpen }"
                @click="isColorOpen = !isColorOpen"
              >
                colors
              </div>
              <div class="box__filter" v-show="isColorOpen">
                <div class="box__content-container">
                  <div class="box__content">
                    <ul class="box__ul">
                      <li class="box__li">
                        <label
                          class="ui-checkbox"
                          data-fa="black"
                          data-serach="balck black"
                        >
                          <input
                            type="checkbox"
                            class="ui-checkbox__input"
                            value="black"
                            v-model="selectedFilters"
                          />
                          <span class="ui-checkbox__mark"></span>
                          black
                          <span
                            class="filter__color"
                            style="background: rgb(0, 0, 0)"
                          ></span>
                        </label>
                      </li>
                      <li class="box__li">
                        <label
                          class="ui-checkbox"
                          data-fa="blue"
                          data-serach="blue blue"
                        >
                          <input
                            type="checkbox"
                            class="ui-checkbox__input"
                            value="blue"
                            v-model="selectedFilters"
                          />
                          <span class="ui-checkbox__mark"></span>
                          blue
                          <span
                            class="filter__color"
                            style="background: rgb(0, 0, 255)"
                          ></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box box--switcher">
            <label class="ui-switcher">
              <input type="checkbox" class="ui-switcher__input" />
              <span class="ui-switcher__slider">
                <span class="ui-switcher__toggle"></span>
              </span>
              only in stock
            </label>
          </div>
        </div>
        <div class="page__content">
          <h1>user name: (store) {{ userName }}</h1>
          <ul class="breadcrumb">
            <li class="breadcrumb__item breadcrumb__item--hide">
              <a href="" class="breadcrumb__link"
                ><span class="breadcrumb__span">home</span></a
              >
            </li>
            <li class="breadcrumb__item">
              <a href="" class="breadcrumb__link"
                ><span class="breadcrumb__span">products</span></a
              >
            </li>
          </ul>
          <div class="products">
            <router-link
              :to="{ name: 'Product', params: { id: item.id } }"
              v-for="(item, index) in products"
              :key="item.id"
              class="products__item"
            >
              <div class="card">
                <div class="card__image">
                  <img
                    :src="require(`@/assets/img/slider/${item.id}.jpg`)"
                    alt=""
                    class="card__img"
                  />
                </div>
                <div class="card__title">
                  {{ item.name }}
                </div>
                <div class="card__price">
                  <span class="card__total-price">{{
                    formattedPrice(item.price)
                  }}</span>
                </div>
                <span class="card__discount">%6</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Category',

  data: () => ({
    isBrandOpen: true,
    isColorOpen: true,
    selectedFilters: []
  }),

  computed: {
    numberOne() {
      return 1
    },
    ...mapGetters('products', ['products']),
    ...mapGetters('userName', { userName: 'name' })
  },

  methods: {
    removeAll() {
      this.selectedFilters = []
    },
    removeFilter(filter) {
      this.selectedFilters = this.selectedFilters.filter(
        (item) => item !== filter
      )
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    },
    ...mapActions('products', ['getProducts'])
  },

  created() {
    this.$store.dispatch('products/getProducts', { text: 'dfjghkdfhgdrigh' })
  }
}
</script>

<style></style>
