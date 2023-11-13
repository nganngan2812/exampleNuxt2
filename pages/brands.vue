<template>
    <div>
        <h1  class="text-2xl mb-10"> All Brand </h1>
        <div class="grid grid-cols-3">
            <div v-for="brand in allBrand" :key="brand"
                class="mt-1 px-3 py-1 text-lg text-bold rounded-lg bg-gray-200 hover:bg-gray-300 active:bg-gray-500 w-fit"> 
                <NuxtLink :to="`brand/${brand}`">{{ brand }}</NuxtLink>
            </div>
        </div>
        
        
    </div>
    
</template>
<script>
export default {
    computed: {
        allBrand() {
            const all = this.$store.state.all.map((i) => i.brand);
            return all.reduce((arr, p) => {
                if(!arr.includes(p)){ arr.push(p) }
                return arr;
            }, [])
        }
    },
}
</script>
