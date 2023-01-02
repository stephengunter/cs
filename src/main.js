import Vue from 'vue';
window.Bus = new Vue({});

import App from './App.vue';
import router from '@/routes';
import store from './store';
import vuetify from './plugins/vuetify';
import '@/plugins';
import '@/filters';
import '@/events';
import '@/components';


import { FOR_ALL, GUEST_ONLY } from '@/consts';
import { APP_CLOSED } from '@/config';
import { SET_MENUS } from '@/store/mutations.type';
import { getMainMenus } from '@/common/menu';

router.beforeEach((to, from, next) => {
	if(APP_CLOSED && to.name !== 'close') return redirect(next, { name: 'close' });
	
	return authDone(next, to);
});

const redirect = (next, route) => next(route);

const authDone = (next, to) => {
	let mainMenus = getMainMenus(router.options.routes, to);
	store.commit(SET_MENUS, mainMenus);
	return next();
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
