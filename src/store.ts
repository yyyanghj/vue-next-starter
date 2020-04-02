import * as Vuex from "vuex";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (Vuex as any).createStore({
  state() {
    return {
      count: 1
    };
  }
});

export default store;
