<template>
  <div class="card">
    <DataView :value="products" :layout="layout" :paginator="true" :rows="9">
      <template #header>
        <div class="grid grid-nogutter">
          <div class="col-6" style="text-align: left">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="searchKey" placeholder="Keyword Search"
            /></span>
          </div>
          <div class="col-6" style="text-align: right">
            <DataViewLayoutOptions v-model="layout" />
          </div>
        </div>
      </template>

      <template #empty>
        <div class="p-4">No users found.</div>
      </template>

      <template #list="slotProps">
        <div class="col-12">
          <div class="product-list-item">
            <img :src="slotProps.data.logo" :alt="slotProps.data.name" />
            <div class="product-list-detail">
              <span class="product-category">
                <div class="pb-2">
                  <b>
                    {{ slotProps.data.name }}
                  </b>
                </div>
                <div class="py-1">
                  <b>Email: </b>
                  {{ slotProps.data.email }}
                </div>
                <div>
                  <b>Profesion: </b>
                  {{ slotProps.data.body }}
                </div>
              </span>
            </div>
            <div class="product-list-action">
              <Button
                icon="pi pi-trash"
                :disabled="slotProps.data === 'OUTOFSTOCK'"
              ></Button>
              <Button icon="pi pi-pencil" @click="changeUser"></Button>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="col-12 md:col-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-user"></i>
                <b> Profile</b>
              </div>
            </div>
            <div class="product-grid-item-content">
              <div class="product-name pt-3">{{ slotProps.data.name }}</div>
              <div class="product-description pt-3 gridDescription">
                <div class="pb-2">
                  <b>Email: </b>
                  {{ slotProps.data.email }}
                </div>
                <div>
                  <b>Profesion: </b>
                  {{ slotProps.data.body }}
                </div>
              </div>
              <img :src="slotProps.data.logo" :alt="slotProps.data.name" />
            </div>
            <div class="product-grid-item-bottom">
              <Button
                class="uniqueBtn"
                icon="pi pi-trash"
                @click="deleteUser(slotProps.data.id)"
              ></Button>
              <Button
                icon="pi pi-pencil"
                @click="changeUser(slotProps.data)"
              ></Button>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
  <div v-if="displayModal">
    <EditUserPage :selectedUser="selectedUser" @closeModal="closeModal" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import InputText from "primevue/inputtext";
import { ref, onMounted, watch } from "vue";
import { fakeApiStore } from "../stores";
import EditUserPage from "./EditUserPage.vue";

const store = fakeApiStore();
const products = ref();
const displayModal = ref(false);
const selectedUser = ref();

const layout = ref("grid");
const searchKey = ref("");

const deleteUser = (id) => {
  store.deleteFakeUser(id);
};

const changeUser = (data) => {
  displayModal.value = true;
  selectedUser.value = data;
};

const closeModal = () => {
  displayModal.value = false;
};

onMounted(async () => {
  await store.getDatas();
  products.value = store.storeDatas;
});

watch(searchKey, () => {
  products.value = store.storeDatas.filter((user) =>
    user.email.toLowerCase().includes(searchKey.value.toLowerCase())
  );
});
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.fakeApi;
</style>
