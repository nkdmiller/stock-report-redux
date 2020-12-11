require_relative '../boundaries/sessions_gateway.rb'
class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  include SessionsGateway
  def show
    @user = User.find(session[:user_id])
    render json: @user.to_json(:include => :stocks)
  end
  def destroy
  	session.clear
  	render json: params[:id]
  end
  def new
    @user = User.find_by(name: params[:user][:name])
    if @user.nil? || !@user.authenticate(params[:user][:password])
    	raise ActionController::RoutingError.new('Not Found')
    else
    	log_in(@user)
	    render json: @user.to_json(:include => :stocks)
	end
  end

end