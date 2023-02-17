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
      <!-- <v-chip-group color="green" v-model="aktTermin"> -->
        <span v-for="(item, i) in abc.tabBs" :key="i">
          <span v-if="item.mandant === abc.focus.textKurz">
            <v-chip @dblclick="abc.datensatzBLöschen(item.id)">{{
            item.veranstaltung
          }}</v-chip>
       
          </span>
        
        </span>
      <!-- </v-chip-group> -->
  
    </v-toolbar>
    <v-form ref="form">
    <div class="d-flex flex-row" v-if="terminNr === 0 && terminOn === true">
      <FrontFormTermin></FrontFormTermin>

    </div>
    <div class="d-flex flex-row" v-if="terminNr === 1 && textOn === true">
    <FrontFormText></FrontFormText>

    </div>
  <v-row v-if="textOn === true || terminOn === true">
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
            @click="abc.datensatzBErstellen(abc.form3), reset()"
            variant="flat"
            color="red"
            >Ändern</v-btn
          >
        </v-col>
</v-col>
</v-row>


    </v-form>
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
// const checkbox = false;

// onMounted(() => {
//   abc.befehlR();
// });
// watch(
//   () => checkbox,
//   (x, y) => {
//     console.log("Mandant");
//     // abc.form3.mandant = 
//   }
// );
</script>

<script>
export default {
  props: {

  },
  components: {
    SvgIcon
  },
  data() {
    return {
      terminNr: null,
      path1: mdiArrowDownBold,
      path2: mdiArrowUpBold,
      terminOn: false,
      textOn: false,

      // valid: true,
      // nameRules: [
      //   (v) => !!v || "Name is required",
      //   (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
      // ],
      // email: "",
      // emailRules: [
      //   (v) => !!v || "E-mail is required",
      //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      // ],
      // select: null,

      checkbox: false,


    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    switchOn(x) {
      // debugger;
      if (x === 1) {
        if (this.terminOn === true) {
        this.terminOn = false;
        // this.textOn = true;
      } else {
        this.terminOn = true;
      }
      } else if (x === 2) {
        if (this.textOn === true) {
        this.textOn = false;
        // this.terminOn = true;
      } else {
        this.textOn = true;
      }
      }

    },
    // async validate() {
    //   const { valid } = await this.$refs.form.validate();
    // },
    reset() {
      this.$refs.form.reset();
      this.checkbox = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  watch: {
  
  },
};
</script>

<style scoped></style>
