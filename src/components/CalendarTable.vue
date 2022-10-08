<template>
  <vue-good-table
    :columns="tableColumns"
    :rows="tableList"
    :fixed-header="true"
    :sort-options="{
      enabled: false,
    }"
    styleClass="vgt-table"
  >
    <template #emptystate>Загрузка контента</template>

    <template #table-row="props">
      <div v-if="props.column.field === 'date'">
        <p class="text-center m-0">
          {{ formatDate(props.row.utcDate) }}
        </p>
      </div>
      <div v-if="props.column.field === 'home_team'">
        <p class="text-center m-0">{{ props.row.homeTeam.name }}</p>
      </div>
      <div v-if="props.column.field === 'score'">
        {{ props.row.score.fullTime.homeTeam }} -
        {{ props.row.score.fullTime.awayTeam }}
      </div>
      <div v-if="props.column.field === 'opposing_team'">
        <p class="text-center m-0">{{ props.row.awayTeam.name }}</p>
      </div>
      <div v-if="props.column.field === 'status'">
        <p class="text-center m-0">{{ props.row.status }}</p>
      </div>
    </template>
  </vue-good-table>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { formatDate } from "@/helpers/dateFormatting";
import { TeamCalendar } from "@/types/types";

const props = defineProps({
  tableColumns: {
    default: () => [],
    type: Array,
    required: true,
  },
  tableList: {
    default: () => [],
    type: Array as PropType<Array<TeamCalendar>>,
    required: true,
  },
});
</script>

<style scoped></style>
