<template>
      <v-row>
    <v-col cols="12"> Löschen von: </v-col>

    <v-col cols="3" v-for="(item, i) in abc.tabAs" :key="i">
      <v-btn
        v-if="abc.tabAs.length <= i + 1"
        color="red"
        @click="abc.datensatzLöschen(item.id)"
        >{{ item.thema }}</v-btn
      >
      <v-btn v-else disabled>{{ item.thema }}</v-btn>
    </v-col>
  </v-row>
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
