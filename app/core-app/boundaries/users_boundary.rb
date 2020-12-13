require_relative '../interactors/stock_report_interactor.rb'
module UsersBoundary
    include StockReportInteractor
    def self.createUser(user_request)
        @user = StockReportInteractor.createUser(user_request)
        return @user
    end

    def self.getUser(userID)
        @user = StockReportInteractor.getUser(userID)
        return @user
    end

    def self.authenticate(username, password)
        @user = StockReportInteractor.authenticate(username, password)
        return @user
    end
  end