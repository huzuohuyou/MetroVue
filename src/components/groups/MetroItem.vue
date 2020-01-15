<template>
  <a class="tile imagetext bg-color-blueDark" :class="{'wide':item.wide}" :href='item.href'>
    <div class="image-wrapper">
      <img :src='item.src'/>
    </div>
    <div class="column-text">
      <div class="text4">{{item.text}}</div>
    </div>
    <div class="app-label">{{item.label}}</div>
  </a>
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