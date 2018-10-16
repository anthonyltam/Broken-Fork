@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! "restaurant", restaurant: restaurant
    # if (json.photo_url url_for(restaurant.photo))
    #   puts ' i made it here '
    # end
  end
end
