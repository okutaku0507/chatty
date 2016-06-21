Rails.application.routes.draw do
  root 'top#index'
  get 'set_remote_ip', to: 'top#set_remote_ip'
  resources :rooms do
    post :add_new_chat, on: :member
  end
  mount ActionCable.server => '/cable'
end
