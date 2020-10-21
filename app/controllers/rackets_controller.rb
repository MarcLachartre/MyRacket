class RacketsController < ApplicationController
  respond_to :json, only: [:index, :show]

  def index
    @rackets = Racket.all
    @all_rackets = Racket.all
    #--------compare racket_params--------
    @racket_id_param = params[:selected_racket_id]
    @remove_racket_param = params[:remove]
    @select_racket_input = params[:select_racket_input]
    #-------------------------------------

    #------------search_params------------
    @search_params = {model: params[:model], brand: params[:brand], string_pattern: params[:string_pattern], weight: params[:weight], balance: params[:balance], headsize: params[:headsize], search_bar_input: params[:search_bar_input]}
    #-------------------------------------

    #------------pagination_param---------
    @current_page = params[:page] || "[0,40]"
    @current_page = @current_page.to_s.tr('[]','').split(",").map(&:to_i)
    @next_page = [@current_page[0]+40,40]

    @previous_page = [@current_page[0]-40,40]
    #-------------------------------------

    #------------racket-search------------
    racket_search # (Search function pesistancy between sessions)
    #-------------------------------------

    #-----------quick-search-bar----------
    if @search_params[:model] != nil
      all_brands = @all_rackets.distinct.pluck(:brand)
      @models = @search_params[:model].split.map(&:capitalize)
      model = []
      brand = []
      @models.each { |m|
        if all_brands.include?(m)
          brand << m
        else
          model << m
        end
      }
      @rackets = @rackets.brand_or_model(brand, model).offset(@current_page[0]).limit(@current_page[1])
    else
      @rackets.offset(@current_page[0]).limit(@current_page[1]).order(:brand, :model)
    end
    #-------------------------------------

    #------------search-filters-----------
    @search_params = @search_params.delete_if { |key, value| value == nil || key == :search_bar_input || key == :model} #removes params which values are nil

    @search_params.each {|key, parameters|
      if key != :search_bar_input && (key == :weight || key == :balance || key == :headsize)
        @search_params[key] = parameters.map{|value|
          value = value.split("..")[0].to_i..value.split("..")[1].to_i
        }
      end
    }

    if @search_params.empty? == false
      rackets_count = @rackets.where(@search_params).count
      @rackets = @rackets.where(@search_params).limit(@current_page[1].to_i).offset(@current_page[0].to_i).order(:brand, :model, :id)
    else
      rackets_count = @rackets.count
      @rackets.limit(@current_page[1]).offset(@current_page[0]).order(:brand, :model, :id)
    end

    @pages = (rackets_count/40.0).ceil

    @rackets = @rackets.limit(@current_page[1]).offset(@current_page[0]).order(:brand, :model, :id)

    #-------------------------------------
    selected_rackets_to_compare #(Selected rackets for comparision pesistancy between sessions and filtering actions)
    #-------------------------------------

    #-------------------------------------
    respond_to do |format|
      format.html
      format.json {render json: {rackets: @rackets, pages: @pages, current_page: @current_page}}
    end
    #-------------------------------------
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

  def edit
  end

  def update
  end

  def destroy
  end

private
  def racket_params
    params.require(:racket).permit(:brand, :model, :headsize, :weight, :length, :price)
  end

  def selected_rackets_to_compare
  @selected_racket_params = {racket_id: @racket_id_param, select_racket_input: @select_racket_input}
  @selected_racket = @selected_racket_params
      if cookies[:selected_racket].present? && @selected_racket[:racket_id] == nil && @selected_racket[:select_racket_input] == "1"
      #user makes a search, selects a racket to compare(and updates selected_racket cookie with javascript, see cookie.js file), makes another search that doesnt contain the last selected racket and then refreshes the page.
       # p "selected_rackets_to_compare_1"
       # p cookies[:selected_racket]
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
       # p "selected_rackets_to_compare_2"
       # p cookies[:selected_racket]
      @selected_racket_json = JSON.parse(cookies[:selected_racket])
      @selected_racket = @selected_racket_json.transform_keys {|key|
        key = key.to_sym
      }
      JSON.parse(cookies[:selected_racket])
    end
    @rackets_to_display = Racket.all.where(id: @selected_racket[:racket_id])
  end

  def racket_search
    if @search_params != {model: nil, brand: nil, string_pattern: nil, weight: nil, balance: nil, headsize: nil, search_bar_input: nil}
        p "racket_search_1"
      cookies[:search_params] = @search_params.to_json
    elsif cookies[:search_params].present?
        p "racket_search_2"
      @selected_search_json = JSON.parse(cookies[:search_params])
      @search_params = @selected_search_json.transform_keys {|key|
        key.to_sym
      }
    end
  end
end
