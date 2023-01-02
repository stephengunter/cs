<template>
   <v-app-bar id="app-bar" app absolute color="transparent" flat height="75">
      <v-app-bar-nav-icon @click.prevent="toggleDrawer" />
      <v-toolbar-title class="font-weight-light" 
      v-text="$route.meta.title"
      />
      <v-spacer />
   </v-app-bar>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { TOGGLE_DRAWER } from '@/store/mutations.type';

export default {
   name: 'LayoutToolBar',
   computed:{
		
   },
   methods: {
      toggleDrawer() {
         this.$store.commit(TOGGLE_DRAWER);
      }
   }
}
</script>

<style>

</style>