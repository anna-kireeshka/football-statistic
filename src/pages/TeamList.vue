<template>
  <div class="wrapper">
    <FormInput
      type="'text'"
      class="input"
      v-model="teamSearchValue"
      placeholder="Найти команду..."
      @updateInput="teamSearchValue = $event"
    />
    <ComponentListTeam :list="filteredTeamList" :leagueName="leagueName">
      <template v-slot:list> </template>
    </ComponentListTeam>
  </div>
  <CustomAlert
    :alert-text="errorText"
    :type="typeAlert"
    :isShowError="isShowError"
  />
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import FormInput from "@/components/UI/FormInput.vue";
import CustomAlert from "@/components/UI/CustomAlert.vue";
import { HTTP } from "@/services/api";
import { TeamList } from "@/types/types";
import { useRoute } from "vue-router";
import { AxiosResponse } from "axios";
import ComponentListTeam from "@/components/ComponentListTeam.vue";

const route = useRoute();

const leagueName = ref<string>(`${route.params.leagueTitle}`);

const leagueId = ref<string>(`${route.params.leagueId}`);

const leagueCode = ref<string>(`${route.params.code}`);

const teamList = ref<Array<TeamList>>([]);

const teamSearchValue = ref("");

const errorText = ref<string>("");

const isShowError = ref<boolean>(false);

const typeAlert = ref<string>("");

onMounted(() => {
  getLeagueInfo();
});

const filteredTeamList = computed(() => {
  return teamList.value?.filter((team) => {
    return team?.shortName
      .toLowerCase()
      .includes(teamSearchValue.value.toLowerCase());
  });
});

const getLeagueInfo = () => {
  HTTP.get(`/competitions/${leagueCode.value}/teams`)
    .then((response: AxiosResponse) => {
      teamList.value = response.data.teams;
    })
    .catch(() => {
      isShowError.value = true;
      typeAlert.value = "error";
    });
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 40px;
}
.input {
  width: 70%;
  margin: 0 auto;
}
</style>
