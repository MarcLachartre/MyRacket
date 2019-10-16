class RacketsController < ApplicationController
  def index

    @rackets = Racket.all
    @brand = params[:brand]
    @selected_racket_params = params[:id1]
    @second_selected_racket_params = params[:id2]




    each_racket_brand = []
    @rackets.each do |racket|
      each_racket_brand << racket.brand
    end
    array_of_brands = each_racket_brand + each_racket_brand
    @brands_available = array_of_brands.sort.each_slice(2).uniq.to_a



    if @selected_racket_params == @second_selected_racket_params && @selected_racket_params != "remove" && @second_selected_racket_params != "remove" && @selected_racket_params.present? && @second_selected_racket_params.present?
      @racket_to_compare = Racket.find(params[:id1])

    elsif @selected_racket_params == "remove" && @second_selected_racket_params == "remove"

    elsif @second_selected_racket_params == "remove"
      @racket_to_compare = Racket.find(params[:id1])

    elsif @selected_racket_params == "remove"
      @second_racket_to_compare = Racket.find(params[:id2])

    elsif @selected_racket_params.present? && @second_selected_racket_params.present?
      @racket_to_compare = Racket.find(params[:id1])
      @second_racket_to_compare = Racket.find(params[:id2])

    else
      render "rackets/index"
    end



    if @brand.present?
      @rackets = @rackets.where("brand = ?", @brand)
    else
      @rackets
    end
  end

  def show
    @racketreview = Racketreview.new
    @user = current_user
    @racket = Racket.find(params[:id])
  end

  def new
    @user = current_user
      if user_signed_in? && @user.admin == 1
        @racket = Racket.new
      end
  end

  def create
    @user = current_user
    if user_signed_in? && @user.admin == 1
    @racket = Racket.new(racket_params)
    @racket.save
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end

private


def racket_params
  params.require(:racket).permit(:brand, :model, :headsize, :weight, :length, :price)
end

def racket_to_compare
end
