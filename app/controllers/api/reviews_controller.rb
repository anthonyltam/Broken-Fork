class Api::ReviewsController < ApplicationController
  before_action :require_login

  def create
    @review = Review.new(review_params)

    
    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
    
  end

  def index
    @reviews = Review.where("restaurant_id = ?", params[:restaurant_id])
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :restaurant_id, :author_id)
  end

end