class UsersController < ApplicationController
  def index
    @users = User.all
  end
  def show
    @user = User.find(params[:id])
  end

  def current_user_username
    render json: { username: current_user.username }
  end
end
