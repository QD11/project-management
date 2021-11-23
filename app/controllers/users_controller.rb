class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def index
        render json: User.all
    end

    def show
        render json: @current_user
    end  

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
