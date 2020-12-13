class StockEntity
    attr_accessor :stock_id, :symbol, :price, :company_name, :sector, :change, :user_id
    def initialize(stock_id, symbol, price, company_name, sector, user_id)
        @stock_id
        @symbol = symbol
        @price = price
        @companyName = company_name
        @sector = sector
        @user_id = user_id
    end
end
