import { createStore } from 'vuex';
import auth from './modules/auth';
import blog from './modules/blog';
const store = createStore({
    state: {
      isLoading: true,
    },
    modules: {
      auth,
      blog
      
    },
  });
  
  export default store;