require_relative '../boundaries/database_boundary.rb'
module StockReportControl
  include DatabaseBoundary
  #Use Cases

  #User related Use Cases
  def self.createUser(user_request)
    @user = DatabaseBoundary.createUser(user_request)
    return @user
  end

  def self.getUser(userID)
    @user = DatabaseBoundary.getUser(userID)
    return @user
  end

  def self.authenticate(username, password)
    @user = DatabaseBoundary.getUserByName(username)
    if @user.nil?
    	return nil
    else
      return @user
    end
  end

  #Stock related use cases
  def self.createStock(stock_request)
    @stock = DatabaseBoundary.createStock(stock_request)
    return @stock
   end

   def self.updateStock(stock_request)
    @stock = DatabaseBoundary.updateStock(stock_request)
    return @stock
   end

   def self.deleteStock(stock_id)
    @stock_id = DatabaseBoundary.deleteStock(stock_id)
    return @stock_id
   end
end