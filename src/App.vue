<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 10px;
  align-items: center;
}

.reserved {
  height: 20px;
}

.error {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 15px;
  font-size: 12px;
  color: red;
}
</style>
