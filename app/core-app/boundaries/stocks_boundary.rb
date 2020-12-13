require_relative '../interactors/stock_report_interactor.rb'
module StocksBoundary
    include StockReportInteractor
    def self.createStock(stock_request)
        @stockResponse = StockReportInteractor.createStock(stock_request)
        return @stockResponse
    end

    def self.updateStock(stock_request)
        @stockResponse = StockReportInteractor.updateStock(stock_request)
        return @stockResponse
    end

    def self.deleteStock(stock_id)
        @deleted_id = StockReportInteractor.deleteStock(stock_id)
        return @deleted_id
    end
end