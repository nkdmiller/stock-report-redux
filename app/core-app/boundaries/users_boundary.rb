require_relative '../controls/stock_report_control.rb'
module UsersBoundary
    include StockReportControl
    def self.createUser(user_request)
        @user = StockReportControl.createUser(user_request)
        return @user
    end

    def self.getUser(userID)
        @user = StockReportControl.getUser(userID)
        return @user
    end

    def self.authenticate(username, password)
        @user = StockReportControl.authenticate(username, password)
        return @user
    end
  end