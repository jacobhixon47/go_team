class MessagesController < ApplicationController
  def new
    @channel = Channel.find(params[:channel_id])
    @message = @channel.messages.new
    respond_to do |format|
      format.html { redirect_to team_path(@team) }
      format.js
    end
  end
  def create
    @channel = Channel.find(params[:channel_id])
    @message = @channel.messages.new(message_params)
    @message.user = current_user
    if @message.save
      respond_to do |format|
        format.html { redirect_to team_path(@team) }
        format.js
      end
    else
      flash[:alert] = "There was a problem sending your message. Please try again."
      render 'channels#show'
    end
  end

private
  def message_params
    params.require(:message).permit(:channel_id, :content)
  end
end
