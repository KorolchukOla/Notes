<template>
  <Dialog
    header="Edit user"
    v-model:visible="displayModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
    :closable="false"
  >
    <div class="field pt-4">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-user" />
        <InputText id="name" v-model="user.name" />
        <label for="name">Name</label>
      </div>
    </div>
    <div class="field pt-3">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-envelope" />
        <InputText id="email" v-model="user.email" />
        <label for="email">Email</label>
      </div>
    </div>
    <div class="field pt-3">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-linkedin" />
        <InputText id="body" v-model="user.body" />
        <label for="body">Profesion</label>
      </div>
    </div>
    <div class="field pt-3">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-image" />
        <InputText id="body" v-model="user.logo" />
        <label for="body">Profesion logo</label>
      </div>
    </div>
    <template #footer>
      <Button label="Save" icon="pi pi-check" @click="updateUser" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
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
