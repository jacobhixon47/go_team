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
    @team = Team.find(params[:team_id])
    @channel = @team.channels.new(channel_params)
    @member_ids = params[:members]
    @channel.member_ids = @member_ids
    if @channel.save
      respond_to do |format|
        format.html { redirect_to team_path(@team) }
        format.js
      end
    else
      flash[:alert] = "There was an error creating your channel. Please try again."
    end
  end

  def show
    @team = Team.find(params[:team_id])
    @channel = @team.channels.find(params[:id])
    @messages = @channel.messages.all
    @message = @channel.message.new
    respond_to do |format|
      format.html { redirect_to team_path(@team) }
      format.js
    end
  end

private
  def channel_params
    params.require(:channel).permit(:name, :is_public, :member_ids)
  end
end
