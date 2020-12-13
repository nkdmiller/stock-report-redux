class UserEntity
    attr_accessor :user_id, :name, :password, :email
    def initialize(user_id, name, password, email)
        @user_id = user_id
        @name = name
        @password = password
        @email = email
    end
end