<template>
  <v-tabs v-model="tab" direction="vertical" color="primary">
    <v-tab value="option-1"> Was </v-tab>
    <v-tab value="option-2"> Wann </v-tab>
    <v-tab value="option-3"> Wo </v-tab>
   
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="option-1">
      <v-card :width="abc.Wbreite(70)">
       
        <FrontWas></FrontWas>
      </v-card>
    </v-window-item>
    <v-window-item value="option-2">
      <v-card :width="abc.Wbreite(70)" height="400">
        <v-radio-group inline v-model="abc.radioX4">
          <v-radio :label="abc.datumArt[0]" value="0"></v-radio>
          <v-radio :label="abc.datumArt[1]" value="1"></v-radio>
          <v-radio :label="abc.datumArt[2]" value="2"></v-radio>
          <v-radio :label="abc.datumArt[3]" value="3"></v-radio>
          <v-radio :label="abc.datumArt[4]" value="4"></v-radio>
        </v-radio-group>

        <div v-if="abc.radioX4 === '0'">
          <VueDatePicker
            v-model="abc.form3.datumAnfang"
            inline
            text-input
            inline-with-input
            auto-apply
          />
        </div>
        <div v-if="abc.radioX4 === '1'"></div>
        <div v-if="abc.radioX4 === '2'"></div>
        <div v-if="abc.radioX4 === '3'"></div>
        <div v-if="abc.radioX4 === '4'"></div>
      </v-card>
    </v-window-item>
    <v-window-item value="option-3">
      <v-card :width="abc.Wbreite(70)">
    <LandkartenLandkarte1></LandkartenLandkarte1>
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
// const date = ref();

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
      // radioX4: 0,
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
