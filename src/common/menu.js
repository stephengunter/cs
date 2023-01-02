import { GUEST_ONLY, ADMIN_ONLY } from '@/consts';

export const getMainMenus = (appRoutes, currentRoute) => {
   let menus = [];
   getMainLinks(appRoutes).forEach(main => {
      let subs = getSubLinks(appRoutes, main.name);
      menus.push({
         ...main,
         active: false,
         subs: subs.map(sub => ({
            ...sub,
            active: sub.name === currentRoute.name
         }))
      })
   });
   
   return menus;
}

const getMainLinks = (routes) => routes.filter(item => item.meta.menu && !item.parent);

const getSubLinks = (routes, parent) => routes.filter(item => item.parent === parent);