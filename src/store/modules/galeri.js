import axios from "axios";
export default {
  namespaced: true,
  state: {
    galeri: [],
  },
  getters: {
    getGaleri: (state) => state.galeri,
  },
  actions: {
    async fectgaleriadd(context, galeri) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/galeri/add",
          galeri,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        //  commit("SET_EVENT",response);
        console.log(response)
      } catch (error) {
        alert(error);
      } 
    },
    async fectGaleri({ commit }) {
        try {
          const datakelas = await axios.get(
            "http://localhost:3000/api/v1/galeri"
          );
          commit("SET_GALERI", datakelas.data.data["data"]);
        } catch (error) {
          alert("Ada error");
          console.log(error);
        }
      },
  },
  mutations: {
    SET_GALERI(state, galeri) {
      state.galeri = galeri;
    },
  },
};