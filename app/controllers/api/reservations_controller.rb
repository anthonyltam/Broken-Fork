class Api::ReservationsController < ApplicationController
  before_action :require_login

  def index
    @reservations = Reservation.all
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id

    if @reservation.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @reservation = current_user.reservations.find_by(id: params[:id])

    if @reservation.destroy
      render :show
    else
      render json: ['Reservation does not exist'], status: 404
    end
    
  end

  private

  def reservation_params
    params.require(:reservation).permit(:day, :start_time, :restaurant_id)
  end

end