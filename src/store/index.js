import { createStore } from 'vuex';
import auth from './modules/auth';
import blog from './modules/blog';
import event from './modules/event';
import depanevent from './modules/depanevent';

const store = createStore({
    state: {
      isLoading: true,
    },
    modules: {
      auth,
      blog,
      event,
      depanevent
      
    },
  });
  
  export default store;