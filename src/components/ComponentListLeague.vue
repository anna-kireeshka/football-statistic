<template>
  <ul class="league-list" v-for="item in list" :key="item.id">
    <li class="league-list__item league" @click="selectLeague(item.id)">
      <div class="league-list__header">
        <span
          class="material-symbols-outlined league-list__icon-arrow"
          :class="{
            'league-list__icon-arrow--rotate': leagueItemId === item.id,
          }"
        >
          expand_more
        </span>
        <p class="league-list__title-group">
          {{ item.name }} / {{ item.area.name }}
        </p>
      </div>
    </li>
    <transition>
      <li
        class="league-list__item additionally"
        v-if="leagueItemId === item.id"
      >
        <div
          class="additionally__calendar calendar"
          @click="openTeamOrCalendarList('calendar', item)"
        >
          <p class="league-list__item calendar__item">
            <span class="material-symbols-outlined league-list__icon-arrow"> calendar_month </span>
            <span class="calendar__title">Календарь лиги</span>
          </p>
        </div>

        <div class="team" @click="openTeamOrCalendarList('team', item)">
          <div class="league-list__item team__item">
            <span class="material-symbols-outlined league-list__icon-arrow"> list </span>
            <p class="team__title">Список команд</p>
          </div>
        </div>
      </li>
    </transition>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref } from "vue";
import { LeagueList } from "@/types/types";
import { useRouter } from "vue-router";

type LinkName = "calendar" | "team";

const props = defineProps({
  list: {
    type: Array as PropType<Array<LeagueList>>,
    default: () => [],
  },
});

const leagueItemId = ref<number>(0);
const router = useRouter();

const selectLeague = (leagueId: number) => {
  return leagueItemId.value !== leagueId
    ? (leagueItemId.value = leagueId)
    : (leagueItemId.value = 0);
};

const openTeamOrCalendarList = (
  value: LinkName,
  leagueInfo: LeagueList
): void => {
  const { id, name, code } = leagueInfo;

  if (value === "team") {
    router.push({
      name: "TeamList",
      params: { leagueTitle: name, leagueId: id, code: code },
    });
  }

  if (value === "calendar") {
    router.push({
      name: "LeagueCalendar",
      params: { leagueTitle: name, leagueId: id, code: code},
    })
  }
};
</script>

<style scoped lang="scss">
@mixin subTeamStyle {
  margin: 0;
  display: flex;
  align-items: center;
}
.league-list {
  width: 70%;
  margin: 0 auto 20px;
  cursor: pointer;
  &__item {
    list-style: none;
    padding: 30px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__title-group {
    margin: 0 auto;
    color: #785c7a;
  }
  .additionally {
    padding: 0;
    &__calenndar {
      margin: 0;
    }
  }
  &__icon-arrow {
    cursor: pointer;
    font-size: 2rem;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px;
    color: #785c7a;
  }
  &__icon-arrow--rotate {
    transform: rotate(-180deg);
  }
}
.league {
  background-color: $background;
}
.calendar {
  border: 3px solid $background;
  border-bottom: 3px solid #b79ec5;
  &__item {
    @include subTeamStyle;
  }
  &__title {
    font-size: 1.2rem;
    padding-left: 15px;
    color: #785c7a;
    margin-right: 10px;
  }
}
.team {
  border: 3px solid $background;
  border-bottom: 3px solid #b79ec5;
  border-top: none;
  &__item {
    @include subTeamStyle;
  }
  &__title {
    font-size: 1.2rem;
    padding-left: 15px;
    color: #785c7a;
    margin-right: 10px;
  }
}
</style>
