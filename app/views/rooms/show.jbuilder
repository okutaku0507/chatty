json.room do
  json.id @room.id
  json.name @room.name
  json.token @room.token
end
json.chats do
  json.array! @chats,
    :id, :body, :identified
end
