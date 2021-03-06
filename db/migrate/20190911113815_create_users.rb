class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :lastname
      t.string :email
      t.string :rank
      t.integer :level
      t.boolean :admin
      t.string :country

      t.timestamps
    end
  end
end
