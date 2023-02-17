<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="abc.form2.textKurz"
          :counter="10"
          :rules="abc.nameRules"
          label="kurzer Text"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="abc.form2.reihenfolge"
          label="Reihenfolge"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-checkbox
          v-model="checkbox"
          label="Do you agree?"
          required
        ></v-checkbox>
      </v-col>
      <v-col cols="6">
        <v-col cols="4">
          <v-btn
            v-if="checkbox === false"
            color="error"
            class="mr-4"
            @click="reset"
            >Abbrechen
          </v-btn>

          <v-btn
            v-else
            @click="abc.datensatzTextErstellen(abc.form2), reset()"
            variant="flat"
            color="red"
            >Ändern</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
  </v-form>
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
      checkbox: false,
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    reset() {
      this.$refs.form.reset();
      this.checkbox = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  watch: {},
};
</script>
