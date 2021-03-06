class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login_user(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
    redirect_to root_url
  end

  def redirect_to_login
    if current_user.nil?
      redirect_to new_session_url
    end
  end
end
