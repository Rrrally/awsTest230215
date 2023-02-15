<template>
  <div class="text-center">


    <v-snackbar
   
      v-model="abc.snackbar"
      vertical
      :width="abc.Wbreite(100)"
      :height="abc.Whöhe(100)"
      timeout="-1"
    >
  
    <v-container
    id="scroll-target"
    :style="{
      height: abc.Whöhe(60) + 'px',
      width: abc.Wbreite(100) - 50 + 'px',
      maxWidth: maxWeite + 'px',
    }"
    class="overflow-y-auto bg-red pa-0 ma-0"
  >
      <NavLogin v-if="abc.tabBereich === 0"></NavLogin>
      <NavFarben v-if="abc.tabBereich === 1"></NavFarben>
      <NavLeiste v-if="abc.tabBereich === 2"></NavLeiste>
      <NavBilder v-if="abc.tabBereich === 3"></NavBilder>

      <v-row
      v-scroll:#scroll-target="onScroll"
      align="center"
      justify="center"
      style="height: 500px"
    >
    </v-row>
  </v-container>




      <template v-slot:actions>


        <div class="pa-0">
          <v-chip-group
            selected-class="text-yellow"
            column
            v-model="abc.tabBereich"
          >
         
            <v-chip>
              {{ tags[0] }}
            </v-chip>
            <v-chip v-if="abc.userId != ''">
              {{ tags[1] }}
            </v-chip>
            <v-chip  v-if="abc.userId != ''">
              {{ tags[2] }}
            </v-chip>
            <v-chip  v-if="abc.userId != ''">
              {{ tags[3] }}
            </v-chip>
          </v-chip-group>
        </div>


        <v-btn
          color="white"
          variant="text"
          @click="abc.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
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
      // snackbar: false,
      tags: [
        'Login',
        'Layout',
        'Nav-Leiste',
        'Bilder'

      ],
      offsetTop: 0,
      maxWeite: 635

    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
  watch: {},
};
</script>
