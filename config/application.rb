require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module StockReportRedux
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.autoload_paths << "#{Rails.root}/core-app/boundaries"
    config.eager_load_paths << "#{Rails.root}/core-app/boundaries"
    config.autoload_paths << "#{Rails.root}/core-app/interactors"
    config.eager_load_paths << "#{Rails.root}/core-app/interactors"
    config.autoload_paths << "#{Rails.root}/core-app/request-models"
    config.eager_load_paths << "#{Rails.root}/core-app/request-models"
    config.autoload_paths << "#{Rails.root}/core-app/response-models"
    config.eager_load_paths << "#{Rails.root}/core-app/response-models"
  end
end
