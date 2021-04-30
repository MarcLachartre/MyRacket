class RenameRacketTypeToPlayType < ActiveRecord::Migration[6.1]
  def change
    rename_column :rackets, :type, :play_type
  end
end
