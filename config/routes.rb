Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations'}
  get 'pages/home'
  get 'pages/about'
 
  root :to => "pages#home"
  get "rackets", to: "rackets#index"

  resources :rackets, only: [:show, :create, :new] do
    resources :racketreviews, only: [:new, :create, :destroy, :edit, :update]
  end

  patch "rackets/:racket_id/racketreviews/:racketreview_id/edit", to: "racketreviews#update"
  # resources :racketreviews

  resources :users, only: [:show, :index, :destroy]

  get "users/:id/account", to: 'users#show'
  get "users/:id/my_reviews", to: 'users#show'
  get "users/:id/settings", to: 'users#show'
  
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
