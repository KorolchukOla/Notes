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
        <i class="pi pi-envelope" />
        <InputText id="name" v-model="name" />
        <label for="name">Name</label>
      </div>
    </div>
    <div class="field pt-3">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-envelope" />
        <InputText id="email" v-model="email" />
        <label for="email">Email</label>
      </div>
    </div>
    <div class="field pt-3">
      <div class="p-float-label p-input-icon-right">
        <i class="pi pi-envelope" />
        <InputText id="body" v-model="body" />
        <label for="body">Body</label>
      </div>
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeModal"
        class="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { ref } from "vue";
const props = defineProps({ selectedUser: {} });
const displayModal = ref(true);
const email = ref(props.selectedUser.email);
const name = ref(props.selectedUser.name);
const body = ref(props.selectedUser.body);

const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  displayModal.value = false;
  emit("closeModal");
};
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.editUser;
</style>
