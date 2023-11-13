export const state = () => ({
    cart: []
  })
  
export const getters = {
    totalCost(state) {
        const filterCheck = state.cart.filter((i) => i.checked)
        return filterCheck.reduce((total, p)=> total + p.price * p.quantity, 0 )
    },
    sumQuantity(state) {
        const filterCheck = state.cart.filter((i) => i.checked)
        return filterCheck.reduce((total, p)=> total + p.quantity, 0 )
    }
}

export const mutations = {
    add(state, product){
        state.cart.push({
            ...product,
            quantity: 1,
            checked: false
        })
    },
    changeCheck(state, product){
        const p = state.cart.find(item => item.objectID == product.objectID)
        p.checked = !p.checked
    },
    incrementItemQuantity (state, product) {
        const cartItem = state.cart.find(item => item.objectID == product.objectID)
        cartItem.quantity++
    },
    reduceItemQuantity(state, product) {
        const cartItem = state.cart.find(item => item.objectID == product.objectID)
        cartItem.quantity--
    },
    
    setCartItems (state, { items }) {
        state.items = items
    },
}

export const actions = {
    addToCart({state, commit}, product){
        const p = state.cart.find((i)=> i.objectID == product.objectID)
        if(!p) {
            commit('add', product)
        }
        else {
            commit('incrementItemQuantity', product)
        }
        
    }
}