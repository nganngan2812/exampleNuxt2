<template>
    <div class="mt-1 px-3 py-1 text-md text-white rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 w-fit"> 
        <button @click="addCart()">Add to cart</button>
    </div>
</template>
<!-- <script setup>
    const props = defineProps({
        product: Object,
    })

    const store = useCart();
    
</script> -->
<script>
export default {
    props: {
        product: Object,
    },
    methods: {
        addCart() {
            this.$store.dispatch('cart/addToCart', this.product)
            console.log(this.$store.state.cart.cart)
        }
    }
    
}
</script>