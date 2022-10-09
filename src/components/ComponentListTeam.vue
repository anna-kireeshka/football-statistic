<template>
  <slot name="list">
    <ul class="team-list">
      <li class="team-list__item team-list__item--header">
        Список команд {{ leagueName }}
      </li>
      <template v-if="list.length">
        <li class="team-list__item" v-for="item in list" :key="item.id">
          <div
            class="team-list__link team"
            @click="showTeamCalendar(item.id, item.shortName)"
          >
            <button
              class="team__action"
              :title="`Посмотреть календарь ${item.shortName}`"
            >
              <span class="material-symbols-outlined"> calendar_month </span>
            </button>
            <p class="team__short-name">{{ item.shortName }}</p>
          </div>
        </li>
      </template>
      <templete v-else>
        <Sceleton />
      </templete>
    </ul>
  </slot>
  <slot name="tile"> </slot>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { TeamList } from "@/types/types";
import Sceleton from "@/components/Sceleton.vue";

const props = defineProps({
  leagueName: {
    type: String,
    default: "",
  },
  list: {
    type: Array as PropType<Array<TeamList>>,
    default: () => [],
  },
});

const router = useRouter();

const route = useRoute();

const leagueName = ref(route.params.leagueTitle);

const leagueId = ref(route.params.leagueId);

const code = ref(route.params.code);

const showTeamCalendar = (id: number, name: string) => {
  return router.push({
    name: "TeamCalendar",
    params: {
      teamName: name,
      id: id,
      leagueTitle: leagueName.value,
      leagueId: leagueId.value,
      code: code.value,
    },
  });
};
</script>

<style scoped lang="scss">
.team-list {
  @include contentPosition;
  @include wrapperTable;

  &__item {
    list-style: none;
    border-bottom: 1.3px solid $font-color;
    padding: 20px;
    &--header {
      background-color: $background;

      font-size: 1.4rem;
      font-weight: bold;
      color: $font-color;
    }
  }
}
.team {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__short-name {
    font-size: 1.3rem;
    font-weight: 500;
    margin-right: 10px;

    color: $font-color;
  }
  &__action {
    border: none;
    padding: 10px;
    margin-right: 5px;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: $font-color;
    &:hover {
      background-color: #685f6e;
      border-radius: 50%;
      color: #fff;
    }
  }
}
</style>
