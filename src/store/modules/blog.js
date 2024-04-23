import axios from "axios";
export default {
  namespaced: true,
  state: {
    blog: [],
  },
  getters: {
    getBlog: (state) => state.blog,
  },
  actions: {
    async fectblogadd(context, blog) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/artikel/add",
          blog,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        // commit("SET_BLOG",response);
        console.log(response)
      } catch (error) {
        alert(error);
      } 
    },
    async fectBlog({ commit }) {
        try {
          const datakelas = await axios.get(
            "http://localhost:3000/api/v1/artikel"
          );
          commit("SET_BLOG", datakelas.data.data);
        } catch (error) {
          alert("Ada error");
          console.log(error);
        }
      },
  },
  mutations: {
    SET_BLOG(state, blog) {
      state.blog = blog;
    },
  },
};