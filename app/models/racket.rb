class Racket < ApplicationRecord
  validates :brand, presence: true
  # validates :model
  # validates :headsize
  # validates :length
  # validates :weight
  # validates :balance
  # validates :swingweight
  # validates :kid

  has_many :userrackets, foreign_key: :racket_id, class_name: 'Userracket', dependent: :destroy
  has_many :users, through: :userrackets

  has_many :racketreviews, foreign_key: :racket_id, class_name: 'Racketreview', dependent: :destroy
  has_many :users, through: :racketreviews

  scope :brand_or_model, -> (brand, model) do
    where('brand LIKE ? OR model LIKE ?','%' + model.join(' ') + '%', '%' + brand.join(' ') + '%')
  end
end



