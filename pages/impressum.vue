<template>
  <div>
    <v-container
      id="scroll-target"
      :style="{
        height: abc.Whöhe(100) - 50 + 'px',
      }"
      class="overflow-y-auto"
    >
      <v-card height="50"></v-card>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Ralf Olthage<br />
        Webentwicklung<br />
        Freie-Vogel-Str. 369<br />
        2. OG<br />
        44269 Dortmund
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0231 - 58685750<br />
        Telefax: 0231 - 58685753<br />
        E-Mail: anfrage@erkundix.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE266896124
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>Ralf Olthage</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          >https://ec.europa.eu/consumers/odr/</a
        >.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px"
      >
      </v-row>
    </v-container>
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

  components: {},
  props: {},
  data() {
    return {
      offsetTop: 0,
    };
  },
  mounted() {},
  created() {
  },
  computed: {
  

 
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
  watch: {},
};
</script>

<style scoped></style>
