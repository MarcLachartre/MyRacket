class ChangeMaleFemaleKidColumnFromRackets < ActiveRecord::Migration[5.2]
  def up
    add_column :rackets, :adult, :boolean
  end

  def down
    remove_column :rackets, :female, :boolean
    remove_column :rackets, :male, :boolean
  end
end
