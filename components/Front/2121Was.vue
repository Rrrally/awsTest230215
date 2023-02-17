<template>
  <v-card-text>Formularblatt</v-card-text>
  <v-form ref="form">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="abc.form3.veranstaltung"
          :counter="10"
          :rules="nameRules"
          label="Veranstaltung"
          required
        ></v-text-field>
      </v-col>
      <!-- <v-col cols="12">
        <v-text-field
          v-model="abc.form2.reihenfolge"
          label="Reihenfolge"
          required
        ></v-text-field>
      </v-col> -->
      <v-col cols="6">
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
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
            @click="abc.datensatzBErstellen(abc.form3), reset()"
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
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      select: null,

      checkbox: false,
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
    },
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
