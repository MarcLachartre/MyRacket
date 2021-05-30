# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  respond_to :json, only: [:update, :destroy]
  # GET /resource/sign_up
  def new
    # super
    build_resource
    yield resource if block_given?
    # respond_with 
  end

  # POST /resource
  def create
    # super
    build_resource(sign_up_params)
    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        p 2
        set_flash_message! :notice, :signed_up
        sign_up(resource_name, resource)
        respond_with resource, location: after_sign_up_path_for(resource)
      else
        p 3
        expire_data_after_sign_in!
        after_inactive_sign_up_path_for(resource)
        # respond_with resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      p 1
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource do |format|
        format.json {render json: {resource: resource}}
      end
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)
    
    resource_updated = update_resource(resource, account_update_params)
    yield resource if block_given?
    if resource_updated
      # set_flash_message_for_update(resource, prev_unconfirmed_email)
      bypass_sign_in resource, scope: resource_name if sign_in_after_change_password?
      respond_with resource do |format|
        format.json {render json: {resource: resource}}
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource do |format|
        format.json {render json: {resource: resource, errors: resource.errors}}
      end
    end
  end

  # DELETE /resource
  def destroy
    resource.destroy_with_password(params[:_json])
    respond_with resource do |format|
      format.json {render json: {resource: resource, errors: resource.errors}}
    end
    # Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    # set_flash_message! :notice, :destroyed
    # yield resource if block_given?    
  end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:name, :lastname, :username])
  end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  def after_inactive_sign_up_path_for(resource)
    # super(resource)
    redirect_to "/users/sign_in"
    set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
  end
end
