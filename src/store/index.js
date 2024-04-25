import { createStore } from 'vuex';
import auth from './modules/auth';
import blog from './modules/blog';
import event from './modules/event';
import depanevent from './modules/depanevent';
import galeri from './modules/galeri';

const store = createStore({
    state: {
      isLoading: true,
    },
    modules: {
      auth,
      blog,
      event,
      depanevent,
      galeri
    },
  });
  
  export default store;