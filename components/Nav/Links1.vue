<template>
  <v-navigation-drawer
      class="bg-black text-white"
      width="50"
      theme="dark"
      permanent
    >
    <v-item-group v-model="abc.selection1">
        <span v-for="(item1, i) in daten.navDaten1" :key="i">
          <v-item v-slot="{ select }">
            <v-list-item
              nav
              @click="
                select();
                abc.umschalten('DrawerTrue');
              "
              :prepend-icon="item1.icon"
              :value="item1.title"
              :color="abc.farbwechsel1(i)"
              to="/"
            >
            </v-list-item>
          </v-item>
        </span>
      </v-item-group>



    </v-navigation-drawer>
    <NavLinks2></NavLinks2>
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
