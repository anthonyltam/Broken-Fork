Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resources :reviews, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :destroy]
    resources :searches, only: :index
  end

  root to: "static_pages#root"
end
