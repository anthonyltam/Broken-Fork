class Api::RestaurantsController < ApplicationController

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.save!
  end

  def index
    @restaurants = Restaurant.all
    render "api/restaurants/index"
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render "api/restaurants/show"
  end

  def restaurant_params
    params.require(:post).permit(:title, :photo)
  end

end
