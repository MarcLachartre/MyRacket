Rails.application.routes.draw do

  get 'pages/home'
  get 'pages/about'

  get 'users/dashboard'
  devise_for :users
  root :to => "pages#home"
# get "rackets", to: "rackets#index"

  resources :rackets, only: [:index, :show] do
    resources :racketreviews, only: [:new, :create, :destroy, :edit, :update]
  end

  resources :racketreviews

  resources :users, only: [:show, :index, :destroy] do
    resources :racketreviews, only: [:new, :create, :edit, :update, :destroy]
  end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
