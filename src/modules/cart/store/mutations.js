import { ADD_PRODUCT, CHANGE_QUNTITY, REMOVE_ITEM } from './types'

export const mutations = {
  [ADD_PRODUCT](state, item) {
    const product = state.items.find(product => product.id === item.id)
    if(product) {
      product.quantity++
    } else {
      state.items.push({ ...item, quantity: 1 })
    }
  },
  [CHANGE_QUNTITY](state, payload) {
    const product = state.items.find(product => product.id === payload.product.id)

    product.quantity = payload.quantity
  },
  [REMOVE_ITEM](state, item) {
    state.items = state.items.filter(product => product.id !== item.id)
  }
}
