class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.string :token, null: false
      t.boolean :closed, null: false, default: false

      t.timestamps null: false
    end
  end
end
