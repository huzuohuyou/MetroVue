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
<style lang="css" scoped>
    @import 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';

    @import '../../assets/content/css/bootstrap.css';
    @import '../../assets/content/css/bootstrap-responsive.css';
    @import '../../assets/content/css/bootmetro.css';
    @import '../../assets/content/css/bootmetro-tiles.css';
    @import '../../assets/content/css/bootmetro-charms.css';
    @import '../../assets/content/css/metro-ui-light.css';
    @import '../../assets/content/css/icomoon.css';

    @import '../../assets/content/css/demo.css';
    @import '../../assets/scripts/google-code-prettify/prettify.css';
</style>