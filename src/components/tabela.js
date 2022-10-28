// table-sort-js/table-sort.js
switcher = {
  template: /* html */ `
  <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :fill="status == 0 || status == 1 ? '#D8D3D3' : '#333333'" d="M5.90962 17.4148C5.71057 17.6992 5.28943 17.6992 5.09038 17.4148L0.800712 11.2867C0.56874 10.9553 0.805816 10.5 1.21033 10.5H9.78967C10.1942 10.5 10.4313 10.9553 10.1993 11.2867L5.90962 17.4148Z"/>
    <path :fill="status == 0 || status == 2 ? '#D8D3D3' : '#333333'" d="M5.90962 0.585166C5.71057 0.300808 5.28943 0.300807 5.09038 0.585166L0.800712 6.71327C0.56874 7.04466 0.805816 7.5 1.21033 7.5H9.78967C10.1942 7.5 10.4313 7.04466 10.1993 6.71327L5.90962 0.585166Z"/>
  </svg>
  `,
  data: () => ({
    status: 0,
  }),
  watch: {
    status: function (newval) {
      if (newval == 3) return (this.status = 0);
    },
  },
};
cell = {
  template: /* html */ `
  <div @click="++this.$refs.switcher.status" class="cell">
    <div>{{row}}</div><switcher ref="switcher" />
  </div>
  `,
  components: {
    switcher,
  },
  props: {
    row: String,
  }
};
const tabela = {
  template: /*html*/ `
  <div class="tabela">
    <table>
      <tr class="header">
        <th v-for="row in tabelanomes">
          <cell :row="row" />
        </th>
      </tr>
      <tr v-for="col in defaultabela">
        <td v-for="row in tabelanomes">{{col[row]}}</td>
      </tr>
    </table>
  </div>
  `,
  props: {
    titulo: {
      type: String,
    },
    inputs: {
      type: Array,
      defaultValue: [],
    },
  },
  data: () => ({
    id: null,
    search: "",
    tabelanomes: ["curso", "Evasão + Formados","Realista", "Otimista"],
    defaultabela: [
      {
        curso: "Alfreds Futterkiste",
        "Evasão + Formados": 10,
        "Realista": 15,
        "Otimista": 20
      },
      {
        curso: "Berglunds snabbkop",
        "Evasão + Formados": 10,
        "Realista": 15,
        "Otimista": 20
      },
      {
        curso: "Island Trading",
        "Evasão + Formados": 10,
        "Realista": 15,
        "Otimista": 20
      },
      {
        curso: "Koniglich Essen",
        "Evasão + Formados": 10,
        "Realista": 15,
        "Otimista": 20
      },
    ],
  }),
  components: {
    cell,
  },
  computed: {},
  mounted() {},
};
