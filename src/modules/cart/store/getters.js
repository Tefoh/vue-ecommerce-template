
export const getters = {
  subtotal(state) {
    return state.items.reduce((prev, item) => {
        return (item.price * item.quantity) + prev
    }, 0)
  },

  tax: (state, getters) => getters.subtotal * 0.09,

  total: (state, getters) => getters.subtotal + getters.tax,

  count: (state) => state.items.length
}
