class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.text :name, null: false
      t.integer :status, null: false

      t.timestamps
    end
  end
end
