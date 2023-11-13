<template>
    <div class="py-10">
        <h1 class="font-medium text-4xl p-5">Cart</h1>
        <div class="table w-full">
            <div class="table-header-group font-medium">
                <div class="table-row"> 
                    <h3 class="table-cell pb-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; NAME</h3>
                    <h3 class="table-cell">COST($)</h3>
                    <h3 class="table-cell">QUANTITY</h3>
                    <h3 class="table-cell">TOTAL($)</h3>
                </div>
                <div v-show="cartItem.length==0" class="text-red-500"><p>Chua co san pham nao</p></div>
            </div>
            <div class="table-row-group">
                <div v-for="product in cartItem" :key="product.objectID" :class="`table-row ${color(product)}`">
                    <div class="table-cell border-t-2">
                        <div class="flex pt-3 items-center">
                        <input type="checkbox" class="mx-3"
                                :id="product.objectID" 
                                @change="check(product)"
                                :checked="product.checked" 
                            />
                            <label :for="product.objectID">
                                <div class="flex">
                                    <img :src="product.image" alt="image" class="h-10 w-auto">
                                    <p class="ml-2">{{ product.name }}</p>
                                </div>
                            </label> 
                        </div>
                        
                    </div>
                    
                    <div class="table-cell border-t-2">{{ product.price }}</div>
                    <div class="table-cell border-t-2" >
                        <div class="flex">
                            <button @click="$store.commit('cart/reduceItemQuantity', product)" :disabled="product.quantity == 1" class="bg-white w-6 h-6 rounded-full border-black font-bold">-</button>
                            <p class="mx-2">{{ product.quantity }}</p>
                            <button @click="$store.commit('cart/incrementItemQuantity', product)" class="bg-white w-6 h-6 rounded-full border-black font-bold">+</button>
                        </div>  
                    </div>
                    <div class="table-cell border-t-2 items-center">
                        <p class="pb-3">{{ (product.price * product.quantity).toFixed(2) }}</p>
                    </div>
               
                 </div>
                
            </div>
        </div>
        
        <CheckOutBar />
    </div>
    
    
</template>
<!-- <script setup>
    import { useCart } from '~/store/cart';
    definePageMeta({
        layout: 'cart',
    })

    const store = useCart()
    const color = ((p)=> p.checked? 'bg-red-200': 'bg-red-50')
   
</script> -->
<script>
export default {
    layout: 'cart',
    computed: {
        cartItem() {
            return this.$store.state.cart.cart;
        }
    },
    methods: {
        color(p) {
            return p.checked? 'bg-red-200': 'bg-red-50'
        },
        check(p) {
            return this.$store.commit('cart/changeCheck', p)
        }
    }
}
</script>