class CreateUserrackets < ActiveRecord::Migration[5.2]
  def change
    create_table :userrackets do |t|
      t.references :user, foreign_key: true
      t.references :racket, foreign_key: true

      t.timestamps
    end
  end
end
