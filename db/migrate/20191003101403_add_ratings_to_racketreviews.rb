class AddRatingsToRacketreviews < ActiveRecord::Migration[5.2]
  def change
    add_column :racketreviews, :confortrating, :integer
    add_column :racketreviews, :powerrating, :integer
    add_column :racketreviews, :controlrating, :integer
    add_column :racketreviews, :precisionrating, :integer
  end
end
