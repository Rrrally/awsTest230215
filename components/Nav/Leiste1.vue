<template>
  <v-card-text>Navigationsleiste</v-card-text>
  <v-radio-group v-model="abc.radioX3">
    <span v-for="item1 in abc.navSpalteX1" :key="item1.id">
      <v-row>
        <v-col cols="1">
          <v-radio :value="item1"> </v-radio>
        </v-col>
        <v-col cols="10">
          <v-chip closable class="ma-0" @click="abc.datensatzTextLöschen('1', item1.id)">
            {{ item1.textKurz }}
          </v-chip>

          <span v-for="item2 in abc.navSpalteX2" :key="item2.id">
            <span v-if="item1.id === item2.zuFormID">
              <v-chip class="ma-2" @click="abc.löschen('2', item2.id)">
                __{{ item2.textKurz }}
              </v-chip>
            </span>
          </span>
        </v-col>
      </v-row>
    </span>
  </v-radio-group>
  {{ abc.radioX3 }}
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
