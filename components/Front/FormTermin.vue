<template>


  <v-card>
    <v-toolbar
      class="bg-transparent"
    >
    <v-chip-group color="red" v-model="terminNr">
  <v-chip>Chip 1</v-chip>

  <v-chip>Chip 2</v-chip>

  <v-chip>Chip 3</v-chip>
</v-chip-group>
<v-chip-group color="green" v-model="aktTermin">
 <span v-for="(item, i) in abc.tabBs" :key="i">
 <v-chip
 @click="abc.datensatzBLöschen(item.id)"
 >{{item.veranstaltung}}</v-chip>
 </span>
 
</v-chip-group>
    </v-toolbar>
    <div class="d-flex flex-row"  v-if="terminNr != 0">
      <v-tabs
        v-model="tab"
        direction="vertical"
        color="primary"
        
        
      >
        <v-tab value="option-1">
     
        Wann
        </v-tab>
        <v-tab value="option-2">
      
          Was
        </v-tab>
        <v-tab value="option-3">
       
          Wo
        </v-tab>
        <v-btn
      variant="flat"
      color="error"
    >
      Speichern
    </v-btn>

      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card  :width="abc.Wbreite(70)" height="400">
            <v-radio-group inline v-model="radioX4">
  <v-radio label="Normal" value="1"></v-radio>
  <v-radio label="Feiertag" value="2"></v-radio>
  <v-radio label="monatlich" value="3"></v-radio>
  <v-radio label="wöchentlich" value="4"></v-radio>
  <v-radio label="täglich" value="5"></v-radio>
</v-radio-group>

<div v-if="radioX4 === '1'">
  <Datepicker v-model="picked" class="test" />
</div>
<div v-if="radioX4 === '2'">
  
</div>
<div v-if="radioX4 === '3'">

</div>
<div v-if="radioX4 === '4'">

</div>
<div v-if="radioX4 === '5'">

</div>
   
          
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card :width="abc.Wbreite(70)">
<FrontWas></FrontWas>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card :width="abc.Wbreite(70)">
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>


</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
const picked = ref(new Date());

const abc = useabc();
const daten = useDaten();

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
        tab: 'option-1',
        terminNr: 0,
        radioX4: 0
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.test {
  --vdp-bg-color: "#ffffff";
  --vdp-text-color: "#000000";
  --vdp-box-shadow: "0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)";
  --vdp-border-radius: "3px";
  --vdp-heading-size: "2.5em";
  --vdp-heading-weight: "bold";
  --vdp-heading-hover-color: "#eeeeee";
  --vdp-arrow-color: "currentColor";
  --vdp-elem-color: "currentColor";
  --vdp-disabled-color: "#d5d9e0";
  --vdp-hover-color: "#ffffff";
  --vdp-hover-bg-color: "#0baf74";
  --vdp-selected-color: "#ffffff";
  --vdp-selected-bg-color: "#0baf74";
  --vdp-current-date-outline-color: "#888888";
  --vdp-current-date-font-weight: "bold";
  --vdp-elem-font-size: "0.8em";
  --vdp-elem-border-radius: "3px";
  --vdp-divider-color: "#d5d9e0";
}
</style>
