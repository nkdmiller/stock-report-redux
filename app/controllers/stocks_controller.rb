require_relative '../core-app/boundaries/stocks_boundary.rb'
require_relative '../core-app/request-models/request_models.rb'
class StocksController < ApplicationController 
  skip_before_action :verify_authenticity_token
  include StocksBoundary
  include RequestModels
  def new
    @stock = RequestModels::StockRequest.new(params[:stock][:symbol], params[:stock][:price], params[:stock][:company_name], params[:stock][:sector], params[:stock][:change], session[:user_id])
    puts @stock
    @stockResponse = StocksBoundary.createStock(@stock)
    render json: @stockResponse
  end
  def update
  	@stock = RequestModels::StockRequest.new(params[:stock][:symbol], params[:stock][:price], params[:stock][:company_name], params[:stock][:sector], params[:stock][:change], session[:user_id], params[:id])
  	@stockResponse = StocksBoundary.updateStock(@stock)
  	render json: @stockResponse
  end
  def destroy
    @deleted_id = StocksBoundary.deleteStock(params[:id])
    puts("deleted" + @deleted_id)
  	render json: @deleted_id
  end
end