<template>
   <core-container>
      <v-row>
         <v-col cols="12">
            <h1>{{ $route.name }}</h1>
         </v-col>
         <v-col cols="12">
            若布林函數 F<sub>1</sub>(A,B,C) = AB + <span class="up-line">A</span>C，
            F<sub>2</sub>(A,B,C) = (A + B)C，
            則 F<sub>1</sub> * F<sub>2</sub>以正規最小項之和（Canonical Sum of
Minterms）表示時，其結果為：



         </v-col>
      </v-row>
   </core-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { DIALOG_MAX_WIDTH } from '@/config';
import { onError } from '@/utils';

export default {
   data () {
      return {
         
      }
   },
   beforeMount() {
      
   },
   methods: {
      
   }
}
</script>

<style>

</style>