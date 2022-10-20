<template>
  <div>
    <div class="page">
      <router-view name="header" />
      <div class="main">
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import "@/assets/scss/master.scss";

export default class AppView extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100vw;
  height: 100vh;

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .main {
    flex-grow: 1;
  }
}
</style>
