class UsersController < ApplicationController
  def index
    user
    if user_is_admin? # user_signed_in? && @user.admin == 1
      @users = User.all
    end
  end

  def show
    user
    if user_is_admin?
      @user = User.find(params[:id])
    else
      redirect_to rackets_path
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
  #def user_params
  #  params.require(:user).permit(:id)
 # end
end

