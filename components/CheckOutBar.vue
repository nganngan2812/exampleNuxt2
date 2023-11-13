<template>
    <div class="flex bg-gray-300 fixed bottom-0 right-0 p-3 text-2xl items-center border-l-2 border-t-2 rounded-md border-gray-600">
        <div>
            <div class="flex">
                <p class="pr-2">Total: </p>
                <p class=" text-rose-600 ">${{ total.toFixed(2) }}</p>
            </div>
            <div class="flex">
                <p class="pr-2">Product quantity: </p>
                <p class=" text-rose-600 "> {{ sumQuantity }}</p>
            </div>
        </div>
        <div class="ml-10"><button :class="`bg-red-200 px-3 py-1 border-2 rounded-md border-red-300`" @click="store.checkOut()">Checkout</button></div>
    </div>
</template>
<script>
export default {
    computed: {
        total() {
            return this.$store.getters['cart/totalCost']
        },
        sumQuantity() {
            return this.$store.getters['cart/sumQuantity']
        }
    }
}
</script>