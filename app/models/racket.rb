class Racket < ApplicationRecord
  has_many :userrackets, dependent: :destroy, foreign_key: :racket_id, class_name: 'Userracket', dependent: :destroy
  has_many :users, through: :userrackets

  has_many :racketreviews, foreign_key: :racket_id, class_name: 'Racketreview', dependent: :destroy
  has_many :users, through: :racketreviews

end



