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
  end

  def edit
  end

  def update
  end

  def destroy
  end

private

def racketreview_params
  params.require(:racketreview).permit(:comment)
end

end
