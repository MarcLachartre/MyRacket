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
    @search_bar_input = params[:form_input]
    #-------------------------------------

    #------------racket-search------------
    racket_search #(Search function pesistancy between sessions, see private methods) this is where the @selected_search hash is created and saved in cookies. This hash has a major importance in terms of persistance between sessions for the racket search filter/function as you can see below.
    #-------------------------------------

    #-----------quick-search-bar----------
    #allows user to type-in brand and/or model of the racket and have a result
    if @selected_search[:model].present?
      all_brands = @all_rackets.distinct.pluck(:brand)
      @models = @selected_search[:model].split.map(&:capitalize)
      model = []
      brand = []
      @models.each{|m|
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

    #------------search-filter------------
    if @selected_search[:brand].present?
      @brand = @selected_search[:brand]
      @rackets = @rackets.where(brand: @brand)
    else
      @rackets
    end

    if @selected_search[:adult].present? || @selected_search[:kid].present?
      @adult = @selected_search[:adult]
      @kid = @selected_search[:kid]
      @rackets = @rackets.where('adult = ? OR kid = ?', @adult, @kid)
    else
      @rackets
    end

    if @selected_search[:string_pattern].present?
      @string_pattern = @selected_search[:string_pattern]
      @rackets = @rackets.where(stringpattern: @string_pattern)
    else
      @rackets
    end

    if @selected_search[:weight].present?
      r = []
      @selected_search[:weight].each {|weight|
        max_weight = weight.to_i + 14
        @rackets.each {|racket|
          if weight.to_i <= racket.weight && racket.weight <= max_weight
            r << racket
          end
        }
      }
      @rackets = r.uniq
    else
      @rackets
    end

    if @selected_search[:headsize].present?
      r = []
      @selected_search[:headsize].each { |headsize_param|
        @rackets.each { |racket|
          headsize_param = headsize_param.split('..').flatten.map(&:to_i)
          @headsize_range = (headsize_param[0]..headsize_param[1])
        if @headsize_range.include?(racket.headsize)
          r << racket
        end
        }
      }
      @rackets = r
    else
      @rackets
    end

    @rackets = @rackets.order(:brand, :model)
    #-------------------------------------
    selected_rackets_to_compare #(Selected rackets for comparision pesistancy between sessions and filtering actions)
    #-------------------------------------

    #-------------------------------------
    if @search_params.present?
      respond_to do |format|
      format.html
      format.json {render json: @rackets}
      #format.html
      #render json: @rackets
    end


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
      #use case: user makes a search, selects a racket to compare(and updates selected_racket cookie with javascript, see cookie.js file), makes another search that doesnt contain the last selected racket and then refreshes the page.
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
    @search_params = {model: @model, brand: @brand, adult: @adult, kid: @kid, string_pattern: @string_pattern, weight: @weight, headsize: @headsize, search_bar_input: @search_bar_input}
    @selected_search = @search_params
    if @search_params != {model: nil, brand: nil, adult: nil, kid: nil, string_pattern: nil, weight: nil, headsize: nil, search_bar_input: nil}
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

#--------------------------------former-work------------------------------------


    # if cookies[:selected_racket].present? && @selected_racket[:racket_id] == nil && @selected_racket[:select_racket_input] == "1"
    #   #use case: user makes a search, selects a racket to compare(and updates selected_racket cookie with javascript, see cookie.js file), makes another search that doesnt contain the last selected racket and then refreshes the page.
      # p 1
      # filtered_racket_ids = Array.new
      # @rackets.each {|racket|
      #   filtered_racket_ids << racket.id.to_s #we retrieve the rackets the user searched in the 2nd search
      # }
      # @selected_racket_json = JSON.parse(cookies[:selected_racket]) #we retrieve the selected-racket cookie and turn it into a hash
      # @selected_racket = @selected_racket_json.transform_keys {|key|
      #   key = key.to_sym
      # }
      # @selected_racket[:racket_id].delete_if {|id| filtered_racket_ids.include?(id) }
      # cookies[:selected_racket] = @selected_racket.to_json



# def selected_rackets_to_compare #1st fully functional solution, needs to be commented, reworked, simplified and refactored.
#   @selected_racket_params = {racket_id: @racket_id_param, select_racket_input: @select_racket_input}
#   @selected_racket = @selected_racket_params

#     #if @selected_racket[:racket_id] != nil && @selected_racket[:select_racket_input] == "1" && cookies[:selected_racket].present? == false
#       #p 1
#       #@selected_racket = @selected_racket_params
#       #cookies[:selected_racket] = @selected_racket_params.to_json

#     #if @selected_racket[:racket_id] != nil && @selected_racket[:select_racket_input] == "1" && cookies[:selected_racket].present?
#       #p 2
#       #filtered_racket_ids = Array.new
#       #@selected_racket_json = JSON.parse(cookies[:selected_racket])
#       #@selected_racket = @selected_racket_json.transform_keys {|key|
#         #key = key.to_sym
#       #}
#       #@selected_racket[:racket_id] << @selected_racket_params[:racket_id]
#       #@rackets.each {|racket|
#       #filtered_racket_ids << racket.id.to_s
#         #}
#       #@selected_racket[:racket_id].delete_if {|id| filtered_racket_ids.include?(id) && @selected_racket_params[:racket_id].include?(id) == false }
#       #@selected_racket[:racket_id] = @selected_racket[:racket_id].flatten.uniq
#       #cookies[:selected_racket] = @selected_racket.to_json

#     if cookies[:selected_racket].present? && @selected_racket[:racket_id] == nil && @selected_racket[:select_racket_input] == "1"
#       p 3
#       filtered_racket_ids = Array.new
#       @rackets.each {|racket|
#         filtered_racket_ids << racket.id.to_s
#       }
#       @selected_racket_json = JSON.parse(cookies[:selected_racket])
#       @selected_racket = @selected_racket_json.transform_keys {|key|
#         key = key.to_sym
#       }
#       @selected_racket[:racket_id].delete_if {|id| filtered_racket_ids.include?(id) }
#       cookies[:selected_racket] = @selected_racket.to_json

#     #elsif @remove_racket_param.present?
#       #p 4
#       #@selected_racket_json = JSON.parse(cookies[:selected_racket])
#       #@selected_racket = @selected_racket_json.transform_keys {|key|
#       #  key = key.to_sym
#       #}

#       #@selected_racket.each_value {|value|
#       #if value.include?(@remove_racket_param)
#       #  value.delete(@remove_racket_param)
#       #end
#       #}
#       #cookies[:selected_racket] = @selected_racket.to_json
#       #@selected_racket_json = JSON.parse(cookies[:selected_racket])
#       #@selected_racket = @selected_racket_json.transform_keys {|key|
#       #  key = key.to_sym
#       #}

#     elsif cookies[:selected_racket].present?
#       p 5
#       @selected_racket_json = JSON.parse(cookies[:selected_racket])
#       @selected_racket = @selected_racket_json.transform_keys {|key|
#         key = key.to_sym
#       }
#     end
#     @rackets_to_display = Racket.all.where(id: @selected_racket[:racket_id])
#   end


  #def selected_rackets
#    @selected_racket_params = {racket_id: @racket_id_param, select_racket_input: @select_racket_input}
#    @selected_racket = @selected_racket_params
#    if @selected_racket_params != {racket_id: nil, select_racket_input: nil} && cookies[:selected_racket_params].present? == false
#      p "1"
#          p @selected_racket_params
#          p @selected_racket_params.has_value?("1")
#        @selected_racket = @selected_racket_params
#        cookies[:selected_racket_params] = @selected_racket.to_json
#
#    elsif @selected_racket_params != {racket_id: nil, select_racket_input: "1"} && cookies[:selected_racket_params].present? && @remove_racket_param.present? == false
#      p "2"
#      p @selected_racket_params
#      p @selected_racket_params.has_value?("1")
#      p @selected_racket_params[:racket_id]
#      @selected_racket_json = JSON.parse(cookies[:selected_racket_params])
#      @selected_racket = @selected_racket_json.transform_keys {|key|
#        key = key.to_sym
#      }
#
#     @selected_racket[:racket_id] << @selected_racket_params[:racket_id]
#      @selected_racket[:racket_id] = @selected_racket[:racket_id].flatten
#     cookies[:selected_racket_params] = @selected_racket.to_json
#    elsif @selected_racket_params == {racket_id: nil, select_racket_input: 1} && cookies[:selected_racket_params].present?
#    p "3"
#    elsif @remove_racket_param.present?
#      p "4"
#      @selected_racket_json = JSON.parse(cookies[:selected_racket_params])
#      @selected_racket = @selected_racket_json.transform_keys {|key|
#        key = key.to_sym
#      }
#
#      @selected_racket.each_value {|value|
#      if value.include?(@remove_racket_param)
#        @remove_racket_param
#        value.delete(@remove_racket_param)
#      end
#      }
#      cookies[:selected_racket_params] = @selected_racket.to_json
#      @selected_racket_json = JSON.parse(cookies[:selected_racket_params])
#      @selected_racket = @selected_racket_json.transform_keys {|key|
#        key = key.to_sym
#      }
#
#    elsif cookies[:selected_racket_params].present? && @selected_racket_params == {racket_id: nil, select_racket_input: nil}
#      p "5"
#      @selected_racket_json = JSON.parse(cookies[:selected_racket_params])
#      @selected_racket = @selected_racket_json.transform_keys {|key|
#        key = key.to_sym
#      }
#    end
#     p "cul"
#     @rackets_to_display = Racket.all.where(id: @selected_racket[:racket_id])
#    cookies[:selected_rackets] = @rackets_to_display.map {|racket| racket.id}
#    p@racket_to_display = @rackets_to_display.map {|racket| racket.id}
#  end

  #def selected_rackets
    #if params[:selected_racket_id] != nil && cookies[:selected_racket_id] != nil
      #p "1"
      #selected_racket_id_params = params[:selected_racket_id]
      #selected_racket_id_params << cookies[:selected_racket_id].split("&")
      #cookies[:selected_racket_id] = selected_racket_id_params.flatten.uniq
      #@selected_racket_id = cookies[:selected_racket_id]
    #elsif params[:selected_racket_id] != nil && cookies[:selected_racket_id] == nil
    #  p "2"
    #  cookies[:selected_racket_id] = params[:selected_racket_id]
    #  @selected_racket_id = cookies[:selected_racket_id]
    #elsif params[:selected_racket_id] == nil && cookies[:selected_racket_id] != nil
    #  p "3"
    #  selected_racket_id_params = []
    #  selected_racket_id_params << cookies[:selected_racket_id].split("&")
    #  cookies[:selected_racket_id] = selected_racket_id_params.flatten.uniq
    #  @selected_racket_id = cookies[:selected_racket_id]
    #else
    #  @selected_racket_id = cookies[:selected_racket_id]
    #end
    #@rackets_to_display = Racket.all.where(id: @selected_racket_id)
  #end

#former code

  #def add_to_comparison
    #@racket_ids_to_display = []

    #if params[:id] != nil && cookies[:id] != nil
      #cookies[:id]  = cookies[:id] + ' ' + params[:id]
      #all_selected_racket_ids = cookies[:id]
      #all_selected_racket_ids_array = all_selected_racket_ids.split.uniq

      #all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        #@racket_ids_to_display << all_selected_racket_id_array.to_i
      #end

    #elsif cookies[:id] == nil && params[:id] == nil
      #cookies[:id] =  params[:id]
      #all_selected_racket_ids = cookies[:id]
      #@racket_ids_to_display << all_selected_racket_ids.to_i

    #elsif params[:id] == nil && cookies[:id] != nil
      #all_selected_racket_ids = cookies[:id]
      #all_selected_racket_ids_array = all_selected_racket_ids.split.uniq

      #all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        #@racket_ids_to_display << all_selected_racket_id_array.to_i
      #end

    #elsif params[:id] != nil && cookies[:id] == nil
      #cookies[:id] = params[:id]
      #all_selected_racket_ids_array = cookies[:id].split.uniq

      #all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        #@racket_ids_to_display << all_selected_racket_id_array.to_i
      #end
    #end
  #end

  #def display_rackets_to_compare
    #if params[:remove].present?
      #a = cookies[:id]
      #@racket_ids_to_display.delete_if { |racket_id_to_display|
      #racket_id_to_display == params[:remove].to_i
      #}
      #cookies[:id] = @racket_ids_to_display.join(' ')
    #end

    #if params[:id].present? || cookies[:id] != nil && @racket_ids_to_display.first != nil && @racket_ids_to_display.first != [0]
      #@first_racket_to_compare = @rackets.find(@racket_ids_to_display.first)
    #end

    #if params[:id].present? && @racket_ids_to_display[1] != nil || cookies[:id] != nil && @racket_ids_to_display[1] != nil
      #@second_racket_to_compare = @rackets.find(@racket_ids_to_display[1])
    #end

    #if params[:id].present? && @racket_ids_to_display[2] != nil || cookies[:id] != nil && @racket_ids_to_display[2] != nil
      #@third_racket_to_compare = @rackets.find(@racket_ids_to_display[2])
    #end
  #end

  #def brands_available_for_search
  #each_racket_brand = []
    #@rackets.each do |racket|
      #each_racket_brand << racket.brand
    #end
    #array_of_brands = each_racket_brand + each_racket_brand
    #@brands_available = array_of_brands.sort.each_slice(2).to_a.flatten.uniq
  #end

    #def racket_comparator
    #if @selected_racket_params == @second_selected_racket_params && @selected_racket_params != 'remove' && @second_selected_racket_params != 'remove' && @selected_racket_params.present? && @second_selected_racket_params.present?
      #@racket_to_compare = Racket.find(params[:id1])

    #elsif @selected_racket_params == 'remove' && @second_selected_racket_params == 'remove'

    #elsif @second_selected_racket_params == 'remove'
      #@racket_to_compare = Racket.find(params[:id1])

    #elsif @selected_racket_params == 'remove'
      #@second_racket_to_compare = Racket.find(params[:id2])

    #elsif @selected_racket_params.present? && @second_selected_racket_params.present?
      #@racket_to_compare = Racket.find(params[:id1])
      #@second_racket_to_compare = Racket.find(params[:id2])
    #end
  #end

#
