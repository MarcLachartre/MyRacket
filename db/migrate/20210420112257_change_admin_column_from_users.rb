class ChangeAdminColumnFromUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :admin, :integer, :default => 0
  end
end
