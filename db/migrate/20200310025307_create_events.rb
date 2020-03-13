class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.datetime :when, null: false
      t.string :where
      t.integer :type, null: false

      t.references :member, null: false, foreign_key: true

      t.timestamps
    end
  end
end
