<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="abc.form3.veranstaltung"
        :counter="10"
        label="Veranstaltung"
        required
      ></v-text-field>
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
    return {
      checkbox: false,
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
