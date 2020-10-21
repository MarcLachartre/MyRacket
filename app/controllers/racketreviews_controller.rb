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
      format.json {render json: {racketreview: @racketreview, current_user: current_user}}
    end
    # redirect_to("/rackets/#{params[:racket_id]}")
  end

  def edit
    @racketreview = Racketreview.find(params[:id])
    if user_signed_in? == true && current_user.id == @racketreview.user_id
      respond_to do |format|
        format.html
        format.json {render json: {racketreview: @racketreview}}
      end
    else
      redirect_to "/rackets/#{@racketreview.racket_id}"
    end
  end

  def update
    @racketreview = Racketreview.find(params[:racketreview_id])
    if user_signed_in? == true && current_user.id == @racketreview.user_id
      @racketreview.update(racketreview_params)
      respond_to do |format|
        format.html
        format.json {render json: {racketreview: @racketreview}}
      end
    else
      redirect_to "/rackets/#{@racketreview.racket_id}"
    end
  end

  def destroy
    @racketreview = Racketreview.find(params[:id])

    if user_signed_in? == true && current_user.id == @racketreview.user_id
      @racketreview.destroy
      respond_to do |format|
        format.html
        format.json {render json: {racketreview: @racketreview}}
      end
    else
      redirect_to "/rackets/#{@racketreview.racket_id}"
    end
  end

private
  def racketreview_params
    params.require(:racketreview).permit(:comment)
  end
end
