require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Chatty
  class Application < Rails::Application
    config.time_zone = 'Tokyo'
    config.active_record.raise_in_transactional_callbacks = true
    config.i18n.default_locale = :ja
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]
    config.i18n.available_locales = [ :ja ]

    config.generators do |g|
      g.helper false
      g.assets false
      g.skip_routes true
    end
  end
end
