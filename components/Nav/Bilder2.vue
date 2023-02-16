<template>
    <span v-for="item in abc.verzeichnisBilder.results" :key="item.id">
 
        <v-card v-if="item.key != null"
          class="imagePreviewWrapper"
          :style="{ 'background-image': `url(https://awstest230215-storage-688ea7a7141118-staging.s3.eu-central-1.amazonaws.com/public/${item.key}` }"
        >

        </v-card>
      <v-chip
    
      class="ma-2"
      closable
      @click="abc.deleteBild(item.key)"
    >
    {{ item.key }}
    </v-chip>

    </span>
    <!-- {{ abc.verzeichnisBilder.results[0].key }} -->
   
    <!-- results = key, eTag, lastModified, size  -->

  
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import { Storage } from "@aws-amplify/storage"



const abc = useabc();
const daten = useDaten();

onMounted(() => {
  abc.verzeichnisBilderX();
});
// watch(
//   () => abc.variable,
//   (x, y) => {

//   }
// );
watch(
  () => abc.tabBereich,
  (x, y) => {
    abc.verzeichnisBilderX();
  }
);
</script>

<script>
export default {
  props: {},
  data() {
    return {
      chip: true,
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>
