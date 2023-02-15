<template>
    <v-app-bar :color="abc.farbeOben" :class="abc.farbeObenT[1]" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="abc.umschalten('DrawerLeft')"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>{{ abc.kundendaten.organisation }} 

        </v-app-bar-title>
      </template>
    </v-app-bar>
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
