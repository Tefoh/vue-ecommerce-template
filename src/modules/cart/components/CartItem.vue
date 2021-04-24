<template>
  <div class="cart__item">
    <div class="cart__row">
      <div class="cart__image">
        <a href="" class="cart__image-link">
          <img
            :src="require(`@/assets/img/slider/${item.id}.jpg`)"
            alt=""
            class="cart__image-img"
          />
        </a>
      </div>
      <div class="cart__details">
        <h5 class="cart__details-h5">
          <router-link
            :to="{ name: 'Product', params: { id: item.id } }"
            class="cart__details-link"
          >
            {{ item.name }}
          </router-link>
        </h5>
        <p>price: {{ formattedPrice(item.price) }}</p>
        <div class="cart__deatils-code">
          quantity in cart :{{ item.quantity }}
        </div>
      </div>
      <div class="cart__amounts">
        <div class="cart__amounts-div">
          <input
            type="number"
            class="txt"
            placeholder="quantity"
            v-model.number="quantity"
            max="1000"
            min="1"
          />
          <button
            @click="changeQuantity({ product: item, quantity })"
            class="btn btn--brand btn--boxshadow"
            style="margin-right: 1rem"
            type="button"
          >
            set to cart
          </button>
          <button
            type="button"
            @click="removeItem(item)"
            class="cart__amounts-remove"
            style="cursor: pointer"
          >
            remove
          </button>
        </div>
      </div>
      <div class="cart__total">
        <div class="cart__total-div">
          <h6 class="cart__total-title">total</h6>
          {{ formattedPrice(item.price * item.quantity) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      quantity: this.item.quantity
    }
  },

  methods: {
    formattedPrice(price) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    },
    ...mapActions('cart', ['changeQuantity', 'removeItem'])
  }
}
</script>

<style></style>
