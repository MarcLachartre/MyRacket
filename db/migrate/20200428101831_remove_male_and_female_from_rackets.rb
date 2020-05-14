class RemoveMaleAndFemaleFromRackets < ActiveRecord::Migration[5.2]
  def change
    remove_column :rackets, :female, :boolean
    remove_column :rackets, :male, :boolean
  end
end
