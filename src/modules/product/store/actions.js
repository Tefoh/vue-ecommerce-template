import axios from 'axios'
import { SET_PRODUCTS_MUTATIONS } from './types'

export default {
  async getProducts (context, { text }) {
    const { data } = await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/49357fb98c1c6dde9070fd1a7ec1e5d532c43141/products.json')
    
    context.commit(SET_PRODUCTS_MUTATIONS, data)

    context.dispatch('log', text)

    // console.log(context.rootGetters['userName/name'])
    // console.log(context.rootState.userName.user.name)
    // context.dispatch('userName/userLog', null, { root: true })
    // context.commit('userName/SET_USER', null, { root: true })
  },
  log(ctx, payload) {
    console.log(payload)
  }
}