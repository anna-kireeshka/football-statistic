<template>
  <div class="wrapper">
    <div class="date">
      <vc-date-picker
        class="inline-block h-full date__form"
        v-model="startDate"
        color="red"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <input class="date__input" :value="inputValue" v-on="inputEvents" placeholder="xx/xx/xxxx"/>
        </template>
      </vc-date-picker>

      <vc-date-picker
        class="inline-block h-full date__form"
        v-model="endDate"
        color="red"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <input class="date__input" :value="inputValue" v-on="inputEvents" placeholder="xx/xx/xxxx"/>
        </template>
      </vc-date-picker>
    </div>
    <CalendarTable
      :tableColumns="columns"
      :tableList="filteredCalendar"
      class="table"
    />
  </div>
  <CustomAlert
    :alert-text="errorText"
    :type="typeAlert"
    :isShowError="isShowError"
    v-if="isShowError"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { HTTP } from "@/services/api";
import CustomAlert from "@/components/UI/CustomAlert.vue";
import { TeamCalendar } from "@/types/types";
import { filterCalendarForDate, formatDate } from "@/helpers/dateFormatting";
import CalendarTable from "@/components/CalendarTable.vue";

const route = useRoute();

const columns = ref([
  {
    label: "Date",
    field: "date",
    type: "date",
    thClass: "league__header",
  },
  {
    label: "Home team",
    field: "home_team",
    thClass: "league__header",
  },
  {
    label: "Score",
    field: "score",
    thClass: "league__header",
  },
  {
    label: "Opposing team",
    field: "opposing_team",
    thClass: "league__header",
  },
  {
    label: "Status",
    field: "status",
    thClass: "league__header",
  },
]);
type LeagueCalendar = TeamCalendar;

const rows = ref<Array<LeagueCalendar>>([]);

const startDate = ref<string>("");

const endDate = ref<string>("");

const errorText = ref<string>("");

const isShowError = ref<boolean>(false);

const typeAlert = ref<string>("");

const dateRange = ref<Array<string>>([]);

const leagueCode = ref<string>(`${route.params.code}`);

const getLeagueCalendar = () => {
  HTTP.get(`/competitions/${leagueCode.value}/matches`)
    .then((response: { data: { matches: LeagueCalendar[] } }) => {
      rows.value = response.data.matches;
    })
    .catch(() => {
      typeAlert.value = "error";
      isShowError.value = true;
    });
};

getLeagueCalendar();

const format = (date: string) => formatDate(date);

function dateRangeValid(start: string | Date, end: string | Date) {
  start = new Date(format(startDate.value));
  end = new Date(format(endDate.value));
  let invalid = false;

  if (start > end) {
    invalid = true;
  }

  return invalid;
}

const filteredCalendar = computed(() => {
  if (startDate.value.length !== 0 && endDate.value.length !== 0) {
    if (dateRangeValid(startDate.value, endDate.value)) {
      /* eslint-disable vue/no-side-effects-in-computed-properties */
      isShowError.value = true;
      typeAlert.value = "warning";
      errorText.value = "Начало периода не может быть больше конца";

      return rows.value;
    } else {
      return filterCalendarForDate(
        startDate.value,
        endDate.value,
        rows.value,
        dateRange.value
      );
    }
  }
  return rows.value;
});
</script>

<style scoped lang="scss">
.wrapper {
  @include contentPosition;
  @include wrapperTable;
  margin-top: 20px;

}
.table {
  z-index: 0;
}
.date {
  @include dateInput;
  @include dateFormTable;
}
::v-deep(.league__header) {
  @include tableHeader;
}
</style>
