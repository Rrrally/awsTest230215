import { defineStore, storeToRefs } from "pinia";
import { DataStore } from "@aws-amplify/datastore";
import { useWindowSize } from "@vueuse/core";
import { TabA230215 } from "@/src/models";
import { useDaten } from "@/stores/daten";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "@aws-amplify/storage";

const daten = useDaten();

export const useabc = defineStore("abc", {
  id: "abc",
  state: () => ({
    wartung: false,
    kundendaten: {
      organisation: "TUS Musterstadt",
      ansprechpartner: "Hausmeister Krause",
      strasse: "Musterstr. 14",
      plz: "12345",
      ort: "Bunkenstädt",
      ortsteil: "Musterdorf",
    },
    tabAs: [],
    width: 0,
    height: 0,
    counter: 0,
    datenGeladen: false,
    aktDatensatz: 0,
    snackbar: false,
    radioX0: 0,
    radioX1: 0,
    radioX3: null,
    userId: "",
    tabBereich: 0, 
    form2: {
      id: "",
      textKurz: "",
      reihenfolge: "",
      zuFormID: "",
    },
    navSpalteX1: [],
    navSpalteX2: [],
    zwischenspeicher1: [],
    zwischenspeicher2: [],
    farbeOben: "#000000",
    farbeLinks: "#000000",
    farbeUnten: "#000000",
    farbeHintergrund: "#000000",
    farbeObenT: [1, "text-white"],
    farbeLinksT: [1, "text-white"],
    farbeUntenT: [1, "text-white"],
    farbeHintergrundT: [1, "text-white"],
    slider1: 0,
    entsperren: false,
    selection1: 0,
    selection2: 0,
    drawerLeft: false,
    ping: "Start",
    isIntersecting: false,
    offsetTop: 0,
    center: [1014774.9306317891, 6891750.848911292],
    zoom: 12,
    previewImage: null,
    foto: {},
    verzeichnisBilder: []
  
  }),
  actions: {
    flächeErrechnen() {
      const { width, height } = useWindowSize();
      this.width = width.value;
      this.height = height.value;
    },
    datensatzALesen() {
      new Promise(async () => {
        try {
          const models = await DataStore.query(TabA230215);
          if (models.length === 0 && this.wartung === true) {
            this.eintrag(0);
            this.eintrag(1);
            this.eintrag(2);
          } else {
            this.tabAs = [];
            this.tabAs = models;
            this.aktDatensatz = this.tabAs[0].onlineSeite;
            this.radioX0 = this.aktDatensatz;
            

            let compare = 0;
            if (this.tabAs.length > 0) {
              this.tabAs.sort((a, b) => {
                if (a.reihenfolge > b.reihenfolge) {
                  compare = 1;
                } else if (b.reihenfolge > a.reihenfolge) {
                  compare = -1;
                }
                return compare;
              });
            }
          }
        } catch (err) {
          console.log("Fehler Datensatz lesen");
        }
      });
    },
    eintrag(x) {
      let thema = "";
      let reihenfolge = null;

      if (x === 0) {
        thema = "Baustelle";
        reihenfolge = 0;
      } else if (x === 1) {
        thema = "Online1";
        reihenfolge = 1;
      } else if (x === 2) {
        thema = "Online2";
        reihenfolge = 2;
      } else if (x === 3) {
        thema = "Online3";
        reihenfolge = 3;
      } else {
        console.log("Fehler in Datenplus");
      }
      const str = JSON.stringify([]);
      this.datensatzErstellen({
        navSpalte1: str,
        navSpalte2: str,
        thema: thema,
        farbeOben: ["0", "0", "0", "bg-black"],
        farbeLinks: ["0", "0", "0", "bg-black"],
        farbeUnten: ["0", "0", "0", "bg-black"],
        farbeHintergrund: ["1", "0", "0", "bg-white"],
        reihenfolge: reihenfolge,
        onlineSeite: 0,
      });
    },
    datensatzErstellen(x) {
      new Promise(async () => {
        try {
          console.log("Create");

          const testY = await DataStore.save(
            new TabA230215({
              navSpalte1: x.navSpalte1,
              navSpalte2: x.navSpalte2,
              thema: x.thema,
              farbeOben: x.farbeOben,
              farbeLinks: x.farbeLinks,
              farbeUnten: x.farbeUnten,
              farbeHintergrund: x.farbeHintergrund,
              reihenfolge: x.reihenfolge,
              onlineSeite: x.onlineSeite,
            })
          );
          this.datensatzALesen();
        } catch (err) {
          console.log("Fehler Create");
        }
      });
    },
    datensatzLöschen(x) {
      new Promise(async () => {
        try {
          console.log("Delete");
          const modelToDelete = await DataStore.query(TabA230215, x);
          DataStore.delete(modelToDelete);
          this.datensatzALesen();
        } catch (err) {
          console.log("Fehler Delete");
        }
      });
    },
    onlineSetzen(x) {
      this.entsperren = false;
      new Promise(async () => {
        try {
          const original = await DataStore.query(TabA230215, this.tabAs[0].id);

          await DataStore.save(
            TabA230215.copyOf(original, (updated) => {
              updated.onlineSeite = x;
            })
          );
      
        } catch (err) {
          console.log("Fehler Online setzen1");
        }
      });

      new Promise(async () => {
        try {
          const original = await DataStore.query(TabA230215, this.tabAs[1].id);

          await DataStore.save(
            TabA230215.copyOf(original, (updated) => {
              updated.onlineSeite = x;
            })
          );
         
        } catch (err) {
          console.log("Fehler Online setzen2");
        }
      });

      new Promise(async () => {
        try {
          const original = await DataStore.query(TabA230215, this.tabAs[2].id);

          await DataStore.save(
            TabA230215.copyOf(original, (updated) => {
              updated.onlineSeite = x;
            })
          );
         
        } catch (err) {
          console.log("Fehler OnlineSetzen3");
        }
        this.datensatzALesen();
      });
    },



    farbeSpeichern() {
      new Promise(async () => {
        try {
          const original = await DataStore.query(TabA230215, this.tabAs[this.radioX0].id);

          await DataStore.save(
            TabA230215.copyOf(original, (updated) => {
              // updated.onlineSeite = x;
              updated.farbeOben = [this.farbeOben, String(this.farbeObenT[0]), this.farbeObenT[1]];
              updated.farbeLinks = [this.farbeLinks, String(this.farbeLinksT[0]), this.farbeLinksT[1]];
              updated.farbeUnten = [this.farbeUnten, String(this.farbeUntenT[0]), this.farbeUntenT[1]];
              updated.farbeHintergrund = [this.farbeHintergrund, String(this.farbeHintergrundT[0]), this.farbeHintergrundT[1] ];
            })
          );
      
        } catch (err) {
          console.log("Fehler Farbe speichern");
        }
      });

 
    },


    datensatzTextErstellen(x) {
   // x = form2
  //  debugger;

   if (this.radioX3 === null) {
    this.form2.zuFormID = "";
  } else {
    this.form2.zuFormID = this.radioX3.id;
  }

   let a1 = {
    id: uuidv4(),
    textKurz: this.form2.textKurz,
    reihenfolge: this.form2.reihenfolge,
    zuFormID: this.form2.zuFormID,
  };
  
   if (a1.zuFormID === "") {
    const b1 = this.navSpalteX1.push(a1);
   } else {
    const b1 = this.navSpalteX2.push(a1);
   };

   this.navSpalteX1.sort((a, b) => {
    let compare = 0;
    if (a.reihenfolge > b.reihenfolge) {
      compare = 1;
    } else if (b.reihenfolge > a.reihenfolge) {
      compare = -1;
    }
    return compare;
  });
  this.navSpalteX2.sort((a, b) => {
    let compare = 0;
    if (a.reihenfolge > b.reihenfolge) {
      compare = 1;
    } else if (b.reihenfolge > a.reihenfolge) {
      compare = -1;
    }
    return compare;
  });

  this.zwischenspeicher1 = JSON.stringify(this.navSpalteX1);
  this.zwischenspeicher2 = JSON.stringify(this.navSpalteX2);


  new Promise(async () => {
    try {
      const original = await DataStore.query(
        TabA230215,
        this.tabAs[this.radioX0].id
      );

      await DataStore.save(
        TabA230215.copyOf(original, (updated) => {
          updated.navSpalte1 = this.zwischenspeicher1;
          updated.navSpalte2 = this.zwischenspeicher2;
        })
      );

      this.datensatzLesen();
      this.zwischenspeicher1 = [];
      this.zwischenspeicher2 = [];
    } catch (err) {
      console.log("Fehler Text erstellen");
    }
  });





    },
    datensatzTextLöschen(x, y) {
      // x = 1 für Spalte 1

      this.löschen('1', y);

      this.zwischenspeicher1 = JSON.stringify(this.navSpalteX1);
      this.zwischenspeicher2 = JSON.stringify(this.navSpalteX2);

      new Promise(async () => {
        try {
          const original = await DataStore.query(
            TabA230215,
            this.tabAs[this.radioX0].id
          );

          await DataStore.save(
            TabA230215.copyOf(original, (updated) => {
              updated.navSpalte1 = this.zwischenspeicher1;
              updated.navSpalte2 = this.zwischenspeicher2;
            })
          );

          this.datensatzLesen();
        } catch (err) {
          console.log("Fehler Text löschen");
        }
      });


    },

    abrufUser(x) {
      if (x === undefined) {
        this.userId = "";
        return false;
      } else {
        this.userId = x.attributes.sub;
        return true;
      }
    },
    ausloggen() {
      this.userId = "";
      console.log("Ausloggen");
    },
    löschen(x, y) {
      if (x === "1") {

        for (let i = 0; i < this.navSpalteX1.length; i++) {
          if (y === this.navSpalteX1[i].id) {
            this.navSpalteX1.splice(i, 1);

          }
        }
      } else if (x === "2") {
        for (let i = 0; i < this.navSpalteX2.length; i++) {
          if (y === this.navSpalteX2[i].id) {
            this.navSpalteX2.splice(i, 1);
          }
        }
      }
    },
    umschalten(x) {
      if (x === "DrawerLeft") {
        this.drawerLeft = !this.drawerLeft;
      } else if (x === "DrawerTrue") {
        this.drawerLeft = true;
      } else if (x === "Wartung") {
        this.wartung = !this.wartung;
      }
    },
    farbwechsel2(x) {
      if (x === this.ping) {
        return "bg-white text-yellow";
      } else {
        return "bg-white text-black";
      }
    },
    onIntersect(isIntersecting, entries, observer) {
      this.isIntersecting = entries[0].intersectionRatio >= 0.5;
      if (this.isIntersecting === true) {
        const a = entries[0].target.innerHTML.trim();

        this.ping = a;
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    speichernBild(x) {
      console.log("Test Speichern");
      const testY = new Promise(async (resolve, reject) => {
        try {
          const testX = await Storage.put(x[0].name, x[0]);
          this.verzeichnisBilder();
        } catch (err) {
          console.log("Fehler");
        }
      });
    },
    verzeichnisBilder(x) {
      console.log("Test listenBild");
          Storage.list('')
                  .then(result => this.verzeichnisBilder = result,  
                  )
                  .catch(err => console.log(err));
    },
    deleteBild(x) {
      const testY = new Promise(async (resolve, reject) => {
        try {
      await Storage.remove(x);
    } catch (err) {
      console.log("Fehler");
    }
  });
    },
    centerChanged(update1) {
      this.center = update1;
    },
    zoomChanged(update2) {
      this.zoom = update2;
    },
    zoomPlus() {
      this.zoom = this.zoom + 1;
    },
    zoomMinus() {
      this.zoom = this.zoom - 1;
    },

  },
  getters: {
    Wbreite: (state) => (prozent) => {
      return (state.width * prozent) / 100;
    },
    Whöhe: (state) => (prozent) => {
      return (state.height * prozent) / 100;
    },
    vergleichThema: (state) => (x, y) => {
    
      if (x.reihenfolge === state.tabAs[0].onlineSeite) {
        return "red";
      } else {
        return "yellow";
      }
    },
    farbwechsel1: (state) => (x) => {
      if (x === state.selection1) {
        return "yellow";
      } else {
        return "white";
      }
    },
  },
});
