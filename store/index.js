import Data from '../records.json'

const data = Data.slice(1000, 2000)
export const state = () => ({
    all: data
  })
  
export const getters = {
    getArrKey(state, key) {
      return state.all.map((i) => i[key])
    },
    filterP(state, key, condition){
        const p = state.all.filter((i) => i[key] == condition)
        return p
    },
    sort(state, key){
		const p = state.all.sort((a,b) => {
			if(a[key] > b[key]){return 1}
			if(a[key] < b[key]){return -1}
			return 0
		})
		return p
	}
}
  
export const mutations = {
    setProducts (state, products) {
        state.all = products
    },
    //them, sua, xoa neu can 
    
}
  
export const actions = {
    
}