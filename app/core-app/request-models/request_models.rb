module RequestModels
    class StockRequest
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

    class UserRequest
        attr_accessor :user_id, :name, :password, :email
        def initialize(name, password, email, user_id = 0)
            @user_id = user_id
            @name = name
            @password = password
            @email = email
        end
    end
end