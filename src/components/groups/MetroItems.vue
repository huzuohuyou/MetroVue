<template>
  <div class="metro-section tile-span-4">
    <h2>{{todo.title}}</h2>

    <MetroItem v-for="item in todo.items" :key="item.id" :item="item"></MetroItem>

    <!-- <a class="tile imagetext bg-color-blueDark" :class="{'wide':item.wide}" :href='item.href'>
      <div class="image-wrapper">
        <img :src='item.src' />
      </div>
      <div class="column-text">
        <div class="text4">{{item.text}}</div>
      </div>
      <div class="app-label">{{item.label}}</div>
    </a> -->
  </div>

</template>

<script>
  import MetroItem from '@/components/groups/MetroItem';
  export default {
    name: 'MetroItems',
    components: {
      MetroItem,
    },
    props: {
      todo: {
        type: Object,
        required: true
      },

    },
    // data() {
    //   return {
    //     msg: 'Welcome to Your Vue.js App',
    //     todos: [ ]
    //   }
    // }
  }
</script>

<style scoped>

</style>