<template>
  <ul>
    <li class="sceleton" v-for="item in 15" :key="item"></li>
  </ul>
</template>

<style scoped lang="scss">
.sceleton {
  @include sceleton;
  list-style: none;
}
</style>
