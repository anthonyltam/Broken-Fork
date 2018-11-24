export const fetchRestaurants = (search='') => {
  const data = search.slice(1).split('=');
  const dataObj = {};
  // for (let i = 0; i < data.length; i += 2) {
    dataObj.cuisines = data[1];
  // }

  if (!dataObj.cuisines) {
    return $.ajax({ method: "GET", url: `api/restaurants` });
  } 
  return searchRestaurants(dataObj);
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

export const searchRestaurants = search => {
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: { search }
  });
};
