import Data from '../records.json'

const data = Data.slice(1000, 2000)
export const state = () => ({
  all: data,
  prods: []
})

export const getters = {
    getArrKey(state, key) {
      return state.all.map((i) => i[key])
    },
    filterP(state, key, condition){
        const p = state.all.filter((i) => i[key] == condition)
        return p
    },
   
}
  
export const mutations = {
    setProducts (state, products) {
        state.prods = products
    },
    sortP(state, sor){
      const p = sor.val.sort((a,b) => {
        if(a[sor.k] > b[sor.k]){return 1}
        if(a[sor.k] < b[sor.k]){return -1}
        return 0
      })
      state.prods = p
    }
    
    //them, sua, xoa neu can 
    
}
  
export const actions = {
 
}