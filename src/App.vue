<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body,
html {
  height: 100%;
}
body {
  position: relative;
  width: 100%;
  min-height: 500px;
  min-width: 800px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  zoom: 1;
  left: 0;
  top: 0;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.2);
  background-size: 100% 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-input__inner {
  width: 100%;
  height: 100%;
  display: block;
  letter-spacing: 1px;
  font-size: 20px !important;
  background-color: transparent !important;
  color: #fff;
  text-align: center;
  border-width: 0 !important;
  border-image: initial;
  outline: 0;
  padding: 0 10px;
}
</style>
