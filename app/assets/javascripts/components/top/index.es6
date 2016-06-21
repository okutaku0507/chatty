var Top = Top || {}

;((namespace) => {
  class Index extends Cape.Component {
    render(m) {
      m.div({ id: 'before_authentication' }, m => {
        m.div({ id: 'TopPage'}, m => {
          m.h1('Chatty', { class: 'main_txt' })
          m.h4('Freely, Happily, Actively.', { class: 'sub_txt' })
          m.onclick(e => this.goToRooms())
          m.class({ btn: true, 'btn-primary': true })
          m.attr({ role: 'button' })
          m.a('Start')
        })
        m.div({ id: 'footer' }, m => {
          m.p({ class: 'tac fs12' }, m => {
            m.span({ innerHTML: '&copy;' }).sp()
            m.text(`${new Date().getFullYear()}`).sp()
            m.a('Takuya Okuhara', { href: 'https://www.facebook.com/takuya.okuhara.7' }).sp()
            m.text('All Rights Reserved.')
          })
        })
      })
    }

    goToRooms() {
      router.navigate('rooms/new')
    }
  }

  namespace.Index = Index
  if (typeof module !== 'undefined') module.exports = Index
})(Top)
