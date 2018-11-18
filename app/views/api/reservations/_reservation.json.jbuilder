json.extract! reservation, :id, :day, :start_time, :user_id, :restaurant_id

json.restaurant_name reservation.restaurant.name