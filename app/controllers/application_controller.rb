class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_user

private

  def set_user
    cookies[:username] = current_user.username || 'guest'
  end
end
