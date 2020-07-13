class ChangeRacketsChangeStringpattern < ActiveRecord::Migration[5.2]
  def change
    remove_column :rackets, :stringpattern, :string
    add_column :rackets, :string_pattern, :string
  end
end
