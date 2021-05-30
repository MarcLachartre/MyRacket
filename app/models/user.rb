class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable, :password_has_required_content

  has_many :racketreviews, foreign_key: :user_id, class_name: 'Racketreview', dependent: :destroy
  has_many :rackets, through: :racketreviews

  has_many :userrackets, foreign_key: :user_id, class_name: 'Userracket', dependent: :destroy
  has_many :rackets, through: :userrackets

  validates :name, presence: true, length: { maximum: 50, too_long: "%{count} characters is the maximum allowed"}, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
  validates :lastname, presence: true, length: { maximum: 50, too_long: "%{count} characters is the maximum allowed"}, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
  validates :username, presence: true, length: { maximum: 25, too_long: "%{count} characters is the maximum allowed"}
  validates :email, presence: true
  validates :admin, presence: true, inclusion: { in: [0, 1], message: "%{value} is not a valid value" }

  # validates_format_of :name, :lastname, :with => /[A-Za-z]/, message: "should not contain numerical characters"
  validates :name, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
end


