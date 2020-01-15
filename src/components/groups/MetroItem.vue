<template>
  <a class="tile imagetext bg-color-blueDark" :class="{'wide':todo.wide}" :href='todo.href'>
    <div class="image-wrapper">
      <img :src='todo.src'/>
    </div>
    <div class="column-text">
      <div class="text4">{{todo.text}}</div>
    </div>
    <div class="app-label">{{todo.label}}</div>
  </a>
</template>

<script>
  export default {
    name: 'MetroItem',
    props: {
      todo: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>