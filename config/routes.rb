Rails.application.routes.draw do


  devise_for :users
  root :to => "rackets#index"
# get "rackets", to: "rackets#index"

  resources :rackets, only: [:index, :show] do
    resources :racketreviews, only: [:new, :create]
  end

  resources :racketreviews, only: [:index, :new, :create]

  resources :users, only: [:show, :new, :create] do
    resources :racketreviews, only: [:new, :create]
  end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
