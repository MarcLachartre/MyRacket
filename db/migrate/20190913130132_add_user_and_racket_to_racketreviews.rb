class AddUserAndRacketToRacketreviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :racketreviews, :user, foreign_key: true
    add_reference :racketreviews, :racket, foreign_key: true
  end
end
