class TopController < ApplicationController
  def set_remote_ip
    remote_ip = request.env["HTTP_X_FORWARDED_FOR"] || request.remote_ip
    render :json => { text: 'OK', remote_ip: remote_ip }
  end
end
