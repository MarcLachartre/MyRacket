class AddStiffnessToRackets < ActiveRecord::Migration[5.2]
  def change
    add_column :rackets, :stiffness, :integer
  end
end
