import axios from "axios";
export default {
  namespaced: true,
  state: {
    Depanevent: [],
  },
  getters: {
    getDepanevent: (state) => state.depanevent,
  },
  actions: {
    async fectdepaneventadd(context, depanevent) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/depanevent/add",
          depanevent,
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
    async fectBlog({ commit }) {
        try {
          const datakelas = await axios.get(
            "http://localhost:3000/api/v1/depanevent"
          );
          commit("SET_DEPANEVENT", datakelas.data.data);
        } catch (error) {
          alert("Ada error");
          console.log(error);
        }
      },
  },
  mutations: {
    SET_DEPANEVENT(state, blog) {
      state.blog = blog;
    },
  },
};