class UsersController < ApplicationController
  respond_to :json, only: [:show]
  def index
    user
    if user_is_admin? # user_signed_in? && @user.admin == 1
      @users = User.all
    end
  end

  def show
    user
    @devise_mapping = Devise.mappings[:user]
    @users = User.all
    if user_signed_in? && params[:id].to_i == current_user.id || user_is_admin? == true
      @user = User.find(params[:id])
      @user_reviews = @user.racketreviews.map{|r| {id: r.id, comment: r.comment, created_at: r.created_at, racket_brand: r.racket.brand, racket_model: r.racket.model, racket_id: r.racket_id}}
      else
      redirect_to rackets_path
    end

    respond_to do |format|
      format.html
      format.json {render json: {user: @user, user_reviews: @user.racketreviews, users: @users, devise_mapping: @devise_mapping}}
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path
  end

  def dashboard # The goal here is to let the user access all the reviews he left, and on which racket.
    user
    if user_signed_in?
      @userracketreviews = Racketreview.select { |racketreviews| racketreviews.user_id == @user.id }
    else
      redirect_to rackets_path
    end
  end

  private

  def user
    @user = current_user
  end

  def user_is_admin?
    user_signed_in? && @user.admin == 1
  end
end

