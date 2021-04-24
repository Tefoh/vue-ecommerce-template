<template>
  <header class="header header--bg">
    <div class="header__shape">
      <div class="header__shape-inner"></div>
    </div>
    <div class="container">
      <div class="navbar">
        <div class="navbar__row">
          <div class="header__logo">
            <router-link
              :to="{ name: 'Home' }"
              class="header__logo-img"
            ></router-link>
          </div>
          <div
            class="navbar__items"
            :class="{ 'navbar__items--is-active': showSideBar }"
          >
            <ul class="navbar__ul">
              <li class="navbar__item">
                <router-link
                  :to="{ name: 'Home' }"
                  class="navbar__link navbar__link--is-active"
                  >home</router-link
                >
              </li>
              <li class="navbar__item navbar__item--has-sub">
                <a @click.prevent href="" class="navbar__link">Categories</a>
                <ul class="navbar__subset">
                  <li class="navbar__item">
                    <router-link :to="{ name: 'Category' }" class="navbar__link"
                      >Menu 1</router-link
                    >
                  </li>
                  <li class="navbar__item">
                    <router-link :to="{ name: 'Category' }" class="navbar__link"
                      >Menu 2</router-link
                    >
                  </li>
                  <li class="navbar__item navbar__item--has-sub">
                    <router-link :to="{ name: 'Category' }" class="navbar__link"
                      >Menu 3</router-link
                    >
                    <ul class="navbar__subset">
                      <li class="navbar__item">
                        <router-link
                          :to="{ name: 'Category' }"
                          class="navbar__link"
                          >Menu 1</router-link
                        >
                      </li>
                      <li class="navbar__item">
                        <router-link
                          :to="{ name: 'Category' }"
                          class="navbar__link"
                          >Menu 2</router-link
                        >
                      </li>
                      <li class="navbar__item navbar__item--has-sub">
                        <a href="" class="navbar__link">Menu 3</a>
                        <ul class="navbar__subset">
                          <li class="navbar__item">
                            <router-link
                              :to="{ name: 'Category' }"
                              class="navbar__link"
                              >Menu 1</router-link
                            >
                          </li>
                          <li class="navbar__item">
                            <router-link
                              :to="{ name: 'Category' }"
                              class="navbar__link"
                              >Menu 2</router-link
                            >
                          </li>
                          <li class="navbar__item">
                            <router-link
                              :to="{ name: 'Category' }"
                              class="navbar__link"
                              >Menu 3</router-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="navbar__item">
                <router-link :to="{ name: 'About' }" class="navbar__link"
                  >About us</router-link
                >
              </li>
              <li class="navbar__item">
                <a
                  href="https://github.com/Tefoh/vue-ecommerce-template"
                  class="navbar__link"
                  >Contact us(github)</a
                >
              </li>
            </ul>
          </div>
          <div class="navbar__action">
            <div class="header__basket">
              <span
                class="header__basket-icon"
                @click="showDropDownBasket"
              ></span>
              <span class="header__basket-count">{{ count }}</span>
              <div
                class="header__dropdown"
                :class="{ 'header__dropdown--is-active': isBasketDropDown }"
              >
                <div
                  class="header__dropdown-content header__dropdown-content--overflow"
                >
                  <div
                    class="header__basket-item"
                    v-for="item in items"
                    :key="item.id"
                  >
                    <a href="" class="header__basket-link">
                      <img
                        :src="require(`../assets/img/slider/${item.id}.jpg`)"
                        class="header__basket-img"
                      />
                    </a>
                    <div class="header__basket-details">
                      <h5>
                        <a class="header__basket-title" href=""
                          >{{ item.name }} ({{ item.quantity }})</a
                        >
                      </h5>
                      <div class="header__basket-price">
                        {{ formattedPrice(item.price) }}
                      </div>
                      <button
                        @click="removeItem(item)"
                        type="button"
                        class="header__basket-remove"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                  <div class="header__basket-btn">
                    <router-link
                      :to="{ name: 'Cart' }"
                      class="btn btn--boxshadow btn--brand w--100"
                      >complete order</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="header__account">
              <span
                class="header__account-icon"
                @click="showDropDownAccount"
              ></span>
              <div
                class="header__dropdown header__dropdown--w200"
                :class="{ 'header__dropdown--is-active': isAccountDropDown }"
              >
                <div class="header__dropdown-content">
                  <router-link
                    :to="{ name: 'Login' }"
                    class="header__account-link"
                    >Login</router-link
                  >
                  <router-link
                    :to="{ name: 'Register' }"
                    class="header__account-link"
                    >Register</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="header__menu"
              :class="{ 'header__menu--is-active': showSideBar }"
              @click="toggleSidebar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'BaseHeader',

  data: () => ({
    isBasketDropDown: false,
    isAccountDropDown: false,
    showSideBar: false
  }),

  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['count'])
  },

  methods: {
    showDropDownBasket() {
      this.isAccountDropDown = false
      this.isBasketDropDown = !this.isBasketDropDown
    },
    showDropDownAccount() {
      this.isBasketDropDown = false
      this.isAccountDropDown = !this.isAccountDropDown
    },
    eventListener(event) {
      if (!event.target.closest('.header__basket,.header__account')) {
        this.isBasketDropDown = false
        this.isAccountDropDown = false
      }
      if (!event.target.closest('.navbar')) {
        this.showSideBar = false

        this.$emit('show-sidebar', false)
      }
    },
    toggleSidebar() {
      this.showSideBar = !this.showSideBar

      this.$emit('show-sidebar', this.showSideBar)
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    },
    ...mapActions('cart', ['removeItem'])
  },

  mounted() {
    document.addEventListener('click', this.eventListener)
  },

  unmounted() {
    document.removeEventListener('click', this.eventListener)
  }
}
</script>

<style></style>
