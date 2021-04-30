require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @test_user = users(:userOne)
    # p @test_user.valid?
    # p @test_user.errors.full_messages
  end

  test "data should be correct" do
    assert @test_user.valid?
  end

  test "should not save user without name" do
    @test_user[:name] = nil
    assert_not @test_user.valid?, "user can be saved without a name"
  end

  test "should not save user with name length > 50" do
    @test_user[:name] = "federerfedererfedererfedererfedererfedererfedererfederer"
    assert_not @test_user.valid?, "user can be saved without a name"
  end

  test "should not save user without lastname" do
    @test_user[:lastname] = nil  
    assert_not @test_user.valid?, "user can be saved without a lastname"
  end

  test "should not save user with lastname length > 50" do
    @test_user[:lastname] = "federerfedererfedererfedererfedererfedererfedererfederer"  
    assert_not @test_user.valid?, "user can be saved without a lastname"
  end

  test "should not save user without username" do
    @test_user[:username] = nil
    assert_not @test_user.valid?, "user can be saved without a username"
  end

  test "should not save user with username length > 25" do
    @test_user[:username] = "federerfedererfedererfederer"
    assert_not @test_user.valid?, "user can be saved without a username"
  end

  test "should not save user without email" do
    @test_user[:email] = nil
    assert_not @test_user.valid?, "user can be saved without a email"
  end

  test "should not save user without admin" do
    @test_user[:admin] = nil
    assert_not @test_user.valid?, "user can be saved without a admin"
  end

  test "should not save user if admin is not included in [0,1,2]" do
    @test_user[:admin] = 4
    assert_not @test_user.valid?, "user can be saved with admin not included in [0,1,2]"
  end
end
