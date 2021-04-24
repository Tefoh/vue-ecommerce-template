import { createStore } from 'vuex'

import cart from '@/modules/cart/store'
import user from '@/modules/user/store'
import products from '@/modules/product/store'

const store = createStore({
  modules: {
    cart,
    userName: user,
    products
  }
})

export default store