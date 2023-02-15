<template>


<v-card
          v-if="abc.offsetTop > abc.Whöhe(50)"
          class="pl-12 text-center"
          color="red"
          :width="abc.Wbreite(100)"
          :height="
            abc.offsetTop - abc.Whöhe(50) + (abc.offsetTop - abc.Whöhe(50))
          "
        >Hallo
        </v-card>


      <v-card
    color="black"
    :width="abc.Wbreite(100)"
    :height="abc.Whöhe(100)"
    class="pl-12 pt-0"
  >
    <v-img
      class="bild"
      :style="{
        top: -10 + abc.offsetTop * 1 + 'px',
        left: 0 + 'px',
      }"
      :width="abc.Wbreite(100)"
      :height="abc.Whöhe(100)"
      src="https://awstest230207-storage-c55056ce110531-staging.s3.eu-central-1.amazonaws.com/IMG_5099.jpeg"
    ></v-img>
  </v-card>
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

<style scoped>
.bild {
  position: fixed;
}
</style>

