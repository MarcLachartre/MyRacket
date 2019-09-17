Rails.application.routes.draw do

# get "rackets", to: "rackets#index"
resources :rackets
resources :racketreviews
resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
