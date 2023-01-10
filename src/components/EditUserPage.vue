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
      <Button label="Save" icon="pi pi-check" @click="updateUser" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputData from "./InputData.vue";
import { ref, reactive } from "vue";

const displayModal = ref(true);

const props = defineProps({ selectedUser: {} });

const user = reactive({
  email: props.selectedUser.email,
  name: props.selectedUser.name,
  body: props.selectedUser.body,
  logo: props.selectedUser.logo,
});

const emit = defineEmits(["updateUser"]);

const updateUser = () => {
  displayModal.value = false;
  emit("updateUser", user);
};
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.editUser;
</style>
