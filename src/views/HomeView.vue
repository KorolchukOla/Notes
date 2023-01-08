<template>
  <div class="card">
    <DataView :value="products" :layout="layout" :paginator="true" :rows="9">
      <template #header>
        <div class="grid grid-nogutter">
          <div class="col-6" style="text-align: left">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="searchKey"
                placeholder="Keyword Search"
                @input="searchUserByEmail"
            /></span>
          </div>
          <div class="col-6" style="text-align: right">
            <DataViewLayoutOptions v-model="layout" />
          </div>
        </div>
      </template>

      <template #list="slotProps">
        <div class="col-12">
          <div class="product-list-item">
            <img src="../assets/placeholder.png" :alt="slotProps.data.name" />
            <div class="product-list-detail">
              <div class="product-name" style="margin-bottom: 20px">
                {{ slotProps.data.email }}
              </div>
              <i class="pi pi-bookmark-fill"></i>
              <span class="product-category">
                <b> Quote of the day:</b> {{ slotProps.data.name }}</span
              >
            </div>
            <div class="product-list-action">
              <Button
                icon="pi pi-trash"
                :disabled="slotProps.data === 'OUTOFSTOCK'"
              ></Button>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="col-12 md:col-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-bookmark-fill"></i>
                <span class="product-category">
                  <b> Quote of the day:</b> {{ slotProps.data.name }}</span
                >
              </div>
            </div>
            <div class="product-grid-item-content">
              <img src="../assets/person.png" :alt="slotProps.data.name" />
              <div class="product-name">{{ slotProps.data.email }}</div>
              <div class="product-description">
                {{ slotProps.data.body }}
              </div>
            </div>
            <div class="product-grid-item-bottom">
              <Button
                icon="pi pi-trash"
                :disabled="slotProps.data === 'OUTOFSTOCK'"
              ></Button>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import InputText from "primevue/inputtext";
import { ref, onMounted } from "vue";
import { fakeApiStore } from "../stores";

const store = fakeApiStore();
const products = ref();

const layout = ref("grid");
const searchKey = ref("");

const searchUserByEmail = () => {
  products.value = store.storeDatas.filter((user) =>
    user.email.toLowerCase().includes(searchKey.value.toLowerCase())
  );
};

onMounted(async () => {
  await store.getDatas();
  products.value = store.storeDatas;
});
</script>
<style lang="scss" scoped>
@use "../assets/main.scss";
@include main.fakeApi;
</style>
