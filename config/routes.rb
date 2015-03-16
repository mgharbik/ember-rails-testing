Rails.application.routes.draw do
  root to: 'assets#index'
  namespace :api do
    namespace :v1 do
      resources :contacts
    end
  end

end
