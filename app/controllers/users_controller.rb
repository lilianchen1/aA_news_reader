class UsersController < ApplicationController

  # skip_before_action

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save!
      login_user(user)
    else
      render :new
    end
  end

  def user_params
    params[:user].permit(:username, :password)
  end

end
