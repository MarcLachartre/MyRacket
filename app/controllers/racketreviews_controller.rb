class RacketreviewsController < ApplicationController
  respond_to :json, only: [:destroy, :new, :create]
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
    respond_to do |format|
      format.html
      format.json {render json: {racketreview: @racketreview}}
    end
    # redirect_to("/rackets/#{params[:racket_id]}")
  end

  def edit
    @racketreview = Racketreview.find(params[:id])
  end

  def update
    @racketreview = Racketreview.find(params[:id])
    @racketreview.update(racketreview_params)
    @racketreview.save
    # redirect_to("/rackets/#{@racketreview.racket_id}")
  end

  def destroy
    p params[request_forgery_protection_token]
    @racketreview = Racketreview.find(params[:id])
    @racketreview.destroy
    respond_to do |format|
      format.html
      format.json {render json: {racketreview: @racketreview}}
    end
  end

private

  def racketreview_params
    params.require(:racketreview).permit(:comment)
  end
end
