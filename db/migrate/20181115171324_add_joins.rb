class AddJoins < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :user_id, :integer, null: false
    add_column :reservations, :restaurant_id, :integer, null: false
  end
end
