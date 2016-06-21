var Rooms = Rooms || {}

;((namespace) => {
  class Form extends Cape.Component {
    init() {
      this.agent = new RoomAgent(this)
      this.agent.id = router.params.id
      if (this.agent.id) this.agent.init()
      else this.refresh()
      router.attach(this.agent)
    }

    render(m) {
      m.div({ id: 'content', class: 'col-xs-12 col-md-8 col-md-offset-2' }, m => this.renderForm(m))
    }

    renderForm(m) {
      m.formFor('room', m => {
        this.renderTextField(m, 'name', 'What about chat?')
        if (this.agent.id) {
          m.onclick(e => this.agent.update(this.afterUpdate, this.errorHandler))
          m.button('Update Chat')
        }
        else {
          m.onclick(e => this.agent.create(this.afterCreate, this.errorHandler))
          m.button('Create Chat', { class: 'btn btn-primary', style: { 'width': '100%' } })
        }
      })
    }

    afterCreate(json) {
      if (json.result === 'OK') {
        router.navigate('rooms/' + `${json.token}`)
        router.notify()
      }
      else {
        this.agent.hasErrors = true
        this.agent.errors = json.errors
        this.refresh()
        router.notify()
      }
    }

    afterUpdate(json) {
      if (json.result === 'OK') {
        router.navigate('rooms/' + `${this.agent.object.token}`)
        router.notify()
      }
      else {
        this.agent.hasErrors = true
        this.agent.errors = json.errors
        this.refresh()
        router.notify()
      }
    }

    errorHandler(ex) {
      router.flash.alert = 'エラーが発生しました。'
      router.notify()
      console.log(ex.toString())
    }
  }

  Cape.extend(Form.prototype, Mixins.GenericForm)
  namespace.Form = Form
  if (typeof module !== 'undefined') module.exports = Form
})(Rooms)
