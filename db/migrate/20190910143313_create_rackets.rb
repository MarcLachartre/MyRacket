class CreateRackets < ActiveRecord::Migration[5.2]
  def change
    create_table :rackets do |t|
      t.integer :headsize
      t.integer :length
      t.integer :weight
      t.float :balance
      t.integer :swingweight
      t.integer :verticalstringpattern
      t.integer :horizontalstringpattern
      t.integer :power
      t.integer :confort
      t.integer :vibration
      t.integer :sweetzone
      t.integer :swingweight
      t.integer :yearoffabrication
      t.integer :price
      t.string :brand
      t.string :model
      t.string :color
      t.string :material
      t.boolean :female
      t.boolean :male
      t.boolean :kid
      t.string :players

      t.timestamps
    end
  end
end
