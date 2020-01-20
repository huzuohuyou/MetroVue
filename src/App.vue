<template>
  <div id="app">
    <MetroHeader id="MetroHeader"> </MetroHeader>
    <!-- <keep-alive> -->
    <router-view class="container-fluid"></router-view>
    <!-- </keep-alive> -->

    <!-- <MetroGroup></MetroGroup> -->
  </div>
</template>

<script>

  // import {MetroHeader,MetroGroup,Content} from '@/components/layouts';
  import MetroGroup from '@/components/groups/MetroGroup';
  import MetroHeader from '@/components/headers/MetroHeader';

  export default {
    name: 'App',
    data() {
      return {
        selected: ''

      }
    },
    components: {
      MetroHeader,
      MetroGroup
    },
    created() {
      this.$router.push('index').catch((e) => { });
    },
    watch: {
      selected: function (newV, oldV) {
        console.log(newV, '--', oldV);

      }
    }
  }
</script>

<style lang="css">
  body {
    padding-top: 50px;
  }
</style>