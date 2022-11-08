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
  <div ${/* @click="++this.$refs.switcher.status" */ ""} class="cell">
    <div>{{row}}</div><switcher ref="switcher" />
  </div>
  `,
  components: {
    switcher,
  },
  props: {
    row: String,
  },
};
const tabela = {
  template: /*html*/ `
  <div class="tabelas">
    <div class="tabela">
      <table>
        <thead>
          <tr class="header">
            <th class="titleColumn" v-for="(i, row) in tabelanomes">
              <cell :row="row" />
            </th>
          </tr>
        </thead>
        <tbody class="tableBody">
          <tr v-for="col in tabelaFiltered">
            <td v-for="(i, row) in tabelanomes">{{col[row]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tabela">
      <table>
        <tbody class="tableAdd">
          <tr>
            <td v-for="(i, row) in tabelanomes">{{tabelanomes[row] == Number ? tabelaFiltered?.map(item => item[row])?.reduce((prev, curr) => prev + curr, 0) : 'Total'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    table: {
      type: Array,
      defaultValue: [],
    },
  },
  data: () => ({
    id: null,
    search: "",
    tabelanomes: {
      curso: String,
      "Evasão + Formados": Number,
      Realista: Number,
      Otimista: Number,
    },
    sortBy: null,
  }),
  components: {
    cell,
  },
  computed: {
    tabelaFiltered() {
      const sortby = this.sortBy;
      if (!sortby) return this.table;
      //this.tabelanomes[sortby] = typeof
      if (this.tabelanomes[sortby] == Number)
        return _.orderBy(this.table, [sortby], ["asc"]);
      else if (this.tabelanomes[sortby] == String)
        return this.table.sort((a, b) => (a[sortby] > b[sortby] ? 1 : -1));
      else return this.table;
    },
  },
  mounted() {
    // ordena dado um criterio

    var columns = document.querySelectorAll(".titleColumn");

    columns.forEach((c) =>
      c.addEventListener("click", (event) => {
        var columnTitle = event.target.textContent;
        this.sortBy = columnTitle;
      })
    );
  },
};
