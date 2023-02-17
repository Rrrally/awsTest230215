<template>
  <v-footer app :color="abc.farbeUnten" :class="abc.farbeUntenT[1]">
    <div class="px-4 py-2 text-center w-100"
    @dblclick="abc.snackbar = true"
    >
      <v-row>
        <v-col cols="4" class="pa-0 ma-0">
          <v-checkbox v-model="abc.master" label="Checkbox"></v-checkbox>
           </v-col>
        <v-col cols="4" class="pa-1 ma-0">
          {{ new Date().getFullYear() }} — <strong>{{ abc.kundendaten.organisation }}</strong>
        </v-col>
        <v-col cols="4" class="pa-0 ma-0">
          <NavUnten2></NavUnten2>
          {{ abc.datumJetzt }}
           </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";


const abc = useabc();
const daten = useDaten();

// onMounted(() => {
//   abc.befehlR();
// });


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
