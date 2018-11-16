json.extract! reservation, :id, :start_time, :end_time, :user_id, :restaurant_id

json.restaurant_name reservation.restaurant.name