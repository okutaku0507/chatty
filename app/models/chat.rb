# == Schema Information
#
# Table name: chats
#
#  id         :integer          not null, primary key
#  room_id    :integer          not null
#  identified :string(255)
#  body       :text(65535)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_chats_on_room_id  (room_id)
#

class Chat < ApplicationRecord
  belongs_to :room
end
