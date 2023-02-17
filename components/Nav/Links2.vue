<template>
     
    <v-navigation-drawer
      v-model="abc.drawerLeft"
      width="120"
      :color="abc.farbeLinks" :class="abc.farbeLinksT[1]"
      theme="dark"
      permanent
    >
    <v-card color="black">
        <!-- <v-list-item
          link
          :to="{ path: '/', hash: `#${start}` }"
          lines="two"
          :title="daten.navDaten1[abc.selection1].title"
        ></v-list-item> -->
        <v-list-item
         
          lines="two"
          :title="daten.navDaten1[abc.selection1].title"
        ></v-list-item>
      </v-card>

      <span v-if="abc.selection1 === 0">
        <v-item-group v-model="abc.selection2">
          <span v-for="item2 in abc.navSpalteX1" :key="item2.id">
            <v-item v-slot="{ select }" v-if="item2.zuFormID === ''">
              <v-list-item @click="select" :value="item2.textKurz">
                <nuxt-link
                  :class="abc.farbwechsel2(item2)"
                  :to="{ path: '/', hash: `#${item2.id}` }"
                  :external="true"
                  >{{ item2.textKurz }}</nuxt-link
                >
              </v-list-item>
            </v-item>

            <span v-for="item3 in abc.navSpalteX2" :key="item3.id">
              <v-item v-slot="{ select }" v-if="item3.zuFormID === item2.id">
                <v-list-item @click="select" :value="item3.textKurz">
                  <nuxt-link
                    :class="abc.farbwechsel2(item3)"
                    :to="{ path: '/', hash: `#${item3.id}` }"
                    :external="true"
                    >__{{ item3.textKurz }}</nuxt-link
                  >
                </v-list-item>
              </v-item>
            </span>
          </span>
        </v-item-group>
      </span>
      <span v-else-if="abc.selection1 === 1">
        <v-item-group v-model="abc.selection2">
          <span v-for="(item4, i) in daten.navDaten2T" :key="i">
            <v-item v-slot="{ select }">
              <v-list-item
                @click="select"
                :title="item4.title"
                :value="item4.title"
                :class="abc.farbwechsel2(item4)"
                :to="item4.to"
              >
                <nuxt-link
                  :to="{ path: '/', hash: `#${item4.id}` }"
                  :external="true"
                  >{{ item4.textKurz }}</nuxt-link
                >
              </v-list-item>
            </v-item>
          </span>
        </v-item-group>
      </span>
      <span v-else-if="abc.selection1 === 2">
        <v-item-group v-model="abc.selection2">
          <span v-for="(item4, i) in daten.navDaten2I" :key="i">
            <v-item v-slot="{ select }">
              <v-list-item
                @click="select"
                :title="item4.title"
                :value="item4.title"
                :class="abc.farbwechsel2(item4)"
                :to="item4.to"
              >
                <nuxt-link
                  :to="{ path: '/', hash: `#${item4.id}` }"
                  :external="true"
                  >{{ item4.textKurz }}</nuxt-link
                >
              </v-list-item>
            </v-item>
          </span>
        </v-item-group>
      </span>
      <span v-else> Fehler Links </span>


    </v-navigation-drawer>
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
