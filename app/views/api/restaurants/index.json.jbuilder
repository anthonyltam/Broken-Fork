json.array! @restaurants do |rest|
  json.partial! "api/restaurants/restaurant", restaurant: rest
end
