import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePersonStore = defineStore('person', () => {
  const age = ref(29)
  const web = reactive({
    title: "邓瑞编程",
    url: "dengruicode.com"
  })

    return {
      web
    }
  }
)