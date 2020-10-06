require 'test_helper'

class RacketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
   test "brand or model" do
    Racket.create(brand:'Dunlop', model:'Ugo', weight: 285,
    headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318)

    Racket.create(brand:'Dunlop', model:'Marc', weight: 285,
    headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318)

    assert Racket.brand_or_model(["Dunlop"], ["Ugo"]).size == 1

  end
end
