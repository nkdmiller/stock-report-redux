require_relative '../controls/stock_report_control.rb'
module StocksBoundary
    include StockReportControl
    def self.createStock(stock_request)
        @stockResponse = StockReportControl.createStock(stock_request)
        return @stockResponse
    end

    def self.updateStock(stock_request)
        @stockResponse = StockReportControl.updateStock(stock_request)
        return @stockResponse
    end

    def self.deleteStock(stock_id)
        @deleted_id = StockReportControl.deleteStock(stock_id)
        return @deleted_id
    end
end