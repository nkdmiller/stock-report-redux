require_relative '../core-app/boundaries/stocks_gateway.rb'
class StocksController < ApplicationController 
  skip_before_action :verify_authenticity_token
  include StocksGateway
  def new
   @stock = Stock.new(symbol: params[:stock][:symbol], price: params[:stock][:price], companyName: params[:stock][:companyName], sector: params[:stock][:sector], change: params[:stock][:change])
   @stock.user_id = session[:user_id]
   @stock.save
   render json: @stock
  end
  def update
  	@stock = Stock.find(params[:id])
  	@stock.update(symbol: params[:stock][:symbol], price: params[:stock][:price], companyName: params[:stock][:companyName], sector: params[:stock][:sector], change: params[:stock][:change])
  	render json: @stock
  end
  def destroy
  	Stock.delete(params[:id])
  	render json: params[:id]
  end
end