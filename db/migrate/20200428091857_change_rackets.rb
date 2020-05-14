class ChangeRackets < ActiveRecord::Migration[5.2]
  def change
    remove_column :rackets, :verticalstringpattern, :integer
    remove_column :rackets, :horizontalstringpattern, :integer
    add_column :rackets, :stringpattern, :integer
  end
end
