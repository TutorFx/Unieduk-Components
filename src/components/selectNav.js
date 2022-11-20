const fajSelectNav = {
  template: /* html */ `
    <div class="faj-select-nav-container">
        <label class="faj-select-nav" v-for="(i, num) in options" :key="i + uid">
            <input type="radio" :value="i"
            @input="$emit('selected', $event.target.value)" 
            v-model="selected"
            :name="uid" />
            <div class="modded">{{i}}</div>
        </label>
    </div>
    `,
  data: () => ({
    uid: Date.now() + "-" + Math.floor(Math.random() * 100),
    selected: null
  }),
  props: {
    options: {
        default: [],
        typeof: Array,
    }
  },
  created(){
    this.selected = this.options[0]
  }
};
