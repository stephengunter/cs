import { FOR_ALL, GUEST_ONLY, USER_ONLY, ADMIN_ONLY } from '@/consts';

const applinks = [{
   name: 'dashboard',
   path: '/dashboard',
   view: 'Dashboard',
   parent: '',
   meta: {
      order: 0,
      icon: 'mdi-view-dashboard',
      title: 'Dashboard',
      type: ADMIN_ONLY,
      menu: true
   } 
},
{
   name: 'messages',
   path: '/messages',
   view: 'Messages',
   parent: 'dashboard',
   meta: {
      order: 0,
      icon: 'mdi-mail',
      title: 'Messages',
      type: ADMIN_ONLY,
      menu: true
   } 
}];

const adminlinks = [
   
];

const guestLinks = [];

let appRoutes = applinks.concat(adminlinks).concat(guestLinks);

for(let i = 0; i < appRoutes.length; i++){
   appRoutes[i].meta.order = i;
}

console.log('appRoutes', appRoutes);

export default appRoutes;