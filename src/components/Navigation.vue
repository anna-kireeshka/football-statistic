<template>
  <div class="navigation">
    <div
      v-for="(item, index) in breadcrumbs"
      :key="index"
      class="navigation__item"
    >
      <router-link
        :to="item.to"
        :class="{ disabled: breadcrumbs.length - 1 === index }"
        class="navigation__link"
      >
        <span
          class="material-symbols-outlined"
          v-if="index !== 0"
        >
          chevron_right
        </span>
        <span class="mb-0 mr-2">{{ item.text }} </span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
  if (typeof route.meta.breadCrumb === "function") {
    return route.meta.breadCrumb.call(this, route);
  }
  return route.meta.breadCrumb;
});
</script>

<style scoped lang="scss">
.navigation {
  @include contentPosition;
  display: flex;
  padding: 20px 0 20px 0;
  &__item {
    margin-right: 10px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  &__link {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: $font-color;
  }
}
.disabled {
  opacity: 0.5;
  color: rgb(3, 0, 43);
  pointer-events: none;
}
</style>
