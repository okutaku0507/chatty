# == Schema Information
#
# Table name: rooms
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  token      :string(255)      not null
#  closed     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Room < ApplicationRecord
  has_many :chats, dependent: :destroy

  validates :name, :token, presence: true
  validates :token, uniqueness: { case_sensitive: false }

  before_validation do
    self.token ||= Room.create_salt
  end

  class << self
    def create_salt
      d = Digest::SHA1.new
      now = Time.now
      d.update(now.to_s)
      d.update(String(now.usec))
      d.update(String(rand(0)))
      d.update(String($$))
      d.update('chatty')
      d.hexdigest
    end
  end
end
