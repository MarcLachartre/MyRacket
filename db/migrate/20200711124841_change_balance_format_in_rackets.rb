class ChangeBalanceFormatInRackets < ActiveRecord::Migration[5.2]
  def change
    remove_column :rackets, :balance, :float
    add_column :rackets, :balance, :integer
  end
end
