NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy], defaults: {format: "json"} do
      resources :entries, only: [:index]
    end
    post "feeds/:id/favorite", to: "feeds#favorite", defaults: {format: "json"}
  end

  resources :users
  resource :session

  root to: "static_pages#index"
end
