class TopBar extends Cape.Component {
  init() {
    router.attach(this)
    this.refresh()
  }

  render(m) {
    let container = router.container ?
                     router.container : 'top'
    if (container === 'rooms') {
      m.div({ id: 'header', class: 'navbar navbar-static-top header-navbar mb10' }, m => {
        m.h1({ class: 'ma0' }, m => {
          m.a({ class: 'navbar-brand', href: '/' }, m => {
            'Catty'.split('').forEach(l => {
              m.span(l)
            })
          })
        })
      })
    }
  }
}

Cape.extend(TopBar.prototype, Mixins.FlashMessage)
