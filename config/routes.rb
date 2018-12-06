Rails.application.routes.draw do
  post '/signup' => 'users#create'
  get '/session' => 'sessions#show'
end
