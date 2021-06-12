class ChangeRacketLengthAndPrice < ActiveRecord::Migration[6.1]
  def change
    change_column :rackets, :length, :float
    change_column :rackets, :price, :float
  end
end
