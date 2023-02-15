<template>

  <Authenticator :form-fields="formFields">
    <template v-slot="{ user, signOut }">

      <v-row no-gutters>
          <v-col cols="12">
            <v-sheet color="orange" class="ma-1 pa-1"> Login-Daten </v-sheet>
          </v-col>
          <v-col cols="12" sm="6">
            <v-sheet color="orange" class="ma-1 pa-1">
              Name: {{ user.attributes.nickname }}</v-sheet
            >
          </v-col>
          <v-col cols="12" sm="6">
            <v-sheet color="orange" class="ma-1 pa-1">
              E-Mail: {{ user.attributes.email }}</v-sheet
            >
          </v-col>
          <v-col cols="12">
            {{ abc.userId }}
          </v-col>
          <v-col cols="12">
       
          </v-col>
        </v-row>

      <v-btn
          @click="
            signOut();
            abc.ausloggen();
          "
          variant="flat"
          color="error"
          block
        >
        <span v-if="abc.abrufUser(user)"> Ausloggen </span>
     
        </v-btn>
        <NavWartung2></NavWartung2>
    </template>
  </Authenticator>

</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import { Authenticator } from "@aws-amplify/ui-vue";
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

const abc = useabc();
const daten = useDaten();

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    nickname: {
      order: 2,
    },
    password: {
      order: 3,
    },
    confirm_password: {
      order: 4,
    },
  },
};

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
  methods: {

  },
  watch: {},
};
</script>
