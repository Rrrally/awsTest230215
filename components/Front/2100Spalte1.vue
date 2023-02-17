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

    <Front2120FormLeiste></Front2120FormLeiste>
    <v-card
      class="mx-auto"
      v-intersect="abc.onIntersect"
      color="orange"
      :width="abc.Wbreite(80)"
      :height="abc.Whöhe(100)"
    >
      <v-card-title>{{ item.textKurz }}</v-card-title>
      <span v-if="item.textKurz === 'Über uns'"> Versuch </span>
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
    <Front2110Spalte2 :uebertrag="item.id"></Front2110Spalte2>
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
