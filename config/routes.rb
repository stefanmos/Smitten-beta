Rails.application.routes.draw do
  resources :invites do
    resources :agendas
  end
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
