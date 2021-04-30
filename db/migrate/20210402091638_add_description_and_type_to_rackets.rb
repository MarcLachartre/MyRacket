class AddDescriptionAndTypeToRackets < ActiveRecord::Migration[6.1]
  def change
    add_column :rackets, :description, :string
    add_column :rackets, :type, :string
  end
end
