class Racket < ApplicationRecord
  has_many :userrackets
  has_many :users, through: :userrackets

  has_many :racketreviews
  has_many :users, through: :racketreviews
end
