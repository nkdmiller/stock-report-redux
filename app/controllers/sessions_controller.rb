require_relative '../core-app/boundaries/users_boundary.rb'
class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  include UsersBoundary
  def show
    @user = UsersBoundary.getUser(session[:user_id])
    render json: @user.to_json(:include => :stocks)
  end
  def destroy
  	session.clear
  	render json: params[:id]
  end
  def new
    @user = UsersBoundary.authenticate(params[:user][:name], params[:user][:password])
    if @user.nil?
    	raise ActionController::RoutingError.new('Not Found')
    else
    	log_in(@user)
	    render json: @user.to_json(:include => :stocks)
	  end
  end

end