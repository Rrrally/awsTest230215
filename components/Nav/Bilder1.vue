<template>

        <h1>Foto hochladen</h1>
        <v-file-input
          ref="fileInput"
          v-model="foto"
          @input="pickFile"
          show-size
          label="File input"
        ></v-file-input>
        <v-card
          v-if="previewImage != null"
          class="imagePreviewWrapper"
          :style="{ 'background-image': `url(${previewImage})` }"
          @click="selectImage"
        >
        </v-card>
        <v-btn
          v-if="previewImage != null"
          @click="abc.speichernBild(foto)"
          variant="flat"
          color="error"
        >
          Hochladen
        </v-btn>
    
    
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
            previewImage: null,
    foto: {},
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
        selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      // console.log("PickFile")
      // console.log(input);
      // console.log(file);
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
 
  },
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



