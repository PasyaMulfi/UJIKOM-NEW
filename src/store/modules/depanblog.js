import axios from "axios";
export default {
  namespaced: true,
  state: {
    Depanblog: [],
  },
  getters: {
    getDepanblog: (state) => state.depanblog,
  },
  actions: {
    async fectdepanblogadd(context, depanblog) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/depanblog/add",
          depanblog,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        // commit("SET_DEPANEVENT",response);
        console.log(response)
      } catch (error) {
        alert(error);
      } 
    },
    async fectDepanblog({ commit }) {
        try {
          const datakelas = await axios.get(
            "http://localhost:3000/api/v1/depanblog"
          );
          commit("SET_DEPANBLOG", datakelas.data.data);
        } catch (error) {
          alert("Ada error");
          console.log(error);
        }
      },
  },
  mutations: {
    SET_DEPANBLOG(state, depanblog) {
      state.depanblog = depanblog;
    },
  },
};