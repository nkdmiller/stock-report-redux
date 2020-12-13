require_relative '../response-models/response_models.rb'
module DatabaseBoundary
  include ResponseModels
    def self.createUser(user_request)
      puts user_request
        arUser = User.create(name: user_request.name, password_digest: user_request.password, email: user_request.email)
        userResponse = ResponseModels::UserResponse.new(arUser.name, arUser.email, arUser.id, [])
        return userResponse
      end
    
      def self.getUser(userID)
        arUser = User.find(userID)
        stocks = arUser.stocks
        userStocks = []
        for stock in stocks
          userStocks << ResponseModels::StockResponse.new(stock.symbol, stock.price, stock.companyName, stock.sector, stock.change, stock.user_id, stock.id)
        end
        userResponse = ResponseModels::UserResponse.new(arUser.name, arUser.email, arUser.id, userStocks)
        return userResponse
      end
    
      def self.getUserByName(username)
        arUser = User.find_by(name: username)
        stocks = arUser.stocks
        userStocks = []
        for stock in stocks
          userStocks << ResponseModels::StockResponse.new(stock.symbol, stock.price, stock.companyName, stock.sector, stock.change, stock.user_id, stock.id)
        end
        userResponse = ResponseModels::UserResponse.new(arUser.name, arUser.email, arUser.id, userStocks)
        return userResponse
      end
      
      def self.createStock(stock_request)
        stock = Stock.new(symbol: stock_request.symbol, price: stock_request.price, companyName: stock_request.company_name, sector: stock_request.sector, change: stock_request.change, user_id: stock_request.user_id)
        stock.save
        stockResponse = ResponseModels::StockResponse.new(stock.symbol, stock.price, stock.companyName, stock.sector, stock.change, stock.user_id, stock.id)
        return stockResponse
       end
    
       def self.updateStock(stock_request)
         stockForUpdate = Stock.find(stock_request.stock_id)
         puts stock_request.symbol
         puts stock_request.company_name
         puts stock_request.price
         puts stock_request.sector
         stockForUpdate.update(symbol: stock_request.symbol, price: stock_request.price, companyName: stock_request.company_name, sector: stock_request.sector, change: stock_request.change)
         stockResponse = ResponseModels::StockResponse.new(stockForUpdate.symbol, stockForUpdate.price, stockForUpdate.companyName, stockForUpdate.sector, stockForUpdate.change, stockForUpdate.user_id, stockForUpdate.id)
         return @stock
       end
    
       def self.deleteStock(stock_id)
         Stock.delete(stock_id)
         return stock_id
       end
end