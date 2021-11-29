Rails.application.routes.draw do
  resources :task_users
  resources :tasks
  resources :sections
  resources :projects
  resources :team_users
  resources :teams
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  # get '/org', to: 'organizations#show'

  # post '/org_login', to: 'sessions#org_create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  patch '/:task_id/status_update', to: 'tasks#status_update'

  get '/:user_id/teams/', to: "teams#teams_specific_to_user"
  get '/:team_id/projects', to: "projects#projects_specific_to_team"
  # get '/:team_id/:project_name/

  Rails.application.routes.draw do
    mount ActionCable.server => '/cable'
  end
end