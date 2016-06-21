var Rooms = Rooms || {}

;((namespace) => {
  class Item extends Cape.Component {
    init() {
      this.ip_address = router.vars.ip_address
      this.agent = new RoomAgent(this)
      this.agent.id = router.params.id
      this.autoScrollToBottom = false
      this.autoScrollToBottom2 = false
      this.setAutoScrollToBottom()
      this.agent.init()
      router.attach(this.agent)
    }

    render(m) {
      this.autoScrollToBottom = this.checkBottom()
      m.div({ id: 'content', class: 'col-xs-12 col-md-8 col-md-offset-2' }, m => {
        this.renderChatBoard(m)
      })
      m.div({ id: 'newChat' }, m => {
        m.on('keypress', e => {
          if (e.keyCode === 13) {
            if ($(e.target).val().length) this.addNewChat(e)
          }
        })
        m.input({ id: 'new-chat', class: 'form-control', placeholder: 'chat... enter!' })
      })
      this.renderCableCatcher(m)
      this.scrollToBottom()
    }

    renderChatBoard(m) {
      m.div({ id: 'chat_board'}, m => {
        this.renderIntroduction(m)
        this.agent.data.chats.forEach((chat, index) => {
          this.renderChat(m, chat)
        })
      })
    }

    renderIntroduction(m) {
      m.div({ class: 'col-xs-12 other_chat introduction mt5 mb10' }, m => {
        m.div({ class: 'image' }, m => {
          m.img({ src: '../assets/logo.jpg', alt: 'Logo Image' })
        })
        m.div({ class: 'body' }, m => {
          m.text('このチャットは')
          m.strong(`「${this.agent.data.room.name}」`)
          m.text('がお題です。')
          m.br()
          m.a(window.location.href, { href: window.location.href, target: '_blank' })
          m.br()
          m.text('を共有すれば、みんなで会話ができます！')
        })
      })
    }

    renderChat(m, chat) {
      if (this.ip_address === chat.identified) m.class('my_chat')
      else m.class('other_chat')
      m.div({ id: `chat-${chat.id}`, class: 'col-xs-12 mt5 mb10' }, m => {
        m.div({ class: 'image' }, m => {
          m.img({ src: '../assets/profile.jpg', alt: 'Profile Image' })
        })
        m.div(chat.body, { class: 'body' })
      })
    }

    addNewChat(e) {
      let chat = $(e.target).val()
      this.agent.addNewChat(chat)
      $(e.target).val('')
    }

    renderCableCatcher(m) {
      m.on('change', e => {
        this.agent.refresh()
        $('input#cable_catcher').val('')
        if (this.autoScrollToBottom) this.autoScrollToBottom2 = true
      })
      m.input({ type: 'text', id: 'cable_catcher', style: { display: 'none' }, data: { 'token': this.agent.id }})
    }

    checkBottom() {
      if (this.autoScrollToBottom) return true
      let height = $(window).height(),
        scrollTop = $(window).scrollTop(),
        documentHeight = $(document).height()
      if ((documentHeight - (height + scrollTop)) < 100) return true
      else return false
    }

    scrollToBottom() {
      if (this.autoScrollToBottom) {
        let height = $(window).height(),
          scrollTop = $(window).scrollTop(),
          documentHeight = $(document).height()
        $(window).scrollTop($(document).height())
        if (documentHeight === height + scrollTop) {
        } else {
          this.autoScrollToBottom = false
        }
      }
    }

    setAutoScrollToBottom() {
      setInterval(m => {
        if (this.autoScrollToBottom2) {
          let height = $(window).height(),
            scrollTop = $(window).scrollTop(),
            documentHeight = $(document).height()
          $(window).scrollTop($(document).height())
          if ((documentHeight - (height + scrollTop)) < 25) {
            this.autoScrollToBottom2 = false
          }
        }
      },1000);
    }
  }

  Cape.merge(Item.prototype, Mixins.GenericForm)
  namespace.Item = Item
  if (typeof module !== 'undefined') module.exports = Item
})(Rooms)
