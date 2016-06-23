class TopBar extends Cape.Component {
  init() {
    router.attach(this)
    this.refresh()
  }

  render(m) {
    let container = router.container ? router.container : 'top'
    let component = router.component ? router.component : ''

    if (container === 'rooms' || component === 'about') {
      m.div({ id: 'header', class: 'navbar navbar-static-top header-navbar mb10' }, m => {
        m.h1({ class: 'ma0' }, m => {
          m.a({ class: 'navbar-brand', href: '/' }, m => {
            'Chatty'.split('').forEach(l => {
              m.span(l)
            })
          })
        })
        m.attr({ data: { toggle: 'collapse', target: '.navbar-collapse' } })
        m.a({ class: 'btn btn-navbar navbar-toggle mr15 ml0', style: { 'border': 'none' } }, m => {
          $.each((new Array(3)), i => {
            m.span({ class: 'icon-bar', style: { background: '#DDD' } })
          })
        })
        m.div({ class: 'navbar-float-clear clear' })
        m.div({ class: 'navbar-collapse collapse navbar-responsive-collapse' }, m => {
          m.ul({ class: 'nav navbar-nav' }, m => {
            m.li(m => {
              m.onclick(e => {
                router.navigate('about')
                return false
              })
              m.a(m => {
                m.fa('question-circle').sp().text('Chattyとは！？')
              })
            })
            m.li(m => {
              m.onclick(e => {
                let href = 'http://www.facebook.com/share.php?u=http://chatty.xaio.jp/'
                window.open(encodeURI(decodeURI(href)), 'FBwindow', 'width=554, height=470,menubar=no, toolbar=no, scrollbars=yes')
                return false
              })
              m.a({ rel: 'nofollow' }, m => {
                m.fa('facebook-official').sp().text('Facebook シェア')
              })
            })
            m.li(m => {
              m.onclick(e => {
                let href = 'http://twitter.com/share?text=ChattyはCape.JSとRails5で構築されたリアルタイムのチャットサービスです。会員登録不要で利用することができます！'
                window.open(encodeURI(decodeURI(href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1')
                return false
              })
              m.a({ rel: 'nofollow' }, m => {
                m.fa('twitter').sp().text('Twitter シェア')
              })
            })
          })
        })
      })
    }
  }
}

Cape.extend(TopBar.prototype, Mixins.FlashMessage)
