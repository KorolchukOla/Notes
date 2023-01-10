import { reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import {
  deleteFakeUserById,
  getFakeResApi,
  updateFakeUserById,
} from "../service";

export const fakeApiStore = defineStore("fakeApi", () => {
  const state = reactive({
    storeDatas: [],
  });

  const getDatas = async () => {
    const datas = await getFakeResApi();
    state.storeDatas = datas;
  };

  const deleteFakeUser = async (id) => {
    await deleteFakeUserById(id);
  };

  const updateFakeUser = async (id, user) => {
    await updateFakeUserById(id, user);
  };

  return { ...toRefs(state), getDatas, deleteFakeUser, updateFakeUser };
});
