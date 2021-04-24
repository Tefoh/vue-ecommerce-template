import { SET_PRODUCTS_MUTATIONS } from './types'

export default {
  [SET_PRODUCTS_MUTATIONS] (state, data) {
    state.products = data
  }
}