<template>
    <ShowList
        :products = products
        :tilte="bName"
    />
</template>
<!-- <script setup>
    import {useProducts } from '../../store/index'

    const store = useProducts()
    const router = useRoute()
    const brandName = router.params.bName
    store.filterP('brand', brandName)
</script> -->
<script>
export default {
    async asyncData({ params }) {
      const bName = params.bName // When calling /abc the slug will be "abc"
      return { bName }
    },
    computed:{
        products() {
            return this.$store.state.all.filter((p) => p.brand == this.bName)
        }
    }
}
</script>