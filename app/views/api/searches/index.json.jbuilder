@restaurants.each do |rest| 
  p 'here'
  json.set! rest.id do 
    json.partial! '/api/restaurants/restaurant', restaurant: rest
  end
end