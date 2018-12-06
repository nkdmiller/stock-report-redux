class SessionsController < ApplicationController 
	skip_before_action :verify_authenticity_token
  def show
    @user = User.find(session[:user_id])
    render json: @user
  end
end