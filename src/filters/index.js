import Vue from 'vue';
import { photoNameUrl,  photoIdUrl, removeHtmlTags } from '@/utils';

Vue.filter('photoNameUrl', (name, width = 0, height = 0, type = '') => {
   return photoNameUrl(name, width, height, type);
});

Vue.filter('photoIdUrl', (id, width = 0, height = 0, type = '') => {
   return photoIdUrl(id, width, height, type);
});

Vue.filter('summary', (content, length = 100) => {
   return removeHtmlTags(content).substring(0, length);
});