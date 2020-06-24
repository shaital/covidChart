<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="The leaders chart"/>
    <LeadersSelect/>
    <ChartContainer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ChartContainer from './components/ChartContainer.vue';
import LeadersSelect from './components/LeadersSelect.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ChartContainer,
    LeadersSelect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
