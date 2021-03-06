Rails.application.routes.draw do
  post '/signup' => 'users#create'
  post '/login' => 'sessions#new'
  get '/session' => 'sessions#show'
  get '/session/delete' => 'sessions#destroy'
  patch '/stock/:id/edit' => 'stocks#update'
  delete '/stock/:id/delete' => 'stocks#destroy'
  post '/stock/new' => 'stocks#new'
end
