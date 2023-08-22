<template>
  <router-view />
</template>
 
<style>
/* PC 端样式 */
#app {
  max-width: 1024px;
  margin: 0 auto;
}
 
/* 手机端样式 */
@media screen and(max-width: 767px) {
  #app {
    max-width: 100%;
    padding: 0 10px;
  }
}
</style>