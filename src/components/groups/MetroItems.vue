<template>
    <div class="metro-section tile-span-4">
        <h2>{{msg}}</h2>
        <MetroItem v-for="todo in todos" :key="todo.id" :todo="todo"></MetroItem>
        <a class="tile imagetext bg-color-blueDark" :class="{'wide':todo.wide}" :href='todo.href'>
            <div class="image-wrapper">
              <img :src='todo.src'/>
            </div>
            <div class="column-text">
              <div class="text4">{{todo.text}}</div>
            </div>
            <div class="app-label">{{todo.label}}</div>
          </a>
    </div>

</template>

<script>
  export default {
    name: 'MetroItems',
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