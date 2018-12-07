class StocksController < ApplicationController 
	skip_before_action :verify_authenticity_token
  def new
   @stock = Stock.new(symbol: params[:stock][:symbol], price: params[:stock][:price], companyName: params[:stock][:companyName], sector: params[:stock][:sector], change: params[:stock][:change])
   @stock.user_id = session[:user_id]
   @stock.save
   render json: @stock
  end

end