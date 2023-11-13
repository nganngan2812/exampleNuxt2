<template>
    <div class="relative">
        Search <input name="query" v-model="key" list="search" autocomplete="off">
        <datalist id="search" class="appearance-none">
            <option v-for="i in []" :key="i" :value="i"></option>
        </datalist>
    </div>
</template>
<!-- <script setup>
    import { useProducts } from '~/store';
    const store = useProducts()
    const key = ref('')
    const arr = store.getArrKey('name').slice(0,10)
    const input = () => {
        console.log(store.getArrKey('name'))
    }

</script> -->
<script>
export default {
    data(){
        return{
            key: ''
        }
    }
}
</script>