class Restaurant < ApplicationRecord

  validates :name, :description, :location, :cuisines, :hours_of_operation, :tables, presence: true

  has_many :reviews
  has_many :reservations
  
  has_one_attached :photo
end
