<template>
      <v-radio-group v-model="abc.radioX0">
    <v-row>
      <v-col cols="12"> Online: </v-col>

      <span v-for="(item, i) in abc.tabAs" :key="i">
        <v-col cols="1">
        
          <v-radio :value="i"></v-radio>
        </v-col>
        <v-col cols="3">
          <v-btn
          v-if="abc.entsperren === true"
            :color="abc.vergleichThema(item, i)"
            @click="abc.onlineSetzen(i)"
            >{{ item.thema }}</v-btn
          >
          <v-btn
        v-else
          disabled
            :color="abc.vergleichThema(item, i)"
            @click="abc.onlineSetzen(i)"
            >{{ item.thema }}</v-btn
          >

        
        </v-col>
      </span>

    </v-row>
  </v-radio-group>
 
      <v-checkbox v-model="abc.entsperren" label="Entsperren"></v-checkbox>
  

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
    
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
