<template>
  <div class="error-wrapper">
    <div class="error">
      <h1 class="error__code">4<span class="error__code--zero">0</span>4</h1>
      <h2 class="error__status">THE PAGE YOU REQUESTED COULD NOT FOUND</h2>
      <router-link class="error__btn" tag="button" :to="{ name: 'LeagueList' }"
        >GO TO HOMEPAGE</router-link
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.error-wrapper {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #fff;
  border: 6px solid $background;
  border-radius: 4px;
  margin: 3em auto;
}
.error {
  width: 80%;
  padding: 2em;
  margin: 0 auto;

  &__code {
    font-weight: 900;
    font-size: 4em;
    margin-bottom: 1rem;
    color: $font-color;
    &--zero {
      color: #c39fdc;
    }
  }
  &__status {
    color: $font-color;
    margin-bottom: 1rem;
  }
  &__btn {
    display: block;
    width: 200px;
    margin: 0 auto;
    background-color: #c39fdc;
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    border-radius: 4px;
  }
}
</style>
