const fajSelectNav = {
    template: /* html */`
    <div class="faj-select-nav-container">
        <label class="faj-select-nav" v-for="i in options" :key="i">
            <input type="radio" :name="uid" />
            <div class="modded">{{i}}</div>
        </label>
    </div>
    `,
    data: () => ({
        uid: Date.now() + "-" + Math.floor(Math.random() * 100)
    }),
    props:{
        options:{
            default: ['teste1', 'teste2'],
            typeof: Array
        }
    }
}