class DropRacketreviews < ActiveRecord::Migration[5.2]
  def change
    drop_table :racketreviews
  end
end
