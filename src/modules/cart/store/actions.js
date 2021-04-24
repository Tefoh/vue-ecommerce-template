import { ADD_PRODUCT, CHANGE_QUNTITY, REMOVE_ITEM } from './types'

export const actions = {
  addItem({ commit, state }, payload) {
    commit(ADD_PRODUCT, payload)

    localStorage.setItem('cart', JSON.stringify(state))
  },
  changeQuantity({ commit, state }, payload) {
    commit(CHANGE_QUNTITY, payload)

    localStorage.setItem('cart', JSON.stringify(state))
  },
  removeItem({ commit, state }, payload) {
    commit(REMOVE_ITEM, payload)

    localStorage.setItem('cart', JSON.stringify(state))
  }
}