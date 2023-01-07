import { reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { getFakeResApi } from "../service";

export const fakeApiStore = defineStore("fakeApi", () => {
  const state = reactive({
    storeDatas: [],
  });

  const getDatas = async () => {
    const datas = await getFakeResApi();
    state.storeDatas = datas;
  };

  return { ...toRefs(state), getDatas };
});
