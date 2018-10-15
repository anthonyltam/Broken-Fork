class Restaurant < ApplicationRecord

  validates :name, :description, :location, :cuisines, :hours_of_operation, :tables, presence: true

  has_one_attached :photo
end
