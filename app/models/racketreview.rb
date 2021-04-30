class Racketreview < ApplicationRecord
  belongs_to :racket
  belongs_to :user

  validates :comment, presence: true, length: {maximum: 700}
end
