import { GUEST_ONLY, ADMIN_ONLY } from '@/consts';

export const getMainMenus = (appRoutes, currentRoute) => {
   let mainLinks = getMainLinks(appRoutes);
   mainLinks.forEach(item => {
      item.active =  (item.name === currentRoute.name);
      item.subs = getSubLinks(appRoutes, item.name);
      item.subs.forEach(subItem => {
         subItem.active =  (subItem.name === currentRoute.name);
      });
   });

   return mainLinks;
}

const getMainLinks = (routes) => routes.filter(item => item.meta.menu && !item.parent);

const getSubLinks = (routes, parent) => routes.filter(item => item.parent === parent);