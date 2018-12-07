class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.float :price
      t.float :change
      t.string :companyName
      t.string :sector

      t.timestamps
    end
  end
end
