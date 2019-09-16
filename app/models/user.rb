class User < ApplicationRecord
  has_many :racketreviews
  has_many :rackets, through: :racketreviews

  has_many :userrackets
  has_many :rackets, through: :userrackets
end
