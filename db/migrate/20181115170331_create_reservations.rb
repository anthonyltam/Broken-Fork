class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :start_time, null: false
      t.integer :end_time, null: false
    end
  end
end
