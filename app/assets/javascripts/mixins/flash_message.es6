var Mixins = Mixins || {}

;((namespace) => {
  namespace.FlashMessage = {
    renderFlashMessage: function(m) {
      if (router.flash.notice) {
        m.div(router.flash.notice, { class: 'flash flash-alert alert-info'})
      }
      if (router.flash.alert) {
        m.div({ class: 'flash flash-notice alert-danger'}, m => {
          m.fa('warning')
          m.span(router.flash.alert)
        })
      }
    }
  }
})(Mixins)
