Rails.application.routes.draw do
  post '/signup' => 'users#create'
  get '/session' => 'sessions#show'
  patch '/stock/:id/edit' => 'stocks#update'
  post '/stock/new' => 'stocks#new'
  
end
