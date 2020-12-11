require_relative '../core-app/boundaries/users_gateway.rb'
class UsersController < ApplicationController 
  skip_before_action :verify_authenticity_token
  include UsersGateway
  def create
    @user = User.create(user_params)
    log_in(@user)
    render json: @user
  end
  private

  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation, :email)
  end
end