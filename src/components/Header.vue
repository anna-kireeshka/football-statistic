<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="navigation-header">
        <span class="material-symbols-outlined navigation-header__icon">
          sports_soccer
        </span>
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
  color: #785c7a;
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
      }
    }
    &__icon {
      cursor: pointer;
      font-size: 2rem;
      margin-right: 16px;
      padding: 10px;
      &:hover,
      &:focus {
        box-shadow: 2px 2px 3px 3px #9d9ba2;
        background-color: #f5f5f5;
        border-radius: 50%;
      }
    }
    &__icon--theme {
      margin: 0;
    }
  }
}
</style>
