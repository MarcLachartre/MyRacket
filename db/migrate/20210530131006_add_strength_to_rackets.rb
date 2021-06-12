class AddStrengthToRackets < ActiveRecord::Migration[6.1]
  def change
    add_column :rackets, :strength, :string
    change_column :rackets, :balance, :float
  end
end
