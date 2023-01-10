<template>
  <div class="field pt-4">
    <div class="p-float-label p-input-icon-right">
      <i :class="props.icon" />
      <InputText :id="props.id" v-model="selectedData" />
      <label :for="props.id">{{ props.id }}</label>
    </div>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";

import { ref, watch } from "vue";

const props = defineProps({ selectedUser: {}, icon: "", id: "" });

const selectedData = ref();

const changeData = () => {
  switch (props.id) {
    case "Name":
      selectedData.value = props.selectedUser.name;
      break;
    case "Email":
      selectedData.value = props.selectedUser.email;
      break;
    case "Body":
      selectedData.value = props.selectedUser.body;
      break;
    case "Logo":
      selectedData.value = props.selectedUser.logo;
      break;
  }
};

changeData();

watch(
  () => selectedData.value,
  (data) => {
    switch (props.id) {
      case "Name":
        props.selectedUser.name = data;
        break;
      case "Email":
        props.selectedUser.email = data;
        break;
      case "Body":
        props.selectedUser.body = data;
        break;
      case "Logo":
        props.selectedUser.logo = data;
        break;
    }
  }
);
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.inputData;
</style>
