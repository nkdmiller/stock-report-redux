module ResponseModels
    class StockResponse
        attr_accessor :stock_id, :symbol, :price, :company_name, :sector, :change, :user_id
        def initialize(symbol, price, company_name, sector, change, user_id, stock_id = 0)
            @stock_id = stock_id
            @symbol = symbol
            @price = price
            @company_name = company_name
            @sector = sector
            @change = change
            @user_id = user_id
        end
    end

    class UserResponse
        attr_accessor :user_id, :name, :email, :stocks
        def initialize(name, email, user_id, stocks)
            @user_id = user_id
            @name = name
            @email = email
            @stocks = stocks
        end
    end
end