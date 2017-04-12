class ChannelsController < ApplicationController
  def new
    @team = Team.find(params[:team_id])
    @channel = @team.channels.new
    respond_to do |format|
      format.html { redirect_to user_path(current_user) }
      format.js
    end
  end

  def create
    @team = Team.find(params[:id])
    @channel = @team.channels.new(channel_params)
    respond_to do |format|
      format.html { redirect_to user_path(current_user) }
      format.js
    end
  end

  def show
    @team = Team.find(params[:team_id])
  end

private
  def channel_params
    params.require(:channel).permit(:name, :public, :member_ids)
  end
end
