<template>
    <div class="bg-white" id="top">
        <h2 class="text-2xl mb-10">{{ tilte }}</h2>
        <button class="m-5" @click="store.sortP('name', products)">Sort by name</button>
        <button @click="store.sortP('price', products)">Sort by price</button>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in paginatedData" :key="product.objectID" :href="product.href" class="group">
                <NuxtLink :to="`/items/${product.objectID}`">
                    <div class="flex justify-center items-center w-auto h-44 overflow-hidden rounded-lg bg-gray-100 group-hover:bg-gray-200">
                        <img :src="product.image" alt="image"/>
                    </div>
                    <h3 class="mt-4 text-md font-medium text-gray-700 truncate">{{ product.name }}</h3>
                </NuxtLink>
                <div class="flex justify-between my-2">
                    <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} $</p>
                    <NavBarAddToCart
                        :product="product"
                    ></NavBarAddToCart> 
                </div>
                
            </a>
        </div>
        <div class="flex justify-end my-10">
            <button @click="backPage" class="border-2 border-gray-600 rounded-lg px-1 mx-1">prev</button>
            <button 
                v-for="item in Math.ceil(products.length / perPage)"
                :class="`${color(item)} border-2 border-gray-800 px-1 mx-1`"
                :key="item"
                @click="() => goToPage(item)"
            >
                {{ item }}
            </button>
            <button @click="nextPage" class="border-2 border-gray-600 rounded-lg px-1 mx-1">next</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        products: Array,
        tilte: String
    },
    data() {
        return{
            page: 1,
            perPage: 100,
            
        }
    },
    computed: {
        paginatedData() {
            return this.products.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        }
    },
    methods: {
        nextPage() {
            if (this.page !== Math.ceil(this.products.length / this.perPage)) {
                this.page += 1;
            }
            window.scrollTo(0, 0)
        },
  
        backPage() {
            if (this.page !== 1) {
                this.page -= 1;
            }
            window.scrollTo(0, 0)
        },
    
        goToPage(numPage) {
            this.page = numPage;
            window.scrollTo(0, 0)
        },
        color(i) {
            if(i !== this.page) {
                return 'bg-gray-100';
            }
            else {return 'bg-rose-300'}
        }
    }
}
</script>