# json.set! restaurant.id do
#   json.extract! restaurant, :id, :name, :description, :location, :cuisines, :hours_of_operation, :tables
#   json.photo_url url_for(restaurant.photo)
# end

json.extract! restaurant, :id, :name, :description, :location, :cuisines, :hours_of_operation, :tables
json.photo_url url_for(restaurant.photo)
