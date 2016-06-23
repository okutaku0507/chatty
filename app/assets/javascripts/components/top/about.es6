var Top = Top || {}

;((namespace) => {
  class About extends Cape.Component {
    render(m) {
      m.div({ id: 'content', class: 'col-xs-12 col-md-8 col-md-offset-2' }, m => {
        m.div(m => {
          m.h2('Chattyとは')
          m.div({ style: { 'padding': '10px 20px' } }, m =>{
            m.img({ src: '../assets/logo_wide.png', alt: 'Chatty Logo', style: { 'height': '50px', 'margin-bottom': '15px' } })
            m.p('「 Chatty」は会員登録の必要なく、誰でも簡単にチャットが楽しめるリタルタイム・チャットサービスです。')
            m.p(m => {
              m.text('2015年生まれの新しいJavaScript UI フレームワークであるCape.JSと、')
                .text('近年注目を集めるアプリ開発フレームワークであるRuby on Railsを用いて、')
                .text('1日くらいのコード量で楽しいアプリを、と言う考えのもと開発されました。')
            })
            m.p('プログラミングの楽しさが伝われば幸いです。')
            m.p(m => {
              m.a('ソースコードはこちら', { href: 'https://github.com/okutaku0507/chatty', target: '_blank' })
            })
          })
        })
        m.div(m => {
          m.h2('Cape.JSとは')
          m.div({ style: { 'padding': '10px 20px' } }, m => {
            m.img({ src: '../assets/capejs.jpg', alt: 'Cape.JS Logo', style: { 'height': '50px', 'margin-bottom': '15px' } })
            m.p('「Cape.JS」は2015年生まれの新しいJavaScript UI フレームワークです。')
            m.p('React や Riot と同じく「仮想DOM」という技法が用いられ、DOMの変更点のみを動的に変更することができます。')
            m.p('そのため、リクエスト毎にwebページを丸ごと生成せず、いわゆるサクサクのアプリケーションを構築することができます。')
            m.p('製作者がRuby on Railsを意識したこともあり、RoR開発者に親和性が高いと思います。')
            m.p('慣れが必要ですが、書いていて楽しいJSです。')
            m.p(m.strong('もっと詳しく知りたい人へ'))
            m.p(m => {
              m.a('Cape.JS Documentation', { href: 'http://capejs.github.io/capejs/', target: '_blank' })
            })
            m.p(m => {
              m.a('Cape.JS 入門 - Ruby on Rails with OIAX', { href: 'https://www.oiax.jp/rails/capejs_primer.html', target: '_blank' })
            })
            m.p(m => {
              m.a('Cape.JSを組み込むためのGem', { href: 'https://github.com/capejs/capejs-rails', target: '_blank' })
            })
          })
        })
        m.div(m => {
          m.h2('Ruby on Railsとは')
          m.div({ style: { 'padding': '10px 20px' } }, m => {
            m.img({ src: '../assets/rails-logo.jpg', alt: 'Ruby on Rails Logo', style: { 'height': '50px', 'margin-bottom': '15px' } })
            m.p('「Ruby on Rails」はプログラミング言語Rubyで記述されたアプリ開発用フレームワークです。')
            m.p('詳しく説明すると、ボロができるので避けますが、')
            m.p('近年、オンラインやオフラインでのプログラミング学習プログラムなどが多数登場し、')
            m.p('Ruby on Railsを学べる環境が整っています。')
            m.p('私も壁に当たってばかりですが、Ruby on Railsは書いていて楽しいです。')
            m.p(m.strong('もっと詳しく知りたい人へ'))
            m.p(m => {
              m.a('Ruby on Rails とは - 株式会社オイアクス', { href: 'https://www.oiax.co.jp/consulting/rails', target: '_blank' })
            })
            m.p(m => {
              m.a('オススメ書籍 - 改訂3版基礎 Ruby on Rails', { href: 'https://www.amazon.co.jp/%E6%94%B9%E8%A8%823%E7%89%88%E5%9F%BA%E7%A4%8E-Ruby-Rails-IMPRESS-KISO/dp/4844338153?ie=UTF8&ref_=asap_bc', target: '_blank' })
            })
          })
        })
      })
    }
  }

  namespace.About = About
  if (typeof module !== 'undefined') module.exports = About
})(Top)
