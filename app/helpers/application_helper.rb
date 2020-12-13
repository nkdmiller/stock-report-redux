module ApplicationHelper
	def log_in(user)
      session[:user_id] = user.user_id
   end
end
