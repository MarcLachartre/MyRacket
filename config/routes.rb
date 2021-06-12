Rails.application.routes.draw do
  devise_for :users
  get 'pages/home'
  # get 'pages/about'
 
  root :to => "pages#home"
  get "rackets", to: "rackets#index"

  resources :rackets, only: [:show] do
    resources :racketreviews, only: [:new, :create, :destroy, :edit, :update]
  end

  patch "rackets/:racket_id/racketreviews/:racketreview_id/edit", to: "racketreviews#update"

  resources :users, only: [:show, :index, :destroy]
  get 'my_account/:id', to: 'users#show'
  
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
