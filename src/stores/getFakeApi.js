import { reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { deleteFakeUserById, getFakeResApi } from "../service";

export const fakeApiStore = defineStore("fakeApi", () => {
  const state = reactive({
    storeDatas: [],
  });

  const getDatas = async () => {
    const datas = await getFakeResApi();
    state.storeDatas = datas;
  };

  const deleteFakeUser = async (id) => {
    console.log("here work");
    await deleteFakeUserById(id);
  };

  return { ...toRefs(state), getDatas, deleteFakeUser };
});
