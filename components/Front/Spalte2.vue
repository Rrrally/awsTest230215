<template>
           <span v-for="item2 in abc.navSpalteX2" :key="item2.id">
           
            <span v-if="item2.zuFormID === uebertrag">
        <div
          :id="`${item2.id}`"
          class="sichtbarkeit"
          v-intersect="{
            handler: abc.onIntersect,
            options: {
              threshold: [0, 0.5, 1.0],
            },
          }"
        >
          {{ item2.id }}
        </div>
        <v-card
          class="mx-auto"
          v-intersect="abc.onIntersect"
          color="blue"
          :width="abc.Wbreite(80)"
          :height="abc.Whöhe(100)"
        >
          <v-card-title>{{ item2.textKurz }}</v-card-title>
        </v-card>
        <div
          :id="`${item2.id}`"
          class="sichtbarkeit"
          v-intersect="{
            handler: abc.onIntersect,
            options: {
              threshold: [0, 0.5, 1.0],
            },
          }"
        >
          {{ item2.id }}
        </div>
        <v-card
          class="mx-auto"
          color="transparent"
          :width="abc.Wbreite(80)"
          :height="abc.Whöhe(100)"
        >
        </v-card>
        </span>
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
  props: {
    uebertrag: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
 
  },
  watch: {},
};
</script>

<style scoped>
.sichtbarkeit {
  visibility: hidden;
  height: 50px;
}
</style>

