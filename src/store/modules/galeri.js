import axios from "axios";

const galeri = {
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
          const response = await axios.get(
            "http://localhost:3000/api/v1/galeri"
          );
          const formattedResponse = {
            message: "success fetch data galeri",
            response: response.data
          };
          commit("SET_GALERI", formattedResponse.response);
          return formattedResponse;
        } catch (error) {
          alert("There was an error");
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

export default galeri;
