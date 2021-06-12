require 'test_helper'
require 'rainbow'
require 'minitest'
require 'minitest/reporters'

class RacketTest < ActiveSupport::TestCase
  test "brand or model search" do
    assert Racket.brand_or_model({brands: ["Wilson"], models: []}).size == 3, 'expected to be 3'
    assert Racket.brand_or_model({brands: [], models: ["Cool"]}).size == 2, 'expected to be 2'
    assert Racket.brand_or_model({brands: ["Wilson"], models: ["Cool"]}).size == 2, 'expected to be 3'
    assert Racket.brand_or_model({brands: ["Wilson"], models: ["Error"]}).size == 0, 'expected to be 0'
    assert Racket.brand_or_model({brands: ["Error"], models: ["Cool"]}).size == 0, 'expected to be 0'
    assert Racket.brand_or_model({brands: ["Error"], models: ["Error"]}).size == 0, 'expected to be 0'
    assert Racket.brand_or_model({brands: ["Wilson"], models: ["Cool", "360"]}).size == 1, 'expected to be 1'
    assert Racket.brand_or_model({brands: [], models: ["360"]}).size == 1, 'expected to be 1'
    assert Racket.brand_or_model({brands: ["Wilson"], models:["Cool", "360"]}).size == 1, 'expected to be 1'
    assert Racket.brand_or_model({brands: ["Babolat", "Wilson"], models:["Cool"]}).size == 0, 'expected to be 0'
    assert Racket.brand_or_model({brands: ["Babolat", "Wilson"], models:[]}).size == 0, 'expected to be 0'
  end

  test "all unique brands" do
    assert Racket.all.all_unique_brands().size == 2, "expected to be 2"
  end

  test "should not save racket without brand" do
    rackets(:racketOne)[:brand] = "" 
    assert_not rackets(:racketOne).valid?, 'racket can be saved without brand'
  end

  test "should not save racket without model" do 
    rackets(:racketOne)[:model] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without model'
  end

  test "should not save racket without headsize" do
    rackets(:racketOne)[:headsize] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without headsize'
  end

  test "should not save racket without length" do
    rackets(:racketOne)[:length] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without length'
  end

  test "should not save racket without weight" do
    rackets(:racketOne)[:weight] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without weight'
  end

  test "should not save the racket without balance" do
    rackets(:racketOne)[:balance] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without balance'     
  end

  # test "should not save the racket without stiffness" do
  #   rackets(:racketOne)[:stiffness] = ""
  #   assert_not rackets(:racketOne).valid?, 'racket can be saved without stiffness'     
  # end

  # test "should not save the racket without swingweight" do
  #   rackets(:racketOne)[:swingweight] = ""
  #   assert_not rackets(:racketOne).valid?, 'racket can be saved without swingweight'
  # end

  test "should not save the racket without adult" do
    rackets(:racketOne)[:adult] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without adult' 
  end

  test "should not save the racket without kid" do
    rackets(:racketOne)[:kid] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without kid'
  end

  test "should not save the racket without description" do
    rackets(:racketOne)[:description] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without description'
    
  end

  test "should not save the racket without play_type" do
    rackets(:racketOne)[:play_type] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without play_type'
  end

  test "should not save racket without players or with length > 35 characters " do 
    rackets(:racketOne)[:players] = ""
    assert_not rackets(:racketOne).valid?, 'racket can be saved without players'
    rackets(:racketTwo)[:players] = "FedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFedererFederer"
    assert_not rackets(:racketTwo).valid?, 'racket can be saved with players with names is more than 35 characters long'
    
  end
end
