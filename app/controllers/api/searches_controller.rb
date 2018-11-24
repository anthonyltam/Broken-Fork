class Api::SearchesController < ApplicationController

  def index     
    # debugger
    search = search_params['cuisines'].downcase
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