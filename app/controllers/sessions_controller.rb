class SessionsController < ApplicationController

  # skip_before_action except: :destroy

  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user.nil?
      render :new
    else
      login_user(user)
      #
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    # redirect to login page
  end
end
