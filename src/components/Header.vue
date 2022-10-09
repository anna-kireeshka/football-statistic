<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="navigation-header">
        <router-link
          :to="{ name: 'LeagueList' }"
        >
          <span class="material-symbols-outlined navigation-header__icon">
            sports_soccer
          </span>
        </router-link>
        <h1 class="navigation-header__title">Football statistics</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationList",
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  background: $background;
  padding: 10px 0;
  color: $font-color;
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    .navigation-header {
      display: flex;
      align-items: center;
      &__icon {
        margin-right: 25px;
        font-size: 3rem;
        color: $font-color;
      }
    }
    &__icon {
      cursor: pointer;
      font-size: 2rem;
      margin-right: 16px;
      padding: 10px;
    }
  }
}
</style>
