<template>
  <span v-for="item in abc.navSpalteX1" :key="item.id">
    <div
      :id="`${item.id}`"
      class="sichtbarkeit"
      v-intersect="{
        handler: abc.onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      {{ item.id }}
    </div>


    <v-card
      class="mx-auto"
      v-intersect="abc.onIntersect"
      color="transparent"
      :width="abc.Wbreite(80)"
     
    >
      <v-card-title>{{ item.textKurz }}</v-card-title>
      <FrontFormLeiste v-if="abc.master === true"></FrontFormLeiste>

<span v-for="(item, i) in abc.tabBs" :key="item.id">
  <span v-show="item.mandant === abc.focus.textKurz">
    <!-- <v-card v-if="i === 0" color="transparent" :height="abc.Whöhe(100)">
      Start
      </v-card>  -->
      <v-card
      v-if="i === 0"
        class="pl-12  text-center"
        color="transparent"
        :width="abc.Wbreite(80)"
        :height="abc.Whöhe(100)"
      >
        <v-card-title class="text-h4 text-md-h3 text-lg-h2 text-white">{{ abc.kundendaten.organisation }}</v-card-title>
        <v-card-text class="text-h5 text-white">von 1912 e.V.</v-card-text>
      </v-card>
   
        <FrontKarteTermin :uebertrag="item"></FrontKarteTermin>
        <v-card height="100" color="transparent"></v-card>
         </span>
</span>
   
    </v-card>
    <div
      :id="`${item.id}`"
      class="sichtbarkeit"
      v-intersect="{
        handler: abc.onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      {{ item.id }}
    </div>
    <v-card
      class="mx-auto"
      color="transparent"
      :width="abc.Wbreite(80)"
      :height="abc.Whöhe(100)"
    >
    </v-card>
    <FrontSpalte2 :uebertrag="item.id"></FrontSpalte2>
  </span>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";

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
    return {};
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.sichtbarkeit {
  visibility: hidden;
  height: 50px;
}
</style>
