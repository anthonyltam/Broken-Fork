class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :body, presence: true

  belongs_to :restaurant
  belongs_to :author,
    class_name: :User
end
