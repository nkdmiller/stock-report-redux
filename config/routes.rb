Rails.application.routes.draw do
  post '/signup' => 'users#create'
  get '/session' => 'sessions#show'
  patch '/stock/:id/edit' => 'stocks#update'
  delete '/stock/:id/delete' => 'stocks#destroy'
  post '/stock/new' => 'stocks#new'
end
