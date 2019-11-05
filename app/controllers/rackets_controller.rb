class RacketsController < ApplicationController
#before_action :add_to_comparison
  def index

    @rackets = Racket.all
    @brand = params[:brand]
    @racket_id_param = params[:id]
    @delete_racket_id_param = params[:remove]

#cookies.delete(:id)

  add_to_comparison

  if params[:remove].present?
    a = cookies[:id]
    @racket_ids_to_display.delete_if { |racket_id_to_display|
    racket_id_to_display == params[:remove].to_i
    }
    cookies[:id] = @racket_ids_to_display.join(' ')
    end

  if params[:id].present? || cookies[:id] != nil && @racket_ids_to_display.first != nil && @racket_ids_to_display.first != [0]
    @first_racket_to_compare = @rackets.find(@racket_ids_to_display.first)
  end

  if params[:id].present? && @racket_ids_to_display[1] != nil || cookies[:id] != nil && @racket_ids_to_display[1] != nil
    @second_racket_to_compare = @rackets.find(@racket_ids_to_display[1])
  end

  if params[:id].present? && @racket_ids_to_display[2] != nil || cookies[:id] != nil && @racket_ids_to_display[2] != nil
    @third_racket_to_compare = @rackets.find(@racket_ids_to_display[2])
  end


    each_racket_brand = []
    @rackets.each do |racket|
      each_racket_brand << racket.brand
    end
    array_of_brands = each_racket_brand + each_racket_brand
    @brands_available = array_of_brands.sort.each_slice(2).uniq.to_a

    if @brand.present?
      @rackets = @rackets.where('brand = ?', @brand)
    else
      @rackets
    end

    respond_to do |format|
      format.html
      format.js
      return
    end
  end

  def show
    @racketreview = Racketreview.new
    @user = current_user
    @racket = Racket.find(params[:id])
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

  def add_to_comparison
    @racket_ids_to_display = []

    if params[:id] != nil && cookies[:id] != nil
      cookies[:id]  = cookies[:id] + ' ' + params[:id]
      all_selected_racket_ids = cookies[:id]
      all_selected_racket_ids_array = all_selected_racket_ids.split.uniq

      all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        @racket_ids_to_display << all_selected_racket_id_array.to_i
      end

    elsif cookies[:id] == nil && params[:id] == nil

      cookies[:id] =  params[:id]
      all_selected_racket_ids = cookies[:id]
      @racket_ids_to_display << all_selected_racket_ids.to_i

    elsif params[:id] == nil && cookies[:id] != nil

      all_selected_racket_ids = cookies[:id]
      all_selected_racket_ids_array = all_selected_racket_ids.split.uniq

      all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        @racket_ids_to_display << all_selected_racket_id_array.to_i
      end

    elsif params[:id] != nil && cookies[:id] == nil

      cookies[:id] = params[:id]

      all_selected_racket_ids_array = cookies[:id].split.uniq

      all_selected_racket_ids_array.each do |all_selected_racket_id_array|
        @racket_ids_to_display << all_selected_racket_id_array.to_i

      end
    end
  end
end
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

