class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|
      t.references :room, null: false
      t.string :identified
      t.text :body, null: false

      t.timestamps
    end
  end
end
