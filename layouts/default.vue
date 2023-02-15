<template>
  <v-layout>
    <span v-if="abc.datenGeladen === true">
      <NavOben></NavOben>
      <NavUnten></NavUnten>
      <NavLinks1></NavLinks1>
    </span>
    <span v-else>
   
    </span>

    <v-main v-if="abc.datenGeladen === true">
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";

const abc = useabc();
const daten = useDaten();

abc.counter = useInterval(3000);

onMounted(() => {
  abc.flächeErrechnen();
  abc.datensatzALesen();
  // const a = localStorage.getItem("aktDatensatz");
  // console.log(parseInt(a));
  // if (a === null) {
  //   abc.radioX0 = 0;
  //   abc.aktDatensatz = 0;
  // } else {
  //   abc.radioX0 = parseInt(a);
  //   abc.aktDatensatz = parseInt(a);
  // }
});
watch(
  () => abc.counter,
  (x, y) => {
    if (abc.tabAs.length === 0) {
    } else {
      abc.datenGeladen = true;
    };
    abc.flächeErrechnen();
    if (abc.counter > 8) {
      abc.counter = 0;
    }
  }
);
watch(
  () => abc.datenGeladen,
  (m, y) => {
 
      const x = abc.aktDatensatz;
     
  abc.aktDatensatz = x;
    abc.navSpalteX1 = JSON.parse(abc.tabAs[x].navSpalte1);
    abc.navSpalteX2 = JSON.parse(abc.tabAs[x].navSpalte2);
    abc.farbeOben = abc.tabAs[x].farbeOben[0];
    abc.farbeLinks = abc.tabAs[x].farbeLinks[0];
    abc.farbeUnten = abc.tabAs[x].farbeUnten[0];
    abc.farbeHintergrund = abc.tabAs[x].farbeHintergrund[0];
    abc.farbeObenT = [parseInt(abc.tabAs[x].farbeOben[1]), abc.tabAs[x].farbeOben[2]];
    abc.farbeLinksT = [parseInt(abc.tabAs[x].farbeLinks[1]), abc.tabAs[x].farbeLinks[2]];
    abc.farbeUntenT = [parseInt(abc.tabAs[x].farbeUnten[1]), abc.tabAs[x].farbeUnten[2]];
    abc.farbeHintergrundT = [parseInt(abc.tabAs[x].farbeHintergrund[1]), abc.tabAs[x].farbeHintergrund[2]];
    
  
  }
);
watch(
  () => abc.radioX0,
  (x, y) => {
  // console.log(x);
    abc.aktDatensatz = x;
    abc.navSpalteX1 = JSON.parse(abc.tabAs[x].navSpalte1);
    abc.navSpalteX2 = JSON.parse(abc.tabAs[x].navSpalte2);
    abc.farbeOben = abc.tabAs[x].farbeOben[0];
    abc.farbeLinks = abc.tabAs[x].farbeLinks[0];
    abc.farbeUnten = abc.tabAs[x].farbeUnten[0];
    abc.farbeHintergrund = abc.tabAs[x].farbeHintergrund[0];
    abc.farbeObenT = [parseInt(abc.tabAs[x].farbeOben[1]), abc.tabAs[x].farbeOben[2]];
    abc.farbeLinksT = [parseInt(abc.tabAs[x].farbeLinks[1]), abc.tabAs[x].farbeLinks[2]];
    abc.farbeUntenT = [parseInt(abc.tabAs[x].farbeUnten[1]), abc.tabAs[x].farbeUnten[2]];
    abc.farbeHintergrundT = [parseInt(abc.tabAs[x].farbeHintergrund[1]), abc.tabAs[x].farbeHintergrund[2]];
    // localStorage.setItem("aktDatensatz", abc.radioX0);
  }
);
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
