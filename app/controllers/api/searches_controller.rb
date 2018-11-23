class Api::SearchesController < ApplicationController

  def index     
    search = search_params['cuisines']
    # p search.downcase
    @restaurants = Restaurant.where( 'cuisines' => search )
    if @restaurants 
      render :index
    end

  end

  private

  def search_params 
    params.require(:search).permit(:cuisines)
  end

end