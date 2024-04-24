import axios from "axios";
export default {
  namespaced: true,
  state: {
    event: [],
  },
  getters: {
    getEvent: (state) => state.event,
  },
  actions: {
    async fecteventadd(context, event) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/event/add",
          event,
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
    async fectEvent({ commit }) {
        try {
          const datakelas = await axios.get(
            "http://localhost:3000/api/v1/event"
          );
          commit("SET_EVENT", datakelas.data.data);
        } catch (error) {
          alert("Ada error");
          console.log(error);
        }
      },
  },
  mutations: {
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
};