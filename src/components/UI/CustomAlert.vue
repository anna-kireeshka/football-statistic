<template>
  <div
    :class="setClass(type)"
    :type="type"
    :text="alertText"
    :isShowError="isShowError"
    v-if="isShowError"
  >
    {{ alertText }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  type: {
    default: "error",
    type: String,
  },
  alertText: {
    default:
      "Данные не загрузились или отсутствуют, попробуйте перезагрузить страницу",
    type: String,
  },
  isShowError: {
    default: false,
    type: Boolean,
  },
});

const isShowError = ref(props.isShowError);

const setClass = (type: string) => {
  if (type === "error") {
    return "alert-error";
  } else if (type === "warning") {
    return "alert-warning";
  }
};

setTimeout(() => (isShowError.value = false), 1500);
</script>

<style scoped lang="scss">
@mixin alertStyle {
  position: absolute;
  width: 26%;
  right: 1rem;
  bottom: 1rem;
  z-index: 1500;

  padding: 20px;
  border-radius: 7px;
  font-size: 1.1rem;
}
.alert-error {
  @include alertStyle;
  background: #f8d7e1;
  color: #640534;
}
.alert-warning {
  @include alertStyle;
  background-color: #ffd36c;
  color: #865f07;
}
</style>
