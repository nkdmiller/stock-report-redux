Rails.application.routes.draw do
  post '/signup' => 'users#create'
end
