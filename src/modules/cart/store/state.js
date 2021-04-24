const items = JSON.parse(localStorage.getItem('cart'))?.items ?? []

export const state = () => ({
  items
})
