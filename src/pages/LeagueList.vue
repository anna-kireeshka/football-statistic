<template>
  <div class="wrapper">
    <FormInput
      type="'text'"
      class="input"
      v-model="leagueSearchValue"
      placeholder="Найти лигу..."
      @updateInput="leagueSearchValue = $event"
    />
    <ComponentListLeague :list="getLeagueList" />
  </div>
</template>

<script lang="ts" setup>
import FormInput from "@/components/UI/FormInput.vue";
import ComponentListLeague from "@/components/ComponentListLeague.vue";
import { ref, computed } from "vue";
import { LeagueList } from "@/types/types";
import { HTTP } from "@/services/api";

const leagueSearchValue = ref<string>("");

const leaguesList = ref<Array<LeagueList>>([]);

const getLeagueList = computed(() => {
  return leaguesList.value?.filter((el: LeagueList) =>
    el.name.includes(leagueSearchValue.value.toLowerCase())
  );
});

HTTP.get("/competitions")
  .then((response) => {
    leaguesList.value = response.data.competitions.filter(
      (el: LeagueList) => el.plan === "TIER_ONE"
    );
  })
  .catch((e) => console.log(e, 'error'))
</script>

<style scoped lang="scss">
.wrapper {
  padding-top: 40px;
}
.input {
  @include inputPosition;
  @include wrapperTable;
}
</style>
