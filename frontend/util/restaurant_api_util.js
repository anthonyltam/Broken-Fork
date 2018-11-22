export const fetchRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants`
  });
};

export const fetchRestaurant = id => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants/${id}`
  });
};

export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: `api/reviews`,
    data: { review }
  });
};

export const fetchReviews = restaurant_id => {
  return $.ajax({
    method: "GET",
    url: `api/reviews`,
    data: { restaurant_id }
  });
};

export const fetchCuisine = cuisines => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants`,
    data: { cuisines }
  });
};

export const searchRestaurants = search => {
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: { search }
  });
};
