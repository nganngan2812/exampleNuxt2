<template>
    <div class="px-5 w-full fixed top-0 flex bg-gray-200 items-center justify-between lg:px-6">
        <div>
            <NuxtLink to="/">
                <h1 class="text-lg">Home</h1>
            </NuxtLink>
        </div>
        <div class="w-2/5 justify-between flex px-5">
            <NuxtLink to="/contact" class="hover:bg-gray-300 p-3">
                Information
            </NuxtLink>
            <NuxtLink to="/" @mousemove="showList()" @mouseleave="clear()" class=" relative hover:bg-gray-300 p-3">
                <button>Products</button>
               <template v-if="show">
                    <h1>hello</h1>
                </template> 
             
            </NuxtLink>
            <NuxtLink to="/brands" class="hover:bg-gray-300 p-3"> 
                Brand
            </NuxtLink>
        </div>
       <div class="flex">
            <div>
                <NavBarSearch />
            </div>
            <NuxtLink to="/cart">
                <button class="px-2 bg-rose-200 mx-4 rounded-md"> Cart </button>
            </NuxtLink>
            <NuxtLink to="/login" ><button class="px-2 shadow-lg shadow-inner rounded-md bg-white">Logout</button></NuxtLink>
       </div>
        
    </div>
</template>
<!-- <script>
   const show = ref(false)
   const showList = () => show.value = true
   const clear = () => show.value = false
    
</script> -->
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods:{
        showList() {this.show = true},
        clear() {this.show = false}
    }
}
</script>