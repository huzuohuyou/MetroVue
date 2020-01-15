<template>
  <!-- :href='item.href' -->
  <router-link class="tile imagetext bg-color-blueDark" :class="{'wide':item.wide}" :to="item.id">
    <div class="image-wrapper">
      <img :src='item.src' />
    </div>
    <div class="column-text">
      <div class="text4">{{item.text}}</div>
    </div>
    <div class="app-label">{{item.label}}</div>
  </router-link>
</template>

<script>
  export default {
    name: 'MetroItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>