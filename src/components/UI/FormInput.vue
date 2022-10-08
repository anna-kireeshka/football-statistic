<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    @input="updateInput"
    class="form-input"
  />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["updateInput"]);

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const updateInput = (event: { target: HTMLInputElement }) => {
  emit("updateInput", event.target.value);
};
</script>

<style scoped>
.form-input {
  width: 100%;
  padding: 20px;
  outline: none;
  border: 3px solid $background;
  /*border-radius: 10px;*/
  font-size: 1.3rem;
}
::placeholder {
  font-size: 1.3rem;
}
</style>
