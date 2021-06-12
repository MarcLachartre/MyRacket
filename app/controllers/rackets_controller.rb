class RacketsController < ApplicationController
  before_action :prevent_caching
  respond_to :json, only: [:index, :show]

  def index
    @rackets = Racket.all
    @search_params = {quick_search: params[:quick_search], brand: params[:brand], string_pattern: params[:string_pattern], weight: params[:weight], balance: params[:balance], headsize: params[:headsize], search_bar_input: params[:search_bar_input]}.delete_if { |key, value| value == nil }
    params[:page_batch] == nil ? @current_page = [0,40] : @current_page = params[:page_batch].to_s.tr('[]','').split(",").map(&:to_i)
    quick_search_param = @search_params.reject{|key, value| key != :quick_search}
    checkbox_params = @search_params.reject{|key, value| key == :quick_search || key == :search_bar_input}
    
    racket_search # Search function pesistancy using cookies between sessions

    if quick_search_param.empty? == false
      @rackets = @rackets.quick_search_filter(quick_search_param[:quick_search])
    elsif checkbox_params.empty? == false
      @rackets = @rackets.checkbox_filter(checkbox_params)
    end

    @pages = (@rackets.count/40.0).ceil
    @rackets = @rackets.ordered_amount_to_display(@current_page[1].to_i, @current_page[0].to_i)
    
    selected_rackets_to_compare #(Selected rackets for comparision pesistancy between sessions and filtering actions)

    respond_to do |format|
      format.html
      format.json {render json: {rackets: @rackets, pages: @pages, current_page: @current_page}}
    end
  end

  def show
    @racketreview = Racketreview.new
    @user = current_user
    @racket = Racket.find(params[:id])
    @reviews = @racket.racketreviews.order(created_at: :desc)
    
    respond_to do |format|
      format.html
      format.json
      return
    end
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

private
  def racket_params
    params.require(:racket).permit(:brand, :model, :headsize, :weight, :length, :price)
  end

  def selected_rackets_to_compare
  selected_racket_params = {racket_id: params[:selected_racket_id], select_racket_input: params[:select_racket_input]}
  @selected_racket = selected_racket_params
    if cookies[:selected_racket].present? && @selected_racket[:racket_id] == nil && @selected_racket[:select_racket_input] == "1"
      #user makes a search, selects a racket to compare(and updates selected_racket cookie with javascript, see cookie.js file), makes another search that doesnt contain the last selected racket and then refreshes the page.
      filtered_racket_ids = Array.new
      @rackets.each {|racket|
        filtered_racket_ids << racket.id.to_s #we retrieve the rackets the user searched in the 2nd search
      }
      @selected_racket_json = JSON.parse(cookies[:selected_racket]) #we retrieve the selected-racket cookie and turn it into a hash
      @selected_racket = @selected_racket_json.transform_keys {|key|
        key = key.to_sym
      }
      @selected_racket[:racket_id].delete_if {|id| filtered_racket_ids.include?(id) }

      cookies[:selected_racket] = @selected_racket.to_json

    elsif cookies[:selected_racket].present?
      #on page load, if cookies are present with the racket ids compared in the past, make sure that the rackets are loaded in the comparator
      @selected_racket_json = JSON.parse(cookies[:selected_racket])
      @selected_racket = @selected_racket_json.transform_keys {|key|
        key = key.to_sym
      }
      JSON.parse(cookies[:selected_racket])
    end
    @rackets_to_display = Racket.all.where(id: @selected_racket[:racket_id])
  end

  def racket_search
    if @search_params != {}
      cookies[:search_params] = {value: @search_params.to_json, expires: Time.utc(2091, 06, 04, 7, 45)} 
    elsif cookies[:search_params].present?
      @selected_search_json = JSON.parse(cookies[:search_params])
      @search_params = @selected_search_json.transform_keys {|key|
        key.to_sym
      }
    end
  end

  def prevent_caching
    response.headers["Cache-Control"] = "no-cache, no-store"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end
end
