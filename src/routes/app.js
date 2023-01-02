import { FOR_ALL, GUEST_ONLY, USER_ONLY, ADMIN_ONLY } from '@/consts';

const mainList = [{
   name: '1',
   title: '計算機組成架構'
}];

const subList = [
//1
{
   parent: '1',
   title: '軟硬件概念'
}];

let appRoutes = [];
mainList.forEach((main, index) => {
   let subs = subList.filter(sub => sub.parent === main.name);
   for(let i = 0; i < subs.length; i++) {
      appRoutes.push({
         name: `${main.name}-${i + 1}`,
         path: `/${main.name}-${i + 1}`,
         view: `${main.name}/${i + 1}`,
         parent: main.name,
         meta: {
            order: i,
            title: subs[index].title,
         }
      });
   }
   

   appRoutes.push({
      name: main.name,
      path: `/${main.name}-1`,
      view: `${main.name}/1`,
      view: 'Test',
      parent: '',
      meta: {
         order: index,
         title: main.title,
         icon: 'mdi-folder',
         menu: true
      }
   });
   
});


appRoutes.push({
   name: 'test',
   path: '/test',
   view: 'Test',
   meta: {
      order: 99,
      title: 'Test'
   }

})


export default appRoutes;