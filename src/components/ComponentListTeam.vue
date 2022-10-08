<template>
  <slot name="list">
    <ul class="team-list">
      <li class="team-list__item team-list__item--header">
        Список команд {{ leagueName }}
      </li>
      <template v-if="list.length">
        <li class="team-list__item" v-for="item in list" :key="item.id">
          <div class="team-list__link team" @click="showTeamCalendar(item.id, item.shortName)">
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
        <li
          class="team-list__item team-list__item--sceleton"
          v-for="item in 10"
          :key="item"
        ></li>
      </templete>
    </ul>
  </slot>
  <slot name="tile"> </slot>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { useRouter } from "vue-router";
import { TeamList } from "@/types/types";

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

const showTeamCalendar = (id: number, name: string) => {
  return router.push({
    name: "TeamCalendar",
    params: {
      teamName: name,
      id: id,
    }})
}
</script>

<style scoped lang="scss">
.team-list {
  width: 70%;
  margin: 40px auto;

  &__item {
    list-style: none;
    border-bottom: 1.3px solid #785c7a;
    padding: 20px;
    &--header {
      background-color: $background;

      font-size: 1.4rem;
      font-weight: bold;
      color: #785c7a;
    }
  }
  &__item--sceleton {
    border: none;
    margin-bottom: 10px;
    padding: 30px;
    background-color: #fefbff;
    background: linear-gradient(315deg, #d7c6d9 0%, #fefbff 74%);

    animation: colored 2s infinite alternate;
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

    color: #785c7a;
  }
  &__action {
    border: none;
    padding: 10px;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: #785c7a;
    &:hover {
      background-color: #685f6e;
      border-radius: 50%;
      color: #fff;
    }
  }
}
</style>
