<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
#app,html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#app{
    display: flex;
    flex-direction: column;
}
.picker-item{
    font-size: 0.25rem;
}
.mint-msgbox{
    height: 1.5rem;
}
</style>
