class RoomAgent extends Cape.ResourceAgent {
  constructor(client, options) {
    super(client, options)
    this.resourceName = 'room'
  }

  addNewChat(chat) {
    let params = {
      chat: {
        body: chat
      }
    }
    this.post('add_new_chat', params, data => {
      if (data.result === 'OK') {
        this.refresh()
        App.room.chat(this.object.token)
      }
    })
  }
}
if (typeof module !== 'undefined') module.exports = RoomAgent
