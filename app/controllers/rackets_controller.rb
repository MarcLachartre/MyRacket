class RacketsController < ApplicationController
  def index
    @rackets = Racket.all
    @brand = params[:brand]

    if @brand.present?
      @rackets = @rackets.where("brand = ?", @brand)
    else
      @rackets
    end
  end

  def show
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

