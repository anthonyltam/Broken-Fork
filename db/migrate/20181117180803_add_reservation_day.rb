class AddReservationDay < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :day, :date, null: false
  end
end
