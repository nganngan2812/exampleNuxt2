<template>
    <div class="bg-white">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 pb-5">Product details</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10">
          <div class="w-full overflow-hidden justify-center items-center flex rounded-md bg-gray-200 group-hover:opacity-75">
            <img :src="product.image" alt="image" class="h-full" />
          </div>
          <div class="col-span-2">
            <div class="mt-4 justify-between">
              <h3 class="text-lg text-gray-700 font-medium">
                  {{ product.name }}
              </h3>
              <p class="text-2xl my-3 font-medium text-gray-900">{{ product.price }} $</p>
            </div>

            <div class="mt-10">
              <p class="text-sm font-medium text-gray-900">Product description:</p>
              <p class="text-gray-500">{{ product.description }}</p>
            </div>
          </div>
          <div class="justify-center">
            <p class="text-2xl">BRAND: {{ product.brand }} </p>
            
            <div class="my-5 px-3 py-1 text-md text-white rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 w-fit">
              <NuxtLink :to="`/brand/${product.brand}`">View Brand</NuxtLink>
            </div>
            <NavBarAddToCart 
              :product="product"
            />
          </div>
              
        </div>
    </div>
  </template>
  
<!-- <script setup>
  import { useProducts } from '../store/index'

  const store = useProducts()
  const router = useRoute();
  const id = router.params.id; 
  const product = store.products.find((p) => p.objectID == id)
  console.log(id, product)
  
</script> -->
<script>
import { computed } from 'vue'
export default {
    async asyncData({ params }) {
      const id = params.id // When calling /abc the slug will be "abc"
      return { id }
    },
    computed:{
        product() {
            return this.$store.state.all.find((p) => p.objectID == this.id)
        }
    }
}
</script>