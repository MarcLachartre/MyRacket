require 'test_helper'

class RacketsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rackets_index_url
    assert_response :success
  end

  test "should get show" do
    get rackets_show_url
    assert_response :success
  end

  test "should get new" do
    get rackets_new_url
    assert_response :success
  end

  test "should get create" do
    get rackets_create_url
    assert_response :success
  end

  test "should get edit" do
    get rackets_edit_url
    assert_response :success
  end

  test "should get update" do
    get rackets_update_url
    assert_response :success
  end

  test "should get destroy" do
    get rackets_destroy_url
    assert_response :success
  end

end
