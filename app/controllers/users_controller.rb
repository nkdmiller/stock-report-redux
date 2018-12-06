class UsersController < ApplicationController 
  def create
    @user = User.create(user_params)
    render json: @user
  end
end