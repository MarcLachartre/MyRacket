class Racket < ApplicationRecord
  has_many :userrackets, dependent: :destroy
  has_many :users, through: :userrackets

  has_many :racketreviews
  has_many :users, through: :racketreviews

end

#each_racket_brand = []
# @rackets.each do |racket|
#   each_racket_brand << racket.brand
#   end

#array_of_brands = each_racket_brand + each_racket_brand

# brands_available = array_of_brands.sort.each_slice(2).uniq
# brands_available
#

