class RoomsController < ApplicationController
  before_action :fetch_ivars, except: [ :index, :new, :create ]

  def index
    @rooms = Room.order('id desc')
  end

  def show
    @chats = @room.chats.order('id asc')
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new
    @room.assign_attributes(room_params)
    if @room.save
      render json: { result: 'OK', token: @room.token }
    else
      render json: { result: 'Error', errors: @room.errors.to_hash(true)  }
    end
  end

  def add_new_chat
    return unless @room.id
    remote_ip = request.env["HTTP_X_FORWARDED_FOR"] || request.remote_ip
    @chat = @room.chats.build
    @chat.assign_attributes(chat_params)
    @chat.identified = remote_ip
    if @chat.save
      render json: { result: 'OK' }
    else
      render json: { result: 'Error', errors: @chat.error_messages }
    end
  end

  private
  def fetch_ivars
    @room = Room.find_by(token: params[:id]) || Room.new
  end

  def room_params
    params.require(:room).permit(
      :name
    )
  end

  def chat_params
    params.require(:chat).permit(
      :body
    )
  end
end
