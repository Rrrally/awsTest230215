<template>
  <v-card>
    <v-toolbar class="bg-transparent">
      <v-chip-group color="red" v-model="terminNr">
        <v-chip  v-if="terminOn === true" @click="switchOn(1)">
          <svg-icon type="mdi" :path="path1"></svg-icon>
          Termine
        </v-chip>
        <v-chip v-else @click="switchOn(1)">
          <svg-icon type="mdi" :path="path2"></svg-icon>
          Termine
        </v-chip>

        <v-chip  v-if="textOn === true" @click="switchOn(2)">
          <svg-icon type="mdi" :path="path1"></svg-icon>
          Text
        </v-chip>
        <v-chip v-else @click="switchOn(2)">
          <svg-icon type="mdi" :path="path2"></svg-icon>
          Text
        </v-chip>

      </v-chip-group>
      <v-chip-group color="green" v-model="aktTermin">
        <span v-for="(item, i) in abc.tabBs" :key="i">
          <v-chip @dblclick="abc.datensatzBLöschen(item.id)">{{
            item.veranstaltung
          }}</v-chip>
        </span>
      </v-chip-group>
  
    </v-toolbar>
    <div class="d-flex flex-row" v-if="terminNr === 0">
      <Front2121FormTermin></Front2121FormTermin>

    </div>
    <div class="d-flex flex-row" v-if="terminNr === 1">
    <Front2122FormText></Front2122FormText>

    </div>
  </v-card>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowDownBold } from '@mdi/js';
import { mdiArrowUpBold } from '@mdi/js';

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
  components: {
    SvgIcon
  },
  data() {
    return {
      terminNr: 0,
      path1: mdiArrowDownBold,
      path2: mdiArrowUpBold,
      terminOn: false,
      textOn: false,
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    switchOn(x) {
      if (x === 1) {
        if (this.terminOn === false) {
        this.terminOn = true;
        this.textOn = false;
      } else {
        this.terminOn = false;
      }
      } else if (x === 2) {
        if (this.textOn === false) {
        this.textOn = true;
        this.terminOn = false;
      } else {
        this.textOn = false;
      }
      }

    }
  },
  watch: {},
};
</script>

<style scoped></style>
