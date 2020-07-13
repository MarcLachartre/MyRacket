class RacketsController < ApplicationController

  respond_to :json, only: [:index]
  def index
    @rackets = Racket.all
    @all_rackets = Racket.all
    #--------compare racket_params--------
    @racket_id_param = params[:selected_racket_id]
    @remove_racket_param = params[:remove]
    @select_racket_input = params[:select_racket_input]
    #-------------------------------------

    #------------search_params------------
    @model = params[:model]
    @brand = params[:brand]
    @adult = params[:adult]
    @kid = params[:kid]
    @string_pattern = params[:string_pattern]
    @weight = params[:weight]
    @headsize = params[:headsize]
    @balance = params[:balance]
    @search_bar_input = params[:form_input]
    #-------------------------------------

    #------------pagination_param---------
    @page = params[:page] || [5,5]
    #-------------------------------------
    p @page
    #------------racket-search------------
    racket_search # (Search function pesistancy between sessions, see private methods) this is where the @selected_search hash is created and saved in cookies. This hash has a major importance in terms of persistance between sessions for the racket search filter/function as you can see below.
    #-------------------------------------

    #-----------quick-search-bar----------
    if @selected_search[:model].present?
      all_brands = @all_rackets.distinct.pluck(:brand)
      @models = @selected_search[:model].split.map(&:capitalize)
      model = []
      brand = []
      @models.each { |m|
        if all_brands.include?(m)
          brand << m
        else
          model << m
        end
      }
      @rackets = @rackets.where('model LIKE ? AND brand LIKE ?','%' + model.join(' ') + '%', '%' + brand.join(' ') + '%')
    else
      @rackets
    end
    #-------------------------------------

    #------------search-filters-----------
    searched_filters = @selected_search.delete_if { |key, value| value == nil}

    query_string = String.new
    @selected_search.each {|key, value|
      if value != nil && value != "1"
        query_string = query_string + "#{key} IN (:#{key}) AND "
      end
    }
    query_string = query_string.delete_suffix(' AND ')
    p @page.class
    if searched_filters.empty? == false
      @rackets = @rackets.where(query_string, searched_filters).limit(@page[1].to_i).offset(@page[0].to_i)
      @brand = @selected_search[:brand]
    else
      @rackets.offset(@page[0]).limit(@page[1])
    end
    p @rackets
    @rackets = @rackets.order(:brand, :model)
    #-------------------------------------
    selected_rackets_to_compare #(Selected rackets for comparision pesistancy between sessions and filtering actions)
    #-------------------------------------

    #-------------------------------------
    respond_to do |format|
      format.html
      format.json {render json: @rackets}
    end

    #-------------------------------------
  end

  def show
    @racketreview = Racketreview.new
    @user = current_user
    @racket = Racket.find(params[:id])

    respond_to do |format|
      format.html
      format.js
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
      p "selected_rackets_to_compare_1"
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
      p "selected_rackets_to_compare_2"
      @selected_racket_json = JSON.parse(cookies[:selected_racket])
      @selected_racket = @selected_racket_json.transform_keys {|key|
        key = key.to_sym
      }
      JSON.parse(cookies[:selected_racket])
    end
    @rackets_to_display = Racket.all.where(id: @selected_racket[:racket_id])
  end

  def racket_search
    @search_params = {model: @model, brand: @brand, adult: @adult, kid: @kid, string_pattern: @string_pattern, weight: @weight, balance: @balance, headsize: @headsize, search_bar_input: @search_bar_input}
    @selected_search = @search_params
    if @search_params != {model: nil, brand: nil, adult: nil, kid: nil, string_pattern: nil, weight: nil, balance: nil, headsize: nil, search_bar_input: nil}
      p "racket_search_1"
      cookies[:search_params] = @search_params.to_json
      @selected_search = @search_params

    elsif cookies[:search_params].present?
      p "racket_search_2"
      @selected_search_json = JSON.parse(cookies[:search_params])
      @selected_search = @selected_search_json.transform_keys {|key|
        key = key.to_sym
      }
    end
  end
end


    # if @selected_search[:brand].present?
    #   @brand = @selected_search[:brand]
    #   @string_pattern = @selected_search[:string_pattern]
    #   @rackets = @rackets.where('brand IN (:brand) AND stringpattern IN (:stringpattern)', {brand: @brand, stringpattern: @string_pattern})
    # else
    #   @rackets
    # end

    # if @selected_search[:brand].present?
    #   @brand = @selected_search[:brand]
    #   @rackets = @rackets.where(brand: @brand)
    # else
    #   @rackets
    # end

    # if @selected_search[:string_pattern].present?
    #   @string_pattern = @selected_search[:string_pattern]
    #   @rackets = @rackets.where(stringpattern: @string_pattern)
    # else
    #   @rackets
    # end

    # if @selected_search[:weight].present?
    #   @weight = @selected_search[:weight]
    #   weight_ranges = @selected_search[:weight].map{|value| Range.new(Integer(value), Integer(value) + 14) }
    #   @rackets = @rackets.where(weight: weight_ranges)
    # else
    #   @rackets
    # end

    # if @selected_search[:headsize].present?
    #   @headsize = @selected_search[:headsize]
    #   headsize_ranges = @selected_search[:headsize].map{|headsize_range|
    #     headsize_range.split("..")[0].to_i..headsize_range.split("..")[1].to_i
    #   }
    #   @rackets = @rackets.where(headsize: headsize_ranges)
    # else
    #   @rackets
    # end

    # if @selected_search[:balance].present?
    #   @balance = @selected_search[:balance]
    #   balance_ranges = @selected_search[:balance].map{|balance_range|
    #     balance_range.split("..")[0].to_i..balance_range.split("..")[1].to_i
    #   }
    #   @rackets = @rackets.where(balance: balance_ranges)
    # else
    #   @rackets
    # end
