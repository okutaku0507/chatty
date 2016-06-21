App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    console.log('successfully connected')

  disconnected: ->
    console.log('Failed')

  received: (data) ->
    token = data['token']
    cable_catcher = $('input#cable_catcher')
    if cable_catcher.attr('data-token') == token
      cable_catcher.val('received').change()

  chat: (token) ->
    @perform 'chat', token: token
