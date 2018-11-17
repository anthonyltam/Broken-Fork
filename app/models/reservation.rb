class Reservation < ApplicationRecord

  validates :day, :start_time, :user_id, :restaurant_id, presence: true;

  belongs_to :user
  belongs_to :restaurant

end