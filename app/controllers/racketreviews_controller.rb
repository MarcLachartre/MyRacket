class RacketreviewsController < ApplicationController
  def index
    @racketreviews = Racketreview.all
  end

  def show
  end

  def new
    @racketreview = Racketreview.new
  end

  def create
    @racketreview = Racketreview.new(racketreview_params)
    @racketreview.user_id = current_user.id
    @racketreview.racket_id = params[:racket_id]
    @racketreview.save
    redirect_to("/rackets/#{params[:racket_id]}")
  end

  def edit
    @racketreview = Racketreview.find(params[:id])
  end

  def update
    @racketreview = Racketreview.find(params[:id])
    @racketreview.update(racketreview_params)
    @racketreview.save
    redirect_to("/rackets/#{@racketreview.racket_id}")
  end

  def destroy
    @racketreview = Racketreview.find(params[:id])
    @racketreview.destroy
    redirect_to("/rackets/#{@racketreview.racket_id}")
  end


private

  def racketreview_params
    params.require(:racketreview).permit(:comment)
  end
end
