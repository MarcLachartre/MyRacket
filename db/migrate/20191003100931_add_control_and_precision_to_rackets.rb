class AddControlAndPrecisionToRackets < ActiveRecord::Migration[5.2]
  def change
    add_column :rackets, :control, :integer
    add_column :rackets, :precision, :integer
  end
end
