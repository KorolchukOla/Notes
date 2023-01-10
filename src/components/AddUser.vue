<template>
  <Dialog
    header="Edit user"
    v-model:visible="displayModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
    :closable="false"
  >
    <InputData :selectedUser="user" icon="pi pi-user" id="Name" />
    <InputData :selectedUser="user" icon="pi pi-envelope" id="Email" />
    <InputData :selectedUser="user" icon="pi pi-linkedin" id="Body" />
    <InputData :selectedUser="user" icon="pi pi-image" id="Logo" />
    <template #footer>
      <Button label="Save" icon="pi pi-plus" @click="addUser" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputData from "./InputData.vue";
import { ref, reactive } from "vue";

const displayModal = ref(true);

const user = reactive({
  email: "",
  name: "",
  body: "",
  logo: "",
});

const emit = defineEmits(["addUser"]);

const addUser = () => {
  displayModal.value = false;
  emit("addUser", user);
};
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.editUser;
</style>
