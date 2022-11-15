const fajLayout = {
  template: /*html*/ `
  <div class="logo"><img src="../assets/logo.svg" alt="Logo Unieduk"></div>
  <header>
    <div id="Search-field">
      <input type="text" name="Search">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="" fill-opacity="0.01"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4362 15.085L20.3762 19.095C20.5527 19.2858 20.648 19.5378 20.6419 19.7976C20.6358 20.0575 20.5288 20.3047 20.3435 20.487C20.1583 20.6693 19.9093 20.7722 19.6494 20.7741C19.3895 20.776 19.1391 20.6766 18.9512 20.497L15.0132 16.491C13.4938 17.6357 11.5961 18.1602 9.70452 17.9583C7.81291 17.7564 6.0687 16.8432 4.82506 15.4036C3.58142 13.9641 2.9313 12.1057 3.00633 10.2048C3.08136 8.30394 3.87593 6.5026 5.22916 5.16554C6.58238 3.82848 8.39314 3.05561 10.2948 3.00343C12.1964 2.95126 14.0468 3.62367 15.4714 4.88451C16.8959 6.14536 17.788 7.90042 17.9672 9.79432C18.1463 11.6882 17.5991 13.5794 16.4362 15.085ZM10.5002 16C11.9589 16 13.3579 15.4206 14.3893 14.3891C15.4208 13.3577 16.0002 11.9587 16.0002 10.5C16.0002 9.04134 15.4208 7.64239 14.3893 6.61094C13.3579 5.57949 11.9589 5.00003 10.5002 5.00003C9.04155 5.00003 7.64261 5.57949 6.61116 6.61094C5.57971 7.64239 5.00024 9.04134 5.00024 10.5C5.00024 11.9587 5.57971 13.3577 6.61116 14.3891C7.64261 15.4206 9.04155 16 10.5002 16Z" fill="#42526E"/>
      </svg> 
    </div>
  </header>
  <div class="user" tabindex="3">
    <div class="data">
      <h4>Daniel O Brabo</h4>
      <p>daniel_obrabo@gmail.com</p>
    </div>
    <div class="img avatar">
      <img src="../assets/images/avatar.png" alt="daniel obrabo">
    </div>
  </div>
  <nav>
    <div class="menu-item" tabindex="0" v-for="(item, i) in menu">
      <div class="item-icon" v-html="item.icon"></div>
      <div class="item-text"><p>{{item.text}}</p></div>
    </div>
  </nav>
  <section>
    <slot></slot>
  </section>
  `,
  data: () => ({
    menu: [...menuItems, ...new Array(30).fill({ 'icon': 'X', 'text': 'Exemplo bla bla bla bla bla bla' })]
  }),
};
