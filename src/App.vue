<template>
  <div id="app">
      <MetroHeader id="MetroHeader"> </MetroHeader>

      <div id="MetroGroup" class="container-fluid">
          <div class="row-fluid">
              <div class="metro span12">
  
                <MetroGroup></MetroGroup>
                  
              </div>
          </div>
      </div>
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
    watch: {
      selected: function (newV, oldV) {
        console.log(newV, '--', oldV);
        this.$router.push({ name: this.selected });
      }
    }
  }
</script>

<style lang="css">
  body {
    padding-top: 50px;
    background-color: #333;
  }
</style>