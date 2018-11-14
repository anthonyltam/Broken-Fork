# json.set! restaurant.id do
#   json.extract! restaurant, :id, :name, :description, :location, :cuisines, :hours_of_operation, :tables
#    json.reviews
#   json.photo_url url_for(restaurant.photo)
# end

json.reviews @reviews
json.extract! restaurant, :id, :name, :description, :location, :cuisines, :hours_of_operation, :tables
if restaurant.photo.attached?
  json.photo_url url_for(restaurant.photo)
end

