<template>
  <div>
    <ShowList
      :products="products"
      :tilte="tilte"
    >
    </ShowList>
  </div>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            tilte: 'List Product'
        };
    },
    computed: {
        products() {
            return this.$store.state.all;
        }
    },
}
</script>
