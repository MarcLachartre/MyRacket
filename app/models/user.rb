class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :racketreviews, foreign_key: :user_id, class_name: 'Racketreview', dependent: :destroy
  has_many :rackets, through: :racketreviews

  has_many :userrackets, foreign_key: :user_id, class_name: 'Userracket', dependent: :destroy
  has_many :rackets, through: :userrackets

  validates :name, presence: true, length: { maximum: 50, too_long: "%{count} characters is the maximum allowed"}
  validates :lastname, presence: true, length: { maximum: 50, too_long: "%{count} characters is the maximum allowed"}
  validates :username, presence: true, length: { maximum: 25, too_long: "%{count} characters is the maximum allowed"}
  validates :email, presence: true
  validates :admin, presence: true, inclusion: { in: [0, 1, 2], message: "%{value} is not a valid value" }
end


