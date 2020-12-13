require_relative '../core-app/boundaries/users_boundary.rb'
require_relative '../core-app/controls/stock_report_control.rb'
require_relative '../core-app/request-models/request_models.rb'
class UsersController < ApplicationController 
  skip_before_action :verify_authenticity_token
  include UsersBoundary
  include RequestModels
  def create
    verify_user_params
    @user = RequestModels::UserRequest.new(params[:user][:name], params[:user][:password], params[:user][:email])
    puts @user
    @user = UsersBoundary.createUser(@user)
    log_in(@user)
    render json: @user
  end
  private

  def verify_user_params
    params.require(:user).permit(:name, :password, :password_confirmation, :email)
  end
end