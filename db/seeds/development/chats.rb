%w(会話1 会話2 会話3).each do |name|
  Room.create(name: name)
end

rooms = Room.all

rooms.each do |room|
  10.times do
    Chat.create({
      room: room,
      body: '本文' * 10,
      identified: ['::1', nil].sample
    })
  end
end
