module ActiveRecordGateway
    def self.createUser(user_request)
        @user = User.create(name: user_request.name, password_digest: user_request.password, email: user_request.email)
        return @user
    end

    def self.getUser(userID)
        puts userID
        @user = User.find(userID)
        return @user
    end

    def self.authenticate(username, password)
        puts username
        @user = User.find_by(name: username)
        if @user.nil? || !@user.authenticate(password)
            return nil
        else
            return @user
        end
    end

    def self.createStock(stock_request)
        @stock = Stock.new(symbol: stock_request.symbol, price: stock_request.price, companyName: stock_request.company_name, sector: stock_request.sector, change: stock_request.change, user_id: stock_request.user_id)
        @stock.save
        return @stock
    end

    def self.updateStock(stock_request)
        @stock = Stock.find(params[:id])
        @stock.update(symbol: stock_request.symbol, price: stock_request.price, companyName: stock_request.company_name, sector: stock_request.sector, change: stock_request.change, user_id: stock_request.user_id)
        return @stock
    end

    def self.deleteStock(stock_id)
        Stock.delete(stock_id)
        return stock_id
    end
end