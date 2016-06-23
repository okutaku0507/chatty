$(document).on("ready", function () {
  Cape.defaultAgentAdapter = 'rails'

  router = new Cape.Router()
  router.draw(function(m) {
    m.root('top.index')
    m.page('about', 'top.about')
    m.many('rooms', { except: 'show' })
    m.page('rooms/:id', 'rooms.item')
  })

  router.beforeNavigation(function(hash) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: 'GET',
        url: '/set_remote_ip'
      }).done(function(data) {
        if (data.text === 'OK') {
          router.vars.ip_address = data.remote_ip
          resolve(hash)
        }
        else {
          router.vars.ip_address = null
          resolve('')
        }
      }).error(function() {
        reject(Error('ERROR'))
      })
    })
  })

  router.errorHandler(function(err) {
    router.show(Errors.Show)
  })

  var topBar = new TopBar()

  router.mount('main')
  topBar.mount("top-bar")
  router.start()
})
