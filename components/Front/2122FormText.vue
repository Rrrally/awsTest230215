<template>
  <v-tabs v-model="tab" direction="vertical" color="primary">
   <v-tab value="option-1"> Leer1 </v-tab>
   <v-tab value="option-2"> Leer2 </v-tab>
   <v-tab value="option-3"> Leer3 </v-tab>
   <!-- <v-btn variant="flat" color="error"> Speichern </v-btn> -->
 </v-tabs>
 <v-window v-model="tab">
   <v-window-item value="option-1">
    Leer 1
     <!-- <v-card :width="abc.Wbreite(70)" height="400">
       <v-radio-group inline v-model="radioX4">
         <v-radio label="Normal" value="1"></v-radio>
         <v-radio label="Feiertag" value="2"></v-radio>
         <v-radio label="monatlich" value="3"></v-radio>
         <v-radio label="wöchentlich" value="4"></v-radio>
         <v-radio label="täglich" value="5"></v-radio>
       </v-radio-group>

       <div v-if="radioX4 === '1'">
         <VueDatePicker
           v-model="date"
           inline
           text-input
           inline-with-input
           auto-apply
         />
       </div>
       <div v-if="radioX4 === '2'"></div>
       <div v-if="radioX4 === '3'"></div>
       <div v-if="radioX4 === '4'"></div>
       <div v-if="radioX4 === '5'"></div>
     </v-card> -->
   </v-window-item>
   <v-window-item value="option-2">
    Leer 2
     <!-- <v-card :width="abc.Wbreite(70)">
       <Front2121Was></Front2121Was>
     </v-card> -->
   </v-window-item>
   <v-window-item value="option-3">
     <v-card :width="abc.Wbreite(70)">
       <v-card-text>
         <p>
           Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
           Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
           ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
           dui magna, posuere eget, vestibulum et, tempor auctor, justo.
         </p>

         <p class="mb-0">
           Cras sagittis. Phasellus nec sem in justo pellentesque
           facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
           mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
           quis, sem. Nam at tortor in tellus interdum sagittis.
         </p>
       </v-card-text>
     </v-card>
   </v-window-item>
 </v-window>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

const abc = useabc();
const daten = useDaten();
const date = ref();

// onMounted(() => {
//   abc.befehlR();
// });
// watch(
//   () => abc.variable,
//   (x, y) => {

//   }
// );
</script>

<script>
export default {
props: {},
data() {
return {
 radioX4: 0,
 tab: "option-1",
};
},
mounted() {},
created() {},
computed: {},
methods: {},
watch: {},
};
</script>
