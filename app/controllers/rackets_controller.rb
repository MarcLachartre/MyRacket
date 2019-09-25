class RacketsController < ApplicationController
  def index

    @rackets = Racket.all
    @brand = params[:brand]

    each_racket_brand = []

    @rackets.each do |racket|
      each_racket_brand << racket.brand
    end
    array_of_brands = each_racket_brand + each_racket_brand
    @brands_available = array_of_brands.sort.each_slice(2).uniq.to_a

    if @brand.present?
      @rackets = @rackets.where("brand = ?", @brand)
    else
      @rackets
    end
  end

  def show
    @racketreview = Racketreview.new
    @racket = Racket.find(params[:id])
  end

  def new
  end

  def create
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
  params.require(:racket).permit(:brand)
end

def racketreview_params
  params.require(:racketreview).permit(:comment, :racket_id)
end
